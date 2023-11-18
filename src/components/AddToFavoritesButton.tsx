import { useState } from "react";

const AddToFavoritesButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`flex items-center rounded-xl bg-blue-400 px-4 py-2 text-white outline-none transition-all hover:shadow-md focus:outline-none dark:bg-gray-900 ${
        isFavorite ? "bg-red-500 dark:bg-red-500" : "hover:bg-red-500"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="1 0 24 24"
        stroke="currentColor"
        className="w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        ></path>
      </svg>
    </button>
  );
};

export default AddToFavoritesButton;
