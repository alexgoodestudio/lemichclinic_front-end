import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = (animations) => {
  useEffect(() => {
    // Apply all animations
    animations.forEach(({ trigger, config }) => {
      gsap.from(trigger, {
        scrollTrigger: {
          trigger: trigger,
          start: config.start || "top 80%",
          toggleActions: config.toggleActions || "play none none none",
        },
        ...config.props, // Pass additional GSAP props
      });
    });
  }, [animations]);
};

export default useGsapAnimations;
