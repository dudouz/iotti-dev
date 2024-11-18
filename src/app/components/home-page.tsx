import { Contact } from "@/core/contact";
import { Header } from "@/core/header";
import { Hero } from "@/core/hero";
import { Layout } from "@/core/layout/layout";
import { AboutData } from "../page";

export const HomePage = ({ about }: { about: AboutData }) => {
  return (
    <Layout>
      <Header title="Eduardo Iotti" />
      {about && (
        <Hero
          articleLink={about.articleLink}
          articleTitle={about.articleTitle}
          ctaButtonLink={about.ctaButtonLink}
          ctaButtonTitle={about.ctaButtonTitle}
          heroDescription={about.heroDescription}
          mainHeadline={about.mainHeadline}
          subTitle={about.subTitle}
        />
      )}
      <Contact />
    </Layout>
  );
};
