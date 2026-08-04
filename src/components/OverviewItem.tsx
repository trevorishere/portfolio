import type { OverviewItem as OverviewItemType } from "../data/caseStudies";

export default function OverviewItem({ caption, image }: OverviewItemType) {
  return (
    <div className="flex w-full flex-col gap-2">
      <p className="font-body text-[16px] font-light leading-160 tracking-[0.16px] text-parchment">
        {caption}
      </p>
      <div className="aspect-[1000/562] w-full overflow-hidden rounded-lg">
        <img src={image} alt={caption} className="size-full object-cover" />
      </div>
    </div>
  );
}
