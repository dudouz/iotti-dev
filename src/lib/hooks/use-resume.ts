"use client";

import { useQuery } from "@tanstack/react-query";
import { getResumeExperiences, getResumeInfo } from "../api";

export function useResumeExperiences() {
  return useQuery({
    queryKey: ["resume", "experiences"],
    queryFn: getResumeExperiences,
  });
}

export function useResumeInfo() {
  return useQuery({
    queryKey: ["resume", "info"],
    queryFn: getResumeInfo,
  });
}
