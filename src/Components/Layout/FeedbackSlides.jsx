import React, { useCallback, useEffect, useRef, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FcRating } from "react-icons/fc";


const FeedbackItems = [
    {
        name: "Misha Bharti",
        paragraph: "Facebook is one of the most powerful marketing tools for real estate. Not only does it have billions of users, it also provides multiple methods for marketing your real estate services using some of the most advanced targeting tools in existence. Through organic and paid marketing techniques like search-friendly content on your page, audience-engaging posts, Facebook Groups, promoted posts, and targeted advertising, Facebook lead generation can be one of the most lucrative channels for generating real estate leads for your business. 1. Create Your Facebook Business Page 2. Post Engaging Content 3. Join Facebook Groups 4. Promoted Posts & Paid Advertisements 5. Connect With & Convert Leads Using a CRM",
        position: "Intern",
        image: "https://givni.in/givni/assets/testimonial/service_1643694733.jpeg"
        
      },
    {
        name: "Shubham Jha",
        paragraph: "Facebook is one of the most powerful marketing tools for real estate. Not only does it have billions of users, it also provides multiple methods for marketing your real estate services using some of the most advanced targeting tools in existence. Through organic and paid marketing techniques like search-friendly content on your page, audience-engaging posts, Facebook Groups, promoted posts, and targeted advertising, Facebook lead generation can be one of the most lucrative channels for generating real estate leads for your business. 1. Create Your Facebook Business Page 2. Post Engaging Content 3. Join Facebook Groups 4. Promoted Posts & Paid Advertisements 5. Connect With & Convert Leads Using a CRM",
        position: "Senior Developer",
        image: "https://givni.in/givni/assets/blog/blog_1644038142.jpeg"
        
      },
      {
        name: "Misha Bharti",
        paragraph: "Facebook is one of the most powerful marketing tools for real estate. Not only does it have billions of users, it also provides multiple methods for marketing your real estate services using some of the most advanced targeting tools in existence. Through organic and paid marketing techniques like search-friendly content on your page, audience-engaging posts, Facebook Groups, promoted posts, and targeted advertising, Facebook lead generation can be one of the most lucrative channels for generating real estate leads for your business. 1. Create Your Facebook Business Page 2. Post Engaging Content 3. Join Facebook Groups 4. Promoted Posts & Paid Advertisements 5. Connect With & Convert Leads Using a CRM",
        position: "Intern",
        image: "https://givni.in/givni/assets/testimonial/service_1643694733.jpeg"
        
      },
    {
        name: "Shubham Jha",
        paragraph: "Facebook is one of the most powerful marketing tools for real estate. Not only does it have billions of users, it also provides multiple methods for marketing your real estate services using some of the most advanced targeting tools in existence. Through organic and paid marketing techniques like search-friendly content on your page, audience-engaging posts, Facebook Groups, promoted posts, and targeted advertising, Facebook lead generation can be one of the most lucrative channels for generating real estate leads for your business. 1. Create Your Facebook Business Page 2. Post Engaging Content 3. Join Facebook Groups 4. Promoted Posts & Paid Advertisements 5. Connect With & Convert Leads Using a CRM",
        position: "Senior Developer",
        image: "https://givni.in/givni/assets/blog/blog_1644038142.jpeg"
        
      },
      {
        name: "Misha Bharti",
        paragraph: "Facebook is one of the most powerful marketing tools for real estate. Not only does it have billions of users, it also provides multiple methods for marketing your real estate services using some of the most advanced targeting tools in existence. Through organic and paid marketing techniques like search-friendly content on your page, audience-engaging posts, Facebook Groups, promoted posts, and targeted advertising, Facebook lead generation can be one of the most lucrative channels for generating real estate leads for your business. 1. Create Your Facebook Business Page 2. Post Engaging Content 3. Join Facebook Groups 4. Promoted Posts & Paid Advertisements 5. Connect With & Convert Leads Using a CRM",
        position: "Intern",
        image: "https://givni.in/givni/assets/testimonial/service_1643694733.jpeg"
        
      },
      
];

const ratingItems = [1, 2, 3, 4, 5];

const FeedbackSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleParagraph = (para) => {
    let shortenedString2 = para.slice(0, 100);  
    return shortenedString2;
  }

  // go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === FeedbackItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // go to previous slides
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? FeedbackItems.length - 1 : prevIndex - 1
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
            className="flex transition-transform duration-500 transform"
            style={{
              width: `${FeedbackItems.length * 100}%`,
              transform: `translateX(-${
                (currentIndex * 100) / FeedbackItems.length
              }%)`,
            }}
          >
            {FeedbackItems.map((item, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0  rounded-md py-3"
                style={{ width: `${100 / FeedbackItems.length}%` }}
              >
                <div className="max-w-sm mx-auto flex items-center bg-gray-300 rounded-md p-4">
                    <aside className="w-full">
              <img src={item.image} alt={item.heading} className="w-30 h-24 mx-auto" />
              <h4 className="font-semibold text-center text-sm">{item.name}</h4>
              <h4 className="font-semibold text-center text-sm text-blue-600">{item.position}</h4>
                    </aside>
                <div className="bg-gray-100 px-4 space-y-2 py-4 rounded-b-lg">
                 <p className="">{handleParagraph(item.paragraph)}...</p>
                 <div className="flex">
                    {ratingItems.map((item) => (
                    <FcRating key={item} className="text-lg" />
                    ))}
                 </div>
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
          {FeedbackItems.map((_, index) => (
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

export default FeedbackSlides;