"use client";

import { useGradientMask } from "@/hooks/useGradientMask";
import { cn } from "@/lib/utils";
import "@/styles/gradientMask.css";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AnimatedHeadlineProps {
  headline: string;
  tag?: HeadingLevel;
  className?: string;
}

export const AnimatedHeadline = ({
  headline,
  tag: Tag = "h1",
  className,
}: AnimatedHeadlineProps) => {
  const { ref, handleMouseMove, handleMouseLeave } = useGradientMask({
    defaultAngle: 90,
    transitionSpeed: 0.2,
    intensity: 1,
  });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Tag className={cn("animate-gradient-mask", className)}>{headline}</Tag>
    </div>
  );
};
