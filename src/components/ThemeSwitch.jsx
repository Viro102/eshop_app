import Switch from "./Switch.jsx";

export default function ThemeSwitch() {
  return (
    <Switch
      text="Theme switcher"
      onChange={() => {
        document.documentElement.classList.toggle("dark");
      }}
    />
  );
}
