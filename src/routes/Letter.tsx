import { useNavigate } from "react-router-dom";

export default function Letter() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#FFF1F7] to-[#FFD6E8] flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-xl bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-6">A Letter From My Heart</h2>

        <p className="text-gray-700 leading-relaxed">
          {/* YOUR LETTER GOES HERE */}
        </p>

        <button
          onClick={() => navigate("/finale")}
          className="mt-8 px-6 py-3 rounded-full bg-pink-400 text-white hover:scale-105 transition"
        >
          One last thing…
        </button>
      </div>
    </div>
  );
}
