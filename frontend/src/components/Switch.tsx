type SwitchProps = {
  text?: string;
  onChange: () => void;
};

const Switch: React.FC<SwitchProps> = ({ text, onChange }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" name="themeToggle" className="peer hidden" onChange={onChange} />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700" />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{text}</span>
    </label>
  );
};

export default Switch;
