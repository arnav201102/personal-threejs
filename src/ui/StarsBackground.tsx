import { useMemo } from "react";

export default function StarsBackground({
  className = "",
}: {
  className?: string;
}) {
  const stars = useMemo(() => {
    const totalStars = 200;
    return Array.from({ length: totalStars }, () => ({
      size: Math.random() * 3 + 2,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      opacity: Math.random() * 0.5 + 0.5,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-20 overflow-visible ${className}`}
    >
      {/* Twinkling stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.left,
            top: star.top,
            opacity: star.opacity,
            zIndex: 25,
            backgroundColor: "white",
            boxShadow: `0 0 ${star.size * 3}px white, 0 0 ${star.size * 6}px rgba(255,255,255,0.3)`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Shooting stars from top-right to bottom-left */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="fixed rounded-full"
          style={{
            width: `${Math.random() * 100 + 50}px`, // random length
            height: "2px",
            right: `${Math.random() * 20}vw`, // start near right edge
            top: `${Math.random() * 30}vh`, // start near top
            background:
              "linear-gradient(135deg, white 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
            animation: `shootingStar ${4 + i}s linear ${i}s infinite`,
            zIndex: 30,
          }}
        />
      ))}
    </div>
  );
}
