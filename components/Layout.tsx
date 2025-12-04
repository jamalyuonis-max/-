import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Check, Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight, Sun, Moon } from 'lucide-react';
import { Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, language, setLanguage, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      home: 'Home', about: 'About Us', work: 'Our Strategies', issues: 'Issues', intlLaw: 'Intl. Law', news: 'News', contact: 'Contact Us',
      title: 'Amal Center',
      footerDesc: 'Dedicated to promoting human rights, providing legal aid, and fostering a just society for all.',
      quickLinks: 'Quick Links', contactUs: 'Contact Us', rights: 'All rights reserved.',
      ourWork: 'Our Work', reports: 'Reports',
      newsletter: 'Subscribe to our newsletter',
      newsletterBtn: 'Subscribe',
      privacy: 'Privacy Policy', terms: 'Terms of Service'
    },
    [Language.AR]: {
      home: 'الرئيسية', about: 'من نحن', work: 'استراتيجياتنا', issues: 'قضايا', intlLaw: 'القانون الدولي', news: 'أخبار', contact: 'اتصل بنا',
      title: 'مركز أمل',
      footerDesc: 'مكرسون لتعزيز حقوق الإنسان، وتوفير المساعدة القانونية، وتعزيز مجتمع عادل للجميع.',
      quickLinks: 'روابط سريعة', contactUs: 'اتصل بنا', rights: 'جميع الحقوق محفوظة.',
      ourWork: 'أعمالنا', reports: 'التقارير',
      newsletter: 'اشترك في نشرتنا الإخبارية',
      newsletterBtn: 'اشترك',
      privacy: 'سياسة الخصوصية', terms: 'شروط الخدمة'
    },
    [Language.NL]: {
      home: 'Startpagina', about: 'Over ons', work: 'Onze Strategieën', issues: 'Kwesties', intlLaw: 'Int. Recht', news: 'Nieuws', contact: 'Contact',
      title: 'Amal Centrum',
      footerDesc: 'Toegewijd aan het bevorderen van mensenrechten, het bieden van juridische hulp en het bevorderen van een rechtvaardige samenleving voor iedereen.',
      quickLinks: 'Snelle Links', contactUs: 'Contact', rights: 'Alle rechten voorbehouden.',
      ourWork: 'Ons Werk', reports: 'Rapporten',
      newsletter: 'Schrijf u in voor onze nieuwsbrief',
      newsletterBtn: 'Abonneer',
      privacy: 'Privacybeleid', terms: 'Servicevoorwaarden'
    },
    [Language.FR]: {
      home: 'Accueil', about: 'À propos', work: 'Nos Stratégies', issues: 'Dossiers', intlLaw: 'Droit Intl.', news: 'Actualités', contact: 'Contact',
      title: 'Centre Amal',
      footerDesc: 'Dédié à la promotion des droits de l\'homme, à l\'aide juridique et à la promotion d\'une société juste pour tous.',
      quickLinks: 'Liens Rapides', contactUs: 'Contact', rights: 'Tous droits réservés.',
      ourWork: 'Notre Travail', reports: 'Rapports',
      newsletter: 'Abonnez-vous à notre newsletter',
      newsletterBtn: 'S\'abonner',
      privacy: 'Politique de confidentialité', terms: 'Conditions d\'utilisation'
    }
  };

  const text = t[language];
  const isRtl = language === Language.AR;

  const navLinks = [
    { name: text.home, path: '/' },
    { name: text.about, path: '/about' },
    { name: text.work, path: '/what-we-do' },
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
    <div className={`min-h-screen flex flex-col ${language === Language.AR ? 'font-arabic' : 'font-sans'} dark:bg-slate-950 transition-colors duration-300`} dir={language === Language.AR ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'glass-nav shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-3 group">
              <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                 <img 
                    src="logo.png" 
                    alt="Amal Center Logo" 
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                 />
              </div>
              <Link to="/" className={`text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md ${language === Language.AR ? 'font-arabic' : 'font-serif'}`}>
                {text.title}
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-full text-base font-bold transition-all duration-300 relative group ${
                    isActive(link.path)
                      ? 'text-amal-gold bg-white/10'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-amal-gold transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full opacity-50'}`}></span>
                </Link>
              ))}
              
              <div className="h-6 w-px bg-slate-600 mx-3 rtl:mx-3"></div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-full transition-colors mr-2 rtl:mr-0 rtl:ml-2"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Desktop Language Dropdown */}
              <div className="relative" ref={desktopLangRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors px-3 py-2 rounded-full hover:bg-white/10 border border-transparent hover:border-slate-600"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-bold">{currentLang?.native}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <div 
                  className={`absolute top-full mt-3 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 py-2 z-50 transform transition-all duration-200 origin-top ${
                    isLangDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  } ${language === Language.AR ? 'left-0' : 'right-0'}`}
                >
                  {languages.map((langItem) => (
                    <button
                      key={langItem.code}
                      onClick={() => handleLangSelect(langItem.code)}
                      className="w-full text-left rtl:text-right px-4 py-3 text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-b border-slate-50 dark:border-slate-700 last:border-0 text-slate-700 dark:text-slate-200 font-bold"
                    >
                      <span className={language === langItem.code ? 'text-amal-gold' : ''}>
                        {langItem.native}
                      </span>
                      {language === langItem.code && <Check className="h-4 w-4 text-amal-gold" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Header Right Side */}
            <div className="lg:hidden flex items-center gap-2">
               {/* Mobile Theme Toggle */}
               <button
                  onClick={toggleTheme}
                  className="p-1.5 text-slate-200 hover:text-white rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-600"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

               {/* Mobile Language Dropdown */}
              <div className="relative" ref={mobileLangRef}>
                <button
                   onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                   className="flex items-center gap-1 text-slate-200 px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800/50 backdrop-blur-sm"
                >
                   <span className="text-sm font-bold">{language}</span>
                   <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileLangOpen && (
                    <div 
                      className={`absolute top-full mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 py-1 z-50 ${language === Language.AR ? 'left-0' : 'right-0'}`}
                    >
                       {languages.map((langItem) => (
                        <button
                          key={langItem.code}
                          onClick={() => handleLangSelect(langItem.code)}
                          className="w-full text-left rtl:text-right px-4 py-3 text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-b border-slate-50 dark:border-slate-700 last:border-0 text-slate-700 dark:text-slate-200 font-bold"
                        >
                          <span className={language === langItem.code ? 'text-amal-gold' : ''}>
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
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-amal-blue/95 backdrop-blur-xl border-t border-slate-700 animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all ${
                    isActive(link.path)
                      ? 'bg-amal-gold text-white shadow-md transform translate-x-2 rtl:-translate-x-2'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
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
      <footer className="bg-amal-dark text-slate-400 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <img 
                  src="logo.png" 
                  alt="Amal Center Logo" 
                  className="h-14 w-auto object-contain bg-white/5 rounded-lg p-1"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className={`font-bold text-xl tracking-tight ${language === Language.AR ? 'font-arabic' : 'font-serif'}`}>
                  {text.title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 font-medium">
                {text.footerDesc}
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amal-gold hover:text-white transition-all duration-300"><Facebook className="h-4 w-4" /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amal-gold hover:text-white transition-all duration-300"><Twitter className="h-4 w-4" /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amal-gold hover:text-white transition-all duration-300"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amal-gold hover:text-white transition-all duration-300"><Instagram className="h-4 w-4" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={`text-white font-bold mb-6 text-lg border-b border-slate-800 pb-2 inline-block ${language === Language.AR ? 'font-arabic' : 'font-serif'}`}>{text.quickLinks}</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link to="/about" className="hover:text-amal-gold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-amal-gold transition-colors"></span> {text.about}</Link></li>
                <li><Link to="/what-we-do" className="hover:text-amal-gold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-amal-gold transition-colors"></span> {text.ourWork}</Link></li>
                <li><Link to="/issues" className="hover:text-amal-gold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-amal-gold transition-colors"></span> {text.issues}</Link></li>
                <li><Link to="/international-law" className="hover:text-amal-gold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-amal-gold transition-colors"></span> {text.intlLaw}</Link></li>
                <li><Link to="/news" className="hover:text-amal-gold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-amal-gold transition-colors"></span> {text.reports}</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className={`text-white font-bold mb-6 text-lg border-b border-slate-800 pb-2 inline-block ${language === Language.AR ? 'font-arabic' : 'font-serif'}`}>{text.contactUs}</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amal-gold mt-0.5" />
                  <span>contact@amal-center.org</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-5 flex justify-center mt-0.5"><span className="text-amal-gold font-bold">T</span></div>
                   <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-5 flex justify-center mt-0.5"><span className="text-amal-gold font-bold">A</span></div>
                   <span>123 Justice Ave, Civil City<br/>CC 90210, Country</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
               <h3 className={`text-white font-bold mb-6 text-lg border-b border-slate-800 pb-2 inline-block ${language === Language.AR ? 'font-arabic' : 'font-serif'}`}>{text.newsletter}</h3>
               <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amal-gold text-white transition-colors placeholder-slate-500 font-medium"
                 />
                 <button className="w-full bg-amal-gold hover:bg-amber-600 text-white font-bold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                   {text.newsletterBtn} <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                 </button>
               </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} {text.title}. {text.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{text.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{text.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;