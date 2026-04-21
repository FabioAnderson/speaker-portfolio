
const translations = {
  en: {
    nav: {
      home: 'Home',
      speaker: 'Speaker',
      topics: 'Topics',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Elevating Quality Through Intelligent Systems',
      subline: 'QA Lead | Generative AI Quality Engineer | International Speaker',
      bookMe: 'Book me',
      connect: 'Connect on LinkedIn',
    },
    speaker: {
      title: 'International Speaker',
      bio: 'Fabio Leite is a Quality Assurance Lead and Generative AI specialist with over a decade of experience building scalable, reliable, and intelligent testing solutions. He operates at the intersection of Quality Engineering, Artificial Intelligence, and product strategy, helping organizations design and validate modern AI-powered systems. His work includes architecting LLM evaluation frameworks using Python, Pytest, and Ragas, implementing end-to-end testing with Playwright, and defining QA strategies for GenAI applications. As an international speaker, he shares practical insights on testing LLMs, RAG pipelines, and AI-driven systems.',
      statusComingSoon: 'Coming soon',
      talks: [
        { title: 'Building an AI-Powered Testing Tools Platform (Full-Day Workshop)', event: "DSTB's Quality Beacon, Copenhagen, Denmark", year: 2025 },
        { title: 'Challenges in LLM Testing', event: 'Minas Testing Conference, Belo Horizonte, Brazil', year: 2025 },
        { title: 'Introduction to Software Quality', event: 'FATEC Zona Sul, São Paulo, Brazil', year: 2025 },
      ],
    },
    topics: {
      title: 'Topics I Cover',
      items: [
        'QA Strategy for Generative AI Systems',
        'Testing LLM Applications & RAG Pipelines',
        'AI-as-a-Judge and LLM Evaluation Frameworks',
        'Building Scalable and Observable AI Systems',
        'Evolving QA from Automation to Intelligence',
      ],
    },
    experience: {
      title: 'Trusted By / Experience',
      items: [
        {
          name: 'Thoughtworks',
          role: 'Senior QA Engineer / GenAI Quality Lead',
          impact: 'Led QA strategy for Generative AI applications, architected LLM evaluation frameworks using AI-as-a-Judge with Python, Pytest, and Ragas, implemented end-to-end testing with Playwright, defined KPIs and quality thresholds, and partnered with US clients (onsite) for strategic planning and roadmap alignment.',
          stack: ['Python', 'Pytest', 'Ragas', 'Playwright']
        },
        {
          name: 'Accenture',
          role: 'Test Automation Specialist',
          impact: 'Led QA squads in SAFe environments, defined test strategies and governance, automated UI, mobile, and SAP tests, and collaborated with global teams to improve quality and delivery efficiency.',
          stack: ['Java', 'Selenium', 'Appium', 'SAFe']
        },
        {
          name: 'DASA',
          role: 'Senior QA Analyst',
          impact: 'Designed test strategies aligned with business goals, automated IVR, chatbot, API and web tests using JavaScript and Cypress, led UAT with stakeholders, and presented quality insights to support decision-making.',
          stack: ['JavaScript', 'Cypress', 'API', 'UAT']
        },
        {
          name: 'CVC',
          role: 'QA Analyst',
          impact: 'Developed production monitoring dashboards, automated front-end and API tests using Ruby and Capybara, and improved team efficiency through automation and tooling.',
          stack: ['Ruby', 'Capybara', 'Monitoring']
        },
      ],
    },
    skills: {
      title: 'Core Competencies',
      hardTitle: 'Hard Skills',
      softTitle: 'Soft Skills',
      hard: [
        'Generative AI Testing (LLMs, RAG, AI-as-a-Judge, Ragas)',
        'QA Strategy & Quality Engineering',
        'Test Automation (Playwright, Cypress, Selenium, Appium)',
        'Python, Pytest, JavaScript, Ruby, C#',
        'Observability & Monitoring',
        'CI/CD & DevOps',
        'API & End-to-End Testing',
      ],
      soft: [
        'Leadership',
        'Strategic Thinking',
        'Stakeholder Management',
        'Communication',
        'Public Speaking',
        'Mentoring',
        'Problem Solving',
      ],
    },
    contact: {
      title: 'Get In Touch',
      description: 'Let’s collaborate on building trustworthy AI systems or discuss opportunities in QA leadership, Generative AI, and quality engineering.',
      connect: 'Connect on LinkedIn',
      email: 'Send an Email',
    },
    backToTop: 'Back to top',
  },
  pt: {
    nav: {
      home: 'Início',
      speaker: 'Palestrante',
      topics: 'Tópicos',
      experience: 'Experiência',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    hero: {
      tagline: 'Elevando a Qualidade com Sistemas Inteligentes',
      subline: 'QA Lead | Especialista em GenAI | Palestrante Internacional',
      bookMe: 'Contrate-me',
      connect: 'Conecte-se no LinkedIn',
    },
    speaker: {
      title: 'Palestrante Internacional',
      bio: 'Fabio Leite é um QA Lead e especialista em Inteligência Artificial Generativa com mais de uma década de experiência na construção de soluções de qualidade escaláveis, confiáveis e inteligentes. Atua na interseção entre Engenharia de Qualidade, IA e estratégia de produto, com experiência na criação de frameworks de avaliação de LLMs utilizando Python, Pytest e Ragas, além da implementação de testes end-to-end com Playwright e definição de estratégias de QA para aplicações de GenAI.',
      statusComingSoon: 'Em breve',
      talks: [
        { title: 'Construindo uma Plataforma de Ferramentas de Teste com IA (Workshop Full-Day)', event: 'Quality Beacon da DSTB, Copenhague, Dinamarca', year: 2025 },
        { title: 'Desafios em Testes de LLM', event: 'Minas Testing Conference, Belo Horizonte, Brasil', year: 2025 },
        { title: 'Introdução à Qualidade de Software', event: 'FATEC Zona Sul, São Paulo, Brasil', year: 2025 },
      ],
    },
    topics: {
      title: 'Tópicos que Abordo',
      items: [
        'Estratégia de QA para GenAI',
        'Testes de aplicações LLM e RAG',
        'AI-as-a-Judge e avaliação de LLMs',
        'Sistemas de IA escaláveis e observáveis',
        'Evolução do QA: da automação à inteligência',
      ],
    },
    experience: {
      title: 'Experiência / Confiam em mim',
      items: [
        {
          name: 'Thoughtworks',
          role: 'Senior QA Engineer / GenAI Quality Lead',
          impact: 'Liderou a estratégia de QA para aplicações de IA generativa, arquitetou frameworks de avaliação de LLMs com AI-as-a-Judge utilizando Python, Pytest e Ragas, implementou testes end-to-end com Playwright, definiu métricas e thresholds e atuou com clientes dos EUA (onsite) em planejamento estratégico.',
        },
        {
          name: 'Accenture',
          role: 'Especialista em Automação de Testes',
          impact: 'Liderou squads em ambiente SAFe, definiu estratégias e governança de testes, automatizou testes UI, mobile e SAP e colaborou com times globais.',
        },
        {
          name: 'DASA',
          role: 'QA Sênior',
          impact: 'Desenhou estratégias de teste alinhadas ao negócio, automatizou testes IVR, chatbot, API e web com JavaScript e Cypress, conduziu UAT e apresentou resultados para stakeholders.',
        },
        {
          name: 'CVC',
          role: 'QA Analyst',
          impact: 'Desenvolveu dashboards de monitoramento, automatizou testes front-end e API com Ruby e Capybara e aumentou a eficiência do time.',
        },
      ],
    },
    skills: {
      title: 'Competências Principais',
      hardTitle: 'Hard Skills',
      softTitle: 'Soft Skills',
      hard: [
        'Testes em IA Generativa (LLMs, RAG, AI-as-a-Judge, Ragas)',
        'Estratégia de QA',
        'Automação de Testes (Playwright, Cypress, Selenium, Appium)',
        'Python, Pytest, JavaScript, Ruby, C#',
        'Observabilidade e Monitoramento',
        'CI/CD e DevOps',
        'Testes de API e End-to-End',
      ],
      soft: [
        'Liderança',
        'Pensamento Estratégico',
        'Gestão de Stakeholders',
        'Comunicação',
        'Palestras',
        'Mentoria',
        'Resolução de Problemas',
      ],
    },
    contact: {
      title: 'Entre em Contato',
      description: 'Vamos colaborar na construção de sistemas de IA confiáveis ou discutir oportunidades em QA, GenAI e liderança em qualidade.',
      connect: 'Conecte-se no LinkedIn',
      email: 'Enviar um E-mail',
    },
    backToTop: 'Voltar ao topo',
  },
};

const SOCIAL_LINKS = {
  linkedIn: 'https://www.linkedin.com/in/fabio-anderson-leite/',
  email: 'mailto:fabio115.anderson@gmail.com',
};

let currentLanguage = localStorage.getItem('language') || 'en';

function updateContent() {
  const t = translations[currentLanguage];
  
  // Update Nav
  const navContainer = document.getElementById('nav-items');
  const mobileNavContainer = document.getElementById('mobile-nav-items');
  const navItems = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.speaker, href: '#speaker' },
    { name: t.nav.topics, href: '#topics' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const navHtml = navItems.map(item => `
    <a href="${item.href}" class="nav-link text-sm font-medium text-slate hover:text-light-slate transition-colors duration-300" data-href="${item.href}">
      ${item.name}
    </a>
  `).join('');
  navContainer.innerHTML = navHtml;

  const mobileNavHtml = navItems.map(item => `
    <a href="${item.href}" class="mobile-nav-link block text-center py-2 text-lg font-medium text-slate hover:bg-slate/20 transition-colors duration-300 rounded-md" data-href="${item.href}">
      ${item.name}
    </a>
  `).join('');
  mobileNavContainer.innerHTML = mobileNavHtml;

  // Update Hero
  document.getElementById('hero-tagline').textContent = t.hero.tagline;
  document.getElementById('hero-subline').textContent = t.hero.subline;
  document.getElementById('hero-book-me').textContent = t.hero.bookMe;
  document.getElementById('hero-connect').textContent = t.hero.connect;

  // Update Speaker
  document.getElementById('speaker-title').textContent = t.speaker.title;
  document.getElementById('speaker-bio').textContent = t.speaker.bio;
  
  const talksContainer = document.getElementById('speaker-talks');
  talksContainer.innerHTML = t.speaker.talks.map(talk => `
    <div class="p-4 border-l-4 border-accent-blue bg-midnight-blue/50 rounded-r-lg">
      <h3 class="font-semibold text-light-slate">${talk.title}</h3>
      <p class="text-sm text-slate">${talk.event}, ${talk.year} ${talk.status ? `<span class="italic text-accent-blue/80">- ${talk.status}</span>` : ''}</p>
    </div>
  `).join('');

  // Update Topics
  document.getElementById('topics-title').textContent = t.topics.title;
  const topicsContainer = document.getElementById('topics-grid');
  topicsContainer.innerHTML = t.topics.items.map(topic => `
    <div class="bg-slate/10 p-6 rounded-lg border border-slate/20 hover:border-accent-blue transition-colors duration-300 transform hover:-translate-y-1">
      <p class="text-lg font-medium text-light-slate text-center">${topic}</p>
    </div>
  `).join('');

  // Update Experience
  document.getElementById('experience-title').textContent = t.experience.title;
  const experienceContainer = document.getElementById('experience-list');
  
  // Use translations.en for stack if not present in translated items (preserving stack data)
  experienceContainer.innerHTML = t.experience.items.map((company, index) => {
    const enCompany = translations.en.experience.items.find(c => c.name === company.name) || {};
    const stack = company.stack || enCompany.stack || [];
    
    return `
      <div class="flex flex-col md:flex-row items-start gap-8 p-6 rounded-lg bg-slate/5">
        <div class="flex-shrink-0">
          <div class="w-24 h-24 bg-white rounded-md flex items-center justify-center">
            <span class="text-midnight-blue font-bold text-lg text-center px-1">${company.name}</span>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-light-slate">${company.role}</h3>
          <p class="mt-2 text-slate">${company.impact}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${stack.map(tech => `
              <span class="bg-accent-blue/20 text-accent-blue text-xs font-semibold px-3 py-1 rounded-full">${tech}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Update Skills
  document.getElementById('skills-title').textContent = t.skills.title;
  document.getElementById('hard-skills-title').textContent = t.skills.hardTitle;
  document.getElementById('soft-skills-title').textContent = t.skills.softTitle;
  
  const hardSkillsList = document.getElementById('hard-skills-list');
  hardSkillsList.innerHTML = t.skills.hard.map(skill => `
    <li class="flex items-center text-slate">
      <svg class="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ${skill}
    </li>
  `).join('');

  const softSkillsList = document.getElementById('soft-skills-list');
  softSkillsList.innerHTML = t.skills.soft.map(skill => `
    <li class="flex items-center text-slate">
      <svg class="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ${skill}
    </li>
  `).join('');

  // Update Contact
  document.getElementById('contact-title').textContent = t.contact.title;
  document.getElementById('contact-description').textContent = t.contact.description;
  document.getElementById('contact-connect').textContent = t.contact.connect;
  document.getElementById('contact-email').textContent = t.contact.email;

  // Update Footer
  const footerNav = document.getElementById('footer-nav');
  footerNav.innerHTML = navItems.map(item => `
    <a href="${item.href}" class="text-slate hover:text-light-slate transition-colors duration-300 text-sm">
      ${item.name}
    </a>
  `).join('');
  document.getElementById('copyright').innerHTML = `&copy; ${new Date().getFullYear()} Fabio Leite`;

  // Update Back to Top
  document.getElementById('back-to-top').setAttribute('aria-label', t.backToTop);

  // Update Language Indicators
  document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('text-accent-blue', currentLanguage === 'en'));
  document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('text-slate', currentLanguage !== 'en'));
  document.querySelectorAll('.lang-pt').forEach(el => el.classList.toggle('text-accent-blue', currentLanguage === 'pt'));
  document.querySelectorAll('.lang-pt').forEach(el => el.classList.toggle('text-slate', currentLanguage !== 'pt'));
  document.querySelectorAll('.lang-current').forEach(el => el.textContent = currentLanguage.toUpperCase());

  // Re-attach scroll events for smooth scroll
  attachSmoothScroll();
}

function attachSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu
        document.getElementById('mobile-menu').classList.add('hidden');
        isMenuOpen = false;
      }
    };
  });
}

