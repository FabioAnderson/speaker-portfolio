
import React, { useState, useEffect, useRef } from 'react';
import { SOCIAL_LINKS } from './constants';
import { Header } from './components/Header';
import { BackToTopButton } from './components/BackToTopButton';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className = '', children }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start text-left px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-light-slate tracking-tight">
        Fabio Leite
      </h1>
      <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate tracking-tight">
        {t.hero.tagline}
      </h2>
      <p className="mt-6 text-lg text-slate max-w-xl">
        {t.hero.subline}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="px-8 py-3 border border-accent-blue text-accent-blue rounded-md font-medium hover:bg-accent-blue hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-50 text-center">
          {t.hero.bookMe}
        </a>
        <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-accent-blue text-white rounded-md font-medium hover:bg-opacity-80 transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-50 text-center">
          {t.hero.connect}
        </a>
      </div>
    </section>
  );
};

const SpeakerSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="speaker">
      <h2 className="text-4xl font-bold text-light-slate mb-12 text-center">{t.speaker.title}</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-slate text-lg">
          <p className="mb-6">
            {t.speaker.bio}
          </p>
          <div className="space-y-4">
            {t.speaker.talks.map((talk) => (
              <div key={talk.title} className="p-4 border-l-4 border-accent-blue bg-midnight-blue/50 rounded-r-lg">
                <h3 className="font-semibold text-light-slate">{talk.title}</h3>
                <p className="text-sm">{talk.event}, {talk.year} {talk.status && <span className="italic text-accent-blue/80">- {talk.status}</span>}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <img src="https://picsum.photos/seed/speaker1/600/400" alt="Fabio Leite speaking at a conference" className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy" referrerPolicy="no-referrer" />
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/speaker2/400/300" alt="Fabio Leite at a workshop" className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/speaker3/400/300" alt="Fabio Leite interacting with audience" className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const TopicsSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="topics">
      <h2 className="text-4xl font-bold text-light-slate mb-12 text-center">{t.topics.title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.topics.items.map((topic) => (
          <div key={topic} className="bg-slate/10 p-6 rounded-lg border border-slate/20 hover:border-accent-blue transition-colors duration-300 transform hover:-translate-y-1">
            <p className="text-lg font-medium text-light-slate text-center">{topic}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  const techStacks: Record<string, string[]> = {
    'CVC': ['Playwright', 'Cypress', 'CI/CD'],
    'DASA': ['Selenium', 'Robot Framework', 'Observability'],
    'Accenture': ['Playwright', 'CI/CD', 'Selenium'],
    'Thoughtworks': ['Cypress', 'Observability', 'CI/CD']
  };

  return (
    <Section id="experience">
      <h2 className="text-4xl font-bold text-light-slate mb-12 text-center">{t.experience.title}</h2>
      <div className="space-y-12">
        {t.experience.items.map((company) => (
          <div key={company.name} className="flex flex-col md:flex-row items-start gap-8 p-6 rounded-lg bg-slate/5">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white rounded-md flex items-center justify-center">
                <span className="text-midnight-blue font-bold text-lg">{company.name}</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-light-slate">{company.role}</h3>
              <p className="mt-2 text-slate">{company.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {techStacks[company.name]?.map(tech => (
                  <span key={tech} className="bg-accent-blue/20 text-accent-blue text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="skills">
      <h2 className="text-4xl font-bold text-light-slate mb-12 text-center">{t.skills.title}</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-light-slate mb-6 text-center md:text-left">{t.skills.hardTitle}</h3>
          <ul className="list-none space-y-3">
            {t.skills.hard.map(skill => (
              <li key={skill} className="flex items-center text-slate">
                <svg className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-light-slate mb-6 text-center md:text-left">{t.skills.softTitle}</h3>
          <ul className="list-none space-y-3">
            {t.skills.soft.map(skill => (
              <li key={skill} className="flex items-center text-slate">
                <svg className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="contact" className="text-center">
      <h2 className="text-4xl font-bold text-light-slate mb-4">{t.contact.title}</h2>
      <p className="text-xl text-slate max-w-2xl mx-auto mb-8">
        {t.contact.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-accent-blue text-white rounded-md font-medium hover:bg-opacity-80 transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-50 text-center">
          {t.contact.connect}
        </a>
        <a href={SOCIAL_LINKS.email} className="px-8 py-3 border border-accent-blue text-accent-blue rounded-md font-medium hover:bg-accent-blue hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-50 text-center">
          {t.contact.email}
        </a>
      </div>
    </Section>
  );
};

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const navItems = [
        { name: t.nav.home, href: '#hero' },
        { name: t.nav.speaker, href: '#speaker' },
        { name: t.nav.topics, href: '#topics' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <footer id="footer" className="bg-midnight-blue py-8 px-6 md:px-12 lg:px-24 border-t border-slate/20">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <div className="flex-1 mb-4 sm:mb-0">
                    <nav className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="text-slate hover:text-light-slate transition-colors duration-300">{item.name}</a>
                        ))}
                    </nav>
                </div>
                <div className="flex-1 text-center text-slate">
                    &copy; {new Date().getFullYear()} Fabio Leite
                </div>
                <div className="flex-1 flex justify-center sm:justify-end mt-4 sm:mt-0">
                    <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-light-slate transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};


function AppContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sectionIds = ['hero', 'speaker', 'topics', 'experience', 'skills', 'contact'];
    sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            sectionRefs.current[id] = el;
            observer.observe(el);
        }
    });

    return () => {
        Object.keys(sectionRefs.current).forEach(key => {
            const el = sectionRefs.current[key];
            if(el) {
                observer.unobserve(el);
            }
        });
    };
  }, []);

  return (
    <div className="text-slate font-sans selection:bg-accent-blue selection:text-white">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <SpeakerSection />
        <TopicsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
