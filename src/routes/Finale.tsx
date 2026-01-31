export default function Finale() {
  return (
    <div
      className="
        w-screen h-screen
        bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#ffffff_40%,_#f9b6d0_75%,_#f9b6d0_100%)]
        flex flex-col items-center justify-center
        px-4
      "
    >
      <h1 className="text-5xl md:text-6xl font-bold animate-fadeIn">
        Happy 4th Anniversary ❤️
      </h1>
      <h2 className="text-2xl font-bold animate-fadeIn">I love you babe 💕</h2>

      {/* SVG of 2 stick figures holding a heart together */}
      <svg
        viewBox="0 0 400 200"
        className="w-full max-w-md -mt-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left stick figure - smiley head */}
        <circle
          cx="110"
          cy="80"
          r="10"
          fill="#fff"
          stroke="#000"
          strokeWidth={2}
        />
        <circle cx="107" cy="78" r="1.5" fill="#000" />
        <circle cx="113" cy="78" r="1.5" fill="#000" />
        <path
          d="M106 83 Q110 87 114 83"
          stroke="#000"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
        />
        <line
          x1="110"
          y1="90"
          x2="110"
          y2="140"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="110"
          y1="100"
          x2="160"
          y2="140"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="110"
          y1="100"
          x2="190"
          y2="120"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="110"
          y1="140"
          x2="90"
          y2="170"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="110"
          y1="140"
          x2="130"
          y2="170"
          stroke="#000"
          strokeWidth="2"
        />

        {/* Right stick figure - smiley head */}
        <circle
          cx="280"
          cy="80"
          r="10"
          fill="#fff"
          stroke="#000"
          strokeWidth={2}
        />
        <circle cx="277" cy="78" r="1.5" fill="#000" />
        <circle cx="283" cy="78" r="1.5" fill="#000" />
        <path
          d="M276 83 Q280 87 284 83"
          stroke="#000"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
        />
        <line
          x1="280"
          y1="90"
          x2="280"
          y2="140"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="100"
          x2="230"
          y2="150"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="100"
          x2="230"
          y2="120"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="140"
          x2="260"
          y2="170"
          stroke="#000"
          strokeWidth="2"
        />
        <line
          x1="280"
          y1="140"
          x2="300"
          y2="170"
          stroke="#000"
          strokeWidth="2"
        />

        {/* Heart in the middle */}
        <path
          d="M200 110 C190 90, 150 90, 150 130 C150 160, 200 180, 200 180 C200 180, 250 160, 250 130 C250 90, 210 90, 200 110Z"
          fill="#ec1f1f"
        />
      </svg>
    </div>
  );
}
