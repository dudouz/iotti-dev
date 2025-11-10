import { ResumePage } from "./components";
import { getResumeExperiences, getResumeInfo } from "@/lib/api";

export default async function Resume() {
  const experiences = await getResumeExperiences();
  const info = await getResumeInfo();

  return (
    <ResumePage
      resume={{
        experiences,
        info,
      }}
    />
  );
}
