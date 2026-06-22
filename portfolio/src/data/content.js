import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiDart,
  SiFlutter,
  SiVercel,
  SiCanva,
} from "react-icons/si";
import { TbLetterC } from "react-icons/tb";
import { Database } from "lucide-react";

// Centralized content for the portfolio.
// Centralized content for the portfolio.
// Edit this file to update text across the whole site.

export const profile = {
  name: 'Pavithra Muthusamy',
  role: 'Full Stack Developer',
  headline: 'Full Stack Developer crafting scalable applications.',
  bio: [
    "I build modern software with a focus on performance, scalability, and user experience. My goal is to create applications that are not only functional but also intuitive and impactful.",
    "Beyond coding, I'm committed to continuous learning. From exploring new technologies to learning Japanese, I enjoy challenging myself and growing both personally and professionally.",
  ],
  location: 'Perundurai, Erode, Tamil Nadu',
  lookingFor: ['Internship', 'Freelance Opportunities'],
  email: 'pavithram9200718@gmail.com',
  github: 'https://github.com/Pavithra-2007',
  linkedin: 'https://linkedin.com/in/pavithra-muthusamy',
  leetcode: 'https://leetcode.com/Pavithra-2007',
  resumeUrl: '/resume.pdf',
}

export const navItems = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'about', label: 'About', icon: 'User' },
  { id: 'skills', label: 'Skills', icon: 'Layers' },
  { id: 'qualifications', label: 'Qualifications', icon: 'GraduationCap' },
  { id: 'projects', label: 'Projects', icon: 'FolderGit2' },
  { id: 'certificates', label: 'Certificates', icon: 'Award' },
  { id: 'achievements', label: 'Achievements', icon: 'Trophy' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
]

const skillIcons = {
  Java: FaJava,
  C: TbLetterC,
  Python: FaPython,
  Dart: SiDart,
  JavaScript: SiJavascript,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  Flutter: SiFlutter,
  Oracle: Database,
  GitHub: FaGithub,
  Vercel: SiVercel,
  Canva: SiCanva,
};

export const skills = [
  { name: "Java", icon: skillIcons.Java, color: "#f89820" },
  { name: "C", icon: skillIcons.C, color: "#00599C" },
  { name: "Python", icon: skillIcons.Python, color: "#3776AB" },
  { name: "Dart", icon: skillIcons.Dart, color: "#0175C2" },
  { name: "JavaScript", icon: skillIcons.JavaScript, color: "#F7DF1E" },
  { name: "HTML", icon: skillIcons.HTML, color: "#E34F26" },
  { name: "CSS", icon: skillIcons.CSS, color: "#1572B6" },
  { name: "React", icon: skillIcons.React, color: "#61DAFB" },
  { name: "Flutter", icon: skillIcons.Flutter, color: "#02569B" },
  { name: "Oracle", icon: skillIcons.Oracle, color: "#F80000" },
  { name: "GitHub", icon: skillIcons.GitHub, color: "#181717" },
  { name: "Vercel", icon: skillIcons.Vercel, color: "#000000" },
  { name: "Canva", icon: skillIcons.Canva, color: "#00C4CC" },
];

export const education = [
  {
    title: 'B.Tech, Information Technology',
    place: 'Kongu Engineering College',
    period: '2024 — 2028',
    detail: 'CGPA 8.69',
  },
  {
    title: 'Higher Secondary Education',
    place: 'PRG VN Matric Hr Sec School',
    period: '2024',
    detail: '91%',
  },
  {
    title: 'SSLC',
    place: 'PRG VN Matric Hr Sec School',
    period: '2022',
    detail: '92.8%',
  },
]

export const experience = [
  {
    title: 'Currently Looking for Internship',
    detail: 'Open to internship roles in full-stack or product engineering teams.',
  },
  {
    title: 'Interested in Freelancing',
    detail: 'Available for freelance web and app development projects.',
  },
  {
    title: 'Open to Collaboration',
    detail: 'Keen to contribute to open-source and team-based builds.',
  },
]

export const projects = [
  {
    title: 'AI Resume Analyzer',
    image:'/ai-resume.png',
    description:
      'A tool that reviews resumes against job descriptions and surfaces concrete, actionable feedback — helping applicants understand exactly where to improve.',
    stack: ['React', 'Python', 'AI/NLP'],
    github: 'https://github.com/Pavithra-2007',
    demo: 'https://resume-analyser-67srvytehvvpsttzjmkbzz.streamlit.app/',
  },
  {
    title: 'Visitors Management System',
    description:
      'A digital front-desk system for institutions to log, approve, and track visitor entries — replacing paper registers with a searchable, auditable record.',
    stack: ['React', 'JavaScript', 'Oracle'],
    github: 'https://github.com/Pavithra-2007',
    demo: '',
  },
  {
    title: 'Model ATM',
    image: '/atm.png',
    description:
      'A simulated ATM application demonstrating secure transaction flows, balance management, and PIN-based authentication logic.',
    stack: ['Java', 'OOP'],
    github: 'https://github.com/Pavithra-2007',
    demo: 'https://model-atm.vercel.app/',
  },
  {
    title: 'Age Calculator',
    description:
      'A small, precise utility that calculates exact age in years, months, and days from a given date of birth — built for clarity over complexity.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Pavithra-2007',
    demo: '',
  },
]

export const certificates = [
  { title: 'Certificate', issuer: 'Add issuer name', year: '2025' },
  { title: 'Certificate', issuer: 'Add issuer name', year: '2025' },
  { title: 'Certificate', issuer: 'Add issuer name', year: '2024' },
  { title: 'Certificate', issuer: 'Add issuer name', year: '2024' },
]

export const achievements = [
  {
    year: '2024',
    title: 'Began B.Tech in Information Technology',
    detail: 'Started at Kongu Engineering College, building a foundation in core CS concepts.',
  },
  {
    year: '2024',
    title: 'First independent projects',
    detail: 'Built Model ATM and Age Calculator to apply core logic and language fundamentals.',
  },
  {
    year: '2025',
    title: 'Expanded into full-stack development',
    detail: 'Picked up React and modern JavaScript to build complete, end-to-end applications.',
  },
  {
    year: '2025',
    title: 'Started learning Japanese',
    detail: 'Began studying Japanese alongside coursework — proof that learning never stops.',
  },
  {
    year: 'Ahead',
    title: 'Internship & freelance work',
    detail: 'Actively seeking an internship and freelance opportunities to apply these skills in the field.',
  },
]
