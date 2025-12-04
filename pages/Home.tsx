import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileText, Megaphone, ArrowRight, Users, Globe, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const t = {
    [Language.EN]: {
      title: "Amal Center",
      headline: "Together for Justice",
      subheadline: "Empowering communities, defending rights, and building a future where dignity is universal for everyone.",
      focusAreaBtn: "Our Focus Areas",
      getInvolvedBtn: "Get Involved",
      whatWeDo: "What We Do",
      defendingDignity: "Defending Human Dignity",
      legalAid: "Legal Aid",
      legalAidDesc: "Providing pro-bono legal representation to victims of human rights violations.",
      documentation: "Documentation",
      docDesc: "Researching and documenting abuses to hold perpetrators accountable.",
      advocacy: "Advocacy",
      advocacyDesc: "Campaigning for policy changes and raising public awareness globally.",
      learnMore: "Learn more",
      latestUpdates: "Latest Updates",
      viewAllNews: "View all news",
      reportLabel: "Report",
      reportTitle: "Annual Report on Civil Liberties 2023",
      reportDesc: "A comprehensive analysis of the state of civil liberties and human rights enforcement over the past year...",
      readFullStory: "Read Full Story",
      statCases: "Cases Won",
      statBeneficiaries: "Beneficiaries",
      statReports: "Reports Published"
    },
    [Language.AR]: {
      title: "مركز أمل",
      headline: "معاً من أجل العدالة",
      subheadline: "تمكين المجتمعات، والدفاع عن الحقوق، وبناء مستقبل تكون فيه الكرامة عالمية للجميع.",
      focusAreaBtn: "مجالات تركيزنا",
      getInvolvedBtn: "شارك معنا",
      whatWeDo: "ماذا نفعل",
      defendingDignity: "الدفاع عن الكرامة الإنسانية",
      legalAid: "المساعدة القانونية",
      legalAidDesc: "تقديم تمثيل قانوني مجاني لضحايا انتهاكات حقوق الإنسان.",
      documentation: "التوثيق",
      docDesc: "البحث وتوثيق الانتهاكات لمحاسبة الجناة.",
      advocacy: "المناصرة",
      advocacyDesc: "الحملات لتغيير السياسات وزيادة الوعي العام عالمياً.",
      learnMore: "اقرأ المزيد",
      latestUpdates: "آخر التحديثات",
      viewAllNews: "عرض كل الأخبار",
      reportLabel: "تقرير",
      reportTitle: "التقرير السنوي عن الحريات المدنية ٢٠٢٣",
      reportDesc: "تحليل شامل لحالة الحريات المدنية وإنفاذ حقوق الإنسان خلال العام الماضي...",
      readFullStory: "اقرأ القصة كاملة",
      statCases: "قضية رابحة",
      statBeneficiaries: "مستفيد",
      statReports: "تقرير منشور"
    },
    [Language.NL]: {
      title: "Amal Centrum",
      headline: "Samen voor Rechtvaardigheid",
      subheadline: "Gemeenschappen versterken, rechten verdedigen en bouwen aan een toekomst waarin waardigheid universeel is.",
      focusAreaBtn: "Onze Aandachtsgebieden",
      getInvolvedBtn: "Doe Mee",
      whatWeDo: "Wat We Doen",
      defendingDignity: "Verdediging van de Menselijke Waardigheid",
      legalAid: "Juridische Hulp",
      legalAidDesc: "Het bieden van pro-bono juridische vertegenwoordiging aan slachtoffers van mensenrechtenschendingen.",
      documentation: "Documentatie",
      docDesc: "Onderzoek en documentatie van misbruik om daders verantwoordelijk te houden.",
      advocacy: "Belangenbehartiging",
      advocacyDesc: "Campagne voeren voor beleidswijzigingen en wereldwijd bewustzijn creëren.",
      learnMore: "Meer weten",
      latestUpdates: "Laatste Updates",
      viewAllNews: "Bekijk al het nieuws",
      reportLabel: "Rapport",
      reportTitle: "Jaarverslag Burgerlijke Vrijheden 2023",
      reportDesc: "Een uitgebreide analyse van de staat van burgerlijke vrijheden en handhaving van mensenrechten in het afgelopen jaar...",
      readFullStory: "Lees het hele verhaal",
      statCases: "Zaken Gewonnen",
      statBeneficiaries: "Begunstigden",
      statReports: "Rapporten Gepubliceerd"
    },
    [Language.FR]: {
      title: "Centre Amal",
      headline: "Ensemble pour la Justice",
      subheadline: "Autonomiser les communautés, défendre les droits et construire un avenir où la dignité est universelle.",
      focusAreaBtn: "Nos Domaines d'Action",
      getInvolvedBtn: "Participer",
      whatWeDo: "Ce Que Nous Faisons",
      defendingDignity: "Défendre la Dignité Humaine",
      legalAid: "Aide Juridique",
      legalAidDesc: "Fournir une représentation juridique bénévole aux victimes de violations des droits de l'homme.",
      documentation: "Documentation",
      docDesc: "Rechercher et documenter les abus pour tenir les auteurs responsables.",
      advocacy: "Plaidoyer",
      advocacyDesc: "Faire campagne pour des changements politiques et sensibiliser le public mondialement.",
      learnMore: "En savoir plus",
      latestUpdates: "Dernières Mises à Jour",
      viewAllNews: "Voir toutes les actualités",
      reportLabel: "Rapport",
      reportTitle: "Rapport Annuel sur les Libertés Civiles 2023",
      reportDesc: "Une analyse complète de l'état des libertés civiles et de l'application des droits de l'homme au cours de l'année écoulée...",
      readFullStory: "Lire l'histoire complète",
      statCases: "Affaires Gagnées",
      statBeneficiaries: "Bénéficiaires",
      statReports: "Rapports Publiés"
    }
  };

  const text = t[language];
  const isRtl = language === Language.AR;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="https://picsum.photos/1920/1080?grayscale"
            alt="Human Rights Background"
            className="w-full h-full object-cover opacity-40 scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amal-blue via-amal-blue/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amal-blue/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-amal-gold/20 text-amal-gold border border-amal-gold/30 text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
               {text.title}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
              {text.headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md opacity-90">
              {text.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/issues" className="px-10 py-4 bg-amal-gold hover:bg-amber-600 text-white font-bold rounded-full transition-all transform hover:scale-105 hover:shadow-2xl shadow-lg border border-transparent">
                {text.focusAreaBtn}
              </Link>
              <Link to="/contact" className="px-10 py-4 bg-white/10 hover:bg-white text-white hover:text-amal-blue font-bold rounded-full transition-all backdrop-blur-sm border border-white/30 hover:border-white shadow-lg">
                {text.getInvolvedBtn}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-amal-blue dark:bg-slate-800 py-12 border-b border-slate-800 relative z-20 -mt-20 mx-4 md:mx-12 rounded-2xl shadow-2xl transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700/50 rtl:divide-x-reverse">
          <div className="p-2">
             <div className="text-4xl font-serif font-bold text-white mb-1">500+</div>
             <div className="text-sm text-amal-gold uppercase tracking-widest font-medium">{text.statCases}</div>
          </div>
          <div className="p-2">
             <div className="text-4xl font-serif font-bold text-white mb-1">12k</div>
             <div className="text-sm text-amal-gold uppercase tracking-widest font-medium">{text.statBeneficiaries}</div>
          </div>
          <div className="p-2">
             <div className="text-4xl font-serif font-bold text-white mb-1">150</div>
             <div className="text-sm text-amal-gold uppercase tracking-widest font-medium">{text.statReports}</div>
          </div>
           <div className="p-2">
             <div className="text-4xl font-serif font-bold text-white mb-1">25</div>
             <div className="text-sm text-amal-gold uppercase tracking-widest font-medium">Years Active</div>
          </div>
        </div>
      </section>

      {/* Key Issues Preview */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-amal-gold font-bold uppercase tracking-wider text-xs border-b-2 border-amal-gold pb-1 mb-3 inline-block">
              {text.whatWeDo}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amal-blue dark:text-white mt-4">
              {text.defendingDignity}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Scale className="h-24 w-24 text-amal-blue dark:text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Scale className="h-8 w-8 text-amal-blue dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amal-blue dark:text-white mb-4 font-serif">
                {text.legalAid}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {text.legalAidDesc}
              </p>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 text-amal-gold font-bold hover:gap-3 transition-all">
                {text.learnMore} 
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="h-24 w-24 text-amal-gold" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/40 dark:to-amber-900/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <FileText className="h-8 w-8 text-amal-gold" />
              </div>
              <h3 className="text-2xl font-bold text-amal-blue dark:text-white mb-4 font-serif">
                {text.documentation}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {text.docDesc}
              </p>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 text-amal-gold font-bold hover:gap-3 transition-all">
                {text.learnMore} 
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Megaphone className="h-24 w-24 text-amal-blue dark:text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <Megaphone className="h-8 w-8 text-amal-blue dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amal-blue dark:text-white mb-4 font-serif">
                {text.advocacy}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {text.advocacyDesc}
              </p>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 text-amal-gold font-bold hover:gap-3 transition-all">
                {text.learnMore} 
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quote / Break Section */}
      <section className="py-20 bg-slate-900 dark:bg-black relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amal-gold opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full filter blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <Globe className="h-12 w-12 text-amal-gold mx-auto mb-6 opacity-80" />
           <blockquote className="text-2xl md:text-4xl font-serif text-white leading-relaxed italic opacity-90 mb-8">
             "To deny people their human rights is to challenge their very humanity."
           </blockquote>
           <cite className="text-amal-gold font-bold tracking-widest uppercase text-sm not-italic">
             — Nelson Mandela
           </cite>
        </div>
      </section>

      {/* Latest News Slice */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-amal-gold font-bold uppercase tracking-wider text-xs mb-2 block">Media Center</span>
              <h2 className="text-4xl font-serif font-bold text-amal-blue dark:text-white">
                {text.latestUpdates}
              </h2>
            </div>
            <Link to="/news" className="group inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-800 hover:border-amal-gold text-slate-600 dark:text-slate-300 hover:text-amal-gold dark:hover:text-amal-gold transition-all text-sm font-bold bg-white dark:bg-slate-900 shadow-sm hover:shadow-md">
              {text.viewAllNews}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article key={item} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-slate-100 dark:border-slate-800">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={`https://picsum.photos/400/250?random=${item}`} 
                    alt="News" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <span className="text-white font-bold text-sm">Read Story</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-50 dark:bg-slate-800 text-amal-blue dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {text.reportLabel}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs font-medium">
                      {isRtl ? '١٢ أكتوبر ٢٠٢٣' : 'Oct 12, 2023'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-amal-blue dark:text-white mb-3 hover:text-amal-gold dark:hover:text-amal-gold transition-colors cursor-pointer leading-tight font-serif">
                    {text.reportTitle}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    {text.reportDesc}
                  </p>
                  <Link to="/news" className="inline-flex items-center text-sm font-bold text-amal-gold hover:text-amber-700 dark:hover:text-amber-500 transition-colors uppercase tracking-wide group-hover:underline decoration-2 underline-offset-4">
                    {text.readFullStory}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;