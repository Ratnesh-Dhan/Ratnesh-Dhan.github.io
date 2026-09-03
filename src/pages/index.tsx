import Projectcard from "@/components/Projectcard";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const projects = [
  {
    link: "https://github.com/Ratnesh-Dhan/MCP-client",
    image: "/MCP_Client.png",
    title: "MCP Client",
    description:
      "A client for the Model Context Protocol (MCP) that is a custom LLM tooling platform focused on connecting models with external tools, managing tool execution, and streaming agent interactions.",
    tags: ["Next.js", "Node.js", "MCP", "LangGraph", "AI Agents", "LLM"],
  },
  {
    link: "https://github.com/Ratnesh-Dhan/Comlook",
    image: "/comlook.png",
    title: "Comlook",
    description:
      "AI-powered manga translation tool focused on detecting Japanese and Chinese text, translating dialogue into English, and automatically replacing text while preserving the original page layout.",
    tags: ["Python", "PyTorch", "openCV", "OCR", "LLM", "Computer Vision"],
  },
  {
    link: "https://github.com/Ratnesh-Dhan/jinah",
    image: "/jinah_mcp_server.png",
    title: "Jinah MCP assistant",
    description:
      "Personal AI assistant MCP server focused on multi-step task automation, tool integration, Telegram interactions, and local LLM-powered workflows.",
    tags: ["MCP", "Telegram API", "AI Agents"],
  },
  // {
  //   link: "https://my-weather-search.vercel.app/",
  //   image: "/WeatherPic.png",
  //   title: "Weather Dashboard",
  //   description:
  //     "Responsive weather lookup experience with practical forecast views and a clean interface for quick scanning.",
  //   tags: ["React", "API", "Responsive UI"],
  // },
  // {
  //   link: "https://vocbuild.com/",
  //   image: "/Vocbuild.png",
  //   title: "Vocbuild",
  //   description:
  //     "Online video dictionary product that helps learners build vocabulary through searchable video-based examples.",
  //   tags: ["Next.js", "Product UI", "Learning tech"],
  // },
];

const skills = [
  "Next.js",
  "Node.js",
  "FastAPI",
  "TypeScript",
  "JavaScript",
  "AI Agents",
  "LangGraph",
  "LLM applications",
  "CNN",
];

const experience = [
  {
    role: "Project Research Associate",
    company: "CSIR-NML",
    detail:
      "Built a scientific desktop GUI application for thermal defect analysis. Developed industrial computer vision and AI solutions for defect detection, corrosion analysis, and automated coal composition assessment using Python, PyTorch, TensorFlow, and OpenCV.",
  },
  {
    role: "Software Developer",
    company: "LumioAI",
    detail:
      "Built Retrieval-Augmented Generation workflows, intelligent query processing, and user-friendly front-end interfaces for AI-powered retrieval.",
  },
  {
    role: "Project Engineer",
    company: "Wipro",
    detail:
      "Contributed to scalable web applications with emphasis on responsive interfaces, state management, and reliable delivery.",
  },
];

const Home = () => {
  return (
    <main
      className={`${geistSans.variable} overflow-hidden font-[family-name:var(--font-geist-sans)]`}
    >
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(224,177,90,0.16),transparent_32%),linear-gradient(135deg,rgba(26,31,31,1),rgba(16,19,20,1)_52%,rgba(19,41,44,1))]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <motion.p
              className="mb-5 inline-flex rounded border border-[#e0b15a]/30 bg-[#e0b15a]/10 px-3 py-1 text-sm font-medium text-[#f0c879]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Full-stack developer building AI-aware web products
            </motion.p>
            <motion.h1
              className="text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              Ratnesh Dhan
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              I design and ship practical full-stack applications across
              Next.js, React, Node.js, Flask, and AI/ML workflows, with recent
              work in Retrieval-Augmented Generation systems at LumioAI.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
            >
              <Link
                href="/Projects"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#e0b15a] px-5 py-3 font-semibold text-[#111414] transition hover:bg-[#f0c879]"
              >
                View projects <FiArrowUpRight />
              </Link>
              <a
                href="mailto:ratneshdhan@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact me <FiMail />
              </a>
            </motion.div>
          </div>

          <motion.aside
            className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/30 backdrop-blur"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.24 }}
          >
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-md bg-black/20 p-4">
                <p className="text-sm text-slate-400">Experience</p>
                <p className="mt-2 text-3xl font-bold text-white">3.3 yrs</p>
              </div>
              <div className="rounded-md bg-black/20 p-4">
                <p className="text-sm text-slate-400">Education</p>
                <p className="mt-2 font-semibold text-white">
                  B.E. Computer Science, BIT Mesra
                </p>
              </div>
              <div className="rounded-md bg-black/20 p-4">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 font-semibold text-white">
                  Full-stack apps, AI, Agent, CNN
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/Ratnesh-Dhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded bg-white/10 p-3 transition hover:bg-white/20"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ratnesh-dhan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded bg-white/10 p-3 transition hover:bg-white/20"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.aside>

          <a
            href="#projects"
            className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-slate-400 lg:flex"
          >
            Explore work <FiArrowDown />
          </a>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-[#e0b15a]">
              Selected Work
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Projects with real product surfaces
            </h2>
          </div>
          <Link
            href="/Projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e0b15a] hover:text-[#f0c879]"
          >
            See all projects <FiArrowUpRight />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Projectcard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#e0b15a]">
              Experience
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Building across AI workflows and web products
            </h2>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-lg border border-white/10 bg-[#15191a] p-5"
              >
                <p className="text-sm font-semibold text-[#e0b15a]">
                  {item.company}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[#e0b15a]">
              Toolkit
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              The stack I reach for
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              I’m strongest where product UI, API design, and practical AI
              systems meet, with a steady eye on performance and responsive
              behavior.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-white/10 bg-white/[0.055] px-4 py-2 text-sm font-medium text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-[#e0b15a] p-6 text-[#111414] sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase">
              Available for work
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Let’s build something useful.
            </h2>
          </div>
          <a
            href="mailto:ratneshdhan@gmail.com"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded bg-[#111414] px-5 py-3 font-semibold text-white transition hover:bg-[#222829] lg:mt-0"
          >
            ratneshdhan@gmail.com <FiMail />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
