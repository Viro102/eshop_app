import PropTypes from "prop-types";

export default function Button({ text, iconSrc, alt, onClick, className = "" }) {
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
}

Button.propTypes = {
  text: PropTypes.string,
  iconSrc: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
