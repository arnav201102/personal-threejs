import { useState } from "react";
import DreamCanvas from "./three/DreamCanvas";
import MemoryOverlay from "./ui/MemoryOverlay";
import LetterScene from "./scenes/LetterScene";
import { memories } from "./data/memories";
import MemoryBubble from "./three/MemoryBubble";

export default function App() {
  const [scene, setScene] = useState<"welcome" | "memories" | "letter" | "finale">("welcome");
  const [selectedMemory, setSelectedMemory] = useState(null);

  const go = (s: any) => {
    (window as any).setCameraTarget(s);
    setScene(s);
  };

  return (
    <>
      <DreamCanvas>
        {scene === "memories" &&
          memories?.map((m, i) => (
            <MemoryBubble
              key={m.id}
              memory={m}
              position={[
                (i % 4) * 2 - 3,
                Math.floor(i / 4) * 2 - 2,
                0
              ]}
              onSelect={setSelectedMemory}
            />
          ))}
      </DreamCanvas>

      {scene === "welcome" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Our Dreamland
          </h1>
          <button onClick={() => go("memories")}>
            Enter Dreamland
          </button>
        </div>
      )}

      {scene === "letter" && <LetterScene />}

      {scene === "memories" && (
        <button
          className="fixed bottom-10 left-1/2 -translate-x-1/2"
          onClick={() => go("letter")}
        >
          Go further inside
        </button>
      )}

      <MemoryOverlay
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </>
  );
}
