import PropTypes from "prop-types";

export default function InputForm({ name, type, placeholder }) {
  return (
    <>
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
    </>
  );
}

InputForm.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
