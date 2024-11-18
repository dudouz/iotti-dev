import { HomePage } from "./components/home-page";

export interface AboutData {
  articleLink: string;
  articleTitle: string;
  ctaButtonLink: string;
  ctaButtonTitle: string;
  heroDescription: string;
  mainHeadline: string;
  subTitle: string;
}

export default async function Home() {
  const response = await fetch("http://127.0.0.1:1337/api/about/");

  const { data }: { data: AboutData } = await response.json();

  return <HomePage about={data} />;
}
