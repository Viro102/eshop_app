type LabelProps = {
  className?: string;
  htmlFor?: string;
  children?: React.ReactNode;
};

const Label = ({ className = "", htmlFor, children }: LabelProps) => {
  return (
    <label
      className={`cursor-pointer rounded bg-blue-400 p-2 font-bold uppercase text-gray-100 shadow outline-none transition-all hover:shadow-md focus:outline-none active:bg-gray-600 dark:bg-gray-900 hover:dark:bg-blue-400 ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
