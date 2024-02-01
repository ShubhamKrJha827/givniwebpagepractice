import React, { useCallback, useEffect, useRef, useState } from "react";

import { FcNext, FcPrevious } from "react-icons/fc";


const TestimonialImages= [
    "https://givni.in/givni/assets/latest_project/project_image_89048177989.png",
    "https://givni.in/givni/assets/latest_project/project_image_42019962731.png",
    "https://givni.in/givni/assets/latest_project/project_image_29272750969.png",
    "https://givni.in/givni/assets/latest_project/project_image_33166253999.png",
    "https://givni.in/givni/assets/latest_project/project_image_76935620529.png",
    "https://givni.in/givni/assets/latest_project/project_image_51482198236.png",
    "https://givni.in/givni/assets/latest_project/project_image_89048177989.png",
    "https://givni.in/givni/assets/latest_project/project_image_42019962731.png",
    "https://givni.in/givni/assets/latest_project/project_image_29272750969.png",
    "https://givni.in/givni/assets/latest_project/project_image_33166253999.png",
    "https://givni.in/givni/assets/latest_project/project_image_76935620529.png",
    "https://givni.in/givni/assets/latest_project/project_image_51482198236.png",
]

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TestimonialImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // go to previous slides
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialImages.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left, go to next slide
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleKeyDown = useCallback(
    (event) => {
      console.log("check event key", event.key);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  // automatic sliding every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  // jump to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
    className="space-y-3 relative md:flex items-center"
    onKeyDownCapture={handleKeyDown}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    tabIndex={0}
  >
    <aside className="slide-items w-full">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="hidden md:flex gap-4 transition-transform duration-500 transform"
            style={{
              width: `${TestimonialImages.length * 100}%`,
              transform: `translateX(-${
                (currentIndex * 20) / TestimonialImages.length
              }%)`,
            }}
          >
            {TestimonialImages.map((item, index) => (
              <div
                key={index}
                className="w-1/3 element border-[0.5px] border-gray-600 flex-shrink-0 space-y-1 rounded-md py-3"
                style={{ width: `${20 / TestimonialImages.length}%` }}
              >
                <img src={item} alt="images" className="w-full" />
              </div>
            ))}
          </div>
          <div
            className="flex gap-3 md:hidden transition-transform duration-500 transform"
            style={{
              width: `${TestimonialImages.length * 100}%`,
              transform: `translateX(-${
                (currentIndex * 50) / TestimonialImages.length
              }%)`,
            }}
          >
            {TestimonialImages.map((item, index) => (
              <div
                key={index}
                className="w-1/3 border-[0.5px] border-gray-600 flex-shrink-0 space-y-1 rounded-md py-3"
                style={{ width: `${50 / TestimonialImages.length}%` }}
              >
              <img src={item} alt="images" className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
          >
            <FcPrevious/>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
          >
            <FcNext/>
          </button>
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 bg-gray-200 opacity-60 max-w-48 mx-auto py-1 rounded-md">
          {TestimonialImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full bg-gray-400 hover:bg-gray-600 focus:bg-gray-600 ${
                index === currentIndex ? "bg-gray-600" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    </aside>
  </div>
  
  );
};

export default TestimonialSlider;