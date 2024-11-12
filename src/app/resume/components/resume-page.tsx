import { Header } from "@/core/header";
import { Layout } from "@/core/layout";
import { Resume } from "./resume";

export const ResumePage = () => {
  return (
    <Layout>
      <Header title="Eduardo Iotti" />

      <Resume />
    </Layout>
  );
};
