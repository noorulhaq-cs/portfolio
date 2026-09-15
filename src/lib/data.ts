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
  { label: "Certificates", href: "#certificates" },
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
    title: "Programming Languages",
    items: [
      "Java",
      "Python",
      "C",
      "JavaScript (ES6+)",
      "TypeScript",
      "PHP",
      "SQL",
    ],
  },
  {
    title: "Web & Frameworks",
    items: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "Laravel",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Databases & Storage",
    items: ["MySQL", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "VS Code", "Supabase Auth"],
  },
  {
    title: "AI & Developer Tooling",
    items: [
      "GitHub Copilot",
      "ChatGPT",
      "Gemini",
      "AI-Assisted Workflows",
    ],
  },
  {
    title: "Networking & Concepts",
    items: [
      "OOP",
      "DSA",
      "RESTful APIs",
      "Relational Schema Design",
      "Authentication",
      "Networking Concepts",
      "DLD",
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
    image: "projects/stockmentoB.png",
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
    // demo: "https://stockmento.example.com",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Full-featured store with admin controls",
    image: "projects/boldware.png",
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
    slug: "shophub-ecommerce",
    title: "ShopHub - E-Commerce Platform",
    tagline: "Full-stack store with real-time database & auth",
    image: "projects/shophub.png",
    tech: ["React", "Vite", "Supabase", "PostgreSQL", "JavaScript"],
    description:
      "A full-stack, responsive e-commerce application featuring real-time PostgreSQL database integration, secure authentication with custom metadata, user-isolated persistent shopping carts, and dynamic checkout validation.",
    features: [
      "Supabase Auth with custom username metadata",
      "User-isolated persistent cart stored in PostgreSQL",
      "Dynamic product fetching & detail pages",
      "Form validations & empty cart guards",
      "Fully responsive UI with Vite & React Router",
    ],
    github: "https://github.com/noorulhaq-cs/ecommerce-react-website",
    demo: "https://ecommerce-react-website-nine.vercel.app/",
  },
  {
    slug: "car-showroom-management",
    title: "Car Showroom Management System",
    tagline: "Car showroom and rental management",
    image: "projects/rentacar.png",
    tech: ["HTML", "CSS"],
    description:
      "A simple Car Showroom and Rent-a-Car website that allows users to browse available vehicles and explore car rental options through an easy-to-use interface",
    features: [
      "Vehicle Listings",
      "Rent-a-Car Service",
      "Responsive User Interface",
      "Car Details",
    ],
    github: "https://github.com/noorulhaq-cs/rentacar",
  },
  {
    slug: "exam-management-system",
    title: "Exam Management System",
    tagline: "Student & teacher exam workflow",
    image: "projects/exam.png",
    tech: ["Java", "OOP"],
    description:
      "A desktop-based Exam Management System with dedicated interfaces for teachers and students. Teachers can create and schedule exams for specific dates, while students can take the exams on the scheduled dates and view their results and performance.",
    features: [
      "Online Exam Attempt",
      "Automatic Result Generation",
      "Exam Creation",
      "Teacher & Student Login",
    ],
    github: "https://github.com/noorulhaq-cs/oopproject",
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

export type CertificateCategory =
  | "All"
  | "Specialization"
  | "Data & AI"
  | "AI & Prompting"
  | "Development"
  | "Finance";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  organization?: string;
  issueDate?: string;
  image: string;
  category: "Specialization" | "Data & AI" | "AI & Prompting" | "Development" | "Finance";
  featured?: boolean;
  skills: string[];
  verifyUrl?: string;
};

export const certificates: Certificate[] = [
  {
    id: "google-advanced-data-analytics",
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "Dec 2025",
    image: "/certificates/Google Advanced Data Analytics.jpg",
    category: "Specialization",
    featured: true,
    skills: ["Data Analytics", "Python", "Machine Learning", "Predictive Modeling", "Statistics"],
    verifyUrl: "https://coursera.org/verify/professional-cert/ZQLBZYGDUPYI",
  },
  {
    id: "google-prompting-essentials",
    title: "Google Prompting Essentials",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "Dec 2025",
    image: "/certificates/Google Prompting Essentials.jpg",
    category: "Specialization",
    featured: true,
    skills: ["Prompt Engineering", "Generative AI", "Data Analysis", "AI Productivity"],
    verifyUrl: "https://coursera.org/verify/specialization/RBBUJODGMZJC",
  },
  {
    id: "html-css-in-depth",
    title: "HTML and CSS in Depth",
    issuer: "Meta",
    organization: "Coursera",
    issueDate: "Aug 2023",
    image: "/certificates/HTML & CSS.jpg",
    category: "Development",
    featured: true,
    skills: ["HTML5", "CSS3", "Responsive Web Design", "UI Design"],
    verifyUrl: "https://coursera.org/verify/4JSWSKCVU7PH",
  },
  {
    id: "technical-analysis-psx",
    title: "Technical Analysis",
    issuer: "Pakistan Stock Exchange",
    organization: "PSX",
    issueDate: "Certified",
    image: "/certificates/Technical Analysis-certificate psx.jpg",
    category: "Finance",
    featured: true,
    skills: ["Technical Analysis", "Stock Market", "Chart Patterns", "Trading Strategies"],
  },
  {
    id: "github-copilot-szabist",
    title: "Get Started with GitHub & GitHub Copilot",
    issuer: "Microsoft Learn & SZABIST",
    organization: "SZABIST MLSA",
    issueDate: "Dec 2024",
    image: "/certificates/Git & Githud.jpg",
    category: "Development",
    featured: true,
    skills: ["Git", "GitHub", "GitHub Copilot", "Version Control", "AI Pair Programming"],
  },
  {
    id: "java-programming",
    title: "Java Programming",
    issuer: "Great Learning Academy",
    organization: "Great Learning",
    issueDate: "Nov 2021",
    image: "/certificates/java.jpg",
    category: "Development",
    featured: true,
    skills: ["Java", "OOP", "Data Structures", "Algorithms"],
  },
  {
    id: "foundations-of-data-science",
    title: "Foundations of Data Science",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "Oct 2025",
    image: "/certificates/Foundations of Data Science.jpg",
    category: "Data & AI",
    skills: ["Data Science", "Python", "Data Analysis", "Google Tools"],
    verifyUrl: "https://coursera.org/verify/O1G2RVHUGU6X",
  },
  {
    id: "get-started-with-python",
    title: "Get Started With Python",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "2025",
    image: "/certificates/Get Started With Python.jpg",
    category: "Development",
    skills: ["Python", "Control Flow", "Functions", "Data Structures"],
  },
  {
    id: "go-beyond-the-numbers",
    title: "Go Beyond the Numbers: Translate Data into Insights",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "2025",
    image: "/certificates/Go Beyond the Numbers Translate Data into Insights.jpg",
    category: "Data & AI",
    skills: ["Data Visualization", "Tableau", "Storytelling with Data", "Executive Reporting"],
  },
  {
    id: "the-power-of-statistics",
    title: "The Power of Statistics",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "2025",
    image: "/certificates/The Power of Statistics.jpg",
    category: "Data & AI",
    skills: ["Descriptive Statistics", "Inferential Statistics", "Probability", "Hypothesis Testing"],
  },
  {
    id: "regression-analysis",
    title: "Regression Analysis: Simplify Complex Data Relationships",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "2025",
    image: "/certificates/Regression Analysis Simplify Complex Data Relationships.jpg",
    category: "Data & AI",
    skills: ["Linear Regression", "Logistic Regression", "Statistical Modeling", "Python"],
  },
  {
    id: "machine-learning-nuts-bolts",
    title: "The Nuts and Bolts of Machine Learning",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "2025",
    image: "/certificates/The Nuts and Bolts of Machine Learning.jpg",
    category: "Data & AI",
    skills: ["Machine Learning", "Scikit-Learn", "Feature Engineering", "Model Evaluation"],
  },
  {
    id: "google-advanced-data-analytics-capstone",
    title: "Google Advanced Data Analytics Capstone",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "2025",
    image: "/certificates/Google Advanced Data Analytics Capstone.jpg",
    category: "Data & AI",
    skills: ["Data Science Capstone", "Predictive Analytics", "End-to-End Pipeline", "Portfolio Project"],
  },
  {
    id: "introduction-to-ai",
    title: "Introduction to AI",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "Dec 2025",
    image: "/certificates/Introduction To AI.jpg",
    category: "AI & Prompting",
    skills: ["Artificial Intelligence", "Generative AI", "Neural Networks", "Ethics in AI"],
    verifyUrl: "https://coursera.org/verify/8IFIVZXLAGKL",
  },
  {
    id: "prompts-like-a-pro",
    title: "Start Writing Prompts like a Pro",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "Oct 2025",
    image: "/certificates/Prompts Like A Pro.jpg",
    category: "AI & Prompting",
    skills: ["Prompt Writing", "Context Engineering", "Few-Shot Prompting", "Workflow Optimization"],
    verifyUrl: "https://coursera.org/verify/ZJNS7VFGI1CN",
  },
  {
    id: "design-prompts-everyday-tasks",
    title: "Design Prompts for Everyday Work Tasks",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "2025",
    image: "/certificates/Design Prompts For Everyday Work Tasks.jpg",
    category: "AI & Prompting",
    skills: ["Prompt Templates", "Task Automation", "AI Delegation", "Productivity"],
  },
  {
    id: "accelerate-job-search-ai",
    title: "Accelerate Your Job Search with AI",
    issuer: "Google",
    organization: "Coursera",
    issueDate: "Dec 2025",
    image: "/certificates/Accelerate Your Job Search with AI.jpg",
    category: "AI & Prompting",
    skills: ["AI-Assisted Workflows", "Resume Optimization", "Interview Preparation"],
    verifyUrl: "https://coursera.org/verify/AYAEC2QX0VT9",
  },
];
