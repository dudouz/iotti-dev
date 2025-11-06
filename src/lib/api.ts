import { API_BASE_URL } from "./api-config";
import { AboutData, ResumeEntry, ResumeInfo } from "./types";

export async function getAboutData(): Promise<AboutData> {
  const response = await fetch(`${API_BASE_URL}/api/about/`);

  if (!response.ok) {
    throw new Error("Failed to fetch about data");
  }

  const { data }: { data: AboutData } = await response.json();
  return data;
}

export async function getResumeExperiences(): Promise<ResumeEntry[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/resume-experiences?populate=*`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch resume experiences");
  }

  const { data }: { data: ResumeEntry[] } = await response.json();
  return data;
}

export async function getResumeInfo(): Promise<ResumeInfo> {
  const response = await fetch(`${API_BASE_URL}/api/resume-info?populate=*`);

  if (!response.ok) {
    throw new Error("Failed to fetch resume info");
  }

  const { data }: { data: ResumeInfo } = await response.json();
  return data;
}
