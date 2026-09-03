const About = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-[#e0b15a]">About</p>
      <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">
        Full-stack developer with a practical AI edge.
      </h1>
      <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
        <p>
          Hi, I&apos;m Ratnesh Dhan. I build full-stack applications and
          AI-driven tools across TypeScript, JavaScript, Python, Node.js,
          Next.js, React, and PyTorch. My work spans web development, computer
          vision, LLM applications and MCP-based AI systems.
        </p>
        <p>
          At CSIR-NML, I develop research-oriented software and computer vision
          solutions for industrial defect analysis, corrosion segmentation, and
          automated coal composition assessment. I also build personal projects
          such as Jinah, an MCP-powered AI assistant, and ComLook, an AI-powered
          manga translation tool for Japanese and Chinese content.
        </p>
        <p>
          Previously at LumioAI, I worked on RAG systems and intelligent
          retrieval workflows, while at Wipro, I contributed to scalable web
          applications. I hold a Bachelor of Engineering in Computer Science
          from Birla Institute of Technology Mesra.
        </p>
      </div>
    </main>
  );
};

export default About;
