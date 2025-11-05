import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function NetworkParticles() {
  const ref = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const [mouse] = useState(() => new THREE.Vector2());
  const { viewport } = useThree();

  // Generate random particle positions
  const particleCount = 150;
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      
      velocities.push(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      );
    }
    
    return { positions, velocities };
  }, []);

  // Mouse move handler
  useMemo(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouse]);

  // Animate particles and create connections
  useFrame((state) => {
    if (!ref.current || !lineRef.current) return;

    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    const linePositions: number[] = [];

    // Mouse influence
    const mouseInfluence = new THREE.Vector3(
      mouse.x * viewport.width / 2,
      mouse.y * viewport.height / 2,
      0
    );

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      // Calculate distance to mouse
      const particlePos = new THREE.Vector3(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      );
      
      const distance = particlePos.distanceTo(mouseInfluence);
      const maxDistance = 3;
      
      // Apply mouse repulsion
      if (distance < maxDistance) {
        const force = (1 - distance / maxDistance) * 0.05;
        const direction = particlePos.clone().sub(mouseInfluence).normalize();
        positions[i * 3] += direction.x * force;
        positions[i * 3 + 1] += direction.y * force;
      }

      // Regular movement
      positions[i * 3] += particles.velocities[i * 3];
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1];
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2];

      // Boundary check and bounce
      if (Math.abs(positions[i * 3]) > 4) particles.velocities[i * 3] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 3) particles.velocities[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 2) particles.velocities[i * 3 + 2] *= -1;
    }

    // Create connections between nearby particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 2.2) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
        }
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Update line connections
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineRef.current.geometry = lineGeometry;

    // Slow rotation
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    lineRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <>
      <Points ref={ref} positions={particles.positions} stride={3}>
        <PointMaterial
          transparent
          color="#4A9EFF"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={1}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <lineSegments ref={lineRef}>
        <lineBasicMaterial color="#4A9EFF" transparent opacity={0.8} />
      </lineSegments>
    </>
  );
}

export default function NetworkEffect() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-[60%] h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <NetworkParticles />
        <EffectComposer>
          <Bloom 
            intensity={3.5} 
            luminanceThreshold={0.1} 
            luminanceSmoothing={0.9}
            radius={1.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
