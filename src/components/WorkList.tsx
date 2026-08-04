import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { workItems } from "../data/content";

export default function WorkList() {
  return (
    <section id="work" className="flex w-full scroll-mt-[108px] flex-col gap-2 pb-12 tablet:gap-4">
      <SectionHeading>Work Samples</SectionHeading>

      <div className="flex w-full flex-col gap-4">
        {workItems.map((item, i) => (
          <WorkCard key={item.title} {...item} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
