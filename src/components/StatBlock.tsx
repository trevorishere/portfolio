import type { Stat } from "../data/caseStudies";

export default function StatBlock({ value, label }: Stat) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-heading text-[32px] font-bold leading-110 text-white tablet:text-[48px]">
        {value}
      </p>
      <p className="font-body text-[14px] leading-150 tracking-[0.07px] text-parchment">
        {label}
      </p>
    </div>
  );
}
