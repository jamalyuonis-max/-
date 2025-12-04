
import React, { useState, useEffect } from 'react';
import { Language, NewsItem } from '../types';

interface NewsProps {
  language: Language;
}

const News: React.FC<NewsProps> = ({ language }) => {
  const t = {
    [Language.EN]: { title: "News & Reports", readMore: "Read More" },
    [Language.AR]: { title: "الأخبار والتقارير", readMore: "اقرأ المزيد" },
    [Language.NL]: { title: "Nieuws & Rapporten", readMore: "Lees Meer" },
    [Language.FR]: { title: "Actualités & Rapports", readMore: "Lire la Suite" },
  };
  const text = t[language];

  const getCategories = (lang: Language) => {
    switch(lang) {
      case Language.AR: return ['الكل', 'تقارير', 'بيانات صحفية', 'فعاليات'];
      case Language.NL: return ['Alles', 'Rapporten', 'Persberichten', 'Evenementen'];
      case Language.FR: return ['Tout', 'Rapports', 'Communiqués', 'Événements'];
      case Language.EN: default: return ['All', 'Reports', 'Press Releases', 'Events'];
    }
  };

  const [categories, setCategories] = useState(getCategories(language));
  const [filter, setFilter] = useState(categories[0]);

  useEffect(() => {
    const newCats = getCategories(language);
    setCategories(newCats);
    setFilter(newCats[0]);
  }, [language]);

  const getNewsData = (lang: Language): NewsItem[] => {
    const isEn = lang === Language.EN;
    const isAr = lang === Language.AR;
    const isNl = lang === Language.NL;
    const isFr = lang === Language.FR;

    return [
      {
        id: '1',
        title: isAr ? "التقرير السنوي لحقوق الإنسان ٢٠٢٣" : isNl ? "Jaarlijks Mensenrechtenrapport 2023" : isFr ? "Rapport Annuel sur les Droits de l'Homme 2023" : "Annual Human Rights Report 2023",
        excerpt: isAr ? "مراجعتنا الشاملة للتطورات الرئيسية هذا العام..." : isNl ? "Onze uitgebreide evaluatie van de belangrijkste ontwikkelingen van het jaar..." : isFr ? "Notre revue complète des développements majeurs de l'année..." : "Our comprehensive review of the year's major developments...",
        date: isAr ? "٢٤ أكتوبر ٢٠٢٣" : isNl ? "24 okt 2023" : isFr ? "24 oct. 2023" : "Oct 24, 2023",
        category: isAr ? "تقارير" : isNl ? "Rapporten" : isFr ? "Rapports" : "Reports",
        imageUrl: "https://picsum.photos/400/250?random=1"
      },
      {
        id: '2',
        title: isAr ? "مؤتمر صحفي: توسيع المساعدة القانونية" : isNl ? "Persconferentie: Uitbreiding Juridische Hulp" : isFr ? "Conférence de Presse: Extension de l'Aide Juridique" : "Press Conference: Legal Aid Expansion",
        excerpt: isAr ? "الإعلان عن مبادرتنا الجديدة لدعم الأسر ذات الدخل المنخفض..." : isNl ? "Aankondiging van ons nieuwe initiatief om gezinnen met lage inkomens te steunen..." : isFr ? "Annonce de notre nouvelle initiative pour soutenir les familles à faible revenu..." : "Announcing our new initiative to support low-income families...",
        date: isAr ? "١٥ سبتمبر ٢٠٢٣" : isNl ? "15 sep 2023" : isFr ? "15 sept. 2023" : "Sep 15, 2023",
        category: isAr ? "بيانات صحفية" : isNl ? "Persberichten" : isFr ? "Communiqués" : "Press Releases",
        imageUrl: "https://picsum.photos/400/250?random=2"
      },
      {
        id: '3',
        title: isAr ? "ورشة عمل: اعرف حقوقك" : isNl ? "Workshop: Ken Uw Rechten" : isFr ? "Atelier: Connaissez Vos Droits" : "Workshop: Know Your Rights",
        excerpt: isAr ? "ورشة عمل مجتمعية حضرها أكثر من ٢٠٠ مشارك..." : isNl ? "Een gemeenschapsworkshop bijgewoond door meer dan 200 deelnemers..." : isFr ? "Un atelier communautaire auquel ont participé plus de 200 personnes..." : "A community workshop attended by over 200 participants...",
        date: isAr ? "٠٢ أغسطس ٢٠٢٣" : isNl ? "02 aug 2023" : isFr ? "02 août 2023" : "Aug 02, 2023",
        category: isAr ? "فعاليات" : isNl ? "Evenementen" : isFr ? "Événements" : "Events",
        imageUrl: "https://picsum.photos/400/250?random=3"
      },
      {
        id: '4',
        title: isAr ? "بيان حول الاعتقالات الأخيرة" : isNl ? "Verklaring over Recente Arrestaties" : isFr ? "Déclaration sur les Arrestations Récentes" : "Statement on Recent Detentions",
        excerpt: isAr ? "يدين مركز أمل الموجة الأخيرة من الاعتقالات التعسفية..." : isNl ? "Amal Centrum veroordeelt de recente golf van willekeurige arrestaties..." : isFr ? "Le Centre Amal condamne la récente vague d'arrestations arbitraires..." : "Amal Center condemns the recent wave of arbitrary arrests...",
        date: isAr ? "٢٠ يوليو ٢٠٢٣" : isNl ? "20 jul 2023" : isFr ? "20 juil. 2023" : "Jul 20, 2023",
        category: isAr ? "بيانات صحفية" : isNl ? "Persberichten" : isFr ? "Communiqués" : "Press Releases",
        imageUrl: "https://picsum.photos/400/250?random=4"
      }
    ];
  };

  const newsData = getNewsData(language);
  const isRtl = language === Language.AR;

  const filteredNews = filter === categories[0]
    ? newsData 
    : newsData.filter(item => item.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-3xl font-serif font-bold text-amal-blue mb-4 md:mb-0">
          {text.title}
        </h1>
        
        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? 'bg-amal-blue text-white'
                  : 'bg-white border border-slate-300 text-slate-600 hover:border-amal-gold hover:text-amal-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((item) => (
          <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group">
            <div className="relative overflow-hidden h-48">
               <img 
                 src={item.imageUrl} 
                 alt={item.title} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
               />
               <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} bg-amal-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                 {item.category}
               </div>
            </div>
            <div className="p-6">
              <div className="text-slate-400 text-xs mb-2 flex items-center gap-1">
                 <span>{item.date}</span>
              </div>
              <h2 className="text-lg font-bold text-amal-blue mb-3 hover:text-amber-600 transition-colors cursor-pointer">
                {item.title}
              </h2>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              <button className="text-amal-gold font-medium text-sm hover:underline flex items-center gap-1">
                {text.readMore} <span className={isRtl ? "rotate-180" : ""}>&rarr;</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
