import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DreamCanvas from "../three/DreamCanvas";
import MemoryBubble from "../three/MemoryBubble";
import MemoryOverlay from "../ui/MemoryOverlay";
import { memories } from "../data/memories";

export default function Memories() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen bg-[#0F0F1A]">
      <DreamCanvas>
        {memories.map((m, i) => (
          <MemoryBubble
            key={m.id}
            memory={m}
            position={[Math.sin(i) * 3, Math.cos(i) * 2, -i * 0.2]}
            onSelect={setSelectedMemory}
          />
        ))}
      </DreamCanvas>

      <button
        onClick={() => navigate("/letter")}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-pink-400 text-white shadow-lg hover:scale-105 transition"
      >
        Go further inside
      </button>

      <MemoryOverlay
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </div>
  );
}
