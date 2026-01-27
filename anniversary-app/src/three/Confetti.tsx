import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Points } from "three";

export default function Confetti() {
  const ref = useRef<Points>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <points ref={ref}>
      <sphereGeometry args={[5, 32, 32]} />
      <pointsMaterial color="#FF9AA2" size={0.05} />
    </points>
  );
}
