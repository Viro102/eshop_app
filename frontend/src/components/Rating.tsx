const filledStar = <i className="fa-solid fa-star text-yellow-300"></i>;

const emptyStar = <i className="fa-solid fa-star text-gray-300 dark:text-gray-500"></i>;

const Rating = ({ count }: { count: number }) => {
  const icons = [];

  for (let i = 0; i < 5; i++) {
    if (i >= count) {
      icons.push(<span key={i}>{emptyStar}</span>);
    } else {
      icons.push(<span key={i}>{filledStar}</span>);
    }
  }

  return icons;
};

export default Rating;
