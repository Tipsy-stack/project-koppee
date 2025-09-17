import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
    fixed bottom-8 right-8 w-[50px] h-[50px] bg-secondary cursor-pointer rounded-lg flex items-center justify-center shadow-md transition-all duration-300 ease-in-out z-[1000] animate-bounce hover:bg-[#da9f5b] hover:-translate-y-0.5 hover:shadow-lg"
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#86561f";
        e.target.style.transform = "translateY(-2px)";
        e.target.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "#da9f5b";
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
      }}
      aria-label="Scroll to top"
    >
      {/* Double chevron up arrows */}
      <div>
        <FaAngleDoubleUp className="relative w-[20px] h-[20px] flex flex-col items-center justify-content-center" />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
