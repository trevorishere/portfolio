import SectionHeading from "./SectionHeading";
import ExperimentCard from "./ExperimentCard";
import { experiments } from "../data/content";

export default function ExperimentsList() {
  return (
    <section
      id="experiments"
      className="flex w-full scroll-mt-[108px] flex-col gap-4"
    >
      <SectionHeading>Experiments</SectionHeading>

      <div className="flex w-full flex-col items-start gap-6 tablet:flex-row">
        {experiments.map((item) => (
          <ExperimentCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
