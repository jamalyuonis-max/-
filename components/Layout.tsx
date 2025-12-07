import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Check, Facebook, Twitter, Linkedin, Instagram, Heart, Sun, Moon, Youtube } from 'lucide-react';
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
  const [scrolled, setScrolled] = useState(false);
  
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const languages = [
    { code: Language.EN, label: 'English', native: 'English', flag: '🇺🇸' },
    { code: Language.AR, label: 'Arabic', native: 'العربية', flag: '🇱🇧' },
    { code: Language.NL, label: 'Dutch', native: 'Nederlands', flag: '🇳🇱' },
    { code: Language.FR, label: 'French', native: 'Français', flag: '🇫🇷' },
  ];

  const currentLang = languages.find(l => l.code === language);
  const isRtl = language === Language.AR;

  const t = {
    [Language.EN]: {
      title: 'Amal Center',
      nav: {
        home: 'Home',
        about: 'About Us',
        strategies: 'Strategies',
        issues: 'Issues',
        intlLaw: 'Intl Law',
        news: 'News',
        contact: 'Contact',
        donate: 'Donate',
        whatWeDo: 'What We Do',
        getInvolved: 'Get Involved',
        themes: 'Themes',
        story: 'Our Story',
        team: 'Our Team',
        press: 'Press',
        magazine: 'Magazine',
        actions: 'Online Actions',
        volunteer: 'Volunteer'
      },
      footer: {
        desc: 'Dedicated to promoting human rights, providing legal aid, and fostering a just society for all.',
        support: 'Support Us',
        follow: 'Follow Us',
        rights: 'All rights reserved.',
        privacy: 'Privacy',
        terms: 'Terms',
        donate: 'Donate',
        member: 'Become a Member',
        shop: 'Shop'
      }
    },
    [Language.AR]: {
      title: 'مركز أمل',
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        strategies: 'استراتيجياتنا',
        issues: 'القضايا',
        intlLaw: 'القانون الدولي',
        news: 'الأخبار',
        contact: 'اتصل بنا',
        donate: 'تبرع',
        whatWeDo: 'ماذا نفعل',
        getInvolved: 'شارك معنا',
        themes: 'القضايا',
        story: 'قصتنا',
        team: 'فريقنا',
        press: 'صحافة',
        magazine: 'المجلة',
        actions: 'تحركات عبر الإنترنت',
        volunteer: 'تطوع'
      },
      footer: {
        desc: 'مكرسون لتعزيز حقوق الإنسان، وتوفير المساعدة القانونية، وتعزيز مجتمع عادل للجميع.',
        support: 'ادعمنا',
        follow: 'تابعنا',
        rights: 'جميع الحقوق محفوظة.',
        privacy: 'الخصوصية',
        terms: 'الشروط',
        donate: 'تبرع',
        member: 'كن عضواً',
        shop: 'المتجر'
      }
    },
    [Language.NL]: {
      title: 'Amal Centrum',
      nav: {
        home: 'Home',
        about: 'Over ons',
        strategies: 'Werkwijze',
        issues: 'Thema’s',
        intlLaw: 'Int. Recht',
        news: 'Nieuws',
        contact: 'Contact',
        donate: 'Doneer',
        whatWeDo: 'Wat we doen',
        getInvolved: 'Doe mee',
        themes: 'Thema’s',
        story: 'Ons verhaal',
        team: 'Organisatie',
        press: 'Pers',
        magazine: 'Ons magazine',
        actions: 'Online acties',
        volunteer: 'Vrijwilligerswerk'
      },
      footer: {
        desc: 'Toegewijd aan het bevorderen van mensenrechten en juridische hulp.',
        support: 'Steun ons',
        follow: 'Volg ons',
        rights: 'Alle rechten voorbehouden.',
        privacy: 'Privacy',
        terms: 'Voorwaarden',
        donate: 'Doneer',
        member: 'Word lid',
        shop: 'Shop'
      }
    },
    [Language.FR]: {
      title: 'Centre Amal',
      nav: {
        home: 'Accueil',
        about: 'À propos',
        strategies: 'Stratégies',
        issues: 'Dossiers',
        intlLaw: 'Droit Int.',
        news: 'Actualités',
        contact: 'Contact',
        donate: 'Faire un don',
        whatWeDo: 'Ce que nous faisons',
        getInvolved: 'Agir',
        themes: 'Thèmes',
        story: 'Notre histoire',
        team: 'Notre équipe',
        press: 'Presse',
        magazine: 'Magazine',
        actions: 'Actions en ligne',
        volunteer: 'Bénévolat'
      },
      footer: {
        desc: 'Dédié à la promotion des droits de l\'homme et à l\'aide juridique.',
        support: 'Soutenez-nous',
        follow: 'Suivez-nous',
        rights: 'Tous droits réservés.',
        privacy: 'Confidentialité',
        terms: 'Conditions',
        donate: 'Faire un don',
        member: 'Devenir membre',
        shop: 'Boutique'
      }
    }
  };

  const text = t[language];

  const handleLangSelect = (code: Language) => {
    setLanguage(code);
    setIsLangDropdownOpen(false);
  };

  // Direct Horizontal Links
  const navLinks = [
    { name: text.nav.home, path: '/' },
    { name: text.nav.about, path: '/about' },
    { name: text.nav.strategies, path: '/what-we-do' },
    { name: text.nav.issues, path: '/issues' },
    { name: text.nav.intlLaw, path: '/international-law' },
    { name: text.nav.news, path: '/news' },
    { name: text.nav.contact, path: '/contact' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${language === Language.AR ? 'font-arabic' : 'font-sans'} dark:bg-slate-950 transition-colors duration-300`} dir={language === Language.AR ? 'rtl' : 'ltr'}>
      
      {/* Header Container */}
      <header className={`fixed w-full z-50 transition-all duration-300 shadow-lg ${scrolled ? 'shadow-xl' : ''}`}>
        
        {/* 1. TOP BAR (Utilities: Language, Socials, Theme) */}
        <div className="bg-slate-900 text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8 text-xs font-medium border-b border-slate-800 relative z-50">
           <div className="max-w-7xl mx-auto flex justify-between items-center">
              
              {/* Socials / Tagline (Hidden on tiny screens) */}
              <div className="hidden sm:flex items-center gap-4">
                 <span className="opacity-75 tracking-wide uppercase">For Human Rights & Justice</span>
                 <div className="h-3 w-px bg-slate-700"></div>
                 <div className="flex gap-3">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="h-3.5 w-3.5" /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube className="h-3.5 w-3.5" /></a>
                 </div>
              </div>

              {/* Right Side Utilities */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                 
                 {/* Theme Toggle */}
                 <button
                    onClick={toggleTheme}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    {theme === 'dark' ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                    <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                  </button>

                 <div className="h-3 w-px bg-slate-700"></div>

                 {/* LANGUAGE SELECTOR (Top Bar) */}
                 <div className="relative" ref={langRef}>
                    <button
                      onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                      className="flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider py-1"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>{currentLang?.native}</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    
                    {isLangDropdownOpen && (
                       <div className={`absolute top-full mt-1 w-40 bg-white dark:bg-slate-800 rounded shadow-xl py-1 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 ${isRtl ? 'left-0' : 'right-0'}`}>
                          {languages.map((langItem) => (
                            <button
                              key={langItem.code}
                              onClick={() => handleLangSelect(langItem.code)}
                              className="w-full text-left rtl:text-right px-4 py-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-700 flex justify-between items-center"
                            >
                              <span className="flex items-center gap-2">
                                <span className="text-base">{langItem.flag}</span> {langItem.native}
                              </span>
                              {language === langItem.code && <Check className="h-3 w-3 text-amal-gold" />}
                            </button>
                          ))}
                       </div>
                    )}
                 </div>
              </div>
           </div>
        </div>

        {/* 2. MAIN NAVBAR (Navigation, Logo, Donate) */}
        <nav 
          className={`bg-amal-blue/95 dark:bg-slate-900/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              
              {/* Logo Area */}
              <div className="flex-shrink-0 flex items-center group">
                <Link to="/" className="flex items-center gap-4">
                   <div className="bg-white p-2 rounded-full shadow-lg border-2 border-slate-100 dark:border-slate-800 group-hover:border-amal-gold transition-colors duration-300">
                      <img 
                          src="logo.png" 
                          alt="Amal Center Logo" 
                          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                   </div>
                  <div className="flex flex-col justify-center">
                    <span className={`text-xl sm:text-2xl font-black tracking-tight text-white uppercase leading-none ${language === Language.AR ? 'font-arabic' : 'font-sans'} group-hover:text-amal-gold transition-colors duration-300`}>
                      {text.title}
                    </span>
                    <span className="text-[10px] text-slate-300 uppercase tracking-[0.2em] hidden sm:block font-medium">Human Rights</span>
                  </div>
                </Link>
              </div>

              {/* Desktop Menu - Horizontal List */}
              <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
                {navLinks.map((item) => (
                   <Link
                      key={item.path}
                      to={item.path}
                      className={`px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${location.pathname === item.path ? 'text-amal-gold' : 'text-slate-200 hover:text-white hover:bg-white/10'} rounded-sm`}
                   >
                      {item.name}
                   </Link>
                ))}
                
                {/* Donate Button */}
                <Link 
                  to="/contact" 
                  className="ml-6 rtl:ml-0 rtl:mr-6 bg-amal-gold hover:bg-white hover:text-black text-white font-black uppercase tracking-wide px-6 py-2.5 rounded-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                >
                  {text.nav.donate} <Heart className="h-4 w-4 fill-current" />
                </Link>
              </div>

              {/* Mobile Header Right Side */}
              <div className="lg:hidden flex items-center gap-3">
                 <Link 
                  to="/contact" 
                  className="bg-amal-gold text-white font-bold px-3 py-1.5 rounded-sm text-xs uppercase flex items-center gap-1"
                >
                  <Heart className="h-3 w-3 fill-current" /> {text.footer.donate}
                </Link>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-1 hover:bg-white/10 rounded transition-colors"
                >
                  {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {isMenuOpen && (
            <div className="lg:hidden bg-amal-blue dark:bg-slate-900 border-t border-slate-800 absolute w-full left-0 top-full max-h-[85vh] overflow-y-auto shadow-2xl">
              <div className="p-2 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-bold text-white hover:bg-white/5 rounded-lg border-l-4 ${location.pathname === link.path ? 'border-amal-gold bg-white/5' : 'border-transparent'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content Spacer (to account for fixed header) */}
      <main className="flex-grow pt-[110px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
             {/* Col 1 */}
             <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-slate-700 pb-2 inline-block">{text.nav.about}</h4>
                <ul className="space-y-2 text-sm">
                   <li><Link to="/about" className="hover:text-amal-gold transition-colors">{text.nav.story}</Link></li>
                   <li><Link to="/about" className="hover:text-amal-gold transition-colors">{text.nav.team}</Link></li>
                   <li><Link to="/contact" className="hover:text-amal-gold transition-colors">{text.nav.contact}</Link></li>
                </ul>
             </div>
             {/* Col 2 */}
             <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-slate-700 pb-2 inline-block">{text.nav.whatWeDo}</h4>
                <ul className="space-y-2 text-sm">
                   <li><Link to="/issues" className="hover:text-amal-gold transition-colors">{text.nav.themes}</Link></li>
                   <li><Link to="/what-we-do" className="hover:text-amal-gold transition-colors">{text.nav.strategies}</Link></li>
                   <li><Link to="/international-law" className="hover:text-amal-gold transition-colors">{text.nav.intlLaw}</Link></li>
                </ul>
             </div>
             {/* Col 3 */}
             <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-slate-700 pb-2 inline-block">{text.nav.getInvolved}</h4>
                <ul className="space-y-2 text-sm">
                   <li><Link to="/contact" className="hover:text-amal-gold transition-colors">{text.nav.actions}</Link></li>
                   <li><Link to="/contact" className="hover:text-amal-gold transition-colors">{text.nav.volunteer}</Link></li>
                   <li><Link to="/contact" className="text-amal-gold font-bold hover:text-white transition-colors">{text.footer.donate}</Link></li>
                </ul>
             </div>
             {/* Col 4 */}
             <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-slate-700 pb-2 inline-block">{text.footer.follow}</h4>
                <div className="flex gap-4 mb-6">
                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-amal-gold hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                   <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-amal-gold hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-amal-gold hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-amal-gold hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                   <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-amal-gold hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
                </div>
                <div className="bg-slate-800 rounded-lg p-5 flex gap-4 items-center border border-slate-700">
                   <div className="bg-white p-2 rounded-full shrink-0">
                      <img src="logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                   </div>
                   <div>
                     <h5 className="font-bold text-white mb-1 uppercase tracking-tight">{text.title}</h5>
                     <p className="text-xs text-slate-400 leading-snug">{text.footer.desc}</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
            <p>&copy; {new Date().getFullYear()} {text.title}. {text.footer.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{text.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{text.footer.terms}</a>
              <a href="#" className="hover:text-white transition-colors">{text.footer.shop}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;