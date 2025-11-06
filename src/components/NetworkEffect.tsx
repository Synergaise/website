import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface NetworkParticlesProps {
  startAnimation: boolean;
}

function NetworkParticles({ startAnimation }: NetworkParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const [mouse] = useState(() => new THREE.Vector2());
  const [animationProgress, setAnimationProgress] = useState(0);
  const { viewport } = useThree();

  // Expanded and more natural field
  const particleCount = 85;
  const spreadX = 10;
  const spreadY = 7;
  const spreadZ = 6;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;

      velocities.push((Math.random() - 0.5) * 0.006, (Math.random() - 0.5) * 0.006, (Math.random() - 0.5) * 0.006);
    }

    return { positions, velocities };
  }, []);

  useMemo(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouse]);

  useFrame((state) => {
    if (!ref.current || !lineRef.current) return;

    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    const linePositions: number[] = [];
    const time = state.clock.elapsedTime;

    if (startAnimation && animationProgress < 1) {
      setAnimationProgress(Math.min(animationProgress + 0.02, 1));
    }

    const mouseInfluence = new THREE.Vector3((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0);

    for (let i = 0; i < particleCount; i++) {
      const particlePos = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);

      const distance = particlePos.distanceTo(mouseInfluence);
      const maxDistance = 2.5;

      // Mouse attraction (slightly toned down)
      if (distance < maxDistance) {
        const force = (1 - distance / maxDistance) * 0.015;
        const direction = mouseInfluence.clone().sub(particlePos).normalize();
        positions[i * 3] += direction.x * force;
        positions[i * 3 + 1] += direction.y * force;
      }

      // Smooth organic wave motion
      const flowX = Math.sin(time * 0.25 + i * 0.12) * 0.002;
      const flowY = Math.cos(time * 0.3 + i * 0.18) * 0.002;
      const flowZ = Math.sin(time * 0.35 + i * 0.08) * 0.001;

      positions[i * 3] += particles.velocities[i * 3] + flowX;
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1] + flowY;
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2] + flowZ;

      // Boundary reflection for smoother loops
      if (Math.abs(positions[i * 3]) > spreadX / 2) particles.velocities[i * 3] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > spreadY / 2) particles.velocities[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2]) > spreadZ / 2) particles.velocities[i * 3 + 2] *= -1;

      // Occasional re-randomization to avoid clumping over time
      if (Math.random() < 0.0015) {
        positions[i * 3] += (Math.random() - 0.5) * 0.4;
        positions[i * 3 + 1] += (Math.random() - 0.5) * 0.4;
      }
    }

    // Draw connecting lines — reduced density for clarity
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 1.6) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2],
          );
        }
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineRef.current.geometry = lineGeometry;

    if (lineRef.current.material) {
      (lineRef.current.material as THREE.LineBasicMaterial).opacity = 0.85;
    }

    if (ref.current.material) {
      (ref.current.material as THREE.PointsMaterial).opacity = 1.0;
    }

    ref.current.rotation.y = time * 0.03;
    lineRef.current.rotation.y = time * 0.03;
  });

  return (
    <>
      <Points ref={ref} positions={particles.positions} stride={3}>
        <PointMaterial transparent color="#6C9CB3" size={0.16} sizeAttenuation depthWrite={false} opacity={1.0} />
      </Points>

      <lineSegments ref={lineRef}>
        <lineBasicMaterial color="#88B2C6" linewidth={1.5} transparent opacity={0.85} />
      </lineSegments>
    </>
  );
}

interface NetworkEffectProps {
  startAnimation: boolean;
}

export default function NetworkEffect({ startAnimation }: NetworkEffectProps) {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-[60%] h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <NetworkParticles startAnimation={startAnimation} />
      </Canvas>
    </div>
  );
}
