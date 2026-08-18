import type { OverviewItem as OverviewItemType } from "../data/caseStudies";

export default function OverviewItem({ caption, image, video }: OverviewItemType) {
  return (
    <div className="flex w-full flex-col gap-2">
      <h2 className="font-body text-[16px] font-light leading-160 tracking-[0.16px] text-parchment">
        {caption}
      </h2>
      <div className="aspect-[1000/562] w-full overflow-hidden rounded-lg">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            aria-label={caption}
            className="size-full object-cover"
          />
        ) : (
          <img src={image} alt={caption} className="size-full object-cover" />
        )}
      </div>
    </div>
  );
}
