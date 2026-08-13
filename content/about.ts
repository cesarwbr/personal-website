export type Job = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: string;
  current?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const heroBio =
  "Technical Lead, AI at Arena with 18+ years of software engineering experience. I build intelligent products powered by LLMs, AI agents, and real-time communication — from concept to production.";

export const heroTags = ["San Jose, CA", "18+ years experience", "AI & LLMs"];

export const storyTitle = "From front-end to AI leadership";

/**
 * Story paragraphs, written as markdown so the page and /about.md render from
 * the same text. Only inline links are used — see components/inline-markdown.
 */
export const story = [
  "I started building for the web in 2005 as a university intern in Uberlandia, Brazil, writing PHP and MySQL applications. Over the next decade, I became deeply invested in front-end engineering — working across the evolution from jQuery and PrototypeJS to AngularJS to React, building everything from telecom CRMs to real-time engagement platforms.",
  "In 2018, I joined [Arena](https://arena.im) as a Technical Lead and moved to San Jose, California. I led the front-end architecture for a real-time engagement platform that serves millions of concurrent users across live events, sports broadcasts, and media.",
  "When the AI wave arrived, I pivoted. In 2023, I moved into AI leadership at Arena, where I now lead the team building [My Avatar](https://myavatar.ai) — an AI platform that lets creators build digital versions of themselves with text chat, voice calls, and video calls. I also created the [AI Concierge](https://arenachat.com) and the Arena AI Assistant. My work now sits at the intersection of LLMs, AI agents, and real-time communication.",
  "Outside of work, I build open-source tools and Chrome extensions. [react-input-emoji](https://www.npmjs.com/package/react-input-emoji) has millions of downloads on npm, and my Chrome extensions like NFL Live Hub and Olympic Games Paris 2024 have been used by thousands of fans worldwide.",
];

export const experience: Job[] = [
  {
    role: "Technical Lead, AI",
    company: "Arena",
    companyUrl: "https://myavatar.ai",
    period: "May 2023 - Present",
    location: "San Jose, California",
    description:
      "Leading the AI team building My Avatar (myavatar.ai) — an AI-powered platform that lets creators build digital versions of themselves with text chat, voice calls, and video calls. Also created AI Concierge at arenachat.com and the Arena AI Assistant. Building with LangChain, LangGraph, MCP servers, and GPT.",
    current: true,
  },
  {
    role: "Technical Lead",
    company: "Arena",
    companyUrl: "https://arena.im",
    period: "Nov 2018 - Apr 2023",
    location: "San Jose, California",
    description:
      "Led front-end architecture and engineering for Arena's real-time engagement platform. Built scalable, real-time web applications handling millions of concurrent users across live events, sports, and media.",
  },
  {
    role: "Senior Front-end Engineer",
    company: "Algar Telecom",
    companyUrl: "https://algartelecom.com.br",
    period: "Jul 2010 - Jun 2016",
    location: "Uberlandia, Brazil",
    description:
      "Led front-end engineering for one of Brazil's largest telecom providers. Rebuilt CRM applications with AngularJS, managed client-side performance optimization, and mentored web/mobile development teams on UX and front-end best practices.",
  },
  {
    role: "Front-end Developer",
    company: "Kyros Tecnologia",
    period: "Oct 2009 - Jun 2010",
    location: "Uberlandia, Brazil",
    description:
      "Developed telecom software including a VOIP project with pure JavaScript. Worked with J2EE, Spring, and Oracle Database.",
  },
  {
    role: "Front-end Developer",
    company: "Concepta",
    period: "Jan 2007 - Sep 2009",
    location: "Uberlandia, Brazil",
    description:
      "Built a Service Creation Environment (SCE) for telecom. Early experience with JavaScript frameworks including jQuery, ExtJS, YUI, and PrototypeJS.",
  },
  {
    role: "Intern",
    company: "UFU - Universidade Federal de Uberlandia",
    companyUrl: "https://www.ufu.br",
    period: "Jan 2005 - Dec 2006",
    location: "Uberlandia, Brazil",
    description: "Developed enterprise web platforms using PHP and MySQL.",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    items: [
      "LLMs (GPT, Claude)",
      "LangChain",
      "LangGraph",
      "MCP Servers",
      "AI Agents",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Front-end",
    items: ["React", "Next.js", "Framer Motion", "CSS Modules", "Tailwind CSS"],
  },
  {
    category: "Back-end & Infra",
    items: ["Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Redis", "Docker"],
  },
  {
    category: "Real-time & Media",
    items: [
      "WebRTC",
      "WebSockets",
      "Video AI",
      "Voice AI",
      "Chrome Extensions",
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git",
      "CI/CD",
      "Vercel",
      "AWS",
      "Agile/Scrum",
      "Code Review",
      "Mentoring",
    ],
  },
];

export const education = {
  degree: "B.S. Computer Science",
  school: "Universidade Federal de Uberlandia (UFU)",
  location: "Uberlandia, Brazil",
  note: "Member of the International Collegiate Programming Contest (ICPC) competitive programming team.",
};

export const connectLinks = [
  { label: "GitHub", url: "https://github.com/cesarwbr" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/cesarwalvarenga" },
  { label: "X", url: "https://x.com/cesarwbr" },
  { label: "Medium", url: "https://medium.com/@cesarwilliam" },
  { label: "Dev.to", url: "https://dev.to/cesarwbr" },
  { label: "Email", url: "mailto:cesarwbr@gmail.com" },
];
