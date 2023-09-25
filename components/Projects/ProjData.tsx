type Project = {
  id: number;
  name: string;
  link: string;
  github: string;
  description: string;
  techStack: string;
  note?: string;
};

let featured: Project = {
  id: 6,
  name: "Finance Dashboard",
  link: "#",
  github: "https://github.com/ojassingh/ai-teaches-python",
  description:
    "An interactive web app that provides financial insights with Chat-GPT",
  techStack: "Typescript, React, Next.js, OpenAI API, Docker, MySQL, Prisma",
};

let project_list: Project[] = [
  {
    id: 5,
    name: "Sentiment Analysis Blog",
    link: "https://github.com/ojassingh/sentyblog",
    github: "https://github.com/ojassingh/sentyblog",
    description:
      "An app that recognises text sentiment and toxicity, powered by Tensorflow.js ",
    techStack: "Typescript, Next.js, AWS Amplify, GraphQL, TensorFlow.js",
  },
  {
    id: 4,
    name: "Broadcast: Social Media App",
    link: "#",
    github: "https://github.com/ojassingh/broadcast",
    description:
      "A seamless real-time chat app made with Go, Gin, Webhooks and React",
    techStack: "Typescript, React, Go, Gin, MongoDB, Docker",
  },
  {
    id: 3,
    name: "Simple Polling App",
    link: "#",
    github: "https://github.com/ojassingh/polling-app",
    description: "A polling/voting app inspired by rallly.co",
    techStack: "Typescript, Next.js, Nest.js, PostgreSQL, CockroachDB",
  },
  {
    id: 2,
    name: "CRBN: RBC Innovation Challenge",
    link: "#",
    github: "https://github.com/ojassingh/crbn",
    description:
      "An e-commerce store built to make online shopping more sustainable",
    techStack: "Typescript, Next.js, PostgreSQL, Prisma, GraphQL",
  },
  {
    id: 1,
    name: "Astro News",
    link: "https://myastra.vercel.app/",
    github: "https://github.com/ojassingh/astronews",
    description:
      "A space-launch info and space-news integrated web-application ",
    techStack: "Typescript, Next.js, Tailwind, Docker, Vercel, NewsAPI.org",
  },
];

export { featured, project_list };
