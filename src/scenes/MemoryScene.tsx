export default function MemoryModal({
  memory,
  onClose
}: any) {
  if (!memory) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400"
        >
          ✕
        </button>

        <img
          src={memory.image}
          className="rounded-xl mb-4 w-full object-cover"
        />

        <h3 className="text-xl font-bold">{memory.title}</h3>
        <p className="mt-2 text-gray-600">{memory.text}</p>
      </div>
    </div>
  );
}
