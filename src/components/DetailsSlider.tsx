import React, { useState, useEffect } from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type SliderProps = {
  images: string[];
  autoplay?: number;
  h?: number;
  setActiveLightBox?: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailsSlider = ({
  images,
  autoplay,
  setActiveLightBox,
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoplay) {
      interval = setInterval(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, autoplay);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex, images.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;

    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const slideHanlder = (slideIndex: number) => {
    goToSlide(slideIndex);
    if (setActiveLightBox) {
      setActiveLightBox(true);
    }
  };

  return (
    <div
      className={`max-w-[1400px] z-10 h-[350px] md:h-[430px] w-full m-auto md:pt-5s  relative group mb-10 transition-all duration-1000`}
    >
      <div
        // key={images[currentIndex]}
        style={{ backgroundImage: `url("${images[currentIndex]}")` }}
        className="w-full h-full md:rounded-xl bg-center bg-cover bg-no-repeat duration-500"
      ></div>

      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white hover:text-[#FF7E1B] cursor-pointer"
      >
        <MdChevronLeft />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white hover:text-[#FF7E1B] cursor-pointer"
      >
        <MdChevronRight />
      </div>
      <div className=" hidden md:flex top-4 justify-center py-2">
        {images.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => {
              slideHanlder(slideIndex);
            }}
            className={`${
              slideIndex === currentIndex ? "bg-[#FF7E1B] p-[2px]  " : ""
            } text-2xl cursor-pointer rounded-xl mx-1  `}
          >
            <div className="relative">
              {slideIndex === currentIndex ? (
                <div className="backdrop bg-white/50 absolute w-full h-full  rounded-xl"></div>
              ) : (
                ""
              )}
              <img
                className={`${
                  slideIndex === currentIndex ? " " : ""
                } h-[88px] w-[88px] rounded-xl`}
                src={slide}
                alt="slider"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsSlider;
