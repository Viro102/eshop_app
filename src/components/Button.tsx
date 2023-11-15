type ButtonProps = {
  text?: string;
  iconSrc?: string;
  alt: string;
  onClick: (e: React.SyntheticEvent) => void;
  className?: string;
};

const Button = ({ text, iconSrc, alt, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center whitespace-nowrap rounded bg-blue-400 text-center text-xs font-bold uppercase text-gray-100 shadow outline-none transition-all hover:shadow-md focus:outline-none active:bg-gray-600 dark:bg-gray-900 ${className}`}
      type="button"
      onClick={onClick}
    >
      {iconSrc && <img alt={alt} className="mr-1 w-5" src={iconSrc} />}
      {text}
    </button>
  );
};

export default Button;
