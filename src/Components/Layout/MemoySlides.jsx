import React, { useCallback, useEffect, useRef, useState } from "react";
import { PhoneMemorySlides, DesktopMemorySlides} from "../../Constants" ;
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";


const MemorySlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleParagraph = (para) => {
    let shortenedString2 = para.slice(0, 200);  
    return shortenedString2;
  }

  // go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PhoneMemorySlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // go to previous slides
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PhoneMemorySlides.length - 1 : prevIndex - 1
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
              width: `${PhoneMemorySlides.length * 100}%`,
              transform: `translateX(-${
                (currentIndex * 20) / PhoneMemorySlides.length
              }%)`,
            }}
          >
            {DesktopMemorySlides.map((item, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 rounded-md py-3"
                style={{ width: `${40 / PhoneMemorySlides.length}%` }}
              >
                <img src={item.image} alt={item.heading} className="w-full h-[70vh]" />
                <div className="bg-gray-100 px-8 space-y-2 py-4 rounded-b-lg">
                 <h4 className="text-xl font-medium">{item.heading}</h4>
              <h4 className="font-semibold text-lg">{item.author}</h4>
                 <p className="text-sm font-semibold text-gray-600">{handleParagraph(item.paragraph)}...</p>
             
              <div className="">
              <button className="text-sm font-semibold rounded-md py-1 flex justify-start gap-3"> <span> Read More</span> <FaArrowRight/></button>
              </div>
              </div>
              </div>
            ))}
          </div>
          <div
            className="flex md:hidden transition-transform duration-500 transform"
            style={{
              width: `${PhoneMemorySlides.length * 100}%`,
              transform: `translateX(-${
                (currentIndex * 100) / PhoneMemorySlides.length
              }%)`,
            }}
          >
            {PhoneMemorySlides.map((item, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0  rounded-md py-3"
                style={{ width: `${100 / PhoneMemorySlides.length}%` }}
              >
              <img src={item.image} alt={item.heading} />
                <div className="bg-gray-100 px-4 space-y-2 py-4 rounded-b-lg">
                 <h4 className="text-xl font-medium">{item.heading}</h4>
              <h4 className="font-semibold text-lg">{item.author}</h4>
                 <p className="">{handleParagraph(item.paragraph)}...</p>
             
              <div className="">
              <button className="text-sm font-semibold rounded-md py-1 flex justify-start gap-3"> <span> Read More</span> <FaArrowRight/></button>
              </div>
              </div>
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
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 bg-gray-200 opacity-60 max-w-32 mx-auto py-1 rounded-md">
          {PhoneMemorySlides.map((_, index) => (
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

export default MemorySlides;