"use client";

import { HomePage } from "./components/home-page";
import { useAbout } from "@/lib/hooks/use-about";

export default function Home() {
  const { data, isLoading, error } = useAbout();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Error loading data: {error.message}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return <HomePage about={data} />;
}
