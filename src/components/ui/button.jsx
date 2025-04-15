export function Button({ children, onClick, active = false }) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition ${
        active ? 'bg-green-600' : 'bg-gray-600'
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
          active ? 'translate-x-8' : 'translate-x-1'
        }`}
      />
    </button>
  );
}
