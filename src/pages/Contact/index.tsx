import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
  {
    href: "mailto:ratneshdhan@gmail.com",
    label: "ratneshdhan@gmail.com",
    icon: FiMail,
  },
  {
    href: "https://github.com/Ratnesh-Dhan",
    label: "GitHub",
    icon: FiGithub,
  },
  {
    href: "https://www.linkedin.com/in/ratnesh-dhan/",
    label: "LinkedIn",
    icon: FiLinkedin,
  },
];

const Contact = () => {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-[#e0b15a]">Contact</p>
      <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">
        Let&apos;s talk about the next build.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        I&apos;m open to full-stack development roles and projects involving
        thoughtful product interfaces, reliable APIs, and practical AI systems.
      </p>

      <div className="mt-10 grid gap-4">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-5 text-lg font-semibold text-white transition hover:border-[#e0b15a]/50 hover:bg-white/[0.075]"
          >
            <span className="rounded bg-[#e0b15a] p-3 text-[#111414]">
              <Icon size={20} />
            </span>
            <span className="break-all">{label}</span>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Contact;
