import { HomePage } from "./components/home-page";
import { getAboutData } from "@/lib/api";

export default async function Home() {
  const data = await getAboutData();

  return <HomePage about={data} />;
}
