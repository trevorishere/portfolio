import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Eyebrow from "../components/Eyebrow";
import StatBlock from "../components/StatBlock";
import OverviewItem from "../components/OverviewItem";
import NextProjectLink from "../components/NextProjectLink";
import { caseStudies } from "../data/caseStudies";
import type { CaseStudy } from "../data/caseStudies";

export default function WorkSample({ caseStudy }: { caseStudy: CaseStudy }) {
  const { org, titleLines, subtitle, description, stats, overview, quote } = caseStudy;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseStudy.slug]);

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === caseStudy.slug);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-charcoal">
      <Nav />
      <main className="flex w-[calc(100%-48px)] max-w-[400px] flex-col gap-16 pb-24 pt-12 tablet:w-[calc(100%-128px)] tablet:max-w-[800px] tablet:gap-24 tablet:pt-16 desktop:w-[calc(100%-192px)] desktop:max-w-[1120px] desktop:gap-24 desktop:pt-20">
        <section className="flex w-full flex-col gap-4 tablet:gap-6 desktop:gap-8">
          <Eyebrow className="text-[12px] leading-120 tracking-[2px] text-cement">{org}</Eyebrow>

          <h1 className="font-heading text-[36px] font-bold leading-100 text-white tablet:text-[56px] desktop:text-[80px]">
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="flex w-full flex-col gap-8 desktop:flex-row desktop:gap-24">
            <div className="flex flex-1 flex-col gap-4 desktop:gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-serif text-[20px] font-light leading-130 text-white tablet:text-[26px] desktop:text-[32px]">
                  {subtitle}
                </p>
                <p className="font-body text-[16px] font-light leading-160 tracking-[0.16px] text-parchment">
                  {description}
                </p>
              </div>
              <p className="font-body text-[16px] font-light tracking-[0.16px] text-white">
                For a detailed case study{" "}
                <a href="mailto:trevor@trevorishere.com" className="underline">
                  get in touch.
                </a>
              </p>
            </div>

            <div className="flex flex-row flex-wrap gap-8 desktop:w-[272px] desktop:flex-none desktop:flex-col desktop:justify-end desktop:gap-8">
              {stats.map((stat) => (
                <StatBlock key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-16">
          {overview.map((item) => (
            <OverviewItem key={item.caption} {...item} />
          ))}
        </section>

        <section className="flex w-full flex-col items-center py-8 tablet:py-12">
          <div className="flex w-full flex-col items-center gap-4 tablet:gap-6 desktop:gap-8">
            <div className="flex w-full items-start justify-center gap-4 tablet:gap-6 desktop:gap-6">
              <span className="font-serif shrink-0 text-[64px] leading-none text-sand tablet:text-[96px] desktop:text-[128px]" aria-hidden="true">
                &ldquo;
              </span>
              <p className="font-serif max-w-[601px] text-[22px] font-extralight italic leading-140 text-white tablet:text-[28px] desktop:text-[36px] desktop:pt-4">
                {quote.text}
              </p>
            </div>
            <p className="font-body text-[12px] font-black uppercase leading-150 tracking-[1px] text-cement">
              {quote.attribution}
            </p>
          </div>
          <NextProjectLink caseStudy={nextCaseStudy} className="mt-12" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
