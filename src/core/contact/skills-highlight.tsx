import { Check } from "lucide-react";

export const SkillsHighlight = () => {
  return (
    <div className="justify-center flex items-center">
      <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>Experienced Front-end Engineer</p>
            <p className="text-muted-foreground text-sm">
              As a front-end engineer, I strive to deliver high-quality
              software.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>NextJS for the win</p>
            <p className="text-muted-foreground text-sm">
              I specialize in building applications with NextJS, enhancing
              performance, scalability, and SEO.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>React + TypeScript for Scalable Apps</p>
            <p className="text-muted-foreground text-sm">
              I am dedicated to buildtype-safe, scalable applications using
              React and TypeScript since 2018.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
