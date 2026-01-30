import { useFrame } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import { useRef, useState } from "react";

export default function MemoryBubble({
  memory,
  position,
  isOpen,
  onOpen,
  onClose,
  bubbleSize = 1,
}: any) {
  const ref = useRef<Mesh>(null!);
  const texture: any = useTexture(memory.image);
  const [hovered, setHovered] = useState(false);

  const base = new Vector3(bubbleSize, bubbleSize, bubbleSize);
  const hover = new Vector3(
    bubbleSize * 1.05,
    bubbleSize * 1.05,
    bubbleSize * 1.05,
  );
  const open = new Vector3(1.1, 1.1, 1.1);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;

    if (!isOpen) {
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.35;
    }

    ref.current.rotation.y += 0.002;

    ref.current.scale.lerp(isOpen ? open : hovered ? hover : base, 0.08);
  });

  return (
    <group position={position}>
      {/* Bubble */}
      <mesh
        ref={ref}
        visible={!isOpen}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        onPointerMissed={() => {
          if (isOpen) onClose();
        }}
      >
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          // transparent
          opacity={0.3}
          emissive="#ffb3c6"
          emissiveIntensity={0.3}
          roughness={0.1}
        />
      </mesh>

      {/* Card */}
      {isOpen && (
        <Html center transform scale={0.55}>
          <div
            onPointerDown={(e) => e.stopPropagation()}
            className="
               rounded-2xl p-4 w-72
              bg-gradient-to-br from-white via-pink-50 to-rose-100
              shadow-[0_30px_90px_rgba(0,0,0,0.4)]
              animate-memoryGrow
            "
          >
            <img
              src={memory.image}
              className="w-full h-32 object-cover rounded-xl mb-3"
            />
            <h3 className="text-xl font-semibold text-[#3A2A4A]">
              {memory.title}
            </h3>
            <p className="mt-2 text-sm text-[#5A4A6A]">{memory.text}</p>
          </div>
        </Html>
      )}
    </group>
  );
}
