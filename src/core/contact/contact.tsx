"use client";

import { Check } from "lucide-react";
import { Badge } from "@/core/primitives/badge";

export const Contact = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Front-end Engineer</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Fast, Scalable Web Solutions with TypeScript and NextJS
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  I focus on building scalable, high-performance web
                  applications using React, TypeScript, NextJS, and TailwindCSS,
                  focusing on delivering seamless user experiences,
                </p>
              </div>
            </div>
          </div>

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
                    I am dedicated to buildtype-safe, scalable applications
                    using React and TypeScript since 2018.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