// Logic
let isMenuOpen = false;
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  // Header scroll effect
  if (window.scrollY > 50) {
    header.classList.add('bg-midnight-blue/90', 'backdrop-blur-sm', 'shadow-lg');
    header.classList.remove('bg-transparent');
  } else if (!isMenuOpen) {
    header.classList.remove('bg-midnight-blue/90', 'backdrop-blur-sm', 'shadow-lg');
    header.classList.add('bg-transparent');
  }

  // Back to top visibility
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.add('opacity-100');
  } else {
    backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.remove('opacity-100');
  }

  // Active section highlighting
  highlightActiveSection();
});

function highlightActiveSection() {
  const sections = ['hero', 'speaker', 'topics', 'experience', 'skills', 'contact'];
  let current = '';

  sections.forEach(section => {
    const el = document.getElementById(section);
    const rect = el.getBoundingClientRect();
    if (rect.top <= 150) {
      current = section;
    }
  });

  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('data-href').substring(1);
    if (href === current) {
      link.classList.add('text-accent-blue');
      link.classList.remove('text-slate');
      if (link.classList.contains('mobile-nav-link')) {
        link.classList.add('bg-accent-blue', 'text-white');
        link.classList.remove('text-slate');
      }
    } else {
      link.classList.remove('text-accent-blue');
      link.classList.add('text-slate');
      if (link.classList.contains('mobile-nav-link')) {
        link.classList.remove('bg-accent-blue', 'text-white');
        link.classList.add('text-slate');
      }
    }
  });
}

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('hidden');
  if (isMenuOpen || window.scrollY > 50) {
    header.classList.add('bg-midnight-blue/90', 'backdrop-blur-sm');
  } else {
    header.classList.remove('bg-midnight-blue/90', 'backdrop-blur-sm');
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
  localStorage.setItem('language', currentLanguage);
  updateContent();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial Call
document.addEventListener('DOMContentLoaded', () => {
  updateContent();
  
  // Menu Button
  document.getElementById('menu-btn').onclick = toggleMenu;
  
  // Language Toggles
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.onclick = toggleLanguage;
  });
  
  // Scroll to Top
  backToTopBtn.onclick = scrollToTop;
});
