import { Icons } from "@/components/icons";

export const DATA = {
  name: "hi abu here👋",
  initials: "NC",
  url: "https://neerajkumar.vercel.app/",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "web developer | ui/ux enthusiast | always building, always learning.",
  summary:
    "I am a second-year B.Tech CSE student who loves building modern, responsive websites using React, Tailwind, and the latest web technologies. ",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "MongoDB",
    "TailwindCSS",
    "Zustand",
    "TanStack Query",
    "React Native",
    "Shadcn UI",
    "Firebase",
    "Express.js",
  ],
  contact: {
    email: "abufariskolkata@gmail.com",
    social: [
      {
        url: "https://github.com/abufarisdev",
        icon: Icons.github,

        navbar: true,
      },
      {
        url: "https://linkedin.com/in/abufaris",
        icon: Icons.linkedin,

        navbar: true,
      },
      {
        url: "mailto: abufariskolkata@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
{
  url: "https://drive.google.com/file/d/1r3Fr6Ua7ufFG1awIj9deJci4eyp7uZJn/view?usp=sharing",
  icon: Icons.resume,
},

    ],
  },

  work: [
    {
      company: "GirlScript Summer of Code 2025",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/work/gssocc.png",
      start: "July 2025",
      end: "Present",
      description:
        "I am currently contributing to GSSoC, actively working on open-source projects, collaborating with a global community, learning new technologies, and building impactful software solutions.",
    },
    {
      company: "GDG Kolkata",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Student Member",
      logoUrl: "/work/gdgkolkata.png",
      start: "Aug 2024",
      end: "Nov 2024",
      description:
       "As a student member of GDG Kolkata, I actively participate in community events, collaborate with peers, and explore new technologies.",
    },
  ],
  education: [
  {
    school: "Swami Vivekananda University",
    degree: "B.Tech in Computer Science and Engineering",
    start: "2023",
    end: "2027",
    logoUrl: "/education/svu-logo.png", 
    href: "https://svu.ac.in",
    badges: ["CSE"],
    description: "Currently pursuing my B.Tech in Computer Science and Engineering with a focus on software development, algorithms, and systems."
  },
  {
    school: "St. Augustine's Day School, Kolkata",
    degree: "Science (PCM)",
    start: "2021",
    end: "2023",
    logoUrl: "/education/stads.jpeg",
    href: "#",
    badges: ["ISC"],
    description: "Completed high school with a focus on Physics, Chemistry, and Mathematics. Participated in quizzes, football, and chess."
  }
],

  projects: [
    {
      title: "Crypton - Real Time Crypto Tracking App",
      href: "https://crypton-wheat.vercel.app/",
      dates: "September'25",
      active: true,
      description:
        "Crypton is a cryptocurrency dashboard that enables users to track real-time prices, compare coins, set alerts, manage watchlists, and view detailed analytics with interactive charts, offering a responsive and customizable experience for crypto enthusiasts and investors.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Coingecko API",
        "AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://crypton-wheat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/crypton.png",
      video: "",
    },

],
} as const;
