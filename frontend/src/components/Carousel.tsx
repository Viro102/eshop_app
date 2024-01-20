import { useState } from "react";
import Button from "./Button";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: Readonly<CarouselProps>) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-56 rounded-lg md:h-96">
        {images.map((src, index) => {
          let positionStyle;
          if (index === activeIndex) {
            positionStyle = { left: "0%" };
          } else if (index < activeIndex) {
            positionStyle = { left: "-100%" };
          } else {
            positionStyle = { left: "100%" };
          }

          return (
            <div
              key={index}
              style={{
                ...positionStyle,
                transition: "left 0.7s ease-in-out",
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={src}
                className="block h-full w-full object-cover"
                alt={`Carousel item ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
      <Button
        onClick={goToPrevious}
        className="group absolute start-0 top-0 z-30 h-full bg-transparent shadow-none dark:bg-transparent"
      >
        <i className="fa-solid fa-arrow-left fa-xl text-black dark:text-white"></i>
      </Button>
      <Button
        onClick={goToNext}
        className="group absolute end-0 top-0 z-30 h-full bg-transparent shadow-none dark:bg-transparent"
      >
        <i className="fa-solid fa-arrow-right fa-xl text-black dark:text-white"></i>
      </Button>
    </div>
  );
}
