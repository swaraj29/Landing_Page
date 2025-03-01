import React, { useState, useEffect } from "react";
import userAvatar from "../../assets/user-avatar.svg";
import previous from "../../assets/previous.svg";
import next from "../../assets/next.svg";
import star from "../../assets/star.svg";

const Testimonials = () => {
  // State to track which testimonial is active
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);

  // Array of testimonials
  const testimonials = [
    {
      id: 1,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
    },
    {
      id: 2,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
    },
    {
      id: 3,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
    },
    {
      id: 4,
      text: "Used DocuTech for our business agreements. Saved us hours of legal reviews!",
      rating: 5,
    },
    {
      id: 5,
      text: "The AI capabilities are remarkable. Generated perfect NDAs in minutes.",
      rating: 5,
    },
  ];

  // Adjust display count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle navigation
  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - displayCount : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - displayCount ? 0 : prevIndex + 1
    );
  };

  // Calculate which testimonials to show
  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (activeIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <img
          key={i}
          src={star}
          alt="Star"
          className={`w-4 sm:w-5 h-4 sm:h-5 ${
            i < rating ? "opacity-100" : "opacity-30"
          }`}
        />
      ));
  };

  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
          What our users say
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Cards */}
          <div className="flex justify-center gap-4 sm:gap-6 relative overflow-hidden">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full max-w-sm transition-all duration-300"
              >
                {/* User Avatar */}
                <div className="flex justify-start mb-3 sm:mb-4">
                  <img
                    src={userAvatar}
                    alt="User"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  />
                </div>

                {/* Testimonial Text */}
                <p className="text-center text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  {testimonial.text}
                </p>

                {/* Star Rating */}
                <div className="flex justify-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className=" sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 flex items-center justify-center z-10"
            aria-label="Previous testimonial"
          >
            <img src={previous} alt="Previous" className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <button
            onClick={goToNext}
            className=" sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-3 flex items-center justify-center z-10"
            aria-label="Next testimonial"
          >
            <img src={next} alt="Next" className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;