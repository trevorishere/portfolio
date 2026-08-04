import envelope from "../assets/icons/envelope.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import SocialLink from "./SocialLink";

const socialLinks = [
  { href: "mailto:trevor@trevorishere.com", label: "Email", icon: envelope },
  {
    href: "https://www.linkedin.com/in/trevorjones/",
    label: "LinkedIn",
    icon: linkedin,
    external: true,
  },
  {
    href: "https://github.com/trevorishere",
    label: "GitHub",
    icon: github,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-charcoal pt-[88px] pb-[120px] tablet:py-24 shadow-[0px_-8px_10px_rgba(0,0,0,0.15)]">
      <h2 className="font-body text-[20px] font-semibold text-parchment tablet:text-[32px]">
        Let's be in touch.
      </h2>
      <div className="mt-8 flex items-center gap-8 tablet:gap-12">
        {socialLinks.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </footer>
  );
}
