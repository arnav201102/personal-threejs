export default function MemoryOverlay({ memory, onClose }: any) {
  if (!memory) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full animate-zoomIn">
        <img
          src={memory.image}
          className="rounded-2xl mb-4 w-full object-cover"
        />
        <h3 className="text-xl font-bold">{memory.title}</h3>
        <p className="mt-2 text-gray-600">{memory.text}</p>

        <button
          onClick={onClose}
          className="mt-6 text-pink-500 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
}
