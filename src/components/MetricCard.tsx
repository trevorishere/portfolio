import Eyebrow from "./Eyebrow";
import type { Metric } from "../data/content";

export default function MetricCard({ value, label, org }: Metric) {
  return (
    <div className="flex flex-1 flex-col gap-1 rounded-[16px] border border-[#87837d] p-5 tablet:rounded-[24px] tablet:p-8 desktop:p-10 desktop:rounded-[32px]">
      <p className="font-heading text-[18px] font-medium leading-100 text-white tablet:text-[32px] tablet:font-semibold tablet:text-parchment desktop:text-[36px]">
        {value}
      </p>
      <p className="font-body text-[10px] font-normal leading-130 tracking-[0.1px] text-parchment tablet:text-[12px] tablet:font-medium tablet:tracking-[0.12px] desktop:text-[16px]">
        {label}
      </p>
      <Eyebrow className="mt-1 text-[8px] leading-120 tracking-[1.5px] text-cement tablet:text-[10px] tablet:tracking-[2px] desktop:text-[12px]">{org}</Eyebrow>
    </div>
  );
}
