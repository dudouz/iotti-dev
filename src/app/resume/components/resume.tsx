"use client";

import { Badge } from "@/core/primitives/badge";
import { Button } from "@/core/primitives/button";
import { ExternalLink } from "lucide-react";

export const Resume = () => {
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

            {/* Current Role */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">
                    Lead Front-end Engineer
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-medium">Scalis</span>
                    <span className="hidden sm:inline text-muted-foreground">
                      ·
                    </span>
                    <span className="text-sm text-muted-foreground">
                      August 2024 - Present · Miami, FL - USA
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Led a team of 3 front-end engineers, advocating for code
                    quality, organization, and delivery cadence.
                  </li>
                  <li>
                    Contributed as a front-end engineer for an AI-driven ATS
                    software, using state-of-the-art technologies such as NextJS
                    14 Tailwind, RadixUI, React Query, and PrismaDB, delivered
                    Job Requisition Modules, integrated with GraphQL APIs.
                  </li>
                  <li>
                    Maintained a complex component library within Storybook
                    platform, leveraging Tailwind Variants and previously
                    defined design tokens to allow core component extension and
                    reutilization over the app, most of the time following the
                    atomic design philosophy.
                  </li>
                  <li>
                    Managed backlog and proposed product roadmap strategies,
                    introducing agile concepts to a previously unorganized team
                    such as daily stand-ups, refinement sessions, and guild
                    meetings, aiming for team building and clear objective
                    alignment.
                  </li>
                </ul>
              </div>

              {/* Previous Roles */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">
                    Senior Front-end Developer
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-medium">Softensity</span>
                    <span className="hidden sm:inline text-muted-foreground">
                      ·
                    </span>
                    <span className="text-sm text-muted-foreground">
                      October 2022 - August 2024 · Marietta, GA - USA
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Worked as a consultant engineer for Softensity, an American
                    outsourcing company based in Georgia.
                  </li>
                  <li>
                    Lead front-end community, conducting 1x1’s and keeping track
                    of 10+ engineers and their project status, making reports to
                    higher level management team.
                  </li>
                  <li>
                    Contributed as a front-end engineer for a Smart Buildings /
                    Real State Management Software called Nantum OS, from
                    Prescriptive Data, a company based in New York, delivering
                    modules related to keeping track and displaying sensor data
                    over the app
                  </li>
                  <li>
                    Improved Nantum OS app performance by upgrading core
                    libraries such as Webpack (from v4 to v5), React (from v17
                    to v18), moving from 8 to 10 minutes build time to 3 minutes
                    build time and reaching over 500% hot module reloading time
                    improvement (from 1 to 3 minutes to 10s)
                  </li>
                  <li>
                    Contributed as a front-end engineer for a B2B employee
                    relation software called Happy Orbit, from Gravitational
                    Marketing, a digital marketing agency based in Florida.
                  </li>
                  <li>
                    Created visual components and interfaces using React, SCSS,
                    and TypeScript.
                  </li>
                  <li>
                    Presented an AI LLM-driven chatbot built with Python and
                    Langchain on an internal contest for artificial
                    intelligence-based products.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">
                    Senior Front-end Engineer
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-medium">petlove&co</span>
                    <span className="hidden sm:inline text-muted-foreground">
                      ·
                    </span>
                    <span className="text-sm text-muted-foreground">
                      December 2020 - October 2022 · São Paulo - Brazil
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Worked as a Specialist front-end engineer, refactoring
                    legacy platforms and applying micro front-end architecture.
                  </li>
                  <li>
                    Refactored legacy Angular-based platform into Vue/Nuxt-based
                    tech at the DogHero business unit.
                  </li>
                  <li>
                    Applied micro front-end architecture, splitting the legacy
                    code into separate applications.
                  </li>
                  <li>
                    Used monorepo structure with Turborepo for clustering
                    different apps into one GitHub repo and leveraging on
                    reusable and shareable components.
                  </li>
                  <li>
                    Managed state through a full-refactored checkout flow moving
                    from Vuex to Pinia.
                  </li>
                  <li>
                    Delivered a business unit home page in less than 2 months,
                    adapting WindiCSS to the existing company-provided design
                    system.
                  </li>
                  <li>
                    Achieved better organic search engine results at the
                    SEO/Growth team, mostly by optimizing performance and other
                    aspects of Google`s core web vitals.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">Previous Experience</h3>
                  <span className="text-sm text-muted-foreground">
                    2008 - 2020
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Mid Front-end Engineer at Via (2020)</li>
                  <li>Front-end Engineer at Webmotors (2019-2020)</li>
                  <li>
                    Delivered 60+ WordPress projects as a freelancer (2011-2016)
                  </li>
                  <li>Worked as a User Interface Designer (2008-2011)</li>
                  <li>
                    Led a small design bureau with 2 employees (2016-2018)
                  </li>
                </ul>
              </div>
            </div>
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
