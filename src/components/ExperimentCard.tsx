import CoverImage from "./CoverImage";
import type { Experiment } from "../data/content";

export default function ExperimentCard({
  title,
  description,
  image,
  href,
}: Experiment) {
  return (
    <div className="flex w-full flex-col gap-4 tablet:flex-1">
      <CoverImage src={image} alt={title} className="h-[245px] w-full rounded-lg" />
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-[16px] font-medium leading-120 text-white">
          {title}
        </h3>
        <p className="font-body text-[14px] font-light leading-150 tracking-[0.14px] text-parchment">
          {description}
        </p>
        <a
          href={href}
          className="font-body w-fit text-[14px] font-light text-parchment underline"
        >
          View prototype
        </a>
      </div>
    </div>
  );
}
