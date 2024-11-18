import { ResumePage } from "./components";

export interface ResumeData {
  experiences: ResumeEntry[];
  info?: ResumeInfo;
}

interface ResumeEntry {
  position: string;
  company: string;
  location: string;
  startDate: string;
  currentlyWorking: boolean;
  endDate: string;
  description: string;
  relatedKeywords: { keyword: string; id: string }[];
  activities: { activity: string; id: string }[];
}

type ListItem = {
  title: string;
  date: string;
  description: string;
};

type ProfileLink = {
  title: string;
  url: string;
};

export interface ResumeInfo {
  jobTitle: string;
  summary: string;
  image: string;
  profileLinks: ProfileLink[];
  certifications: ListItem[];
  education: ListItem[];
  pastExperiences?: ListItem[];
}

async function getExperiences() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/resume-experiences?populate=*"
  );
  const { data: experiences }: { data: ResumeEntry[] } = await response.json();

  return experiences;
}

async function getResumeInfo() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/resume-info?populate=*"
  );

  const { data: resumeInfo }: { data: ResumeInfo } = await response.json();

  return resumeInfo;
}

export default async function Resume() {
  const [experiences, info] = await Promise.all([
    getExperiences(),
    getResumeInfo(),
  ]);

  return (
    <ResumePage
      resume={{
        experiences,
        info,
      }}
    />
  );
}
