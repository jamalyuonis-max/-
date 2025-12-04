
import React, { useState } from 'react';
import { Play, CheckCircle, ArrowRight, Scale, FileText, Megaphone, Users } from 'lucide-react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface WhatWeDoProps {
  language: Language;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ language }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const t = {
    [Language.EN]: {
      title: "Our Programs & Strategies",
      subtitle: "We don't just talk about human rights; we actively defend them through three core operational pillars.",
      watchVideo: "Watch Explainer",
      closeVideo: "Close Video",
      impact: "Strategic Impact",
      getInvolved: "Support This Work",
      programs: [
        {
          id: 'legal-aid',
          title: "Strategic Legal Aid",
          icon: Scale,
          description: "We provide direct legal representation to victims of torture, arbitrary detention, and unfair trials.",
          details: "Our team of specialized lawyers works across civil and military courts to ensure that every individual receives a fair trial. We don't just defend innocent people; we challenge unjust laws and set legal precedents that protect thousands of others. We handle habeas corpus petitions, attend interrogation sessions, and document procedural violations.",
          goals: [
            "Secure the release of prisoners of conscience.",
            "Ensure fair trial standards are met.",
            "Challenge unconstitutional laws in supreme courts."
          ],
          image: "https://picsum.photos/800/450?random=101",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=2"
        },
        {
          id: 'documentation',
          title: "Monitoring & Documentation",
          icon: FileText,
          description: "Systematic collection and verification of evidence to build irrefutable cases against violators.",
          details: "Evidence is the cornerstone of justice. Our field researchers risk their safety to interview witnesses, collect forensic medical reports, and verify video footage of violations. We maintain a secure, encrypted database of human rights abuses that is used by the UN, international courts, and future truth commissions.",
          goals: [
            "Preserve evidence for future accountability.",
            "Produce credible reports for the international community.",
            "Prevent the falsification of history."
          ],
          image: "https://picsum.photos/800/450?random=102",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=3"
        },
        {
          id: 'advocacy',
          title: "Advocacy & Campaigning",
          icon: Megaphone,
          description: "Mobilizing public opinion and international pressure to force policy changes.",
          details: "We turn individual cases into public causes. Through press conferences, social media campaigns, and direct lobbying of foreign governments and UN bodies, we make it impossible for perpetrators to hide their crimes. We give a voice to the voiceless on the global stage.",
          goals: [
            "Raise global awareness of local crises.",
            "Pressure authorities to change repressive policies.",
            "Build international solidarity networks."
          ],
          image: "https://picsum.photos/800/450?random=103",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=4"
        }
      ]
    },
    [Language.AR]: {
      title: "برامجنا واستراتيجياتنا",
      subtitle: "نحن لا نتحدث فقط عن حقوق الإنسان؛ بل ندافع عنها بفعالية من خلال ثلاث ركائز تشغيلية أساسية.",
      watchVideo: "شاهد فيديو توضيحي",
      closeVideo: "إغلاق الفيديو",
      impact: "الأثر الاستراتيجي",
      getInvolved: "ادعم هذا العمل",
      programs: [
        {
          id: 'legal-aid',
          title: "المساعدة القانونية الاستراتيجية",
          icon: Scale,
          description: "نقدم تمثيلاً قانونياً مباشراً لضحايا التعذيب والاعتقال التعسفي والمحاكمات غير العادلة.",
          details: "يعمل فريقنا من المحامين المتخصصين في المحاكم المدنية والعسكرية لضمان حصول كل فرد على محاكمة عادلة. نحن لا ندافع فقط عن الأبرياء؛ بل نتحدى القوانين الجائرة ونرسي سوابق قانونية تحمي الآلاف من الآخرين. نتولى قضايا الإفراج، ونحضر جلسات التحقيق، ونوثق الانتهاكات الإجرائية.",
          goals: [
            "تأمين الإفراج عن سجناء الرأي.",
            "ضمان تلبية معايير المحاكمة العادلة.",
            "الطعن في القوانين غير الدستورية في المحاكم العليا."
          ],
          image: "https://picsum.photos/800/450?random=101",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=2"
        },
        {
          id: 'documentation',
          title: "الرصد والتوثيق",
          icon: FileText,
          description: "الجمع المنهجي للأدلة والتحقق منها لبناء قضايا دامغة ضد المنتهكين.",
          details: "الأدلة هي حجر الزاوية للعدالة. يخاطر باحثونا الميدانيون بسلامتهم لمقابلة الشهود، وجمع التقارير الطبية الشرعية، والتحقق من لقطات الفيديو للانتهاكات. نحتفظ بقاعدة بيانات آمنة ومشفرة لانتهاكات حقوق الإنسان تستخدمها الأمم المتحدة والمحاكم الدولية ولجان الحقيقة المستقبلية.",
          goals: [
            "حفظ الأدلة للمساءلة المستقبلية.",
            "إعداد تقارير موثوقة للمجتمع الدولي.",
            "منع تزييف الحقائق التاريخية."
          ],
          image: "https://picsum.photos/800/450?random=102",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=3"
        },
        {
          id: 'advocacy',
          title: "المناصرة والحملات",
          icon: Megaphone,
          description: "حشد الرأي العام والضغط الدولي لفرض تغييرات في السياسات.",
          details: "نحول القضايا الفردية إلى قضايا رأي عام. من خلال المؤتمرات الصحفية، وحملات وسائل التواصل الاجتماعي، والضغط المباشر على الحكومات الأجنبية وهيئات الأمم المتحدة، نجعل من المستحيل على الجناة إخفاء جرائمهم. نمنح صوتاً لمن لا صوت لهم على المسرح العالمي.",
          goals: [
            "رفع الوعي العالمي بالأزمات المحلية.",
            "الضغط على السلطات لتغيير السياسات القمعية.",
            "بناء شبكات تضامن دولية."
          ],
          image: "https://picsum.photos/800/450?random=103",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=4"
        }
      ]
    },
    [Language.NL]: {
      title: "Onze Programma's & Strategieën",
      subtitle: "We praten niet alleen over mensenrechten; we verdedigen ze actief via drie operationele pijlers.",
      watchVideo: "Bekijk Uitleg",
      closeVideo: "Sluit Video",
      impact: "Strategische Impact",
      getInvolved: "Steun Dit Werk",
      programs: [
        {
          id: 'legal-aid',
          title: "Strategische Juridische Hulp",
          icon: Scale,
          description: "Wij bieden directe juridische vertegenwoordiging aan slachtoffers van marteling en willekeurige detentie.",
          details: "Ons team van gespecialiseerde advocaten werkt in civiele en militaire rechtbanken. We verdedigen niet alleen onschuldige mensen; we vechten onrechtvaardige wetten aan en scheppen juridische precedenten die duizenden anderen beschermen.",
          goals: [
            "Vrijlating van gewetensgevangenen verzekeren.",
            "Zorgen voor eerlijke processtandaarden.",
            "Onconstitutionele wetten aanvechten."
          ],
          image: "https://picsum.photos/800/450?random=101",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=2"
        },
        {
          id: 'documentation',
          title: "Monitoring & Documentatie",
          icon: FileText,
          description: "Systematische verzameling en verificatie van bewijsmateriaal.",
          details: "Bewijs is de hoeksteen van gerechtigheid. Onze veldonderzoekers interviewen getuigen, verzamelen forensische rapporten en verifiëren videobeelden. We onderhouden een beveiligde database die wordt gebruikt door de VN en internationale rechtbanken.",
          goals: [
            "Bewijs bewaren voor toekomstige verantwoording.",
            "Betrouwbare rapporten produceren.",
            "Vervalsing van de geschiedenis voorkomen."
          ],
          image: "https://picsum.photos/800/450?random=102",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=3"
        },
        {
          id: 'advocacy',
          title: "Belangenbehartiging & Campagnes",
          icon: Megaphone,
          description: "Het mobiliseren van de publieke opinie en internationale druk.",
          details: "We veranderen individuele zaken in publieke doelen. Via persconferenties, sociale mediacampagnes en directe lobby bij buitenlandse regeringen maken we het daders onmogelijk hun misdaden te verbergen.",
          goals: [
            "Wereldwijd bewustzijn creëren.",
            "Druk uitoefenen voor beleidswijzigingen.",
            "Internationale solidariteitsnetwerken bouwen."
          ],
          image: "https://picsum.photos/800/450?random=103",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=4"
        }
      ]
    },
    [Language.FR]: {
      title: "Nos Programmes et Stratégies",
      subtitle: "Nous ne parlons pas seulement des droits de l'homme ; nous les défendons activement.",
      watchVideo: "Voir l'Explication",
      closeVideo: "Fermer la Vidéo",
      impact: "Impact Stratégique",
      getInvolved: "Soutenir ce Travail",
      programs: [
        {
          id: 'legal-aid',
          title: "Aide Juridique Stratégique",
          icon: Scale,
          description: "Nous fournissons une représentation juridique directe aux victimes de torture et de détention arbitraire.",
          details: "Notre équipe d'avocats spécialisés travaille pour garantir que chaque individu bénéficie d'un procès équitable. Nous contestons les lois injustes et créons des précédents juridiques qui protègent des milliers d'autres personnes.",
          goals: [
            "Obtenir la libération des prisonniers d'opinion.",
            "Garantir les normes de procès équitable.",
            "Contester les lois inconstitutionnelles."
          ],
          image: "https://picsum.photos/800/450?random=101",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=2"
        },
        {
          id: 'documentation',
          title: "Surveillance et Documentation",
          icon: FileText,
          description: "Collecte systématique et vérification des preuves.",
          details: "La preuve est la pierre angulaire de la justice. Nos chercheurs de terrain interviewent des témoins, collectent des rapports médico-légaux et vérifient des images vidéo. Nous maintenons une base de données sécurisée utilisée par l'ONU.",
          goals: [
            "Préserver les preuves pour la responsabilité future.",
            "Produire des rapports crédibles.",
            "Empêcher la falsification de l'histoire."
          ],
          image: "https://picsum.photos/800/450?random=102",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=3"
        },
        {
          id: 'advocacy',
          title: "Plaidoyer et Campagnes",
          icon: Megaphone,
          description: "Mobiliser l'opinion publique et la pression internationale.",
          details: "Nous transformons les cas individuels en causes publiques. Par des conférences de presse et du lobbying direct, nous rendons impossible pour les auteurs de cacher leurs crimes.",
          goals: [
            "Sensibiliser le monde aux crises locales.",
            "Faire pression pour changer les politiques.",
            "Construire des réseaux de solidarité."
          ],
          image: "https://picsum.photos/800/450?random=103",
          videoThumb: "https://picsum.photos/800/450?grayscale&blur=4"
        }
      ]
    }
  };

  const text = t[language];
  const isRtl = language === Language.AR;

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amal-blue mb-6">
            {text.title}
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {text.subtitle}
          </p>
        </div>

        {/* Programs List */}
        <div className="space-y-24">
          {text.programs.map((program, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={program.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                
                {/* Visual Side (Video/Image) */}
                <div className="w-full lg:w-1/2">
                   {activeVideo === program.id ? (
                     <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                           <p className="text-white text-lg font-medium animate-pulse">
                             {language === Language.AR ? 'تشغيل محاكاة الفيديو...' : 'Playing Video Simulation...'}
                           </p>
                        </div>
                        <button 
                          onClick={() => setActiveVideo(null)}
                          className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-colors"
                        >
                          {text.closeVideo}
                        </button>
                        {/* Simulate Video Player Interface */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                          <div className="h-full w-1/3 bg-amal-gold"></div>
                        </div>
                     </div>
                   ) : (
                     <div className="relative group cursor-pointer" onClick={() => setActiveVideo(program.id)}>
                        <img 
                          src={program.image} 
                          alt={program.title} 
                          className="w-full aspect-video object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors rounded-2xl flex items-center justify-center">
                           <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg">
                              <Play className="h-8 w-8 text-amal-gold ml-1" />
                           </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                           <span className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                              <Play className="h-4 w-4" /> {text.watchVideo}
                           </span>
                        </div>
                     </div>
                   )}
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-amal-blue">
                      <program.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-amal-blue">
                      {program.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-slate-700 font-medium mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {program.details}
                  </p>

                  <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-amal-blue mb-4 flex items-center gap-2">
                       <CheckCircle className="h-5 w-5 text-amal-gold" />
                       {text.impact}
                    </h3>
                    <ul className="space-y-3">
                      {program.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                           <span className="mt-1.5 w-1.5 h-1.5 bg-amal-gold rounded-full flex-shrink-0"></span>
                           {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                     <Link to="/contact" className="inline-flex items-center gap-2 text-amal-gold font-bold hover:text-amber-600 transition-colors">
                        {text.getInvolved} <ArrowRight className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
                     </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
