export default function SocialLink({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex items-center justify-center p-[6px] tablet:p-0"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <img src={icon} alt="" className="size-8 tablet:size-12" />
      {external && <span className="sr-only">(opens in new tab)</span>}
    </a>
  );
}
