export interface AboutData {
  articleLink: string;
  articleTitle: string;
  ctaButtonLink: string;
  ctaButtonTitle: string;
  heroDescription: string;
  mainHeadline: string;
  subTitle: string;
}

export interface ResumeEntry {
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

export type ListItem = {
  title: string;
  date: string;
  description: string;
};

export type ProfileLink = {
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

export interface ResumeData {
  experiences: ResumeEntry[];
  info?: ResumeInfo;
}
