export default function Button({ text, iconSrc, alt, onClick }) {
  // TODO: Add onClick handler
  return (
    <button
      className="bg-gray-900 active:bg-gray-600 text-gray-100 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs transition-all text-center"
      type="button"
    >
      {iconSrc && <img alt={alt} className="w-5 mr-1" src={iconSrc} />}
      {text}
    </button>
  );
}
