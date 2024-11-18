import { Header } from "@/core/header";
import { Layout } from "@/core/layout";
import { Resume } from "./resume";
import { ResumeData } from "../page";
export const ResumePage = ({ resume }: { resume: ResumeData }) => {
  return (
    <Layout>
      <Header title="Eduardo Iotti" />

      <Resume resume={resume} />
    </Layout>
  );
};
