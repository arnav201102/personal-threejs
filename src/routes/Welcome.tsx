import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const unlockAudio = () => {
      const audio = new Audio();
      audio.play().catch(() => {});
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, []);

  useEffect(() => {
    const burst = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;

      const heart = document.createElement("div");
      heart.innerText = "❤";
      heart.style.position = "fixed";
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.fontSize = "16px";
      heart.style.color = "#FF9AA2";
      heart.style.pointerEvents = "none";
      heart.style.animation = "heartPop 1.4s ease-out forwards";

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1400);
    };

    window.addEventListener("click", burst);
    window.addEventListener("touchstart", burst);
    return () => {
      window.removeEventListener("click", burst);
      window.removeEventListener("touchstart", burst);
    };
  }, []);

  // subtle parallax glow movement
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.documentElement.style.setProperty("--x", `${x}px`);
      document.documentElement.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#FFD6E8] via-[#FFF1F7] to-[#E0BBE4] ">
      {/* soft glowing background */}

      <div
        className="absolute -inset-20 opacity-60 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,154,162,0.35), transparent 70%)",
          transform: "translate(var(--x), var(--y))",
        }}
      />

      {/* floating hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, col) => {
          const left = (col / 2) * 100 + Math.random() * 2;

          return Array.from({ length: 20 }).map((_, i) => {
            const size = 12 + Math.random() * 18;
            const duration = 16 + Math.random() * 10;
            const delay = i * 2 + Math.random();

            return (
              <svg
                key={`${col}-${i}`}
                className="absolute animate-floatHeart"
                style={{
                  left: `${left}px`,
                  bottom: `-${size + 800}px`, // ✅ start below screen
                  width: size,
                  height: size,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                  opacity: 0.35,
                }}
                viewBox="0 0 24 24"
                fill="#FF7A9A"
              >
                <path d="M12 21s-6.7-4.35-9.33-8.2C-0.1 8.3 2.4 4 6.5 4c2.1 0 3.4 1.2 4.1 2.3C11.3 5.2 12.6 4 14.7 4c4.1 0 6.6 4.3 3.83 8.8C18.7 16.65 12 21 12 21z" />
              </svg>
            );
          });
        })}
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        {/* Enhanced split heading - dual color blocks */}
        <div className="mb-12 relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1E3A8A] bg-clip-text text-transparent drop-shadow-cuteGlow animate-bob">
            Welcome to
          </h1>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl opacity-50 font-black drop-shadow-cuteGlow animate-bob"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-[#BE185D] via-[#EC4899] to-[#831843] bg-clip-text text-transparent">
              Our Dreamland!
            </span>
            💖
          </h1>
        </div>

        {/* Playful subtitle with color accent */}
        <p
          className="text-lg md:text-xl lg:text-2xl font-medium text-[#4B5563] mb-16 max-w-lg leading-relaxed animate-fadeSlide tracking-[1px] font-cute relative"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="text-[#EC4899]">A magical</span> place where memories
          float, sparkle, and wait just for you! 🌸✨
        </p>

        {/* Ultra-cute button with new colors */}
        <div className="relative group">
          <button
            onClick={() => navigate("/memories")}
            className="relative px-12 py-7 rounded-3xl bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#F97316] text-white text-xl font-bold shadow-2xl hover:shadow-cuteGlow hover:scale-115 focus:outline-none focus:ring-4 focus:ring-[#EC4899]/60 overflow-hidden transform transition-all duration-500 group-hover:-rotate-3 animate-pulseCute"
          >
            {/* Shiny sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-y-6 -translate-x-full group-hover:translate-x-full group-hover:delay-150 transition-transform duration-1000 ease-out" />

            {/* Cute layered text */}
            <span className="relative z-10 flex items-center gap-3 font-cute ">
              <span className="text-2xl ">🌷</span>
              Enter Dreamland
              <span className="text-2xl">🌷</span>
            </span>
          </button>

          {/* Floating magic sparkles */}
          <div className="absolute -top-6 -right-6 w-10 h-10 bg-[#F472B6]/40 rounded-full blur-2xl animate-pingSlow" />
          <div
            className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#3B82F6]/50 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
          <div
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full animate-spin scale-0 group-hover:scale-100 transition-all duration-500"
            style={{ animationDelay: "0.2s" }}
          >
            💖
          </div>
        </div>
      </div>
    </div>
  );
}
