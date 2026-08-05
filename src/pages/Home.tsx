import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import WorkList from "../components/WorkList";
import ExperimentsList from "../components/ExperimentsList";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-charcoal">
      <Nav />
      <main className="flex w-[calc(100%-48px)] max-w-[400px] flex-col gap-16 pb-24 tablet:w-[calc(100%-128px)] tablet:max-w-[800px] tablet:gap-[120px] desktop:w-[calc(100%-192px)] desktop:max-w-[1000px]">
        <Hero />
        <WorkList />
        <ExperimentsList />
      </main>
      <Footer />
    </div>
  );
}
