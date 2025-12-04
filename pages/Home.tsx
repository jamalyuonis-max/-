
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileText, Megaphone, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const t = {
    [Language.EN]: {
      headline: "Together for Justice",
      subheadline: "Empowering communities, defending rights, and building a future where dignity is universal.",
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
      readFullStory: "Read Full Story"
    },
    [Language.AR]: {
      headline: "معاً من أجل العدالة",
      subheadline: "تمكين المجتمعات، والدفاع عن الحقوق، وبناء مستقبل تكون فيه الكرامة عالمية.",
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
      readFullStory: "اقرأ القصة كاملة"
    },
    [Language.NL]: {
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
      readFullStory: "Lees het hele verhaal"
    },
    [Language.FR]: {
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
      readFullStory: "Lire l'histoire complète"
    }
  };

  const text = t[language];
  const isRtl = language === Language.AR;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="https://picsum.photos/1920/1080?grayscale&blur=2"
            alt="Human Rights Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            {text.headline}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {text.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/issues" className="px-8 py-3 bg-amal-gold hover:bg-amber-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg">
              {text.focusAreaBtn}
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-amal-blue text-white font-bold rounded-full transition-all">
              {text.getInvolvedBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* Key Issues Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amal-gold font-semibold uppercase tracking-wider text-sm">
              {text.whatWeDo}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amal-blue mt-2">
              {text.defendingDignity}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amal-gold/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amal-gold group-hover:text-white transition-colors">
                <Scale className="h-7 w-7 text-amal-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-amal-blue mb-3">
                {text.legalAid}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {text.legalAidDesc}
              </p>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 text-amal-gold font-medium hover:underline">
                {text.learnMore} 
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amal-gold/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amal-gold group-hover:text-white transition-colors">
                <FileText className="h-7 w-7 text-amal-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-amal-blue mb-3">
                {text.documentation}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {text.docDesc}
              </p>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 text-amal-gold font-medium hover:underline">
                {text.learnMore} 
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-amal-gold/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amal-gold group-hover:text-white transition-colors">
                <Megaphone className="h-7 w-7 text-amal-blue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-amal-blue mb-3">
                {text.advocacy}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {text.advocacyDesc}
              </p>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 text-amal-gold font-medium hover:underline">
                {text.learnMore} 
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Slice */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-amal-blue">
                {text.latestUpdates}
              </h2>
            </div>
            <Link to="/news" className="hidden md:inline-flex items-center px-4 py-2 border border-slate-300 rounded-full hover:bg-white hover:border-amal-gold text-slate-600 hover:text-amal-gold transition-colors text-sm font-medium">
              {text.viewAllNews}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article key={item} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={`https://picsum.photos/400/250?random=${item}`} alt="News" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-xs font-semibold text-amal-gold uppercase tracking-wide mb-2 flex items-center gap-2">
                    {text.reportLabel} <span className="text-slate-300">•</span> {isRtl ? '١٢ أكتوبر ٢٠٢٣' : 'Oct 12, 2023'}
                  </div>
                  <h3 className="text-lg font-bold text-amal-blue mb-3 hover:text-amal-gold transition-colors cursor-pointer">
                    {text.reportTitle}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {text.reportDesc}
                  </p>
                  <Link to="/news" className="text-sm font-semibold text-slate-800 hover:text-amal-gold">
                    {text.readFullStory}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/news" className="inline-block px-6 py-2 border border-slate-300 rounded-full bg-white text-slate-600 text-sm font-medium">
              {text.viewAllNews}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
