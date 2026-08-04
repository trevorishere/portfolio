import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const links = [
  { id: "work", label: "Work" },
  { id: "experiments", label: "Experiments" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const navigate = useNavigate();
  const location = useLocation();

  function goToSection(id: string) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      close();
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/#${id}`);
      }
    };
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative">
        <div className="relative z-10 bg-charcoal shadow-[0px_1px_6px_rgba(0,0,0,0.25)] tablet:backdrop-blur-[5px] tablet:bg-charcoal/95">
          <div className="mx-auto flex h-20 w-[calc(100%-96px)] max-w-[1224px] items-center justify-between gap-4 tablet:h-[108px] desktop:w-[calc(100%-128px)]">
            <Link
              to="/"
              className="font-heading whitespace-nowrap text-[16px] font-semibold tracking-[1px] text-white tablet:text-[20px]"
            >
              TREVOR JONES
            </Link>

            <nav className="hidden gap-4 pt-[5px] tablet:flex tablet:gap-7">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={goToSection(link.id)}
                  className="font-heading whitespace-nowrap text-[14px] uppercase tracking-[1.4px] text-white/90 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-10 shrink-0 flex-col items-center justify-center gap-[6px] tablet:hidden"
            >
              <span className="h-[2px] w-[18px] rounded-full bg-cement opacity-80" />
              <span className="h-[2px] w-[18px] rounded-full bg-cement opacity-80" />
              <span className="h-[2px] w-[18px] rounded-full bg-cement opacity-80" />
            </button>
          </div>
        </div>

        <div
          className={`absolute left-0 top-full z-0 grid w-full bg-[#2b2b2b] transition-[grid-template-rows] duration-300 ease-in-out tablet:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <nav aria-hidden={!open} className="flex flex-col items-end gap-10 px-6 py-10">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  tabIndex={open ? 0 : -1}
                  onClick={goToSection(link.id)}
                  className={`font-heading text-[16px] uppercase tracking-[1.4px] text-white transition-[opacity,transform] duration-300 ease-in-out ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-[25px] opacity-0"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
