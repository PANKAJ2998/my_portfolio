export interface SkillItem {
  name: string;
  icon?: string; // emoji fallback
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "💻",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    category: "Full-Stack",
    icon: "🌐",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "scikit-learn" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Hugging Face" },
      { name: "Gemini API" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "Docker" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
];
