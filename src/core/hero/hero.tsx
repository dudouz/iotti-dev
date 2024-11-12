import { MoveRight } from "lucide-react";
import { Button } from "../primitives/button";
import Link from "next/link";

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <a href="https://medium.com/@ddz.iotti/css-grid-yes-we-can-be-creative-on-web-layouts-cb4d1675ad72">
            <Button variant="secondary" size="sm" className="gap-4">
              Read my article about CSS Grid <MoveRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            I enjoy creating High-Impact Digital Experiences.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Hello, I&apos;m Eduardo Iotti, a front-end engineer based in Brazil.
          </p>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            With over a decade in the web industry and a deep expertise in
            front-end technologies, I bring a commitment to clean code,
            user-centered design, and modern development practices. From complex
            e-commerce ecosystems to AI-driven applications, my goal is to build
            seamless digital experiences that drive user engagement and business
            growth.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          {/* <Button size="lg" className="gap-4" variant="outline">
            Let us work together. <PhoneCall className="w-4 h-4" />
          </Button> */}

          <Link href="https://github.com/dudouz">
            <Button size="lg" className="gap-4">
              Take a look at my latest projects{" "}
              <MoveRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
