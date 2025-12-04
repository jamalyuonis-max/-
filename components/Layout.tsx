
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopLangRef.current && !desktopLangRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
      if (mobileLangRef.current && !mobileLangRef.current.contains(event.target as Node)) {
        setIsMobileLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: Language.EN, label: 'English', native: 'English' },
    { code: Language.AR, label: 'Arabic', native: 'العربية' },
    { code: Language.NL, label: 'Dutch', native: 'Nederlands' },
    { code: Language.FR, label: 'French', native: 'Français' },
  ];

  const currentLang = languages.find(l => l.code === language);

  const t = {
    [Language.EN]: {
      home: 'Home', about: 'About', issues: 'Issues', intlLaw: 'Intl. Law', news: 'News', contact: 'Contact',
      title: 'Amal Center',
      footerDesc: 'Dedicated to promoting human rights, providing legal aid, and fostering a just society for all.',
      quickLinks: 'Quick Links', contactUs: 'Contact', rights: 'All rights reserved.',
      ourWork: 'Our Work', reports: 'Reports'
    },
    [Language.AR]: {
      home: 'الرئيسية', about: 'من نحن', issues: 'قضايا', intlLaw: 'القانون الدولي', news: 'أخبار', contact: 'اتصل بنا',
      title: 'مركز أمل',
      footerDesc: 'مكرسون لتعزيز حقوق الإنسان، وتوفير المساعدة القانونية، وتعزيز مجتمع عادل للجميع.',
      quickLinks: 'روابط سريعة', contactUs: 'اتصل بنا', rights: 'جميع الحقوق محفوظة.',
      ourWork: 'أعمالنا', reports: 'التقارير'
    },
    [Language.NL]: {
      home: 'Startpagina', about: 'Over ons', issues: 'Kwesties', intlLaw: 'Int. Recht', news: 'Nieuws', contact: 'Contact',
      title: 'Amal Centrum',
      footerDesc: 'Toegewijd aan het bevorderen van mensenrechten, het bieden van juridische hulp en het bevorderen van een rechtvaardige samenleving voor iedereen.',
      quickLinks: 'Snelle Links', contactUs: 'Contact', rights: 'Alle rechten voorbehouden.',
      ourWork: 'Ons Werk', reports: 'Rapporten'
    },
    [Language.FR]: {
      home: 'Accueil', about: 'À propos', issues: 'Dossiers', intlLaw: 'Droit Intl.', news: 'Actualités', contact: 'Contact',
      title: 'Centre Amal',
      footerDesc: 'Dédié à la promotion des droits de l\'homme, à l\'aide juridique et à la promotion d\'une société juste pour tous.',
      quickLinks: 'Liens Rapides', contactUs: 'Contact', rights: 'Tous droits réservés.',
      ourWork: 'Notre Travail', reports: 'Rapports'
    }
  };

  const text = t[language];

  const navLinks = [
    { name: text.home, path: '/' },
    { name: text.about, path: '/about' },
    { name: text.issues, path: '/issues' },
    { name: text.intlLaw, path: '/international-law' },
    { name: text.news, path: '/news' },
    { name: text.contact, path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLangSelect = (code: Language) => {
    setLanguage(code);
    setIsLangDropdownOpen(false);
    setIsMobileLangOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${language === Language.AR ? 'font-sans' : ''}`} dir={language === Language.AR ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-amal-blue text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="logo.png" 
                alt="Amal Center Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <Link to="/" className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                {text.title}
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-amal-gold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Desktop Language Dropdown */}
              <div className="relative ml-4 rtl:mr-4 rtl:ml-0" ref={desktopLangRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-slate-800"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{currentLang?.native}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <div 
                  className={`absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 py-1 z-50 transform transition-all duration-200 origin-top ${
                    isLangDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  } ${language === Language.AR ? 'left-0' : 'right-0'}`}
                >
                  {languages.map((langItem) => (
                    <button
                      key={langItem.code}
                      onClick={() => handleLangSelect(langItem.code)}
                      className="w-full text-left rtl:text-right px-4 py-3 text-sm flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 text-slate-700"
                    >
                      <span className={language === langItem.code ? 'font-bold text-amal-gold' : ''}>
                        {langItem.native}
                      </span>
                      {language === langItem.code && <Check className="h-4 w-4 text-amal-gold" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Header Right Side */}
            <div className="lg:hidden flex items-center gap-4">
               {/* Mobile Language Dropdown */}
              <div className="relative" ref={mobileLangRef}>
                <button
                   onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                   className="flex items-center gap-1 text-slate-300 px-2 py-1 rounded hover:bg-slate-800"
                >
                   <span className="text-sm font-bold">{language}</span>
                   <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileLangOpen && (
                    <div 
                      className={`absolute top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-slate-100 py-1 z-50 ${language === Language.AR ? 'left-0' : 'right-0'}`}
                    >
                       {languages.map((langItem) => (
                        <button
                          key={langItem.code}
                          onClick={() => handleLangSelect(langItem.code)}
                          className="w-full text-left rtl:text-right px-4 py-3 text-sm flex items-center justify-between hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 text-slate-700"
                        >
                          <span className={language === langItem.code ? 'font-bold text-amal-gold' : ''}>
                            {langItem.native}
                          </span>
                          {language === langItem.code && <Check className="h-4 w-4 text-amal-gold" />}
                        </button>
                      ))}
                    </div>
                )}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-slate-900 text-amal-gold'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <img 
                src="logo.png" 
                alt="Amal Center Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="font-serif font-bold text-lg">
                {text.title}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              {text.footerDesc}
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">{text.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-amal-gold transition-colors">{text.about}</Link></li>
              <li><Link to="/issues" className="hover:text-amal-gold transition-colors">{text.ourWork}</Link></li>
              <li><Link to="/international-law" className="hover:text-amal-gold transition-colors">{text.intlLaw}</Link></li>
              <li><Link to="/news" className="hover:text-amal-gold transition-colors">{text.reports}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">{text.contactUs}</h3>
            <ul className="space-y-2 text-sm">
              <li>contact@amal-center.org</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Justice Ave, Civil City</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} {text.title}. {text.rights}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
