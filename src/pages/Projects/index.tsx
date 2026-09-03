import Projectcard from "@/components/Projectcard";

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
  {
    link: "https://github.com/Ratnesh-Dhan/ImageModder/releases/tag/v1.1",
    image: "/ImageMod.png",
    title: "ImageMod",
    description:
      "An advanced image processing tool for scientific applications, featuring filtering, enhancement, and transformation for precise analysis and visualization.",
    tags: ["Python", "Image processing", "Scientific tools"],
  },
  {
    link: "https://my-weather-search.vercel.app/",
    image: "/WeatherPic.png",
    title: "Weather Dashboard",
    description:
      "Weather dashboard app built for quick location search, readable conditions, and responsive forecast browsing.",
    tags: ["React", "API integration", "Responsive UI"],
  },
  {
    link: "https://vocbuild.com/",
    image: "/Vocbuild.png",
    title: "Vocbuild",
    description:
      "Online video dictionary that supports vocabulary learning with searchable examples and a focused product experience.",
    tags: ["Next.js", "Product UI", "Education"],
  },
];

const Projects = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-[#e0b15a]">Projects</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-black text-white sm:text-6xl">
        Work that shows the product, not just the stack.
      </h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Projectcard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
