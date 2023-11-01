type InputFormProps = {
  name: string;
  type: string;
  placeholder: string;
};

const InputForm = ({ name, type, placeholder }: InputFormProps) => {
  return (
    <div className="relative mb-3 w-full">
      <label className="mb-2 block text-xs font-bold uppercase text-gray-900 dark:text-white">
        {name}
      </label>
      <input
        type={type}
        className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-black placeholder-gray-400 shadow transition-all focus:outline-none focus:ring"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
