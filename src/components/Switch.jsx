import "./SwitchStyle.css";

export default function Switch() {
  return (
    <div className="relative inline-block w-10 h-6 mr-2 align-middle select-none">
      <input
        type="checkbox"
        id="themeToggle"
        className="toggle-checkbox absolute w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        htmlFor="themeToggle"
        className="toggle-label block w-10 h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  );
}
