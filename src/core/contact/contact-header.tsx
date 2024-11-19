import { AnimatedHeadline } from "../hero/animated-headline";
import { Badge } from "../primitives/badge";

export const ContactHeader = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div>
          <Badge>Get in touch!</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <AnimatedHeadline
            tag="h4"
            headline="Let's build together a fast and Scalable Web App with TypeScript and NextJS"
            className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular"
          />

          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
            I focus on providing a seamless user experience, leveraging from the
            best techs avaliabl: React, TypeScript, NextJS, and TailwindCSS.
          </p>
        </div>
      </div>
    </div>
  );
};
