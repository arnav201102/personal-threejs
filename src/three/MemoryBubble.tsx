import { useFrame } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
import { Mesh, Vector3, Texture } from "three";
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
  const [hovered, setHovered] = useState(false);

  const texture = useTexture(memory.image) as Texture;

  const base = new Vector3(bubbleSize, bubbleSize, bubbleSize);
  const hover = new Vector3(
    bubbleSize * 1.05,
    bubbleSize * 1.05,
    bubbleSize * 1.05,
  );
  const open = new Vector3(2, 2, 2);

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
        {/* Fixed geometry size */}
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={0.35}
          emissive="#ffb3c6"
          emissiveIntensity={0.3}
          roughness={0.15}
        />
      </mesh>

      {/* Card */}
      {isOpen && (
        <Html center>
          <div
            onPointerDown={(e) => e.stopPropagation()}
            className="
        w-800
        rounded-2xl
        p-5
        bg-gradient-to-br from-white via-pink-50 to-rose-100
        shadow-[0_30px_90px_rgba(0,0,0,0.4)]
        animate-memoryGrow
      "
          >
            <div className="w-full h-36 rounded-xl overflow-hidden mb-4">
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold leading-snug text-[#FFFFFF]">
              {memory.title}
            </h3>

            <p className="mt-2 text-xs text-base leading-relaxed text-[#FFFFFF]">
              {memory.text}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}
