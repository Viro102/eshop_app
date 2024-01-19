type LabelProps = {
  text?: string;
  className?: string;
  htmlFor?: string;
};

const Label = ({ text, className = "", htmlFor }: LabelProps) => {
  return (
    <label
      className={`cursor-pointer rounded bg-blue-400 p-2 font-bold uppercase text-gray-100 shadow outline-none transition-all hover:shadow-md focus:outline-none active:bg-gray-600 dark:bg-gray-900 hover:dark:bg-blue-400 ${className}`}
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
};

export default Label;
