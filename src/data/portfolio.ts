import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Layers, 
  Cpu, 
  Zap, 
  MessageSquare, 
  Calendar, 
  DollarSign, 
  Utensils, 
  Stethoscope, 
  ShoppingCart,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

export const personalInfo = {
  name: "Anees",
  role: "Flutter Developer & Cross Platform Engineer",
  description: "I build high-performance, beautiful, and fluid mobile applications that deliver exceptional user experiences. Passionate about AI integration and cutting-edge mobile technologies.",
  email: "anees2844@gmail.com",
  location: "Islamabad, Pakistan", // Assumed local based on request context if not specified, but usually professional
  socials: [
    { name: "GitHub", icon: Github, url: "https://github.com/anees2844" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/anees2844" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/anees2844" },
    { name: "WhatsApp", icon: MessageSquare, url: "https://wa.me/your-number" },
  ],
  stats: [
    { label: "Projects Completed", value: 25, suffix: "+" },
    { label: "Clients", value: 15, suffix: "+" },
    { label: "Experience", value: 3, suffix: " Years" },
  ]
};

export const skills = [
  { name: "Flutter", level: 95, category: "Mobile" },
  { name: "Dart", level: 90, category: "Mobile" },
  { name: "Firebase", level: 85, category: "Backend" },
  { name: "REST API", level: 90, category: "Networking" },
  { name: "Riverpod", level: 88, category: "State Management" },
  { name: "Bloc", level: 85, category: "State Management" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Next.js", level: 70, category: "Web" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "Supabase", level: 80, category: "Backend" },
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "AI Integration", level: 80, category: "AI" },
];

export const projects = [
  {
    id: 1,
    title: "Calendify App",
    description: "A smart scheduling and calendar management application built with Flutter.",
    tech: ["Flutter", "Riverpod", "Firebase", "Local Notifications"],
    image: "https://images.unsplash.com/photo-1506784919141-935043336932?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    demo: "#",
    features: ["Task Scheduling", "Team Collaboration", "Smart Reminders"]
  },
  {
    id: 2,
    title: "AI Chat App",
    description: "Intelligent chatbot interface with real-time AI responses and image generation.",
    tech: ["Flutter", "Gemini API", "OpenAI", "Supabase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    demo: "#",
    features: ["Voice-to-Text", "Image Generation", "Contextual Memory"]
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "Personal finance management tool with data visualization and budget planning.",
    tech: ["Flutter", "SQLite", "Charts", "PDF Export"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    demo: "#",
    features: ["Monthly Reports", "Category Breakdown", "Currency Conversion"]
  },
  {
    id: 4,
    title: "Food Delivery App",
    description: "Full-stack food ordering platform with real-time order tracking.",
    tech: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    demo: "#",
    features: ["Live Tracking", "Multi-vendor Support", "Digital Wallet"]
  },
  {
    id: 5,
    title: "Doctor Appointment App",
    description: "Healthcare platform connecting patients with specialized medical professionals.",
    tech: ["Flutter", "Firebase", "Agora SDK", "Razorpay"],
    image: "https://images.unsplash.com/photo-1505751172107-573225a94266?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    demo: "#",
    features: ["Video Consultation", "Digital Prescriptions", "Slot Booking"]
  },
  {
    id: 6,
    title: "E-Commerce App",
    description: "Premium shopping experience with AR product preview and seamless checkout.",
    tech: ["Flutter", "Stripe", "Firebase", "Algolia Search"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    demo: "#",
    features: ["AR Try-on", "One-click Checkout", "Wishlist System"]
  }
];

export const experience = [
  {
    title: "Senior Flutter Developer",
    company: "Tech Mahindra (Freelance)",
    period: "2023 - Present",
    description: "Leading mobile app development projects, architectural decisions, and performance optimization."
  },
  {
    title: "Cross Platform Engineer",
    company: "Freelance",
    period: "2022 - 2023",
    description: "Built scalable mobile solutions for various international clients across different industries."
  },
  {
    title: "Open Source Contributor",
    company: "Flutter Community",
    period: "2021 - Present",
    description: "Contributing to popular Flutter packages and maintaining internal UI libraries."
  },
  {
    title: "AI Learning Journey",
    company: "Self-Driven",
    period: "2024 - Present",
    description: "Integrating Gemini and other LLMs into mobile apps for smarter user interactions."
  }
];

export const services = [
  {
    title: "Flutter App Development",
    description: "Building production-grade native apps for iOS & Android with a single codebase.",
    icon: Smartphone
  },
  {
    title: "Cross Platform Apps",
    description: "Expanding your reach to Web and Desktop using Flutter's versatile capabilities.",
    icon: Globe
  },
  {
    title: "Firebase Integration",
    description: "Robust backend setup with real-time DB, Auth, and Cloud Functions.",
    icon: Database
  },
  {
    title: "API Integration",
    description: "Seamless connection with third-party services and custom REST/GraphQL APIs.",
    icon: Layers
  },
  {
    title: "UI/UX Implementation",
    description: "Translating complex designs into pixel-perfect, interactive fluid interfaces.",
    icon: Zap
  },
  {
    title: "AI Powered Apps",
    description: "Integrating LLMs and ML models to create modern, intelligent applications.",
    icon: Cpu
  }
];

export const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO at Fintechly",
    content: "Anees delivered a world-class fintech app. The performance and animations are absolutely stunning."
  },
  {
    name: "Sarah Chen",
    role: "Product Manager at HealthScale",
    content: "Working with Anees was a breeze. He understands the business logic and translates it perfectly into mobile."
  },
  {
    name: "Michael Roe",
    role: "Founder at ShopFlow",
    content: "The E-commerce app he built exceeded our expectations. Our conversion rate increased by 40%."
  }
];
