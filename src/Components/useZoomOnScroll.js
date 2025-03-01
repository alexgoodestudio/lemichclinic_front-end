import { useEffect } from "react";

const useZoomOnScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".zoom").forEach((img) => {
        const rect = img.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
          img.classList.add("in-view");
        } else {
          img.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useZoomOnScroll;
