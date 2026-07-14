export const profile = {
  name: "Noor Ul Haq",
  role: "Computer Science Graduate",
  stack: "React · Next.js · NestJS",
  location: "Karachi, Pakistan",
  degree: "BS Computer Science",
  status: "Available for Internship / Full-Time Opportunity",
  email: "noorulhaq012345@gmail.com",
  phone: "+92 321 3626984",
  github: "https://github.com/noorulhaq-cs",
  linkedin: "https://www.linkedin.com/in/noorulhaq-cs/",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  // { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  "Strong foundation in Data Structures, OOP principles, and clean logic",
  "Comfortable handling both relational databases (MySQL/PostgreSQL) and frontend components",
  "Experienced with AI-assisted development (GitHub Copilot/ChatGPT) and version control using Git",
  "Practical exposure to building e-commerce platforms, exam software, and financial simulators",
  "Eager to collaborate, share ideas, and grow within a professional engineering team",
];

export const skillGroups = [
  {
    title: "Languages",
    // file: "languages.ts",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C"],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Laravel", "PHP"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "ChatGPT", "Gemini",],
  },
  {
    title: "Concepts",
    items: [
      "OOP",
      "DSA",
      "REST API",
      "Authentication",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  image?: string;
  tech: string[];
  description: string;
  features?: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "StockMento",
    slug: "stockmento",
    tagline: "Financial education & PSX trading simulator",
    image: "stockmentoB.png",
    tech: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL"],
    description:
      "A financial education platform integrated with a Pakistan Stock Exchange trading simulator — combining an LMS, virtual trading, and technical analysis labs behind secure authentication.",
    features: [
      "Virtual trading engine with limit orders & stop-loss",
      "Real-time market data feed",
      "Leaderboard & portfolio management",
      "Technical analysis labs & learning modules",
    ],
    github: "https://github.com/noorulhaq/stockmento",
    demo: "https://stockmento.example.com",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Full-featured store with admin controls",
    image: "boldware.png",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    description:
      "A responsive e-commerce platform with complete authentication, product and order management, and a dedicated user dashboard.",
    features: [
      "Authentication & role management",
      "Product & order management",
      "User dashboard",
      "Fully responsive storefront",
    ],
    github: "https://github.com/noorulhaq-cs/Project_scd_Website_using_Laravel_and_php",
  },
  {
    slug: "exam-management-system",
    title: "Exam Management System",
    tagline: "Student & admin exam workflow",
    image: "exam.png",
    tech: ["Java", "OOP"],
    description:
      "A desktop exam management system with dedicated student and admin experiences for scheduling exams and tracking performance.",
    features: [
      "Student portal",
      "Admin dashboard",
      "Exam scheduling",
      "Performance tracking",
    ],
    github: "https://github.com/noorulhaq/exam-management-system",
  },
  {
    slug: "car-showroom-management",
    title: "Car Showroom Management System",
    tagline: "Inventory, billing & DSA in practice",
    image: "rentacar.png",
    tech: ["Java", "DSA"],
    description:
      "An inventory and billing system for a car showroom, built to practice core data structures with real file handling requirements.",
    features: [
      "Inventory management",
      "Billing & discounts",
      "File handling",
      "Custom linked list implementation",
    ],
    github: "https://github.com/noorulhaq/car-showroom-management",
  },
];

export const education = [
  {
    degree: "BS Computer Science",
    school: "SZABIST University",
    meta: "CGPA: 3.4 / 4.0",
    period: "2022 – 2026",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    school: "TCF College",
    meta: "74%",
    period: "2019 – 2021",
  },
];

export const experience = [
  {
    title: "Full-Stack Development",
    period: "2023 – Present",
    description:
      "Designed and built full-stack applications end-to-end — from PostgreSQL schemas and NestJS services to React interfaces — including StockMento's trading simulator.",
  },
  {
    title: "Software Architecture & Database Design",
    period: "2023 – Present",
    description:
      "Practiced structuring backend services around clear domain boundaries, with a focus on authentication, REST API design, and relational schema design.",
  },
  {
    title: "Java Development & DSA",
    period: "2022 – 2023",
    description:
      "Built OOP-driven desktop systems (exam management, car showroom management), applying core data structures like custom linked lists to real problems.",
  },
  {
    title: "Team Projects",
    period: "2022 – Present",
    description:
      "Collaborated on group coursework and personal projects, splitting frontend/backend ownership and reviewing each other's code.",
  },
];

export const achievements = [
  "Developed multiple full-stack applications end-to-end",
  "Built scalable backend APIs with authentication & role management",
  "Strong foundation in OOP & data structures / algorithms",
  "Comfortable across the modern JavaScript ecosystem",
  "Passionate about solving real-world problems with practical software",
];
