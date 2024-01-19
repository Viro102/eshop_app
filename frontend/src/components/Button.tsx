type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ className = "", children, type = "button", onClick }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center whitespace-nowrap rounded bg-blue-400 text-center text-xs font-bold uppercase text-gray-100 shadow outline-none transition-all hover:shadow-md focus:outline-none active:bg-gray-600 dark:bg-gray-900 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
