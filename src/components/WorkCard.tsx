import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";
import CoverImage from "./CoverImage";
import type { WorkItem } from "../data/content";

export default function WorkCard({
  org,
  title,
  description,
  image,
  href,
  reverse,
}: WorkItem & { reverse: boolean }) {
  const className = `flex w-full flex-col items-stretch gap-6 rounded-[24px] bg-parchment/6 pt-4 pb-6 px-4 tablet:flex-row tablet:gap-4 tablet:bg-parchment/10 tablet:p-4 desktop:bg-parchment/6 ${
    reverse ? "tablet:flex-row-reverse" : ""
  }`;

  const content = (
    <>
      <CoverImage
        src={image}
        alt={title}
        className="aspect-[612/344] w-full rounded-[16px] tablet:flex-1 tablet:rounded-[12px] desktop:rounded-[16px]"
      />
      <div className="flex flex-col justify-center gap-1 px-1 tablet:flex-1 tablet:pl-6 tablet:pr-12 tablet:pb-2 desktop:gap-2 desktop:pl-8 desktop:pr-16 desktop:pb-4">
        <Eyebrow className="mb-1 text-[10px] leading-120 tracking-[2px] text-parchment tablet:mb-0 desktop:text-[12px]">{org}</Eyebrow>
        <h3 className="font-heading text-[16px] font-medium leading-110 text-white tablet:text-[20px] desktop:text-[28px]">
          {title}
        </h3>
        <p className="font-body text-[12px] leading-150 tracking-[0.12px] text-parchment desktop:text-[14px] desktop:tracking-[0.14px]">
          {description}
        </p>
      </div>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
