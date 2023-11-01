import Switch from "./Switch";

export default function ThemeSwitch() {
  return (
    <Switch
      onChange={() => {
        document.documentElement.classList.toggle("dark");
      }}
    />
  );
}
