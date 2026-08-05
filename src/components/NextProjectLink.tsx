import { Link } from "react-router-dom";
import type { CaseStudy } from "../data/caseStudies";

export default function NextProjectLink({
  caseStudy,
  className = "",
}: {
  caseStudy: CaseStudy;
  className?: string;
}) {
  return (
    <Link
      to={`/work/${caseStudy.slug}`}
      className={`group flex items-center gap-1 p-1 font-serif text-[16px] font-light leading-130 text-white ${className}`}
    >
      Next
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Link>
  );
}
