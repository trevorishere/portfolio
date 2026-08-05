export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[14px] font-medium leading-120 text-cement tablet:text-[20px]">
      {children}
    </h2>
  );
}
