import Switch from "./Switch.jsx";

export default function ThemeSwitch() {
  return (
    <Switch
      onChange={() => {
        document.documentElement.classList.toggle("dark");
      }}
    />
  );
}
