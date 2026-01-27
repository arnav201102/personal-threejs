import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";

export default function MemoryBubble({ memory, position, onSelect }: any) {
  const ref = useRef<Mesh>(null!);
  const texture:any = useTexture(memory?.image);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime + position[0]) * 0.2;
    ref.current.scale.lerp(
      hovered ? { x: 1.15, y: 1.15, z: 1.15 } : { x: 1, y: 1, z: 1 },
      0.1
    );
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => onSelect(memory)}
    >
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.85}
        roughness={0.4}
      />
    </mesh>
  );
}
