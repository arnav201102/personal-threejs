import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Patience() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const messages = [
    "Good things take time… 🌷",
    "Love doesn’t like to be rushed 💗",
    "Still here? That’s sweet 🥺",
    "Patience is a quiet kind of love ✨",
    "Almost… just breathe with me 💞",
  ];

  useEffect(() => {
    if (progress >= 100) {
      setUnlocked(true);
      return;
    }

    const delay =
      progress < 40 ? 120 : progress < 70 ? 300 : progress < 90 ? 600 : 1200;

    const timer = setTimeout(() => {
      setProgress((p) => Math.min(p + 1, 100));
      if (progress % 20 === 0 && messageIndex < messages.length - 1) {
        setMessageIndex((m) => m + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [progress, messageIndex]);

  /* ------------------ Reset Handler ------------------ */
  const resetPatience = () => {
    setProgress(0);
    setMessageIndex(0);
    setUnlocked(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE4EC] via-[#FFF1F7] to-[#E0BBE4] px-6">
      <div className="max-w-md w-full text-center space-y-10 animate-fadeIn">
        <h1 className="text-3xl color-black text-pink-500 font-extrabold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text ">
          A Little Test of Patience
        </h1>

        <p className="text-lg text-gray-600 transition-all duration-500">
          {messages[messageIndex]}
        </p>

        <div className="w-full h-3 bg-pink-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-pink-500 tracking-wide">
          {progress < 100
            ? `Waiting gently… ${progress}%`
            : "Your patience is beautiful 💖"}
        </p>

        {/* I am patient button */}
        {!unlocked && (
          <button
            onClick={resetPatience}
            className="text-sm italic text-pink-400 underline hover:text-pink-600 transition-colors"
          >
            I am patient
          </button>
        )}

        {unlocked && (
          <button
            onClick={() => navigate("/welcome")}
            className="mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform animate-softPop"
          >
            Enter with Love 🌸
          </button>
        )}
      </div>
    </div>
  );
}
