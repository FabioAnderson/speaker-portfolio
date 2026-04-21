export type Language = 'en' | 'pt';

export const translations = {
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
  { 
    title: 'Building an AI-Powered Testing Tools Platform (Full-Day Workshop)', 
    event: "DSTB's Quality Beacon, Copenhagen, Denmark", 
    year: 2025 
  },
  { 
    title: 'Challenges in LLM Testing', 
    event: 'Minas Testing Conference, Belo Horizonte, Brazil', 
    year: 2025 
  },
  { 
    title: 'Introduction to Software Quality', 
    event: 'FATEC Zona Sul, São Paulo, Brazil', 
    year: 2025 
  },
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
        },
        {
          name: 'Accenture',
          role: 'Test Automation Specialist',
          impact: 'Led QA squads in SAFe environments, defined test strategies and governance, automated UI, mobile, and SAP tests, and collaborated with global teams to improve quality and delivery efficiency.',
        },
        {
          name: 'DASA',
          role: 'Senior QA Analyst',
          impact: 'Designed test strategies aligned with business goals, automated IVR, chatbot, API and web tests using JavaScript and Cypress, led UAT with stakeholders, and presented quality insights to support decision-making.',
        },
        {
          name: 'CVC',
          role: 'QA Analyst',
          impact: 'Developed production monitoring dashboards, automated front-end and API tests using Ruby and Capybara, and improved team efficiency through automation and tooling.',
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
  { 
    title: 'Construindo uma Plataforma de Ferramentas de Teste com IA (Workshop Full-Day)', 
    event: 'Quality Beacon da DSTB, Copenhague, Dinamarca', 
    year: 2025 
  },
  { 
    title: 'Desafios em Testes de LLM', 
    event: 'Minas Testing Conference, Belo Horizonte, Brasil', 
    year: 2025 
  },
  { 
    title: 'Introdução à Qualidade de Software', 
    event: 'FATEC Zona Sul, São Paulo, Brasil', 
    year: 2025 
  },
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