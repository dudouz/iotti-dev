"use client";
import { MoveRight } from "lucide-react";
import { Button } from "../primitives/button";
import Link from "next/link";

import "@/styles/gradientMask.css";
import { AnimatedHeadline } from "./animated-headline";

export interface HeroProps {
  articleLink: string;
  articleTitle: string;
  ctaButtonLink: string;
  ctaButtonTitle: string;
  heroDescription: string;
  mainHeadline: string;
  subTitle: string;
}

export const Hero = ({
  articleLink,
  articleTitle,
  ctaButtonLink,
  ctaButtonTitle,
  heroDescription,
  mainHeadline,
  subTitle,
}: HeroProps) => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <a href={articleLink}>
              <Button variant="secondary" size="sm" className="gap-4">
                {articleTitle} <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
          <div className="flex gap-4 flex-col relative">
            <AnimatedHeadline
              headline={mainHeadline}
              className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular"
            />

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {subTitle}
            </p>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {heroDescription}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            {/* <Button size="lg" className="gap-4" variant="outline">
              Let us work together. <PhoneCall className="w-4 h-4" />
            </Button> */}

            <Link href={ctaButtonLink}>
              <Button size="lg" className="gap-4">
                {ctaButtonTitle}
                <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
