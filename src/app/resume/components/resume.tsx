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
          <section className="flex flex-col gap-6 items-center text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
              Eduardo Iotti
            </h1>
            <p className="text-xl text-muted-foreground">
              {resume.info?.jobTitle}
            </p>
            <div className="flex gap-4">
              {resume.info?.profileLinks.map((link) => (
                <Button key={link.url} variant="outline" size="sm" asChild>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {link.title} <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </section>

          {/* Summary Section */}
          <section className="flex flex-col gap-6">
            <div>
              <Badge>Summary</Badge>
            </div>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              {resume.info?.summary}
            </p>
          </section>

          {/* Experience Section */}
          <section className="flex flex-col gap-8">
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
                        {entry.startDate} -
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
          </section>

          {/* Education Section */}
          <section className="flex flex-col gap-6">
            <div>
              <Badge>Education</Badge>
            </div>
            <div className="grid gap-4">
              {resume.info?.education.map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description} · {item.date}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="flex flex-col gap-6">
            <div>
              <Badge>Certifications</Badge>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {resume.info?.certifications.map((item) => (
                <li key={item.title}>
                  {item.title} - {item.description} ({item.date})
                </li>
              ))}
            </ul>
          </section>

          {/* Past Experiences and Aditional info Section */}
          {resume.info?.pastExperiences &&
            resume.info?.pastExperiences?.length > 0 && (
              <section className="flex flex-col gap-6">
                <div>
                  <Badge>Past Experiences</Badge>
                </div>
                <div className="grid gap-4">
                  {resume.info?.pastExperiences.map((item) => (
                    <div key={item.title} className="flex flex-col gap-1">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <span>{item.date}</span>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
        </div>
      </div>
    </div>
  );
};
