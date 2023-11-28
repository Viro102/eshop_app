type InputFormProps = {
  label: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  onChange: (e: React.SyntheticEvent) => void;
};

const InputForm = ({ label, htmlFor, type, placeholder, onChange }: InputFormProps) => {
  return (
    <div className="relative mb-3 w-full">
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
