export interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  image: string;
  stack: string[];
  github: string;
  live?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: "collegemart",
    title: "CollegeMart",
    description:
      "Campus P2P marketplace empowering college students to buy, sell, and share academic essentials with institutional JWT domain verification and RBAC moderation.",
    status: "Completed",
    image: "/projects/collegemart.png",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/PANKAJ2998",
    live: "https://collegemart.in",
    category: "Full-Stack Web",
  },
  {
    id: "rakshak-edge",
    title: "RakshakEdge",
    description:
      "Edge-AI surveillance system with offline threat detection and GSM-based alerts. Runs entirely on-device using quantized TFLite models — no cloud required.",
    status: "Completed",
    image: "/projects/rakshak-edge.jpg",
    stack: ["Python", "OpenCV", "TensorFlow Lite", "GSM", "Raspberry Pi"],
    github: "https://github.com/PANKAJ2998",
    live: "https://github.com/PANKAJ2998",
    category: "Edge AI",
  },
  {
    id: "placement-portal",
    title: "Placement Portal",
    description:
      "Role-based campus recruitment platform with distinct Admin, Company, and Student workflows — end-to-end from job postings to application tracking.",
    status: "Completed",
    image: "/projects/placement-portal.jpg",
    stack: ["Python", "SQLite", "Flask", "Bootstrap", "Jinja2"],
    github: "https://github.com/PANKAJ2998",
    live: "https://github.com/PANKAJ2998",
    category: "Campus Web Platform",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "React SPA with Tailwind CSS featuring an interactive Chart.js analytics dashboard, dynamic category-wise breakdown, and CSV data export.",
    status: "Completed",
    image: "/projects/expense-tracker.jpg",
    stack: ["React", "Tailwind CSS", "Chart.js", "FileSaver.js"],
    github: "https://github.com/PANKAJ2998",
    live: "https://github.com/PANKAJ2998",
    category: "Analytics SPA",
  },
];
