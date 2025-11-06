"use client";

import { useQuery } from "@tanstack/react-query";
import { getAboutData } from "../api";

export function useAbout() {
  return useQuery({
    queryKey: ["about"],
    queryFn: getAboutData,
  });
}
