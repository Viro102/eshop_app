import PropTypes from "prop-types";

export default function Switch({ text, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="hidden peer" onChange={onChange} />
      <div className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{text}</span>
    </label>
  );
}
Switch.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
