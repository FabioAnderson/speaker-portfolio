
import { NavItem, Talk, Company, Skills } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'Speaker', href: '#speaker' },
  { name: 'Topics', href: '#topics' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const TALKS_DATA: Talk[] = [
  { title: 'Modern QA for AI-Enabled Products', event: 'Minas Testing Conference, Brazil', year: 2025 },
  { title: 'From Automation to Intelligence: Testing LLM Apps', event: 'Minas Testing Conference, Brazil', year: 2025 },
  { title: 'Designing Reliable QA for Generative AI', event: 'Minas Testing Conference, Brazil', year: 2025 },
  { title: 'Quality Beacon', event: 'Danish Software Testing Board (Copenhagen)', year: 2025, status: 'Coming soon' },
];

export const TOPICS_DATA: string[] = [
  'QA Automation in the Age of AI',
  'Testing LLM Applications & RAG Pipelines',
  'Performance Engineering for Scalable AI Systems',
  'Building Quality Culture Through Intelligence',
  'From Automation to Insight: Evolving the QA Mindset',
];

export const EXPERIENCE_DATA: Company[] = [
  {
    name: 'CVC',
    logoUrl: '/assets/logos/company1.svg',
    role: 'QA Specialist',
    impact: 'Led the adoption of modern test automation frameworks, increasing test coverage by 40% and reducing regression testing time by 60%.',
    stack: ['Playwright', 'Cypress', 'CI/CD']
  },
  {
    name: 'DASA',
    logoUrl: '/assets/logos/company2.svg',
    role: 'Senior QA Engineer',
    impact: 'Architected and implemented performance testing strategies for high-traffic e-commerce platforms, ensuring 99.9% uptime during peak seasons.',
    stack: ['Selenium', 'Robot Framework', 'Observability']
  },
  {
    name: 'Accenture',
    logoUrl: '/assets/logos/company3.svg',
    role: 'Test Automation Consultant',
    impact: 'Consulted for Fortune 500 clients on QA process optimization and automation, driving significant improvements in software quality and delivery speed.',
    stack: ['Playwright', 'CI/CD', 'Selenium']
  },
  {
    name: 'Thoughtworks',
    logoUrl: '/assets/logos/company4.svg',
    role: 'Quality Analyst',
    impact: 'Pioneered early-stage integration of quality practices in agile development cycles, fostering a culture of shared responsibility for quality.',
    stack: ['Cypress', 'Observability', 'CI/CD']
  },
];

export const SKILLS_DATA: Skills = {
  hard: [
    'QA Automation',
    'Performance Testing',
    'AI Test Automation',
    'CI/CD',
    'JavaScript/TypeScript',
    'Python',
    'Cloud/Observability',
  ],
  soft: [
    'Communication',
    'Mentoring',
    'Stakeholder Alignment',
    'Public Speaking',
    'Analytical Thinking',
    'Problem Solving',
    'Leadership',
  ],
};

export const SOCIAL_LINKS = {
  linkedIn: 'https://www.linkedin.com/in/fabio-anderson-leite/',
  email: 'mailto:fabio.leite@example.com',
};
