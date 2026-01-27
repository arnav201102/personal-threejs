import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";

export default function HeartParticles() {
  const ref = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.2;
    ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#ff6b81" />
    </mesh>
  );
}
