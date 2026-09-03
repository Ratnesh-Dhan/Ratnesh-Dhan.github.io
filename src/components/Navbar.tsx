import Link from "next/link";
import { useRouter } from "next/router";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Projects", label: "Projects" },
  { href: "/Contact", label: "Contact" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101314]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm text-slate-200 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[#e0b15a] font-bold text-[#111414] shadow-lg shadow-[#e0b15a]/20">
            RD
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-semibold text-white">Ratnesh Dhan</span>
            <span className="text-xs text-slate-400">Full-stack developer</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] p-1">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 transition ${
                  isActive
                    ? "bg-white text-[#111414]"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="mailto:ratneshdhan@gmail.com"
            aria-label="Email Ratnesh"
            className="rounded p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiMail size={20} />
          </a>
          <a
            href="https://github.com/Ratnesh-Dhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ratnesh-dhan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
