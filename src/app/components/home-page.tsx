import { Contact } from "@/core/contact";
import { Header } from "@/core/header";
import { Hero } from "@/core/hero";
import { Layout } from "@/core/layout/layout";

export const HomePage = () => {
  return (
    <Layout>
      <Header title="Eduardo Iotti" />
      <Hero />
      <Contact />
    </Layout>
  );
};
