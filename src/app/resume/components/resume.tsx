"use client";

import { Badge } from "@/core/primitives/badge";
import { Button } from "@/core/primitives/button";
import { ExternalLink } from "lucide-react";
import { ResumeData } from "../page";

export const Resume = ({ resume }: { resume: ResumeData }) => {
  return (
    <div className="w-full">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col gap-16 py-20 lg:py-40">
          {/* Header Section */}
          <div className="flex flex-col gap-6 items-center text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
              Eduardo Iotti
            </h1>
            <p className="text-xl text-muted-foreground">
              Senior Software Engineer
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/eduardoiotti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  LinkedIn <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/dudouz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="flex flex-col gap-6">
            <div>
              <Badge>Summary</Badge>
            </div>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Senior software engineer based in Brazil, with 6+ years of
              experience with front-end development and 10+ years of experience
              in the web industry. I have been developing and delivering web
              apps, using TypeScript and React, together with front-end
              frameworks such as NextJS.
            </p>
          </div>

          {/* Experience Section */}
          <div className="flex flex-col gap-8">
            <div>
              <Badge>Work Experience</Badge>
            </div>

            {resume.experiences.map((entry) => (
              <div key={entry.company} className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">{entry.position}</h3>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-medium">{entry.company}</span>
                      <span className="hidden sm:inline text-muted-foreground">
                        ·
                      </span>

                      <span className="text-sm text-muted-foreground">
                        {entry.startDate} -{" "}
                        {entry.currentlyWorking ? "Present" : entry.endDate} ·
                        {entry.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-lg">{entry.description}</p>

                  <h3 className="text-lg font-medium">Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {entry.activities.map((activity) => (
                      <li key={activity.id}>{activity.activity}</li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-medium">Related Keywords</h3>
                  <ul className="flex flex-wrap gap-2 list-none list-inside text-muted-foreground">
                    {entry.relatedKeywords.map((keyword) => (
                      <li className="text-sm" key={keyword.id}>
                        {keyword.keyword}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="flex flex-col gap-6">
            <div>
              <Badge>Education</Badge>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium">
                  MBA in Software Engineering
                </h3>
                <p className="text-sm text-muted-foreground">
                  PUC-Rio · 2023-2024
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium">
                  Nanodegree in Digital Marketing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Udacity · 2018-2019
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium">
                  Bachelor of Arts in Advertising
                </h3>
                <p className="text-sm text-muted-foreground">UCS · 2006-2011</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="flex flex-col gap-6">
            <div>
              <Badge>Certifications</Badge>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Clean Architecture - Rodrigo Branas (2022)</li>
              <li>Software Architecture Full Cycle (2022)</li>
              <li>Continuous Integration Full Cycle (2022)</li>
              <li>Domain-Driven Design Full Cycle (2021)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
