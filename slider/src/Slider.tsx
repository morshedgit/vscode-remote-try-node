import React, { ReactNode, useState } from "react";
type ImageSliderProps = {
  imageSrcs: string[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ imageSrcs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === imageSrcs.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageSrcs.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-64">
      <div className="absolute inset-0 flex">
        {imageSrcs.map((imageSrc, index) => (
          <Slide
            key={index}
            isActive={index === currentIndex}
            imageSrc={imageSrc}
          />
        ))}
      </div>
      <NavButton onClick={handlePrev}>
        <LeftArrowIcon />
      </NavButton>
      <NavButton onClick={handleNext}>
        <RightArrowIcon />
      </NavButton>
    </div>
  );
};
type SlideProps = {
  isActive: boolean;
  imageSrc: string;
};

const Slide: React.FC<SlideProps> = ({ isActive, imageSrc }) => (
  <div className={`w-1/2 ${isActive ? "bg-gray-400" : "hidden"}`}>
    <img
      src={imageSrc}
      alt="Placeholder"
      className="object-cover w-full h-full"
    />
  </div>
);

type NavButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const NavButton: React.FC<NavButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-0 mt-2 mx-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-900 px-2 py-1"
  >
    {children}
  </button>
);

const LeftArrowIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7"></path>
  </svg>
);

const RightArrowIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7"></path>
  </svg>
);
