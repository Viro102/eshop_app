import PropTypes from "prop-types";

export default function Button({ text, iconSrc, alt, onClick }) {
  return (
    <button
      className="bg-gray-900 active:bg-gray-600 text-gray-100 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs transition-all text-center"
      type="button"
      onClick={onClick}
    >
      {iconSrc && <img alt={alt} className="w-5 mr-1" src={iconSrc} />}
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
