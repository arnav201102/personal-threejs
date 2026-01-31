import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import DreamCanvas from "../three/DreamCanvas";
import MemoryBubble from "../three/MemoryBubble";
import { memories } from "../data/memories";
import StarsBackground from "../ui/StarsBackground";

/* ---- generate non-overlapping positions ---- */
function generatePositions(count: number) {
  const positions: [number, number, number][] = [];
  const rows = Math.ceil(Math.sqrt(count));
  const cols = Math.ceil(count / rows);
  const xSpread = 8.2;
  const ySpread = 3.6;
  const zStart = -0.8;
  let index = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (index >= count) break;
      const x = (c / (cols - 1) - 0.5) * xSpread + (Math.random() - 0.5) * 0.4;
      const y = (r / (rows - 1) - 0.5) * ySpread + Math.sin(c * 0.6) * 0.3;
      const z = zStart - r * 0.6;
      positions.push([x, y, z]);
      index++;
    }
  }

  return positions;
}

export default function Memories() {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<string | null>(null);
  const positions = useMemo(() => generatePositions(memories.length), []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#0B0616] via-[#140B2D] to-[#1B103F]">
      {/* Stars */}
      <StarsBackground />

      {/* 3D Canvas */}
      <DreamCanvas>
        {memories.map((memory, i) => (
          <MemoryBubble
            key={memory.id}
            memory={memory}
            position={positions[i]}
            isOpen={openId === String(memory.id)}
            onOpen={() => setOpenId(String(memory.id))}
            onClose={() => setOpenId(null)}
            bubbleSize={1}
          />
        ))}
      </DreamCanvas>

      {/* UI Layer */}
      <button
        onClick={() => navigate("/letter")}
        className="
    fixed top-1/2 left-1/2 -translate-x-1/2  z-20
    px-9 py-4 rounded-full
    bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500
    text-white text-lg font-medium tracking-wide
    shadow-[0_0_40px_rgba(255,140,200,0.4)]
    hover:scale-105 hover:shadow-[0_0_60px_rgba(255,140,200,0.6)]
    transition-all duration-700
  "
      >
        A Letter For You 💌
      </button>
    </div>
  );
}
