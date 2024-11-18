import { ResumePage } from "./components";

export interface ResumeData {
  experiences: ResumeEntry[];
  summary?: string;
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

export default async function Resume() {
  const response = await fetch(
    "http://127.0.0.1:1337/api/resume-experiences?populate=*"
  );
  const { data: experiences }: { data: ResumeEntry[] } = await response.json();

  // const summaryResponse = await fetch(
  //   "http://127.0.0.1:1337/api/resume-summary/"
  // );
  // const { data: summary }: { data: string } = await summaryResponse.json();

  // console.log(summary);

  return (
    <ResumePage
      resume={{
        experiences,
        // summary
      }}
    />
  );
}
