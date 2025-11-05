import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NetworkParticles() {
  const ref = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  // Generate random particle positions
  const particleCount = 80;
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

  // Animate particles and create connections
  useFrame((state) => {
    if (!ref.current || !lineRef.current) return;

    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    const linePositions: number[] = [];

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
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

        if (distance < 1.5) {
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
          color="#2979FF"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      <lineSegments ref={lineRef}>
        <lineBasicMaterial color="#2979FF" transparent opacity={0.2} />
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
      </Canvas>
    </div>
  );
}
