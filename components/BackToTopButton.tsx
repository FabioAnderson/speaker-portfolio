
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export const BackToTopButton: React.FC = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-accent-blue text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-50 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label={t.backToTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};
