export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-collegemart-lessons-learned",
    title: "Building CollegeMart: Lessons from Shipping a Real Product",
    excerpt:
      "From idea to 1,000+ users — what I learned architecting a full-stack P2P marketplace from scratch, the mistakes I made, and what I'd do differently.",
    category: "Startup",
    date: "2025-08-15",
    readTime: "8 min read",
    tags: ["React", "Node.js", "MongoDB", "Startup"],
    featured: true,
  },
  {
    id: "2",
    slug: "jwt-auth-college-domain",
    title: "Secure JWT Auth with College-Domain Verification",
    excerpt:
      "How I implemented email-domain-based authentication to ensure only students from verified colleges can access the platform — without a third-party SSO.",
    category: "Backend",
    date: "2025-07-02",
    readTime: "6 min read",
    tags: ["JWT", "Auth", "Node.js", "Security"],
  },
  {
    id: "3",
    slug: "building-nlp-chatbot-microsoft-nsi",
    title: "Building an NLP Chatbot for Microsoft AI NSI",
    excerpt:
      "My journey through the Edunet Foundation x Microsoft AI internship — training a smart chatbot from scratch with Python, TensorFlow, and intent classification.",
    category: "Machine Learning",
    date: "2025-06-10",
    readTime: "10 min read",
    tags: ["Python", "NLP", "TensorFlow", "ML"],
  },
  {
    id: "4",
    slug: "mongodb-query-optimization",
    title: "MongoDB Query Optimization: How I Cut API Response Time by 30%",
    excerpt:
      "A deep dive into MongoDB schema design, compound indexing, and aggregation pipeline optimizations that made CollegeMart's search blazing fast.",
    category: "Backend",
    date: "2025-05-20",
    readTime: "7 min read",
    tags: ["MongoDB", "Performance", "Backend", "Indexing"],
  },
];
