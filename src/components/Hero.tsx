import avatar from "../assets/images/avatar-trevor-jones.jpg";
import MetricCard from "./MetricCard";
import { metrics } from "../data/content";

export default function Hero() {
  return (
    <section className="flex w-full flex-col gap-8 pt-12 tablet:pt-20">
      <div className="grid items-center gap-x-4 gap-y-8 [grid-template-areas:'avatar_heading'_'bio_bio'] [grid-template-columns:auto_1fr] tablet:items-start tablet:gap-x-12 tablet:mb-4 tablet:[grid-template-areas:'heading_heading'_'avatar_bio'] desktop:gap-x-16 desktop:pr-24">
        <img
          src={avatar}
          alt="Trevor Jones"
          className="[grid-area:avatar] size-[96px] shrink-0 rounded-full border border-white/50 object-cover tablet:size-[140px] desktop:size-[180px]"
        />
        <h1 className="[grid-area:heading] font-heading text-[20px] font-medium leading-120 text-white tablet:text-[24px] desktop:text-[32px]">
          Product Design Leader<br className="tablet:hidden" />{" "}
          <span className="text-cement">in San Francisco Bay Area, CA</span>
        </h1>
        <p className="[grid-area:bio] font-body max-w-[780px] text-[14px] font-light leading-160 tracking-[0.14px] text-parchment tablet:max-w-[664px] tablet:text-[16px] tablet:tracking-[0.16px]">
          15+ years leading design across consumer and B2B platforms—from Pearson’s
          digital learning infrastructure, PlayStation’s commerce ecosystem to
          Valimail’s security suite. I have a proven track record of driving outcomes
          at scale: 350% revenue growth on PlayStation Store, $300M+ in annual digital
          product revenue at Pearson, $2M in new revenue at Valimail. I am a
          ‘player/coach’ designer with the hands-on skills to build from zero-to-one
          with scalable systems and AI-powered workflows, and a cross-functional
          leader to build teams and foster relationships that accelerate production
          time. I want to work with teams that bring curiosity and attention to
          detailed execution on AI products that improve people’s lives.
        </p>
      </div>

      <div className="flex w-full flex-row items-stretch gap-1 rounded-[32px] tablet:gap-4 tablet:justify-between desktop:justify-start">
        {metrics.map((metric) => (
          <MetricCard key={metric.org} {...metric} />
        ))}
      </div>
    </section>
  );
}
