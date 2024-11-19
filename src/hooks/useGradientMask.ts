import { useRef, useEffect } from "react";

interface GradientMaskOptions {
  defaultAngle?: number;
  transitionSpeed?: number;
  intensity?: number;
}

export const useGradientMask = ({
  defaultAngle = 90,
  transitionSpeed = 0.2,
  intensity = 1,
}: GradientMaskOptions = {}): {
  ref: React.RefObject<HTMLDivElement>;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseLeave: () => void;
} => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const angle = Math.atan2(y, x) * (180 / Math.PI);

    const distance = Math.sqrt(x * x + y * y) * intensity;

    elementRef.current.style.setProperty("--gradient-angle", `${angle}deg`);
    elementRef.current.style.setProperty(
      "--mouse-distance",
      distance.toString()
    );
    elementRef.current.style.setProperty(
      "--gradient-x-position",
      `${(x + 0.5) * 100}%`
    );
    elementRef.current.style.setProperty(
      "--gradient-y-position",
      `${(y + 0.5) * 100}%`
    );
  };

  const handleMouseLeave = () => {
    if (!elementRef.current) return;
    elementRef.current.style.setProperty(
      "--gradient-angle",
      `${defaultAngle}deg`
    );
    elementRef.current.style.setProperty("--mouse-distance", "0");
    elementRef.current.style.setProperty("--gradient-x-position", "50%");
    elementRef.current.style.setProperty("--gradient-y-position", "50%");
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.setProperty(
      "--gradient-transition-speed",
      `${transitionSpeed}s`
    );
    element.style.setProperty("--gradient-angle", `${defaultAngle}deg`);
    element.style.setProperty("--gradient-x-position", "50%");
    element.style.setProperty("--gradient-y-position", "50%");

    const handleScroll = () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      element.style.setProperty("--scroll-progress", scrollProgress.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [defaultAngle, transitionSpeed]);

  return {
    ref: elementRef,
    handleMouseMove,
    handleMouseLeave,
  };
};
