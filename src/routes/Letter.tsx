import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const letterText = `
I’ve been thinking about how strange it is that some people enter our lives without making any noise at all.
No grand arrival. No announcement. Just a quiet presence that slowly begins to matter.

At first, it feels ordinary. A passing thought. A shared moment.
Something you don’t stop to examine.

But over time, you notice it lingering. In pauses. In silences.
In the small spaces between your thoughts.

And suddenly, you realize something has shifted.

There’s a comfort in knowing you exist.
Not because you fix anything, or change anything, but simply because you are there.

You have a way of making moments feel softer. Lighter.
Like the world doesn’t need to rush as much when you’re around.

This isn’t about expectations.
It’s not about promises or labels or destinations.
It’s about presence.
About how some connections don’t demand anything,
yet somehow give a lot.

There are days when everything feels overwhelming.
When thoughts pile up and emotions blur together.
And then there are moments when thinking of you brings calm, without effort. Without explanation.

That kind of quiet impact is rare.

You don’t always realize when you’re becoming important. It happens slowly. Almost invisibly.
Until one day, you notice that your absence would be felt.

Not loudly. Not dramatically.
Just in the way the air feels different.

And that matters.

This letter isn’t meant to define anything.
It isn’t meant to ask for more.
It exists simply because some thoughts deserve to be acknowledged,
even if they don’t need an answer.

If nothing else, I hope you know this:

You’ve left a gentle mark.
One that didn’t hurt.
One that didn’t demand.
One that simply stayed.

And sometimes, that’s the most meaningful kind of presence there is.
`;

export default function Letter() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingDone = index >= letterText.length;
  const progress = index / letterText.length;

  useEffect(() => {
    if (!typingDone) {
      const timer = setTimeout(() => {
        setText((prev) => prev + letterText[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [index, typingDone]);

  return (
    <div
      className="
  w-screen h-screen
  bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#ffffff_40%,_#ffffff_75%,_#f9b6d0_100%)]
  flex items-center justify-center px-2
"
    >
      {/* CARD WRAPPER */}
      <div className="relative w-[60vw] max-w-4xl h-[80vh] box-border p-6 rounded-3xl">
        {/* SVG FRAME */}
        <svg
          viewBox="0 0 800 1100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <rect
            x="20"
            y="20"
            width="760"
            height="1060"
            rx="60"
            stroke="rgba(255,160,190,0.35)"
            strokeWidth="2"
          />
          <rect
            x="25"
            y="30"
            width="750"
            height="1020"
            rx="50"
            stroke="rgba(255,140,200,0.45)"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />

          {/* Hearts stay as-is */}

          <path
            d="M150 250 C150 230, 180 230, 180 250 C180 270, 150 290, 150 290 C150 290, 120 270, 120 250 C120 230, 150 230, 150 250Z"
            fill="rgba(220,100,140,0.25)"
            opacity="0.8"
          />
          <path
            d="M650 820 C650 800, 680 800, 680 820 C680 840, 650 860, 650 860 C650 860, 620 840, 620 820 C620 800, 650 800, 650 820Z"
            fill="rgba(220,100,140,0.22)"
            opacity="0.7"
          />

          <path
            transform="translate(100,400) scale(0.9)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.28)"
            opacity="0.6"
          />
          <path
            transform="translate(250,150) scale(1.1)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,80,160,0.24)"
            opacity="0.7"
          />
          <path
            transform="translate(450,750) scale(0.8)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.26)"
            opacity="0.5"
          />
          <path
            transform="translate(320,300) scale(1.0)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.23)"
            opacity="0.9"
          />
          <path
            transform="translate(600,500) scale(0.95)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,80,160,0.21)"
            opacity="0.6"
          />
          <path
            transform="translate(70,800) scale(1.2)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.27)"
            opacity="0.8"
          />
          <path
            transform="translate(200,600) scale(0.85)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.22)"
            opacity="0.7"
          />
          <path
            transform="translate(500,900) scale(0.9)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,80,160,0.25)"
            opacity="0.5"
          />
          <path
            transform="translate(380,850) scale(1.05)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.24)"
            opacity="0.8"
          />
          <path
            transform="translate(720,250) scale(0.75)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.29)"
            opacity="0.6"
          />
          <path
            transform="translate(120,500) scale(1.0)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,80,160,0.23)"
            opacity="0.7"
          />
          <path
            transform="translate(550,350) scale(0.95)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.26)"
            opacity="0.65"
          />
          <path
            transform="translate(280,950) scale(1.1)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,80,160,0.22)"
            opacity="0.8"
          />
          <path
            transform="translate(650,650) scale(0.85)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.25)"
            opacity="0.7"
          />
          <path
            transform="translate(50,200) scale(0.9)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.27)"
            opacity="0.6"
          />
          <path
            transform="translate(400,200) scale(1.0)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,80,160,0.24)"
            opacity="0.75"
          />
          <path
            transform="translate(180,700) scale(0.8)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.23)"
            opacity="0.9"
          />
          <path
            transform="translate(700,1000) scale(1.05)"
            d="M0 0 C0 -20, 30 -20, 30 0 C30 20, 0 40, 0 40 C0 40, -30 20, -30 0 C-30 -20, 0 -20, 0 0Z"
            fill="rgba(220,100,140,0.21)"
            opacity="0.5"
          />
        </svg>

        {/* CARD CONTENT */}
        <div
          className="
        relative z-10
        h-full
        bg-white/70 backdrop-blur-2xl
        rounded-[2.5rem]
        flex flex-col
        animate-paperLift animate-softGlow
      "
        >
          <h2 className="text-4xl font-medium mb-2 text-gray-800 tracking-wide text-center">
            4 down, many more to go
          </h2>

          {/* SCROLLABLE TEXT */}
          <div
            className="flex-1 overflow-y-auto animate-fadeSlide transition-all duration-700"
            style={{
              paddingLeft: `${30 + progress * 8}px`,
              paddingRight: `${16 + progress * 6}px`,
            }}
          >
            <p className="text-gray-700 text-lg leading-[2.1rem] whitespace-pre-line font-serif">
              {text}
              {!typingDone && (
                <span className="inline-block w-[2px] h-2 bg-pink-400 ml-1 animate-pulse align-middle" />
              )}
            </p>
          </div>

          {/* BUTTON */}
          {typingDone && (
            <div className="flex justify-center pt-6 animate-riseFade">
              <button
                onClick={() => navigate("/wishes")}
                className="
        relative
        px-10 py-3
        rounded-full
        min-w-[250px] sm:min-w-[300px]  // <-- increased width
        bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500
        text-white text-lg font-semibold
        shadow-[0_10px_25px_rgba(255,182,193,0.4)]
        hover:shadow-[0_15px_35px_rgba(255,182,193,0.6)]
        hover:scale-105
        transition-all duration-500
        overflow-hidden
        group
      "
              >
                <span className="relative z-10">One last thing…</span>

                {/* soft white glow overlay */}
                <span
                  className="
          absolute inset-0
          bg-white/20
          opacity-0
          group-hover:opacity-50
          transition-opacity duration-500
        "
                />

                {/* floating hearts */}
                <span
                  className="
          absolute -top-2 -left-2 text-pink-100 text-sm
          opacity-0
          group-hover:opacity-100
          animate-floatHeartButton
          transition-all duration-700
        "
                >
                  ♥
                </span>
                <span
                  className="
          absolute -bottom-2 -right-2 text-pink-200 text-sm
          opacity-0
          group-hover:opacity-100
          animate-floatHeartButton
          animation-delay-200
          transition-all duration-700
        "
                >
                  ♥
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
