
// Import all required types for the constants defined below
import { Project, Service, Technology, Audience } from './types';

export const PHILOSOPHY = [
  {
    title: 'Design Thinking First',
    description: 'Every build starts with empathy, mapping real user needs before a line of code is written.'
  },
  {
    title: 'Agent-Native by Default',
    description: 'Our products are not AI add-ons; they are intelligence-first, designed for adaptability.'
  },
  {
    title: 'Rapid Evolution',
    description: 'Our products work differently—they get smarter with every single interaction.'
  },
  {
    title: 'Rapid Prototyping',
    description: 'We ship testable MVPs in weeks, so you can validate fast and scale smart.'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Gattabara',
    category: 'Intelligence Engine',
    description: 'Next-gen cognitive architecture.',
    imageUrl: '',
    brief: 'A proprietary intelligence engine designed for complex pattern recognition and autonomous decision making. It serves as the core reasoning layer for high-stakes industrial applications.',
    implementation: 'Built with a custom neural orchestration layer and agentic workflows, we implemented a system that bridges raw data with actionable cognitive insights.',
    technologies: ['Gemini', 'Python', 'Rust', 'PyTorch']
  },
  {
    title: 'Job Inventory',
    category: 'Enterprise Asset',
    description: 'Autonomous resource management.',
    imageUrl: '',
    brief: 'A comprehensive tool for the management and analysis of the most important processes at the agency. The system makes it possible to manage projects from the side of revenues and costs.',
    implementation: 'So as to answer our own internal brief, we have created a web application that learns organizational needs and maps skills to requirements in real-time.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Docker']
  },
  {
    title: 'Yaavarea',
    category: 'Consumer Intelligence',
    description: 'Personalized digital extension.',
    imageUrl: '',
    brief: 'An interface that adapts to individual user behavior, creating a unique digital extension of the self through localized intelligence.',
    implementation: 'Utilizes local-first intelligence and privacy-preserving data processing. It allows users to interact with their data in a conversational, intent-driven manner.',
    technologies: ['React', 'TypeScript', 'Gemini', 'Node.js']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Cognitive Strategy',
    description: 'Mapping your business logic into a cohesive agent-first roadmap for digital transformation.'
  },
  {
    id: 's2',
    title: 'Agent Architecture',
    description: 'Designing modular, multi-agent systems for complex business process automation and reasoning.'
  },
  {
    id: 's3',
    title: 'Intelligence-First UX',
    description: 'Building interfaces that anticipate user needs through generative patterns and intent recognition.'
  },
  {
    id: 's4',
    title: 'Rapid Prototyping',
    description: 'Accelerating from zero to an intelligent, testable MVP in record time for market validation.'
  }
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'Gemini', icon: 'G' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'React', icon: 'R' },
  { name: 'Node.js', icon: 'N' },
  { name: 'Python', icon: 'Py' },
  { name: 'Rust', icon: 'Ru' },
  { name: 'PyTorch', icon: 'Pt' },
  { name: 'Docker', icon: 'D' }
];

export const AUDIENCE: Audience[] = [
  {
    icon: '🧠',
    title: 'Visionaries',
    description: 'Founders building the next generation of intelligent platforms and revolutionary tools.'
  },
  {
    icon: '🏢',
    title: 'Enterprises',
    description: 'Organizations scaling cognitive labor through sophisticated agentic systems and deep RAG.'
  },
  {
    icon: '⚡',
    title: 'Innovators',
    description: 'Teams looking to transform legacy workflows into adaptive and autonomous digital experiences.'
  }
];
