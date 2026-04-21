
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

interface HeaderProps {
    activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close menu on navigation
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'pt' : 'en');
    };

    const navItems = [
        { name: t.nav.home, href: '#hero' },
        { name: t.nav.speaker, href: '#speaker' },
        { name: t.nav.topics, href: '#topics' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-midnight-blue/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center py-4">
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-xl font-bold text-light-slate hover:text-accent-blue transition-colors">
                    FL
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a 
                            key={item.href} 
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                            className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.href.substring(1) ? 'text-accent-blue' : 'text-slate hover:text-light-slate'}`}>
                            {item.name}
                        </a>
                    ))}
                    
                    {/* Language Toggle */}
                    <button 
                        onClick={toggleLanguage}
                        className="flex items-center bg-accent-blue/10 border border-accent-blue/30 px-3 py-1 rounded-full text-xs font-bold text-light-slate hover:bg-accent-blue/20 transition-all duration-300"
                    >
                        <span className={language === 'en' ? 'text-accent-blue' : 'text-slate'}>EN</span>
                        <span className="mx-1 text-slate/50">|</span>
                        <span className={language === 'pt' ? 'text-accent-blue' : 'text-slate'}>PT</span>
                    </button>
                </div>

                {/* Mobile Menu Button + Language Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button 
                        onClick={toggleLanguage}
                        className="flex items-center bg-accent-blue/10 border border-accent-blue/30 px-2 py-1 rounded-full text-xs font-bold text-light-slate"
                    >
                        {language.toUpperCase()}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-6 pb-4 bg-midnight-blue/95 border-b border-slate/10">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                                className={`block text-center py-2 text-lg font-medium transition-colors duration-300 rounded-md ${activeSection === item.href.substring(1) ? 'bg-accent-blue text-white' : 'text-slate hover:bg-slate/20'}`}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};
