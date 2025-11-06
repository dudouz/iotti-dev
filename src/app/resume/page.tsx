"use client";

import { ResumePage } from "./components";
import { useResumeExperiences, useResumeInfo } from "@/lib/hooks/use-resume";

export default function Resume() {
  const { data: experiences, isLoading: isLoadingExperiences, error: experiencesError } = useResumeExperiences();
  const { data: info, isLoading: isLoadingInfo, error: infoError } = useResumeInfo();

  const isLoading = isLoadingExperiences || isLoadingInfo;
  const error = experiencesError || infoError;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Error loading data: {error.message}</p>
      </div>
    );
  }

  if (!experiences) {
    return null;
  }

  return (
    <ResumePage
      resume={{
        experiences,
        info,
      }}
    />
  );
}
