type InputFormProps = {
  label: string;
  name: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  value: string;
  className?: string;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = ({
  label,
  name,
  htmlFor,
  type,
  placeholder,
  value,
  className = "",
  children,
  onChange,
}: InputFormProps) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={htmlFor}
        className={`w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {children}
    </div>
  );
};

export default InputForm;
