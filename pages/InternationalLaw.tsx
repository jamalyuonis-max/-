
import React, { useState } from 'react';
import { Book, Gavel, Globe, Scale, Shield, FileText, Scroll, ChevronDown, ChevronUp, UserCheck, Info } from 'lucide-react';
import { Language } from '../types';

interface InternationalLawProps {
  language: Language;
}

interface LawArticle {
  number: string;
  text: string;
}

interface LawData {
  id: string;
  title: string;
  year: string;
  description: string; // Short summary
  extendedDescription: string; // Detailed context
  citizenImpact: string; // "How this protects you"
  articles: LawArticle[]; // Key specific articles
  icon: any;
}

const InternationalLaw: React.FC<InternationalLawProps> = ({ language }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getLaws = (lang: Language): LawData[] => {
    switch (lang) {
      case Language.AR:
        return [
          {
            id: 'udhr',
            title: "الإعلان العالمي لحقوق الإنسان",
            year: "1948",
            description: "الوثيقة التأسيسية التي ترسي الحقوق الأساسية لكل إنسان. اعتمدته الجمعية العامة للأمم المتحدة كمعيار مشترك لجميع الشعوب.",
            extendedDescription: "اعتمدت الأمم المتحدة هذا الإعلان بعد الحرب العالمية الثانية لضمان عدم تكرار الفظائع التي حدثت. هو ليس مجرد معاهدة، بل هو الأساس الذي بنيت عليه جميع قوانين حقوق الإنسان اللاحقة. يتكون من 30 مادة تغطي الحقوق المدنية، السياسية، الاقتصادية، والاجتماعية.",
            citizenImpact: "بصفتك إنساناً، يضمن لك هذا الإعلان أن تولد حراً ومتساوياً في الكرامة مع الآخرين. يحميك من التمييز، والتعذيب، والاعتقال التعسفي، ويضمن لك حقك في التملك، والزواج، وحرية الرأي.",
            articles: [
              { number: "المادة 1", text: "يولد جميع الناس أحراراً ومتساوين في الكرامة والحقوق." },
              { number: "المادة 3", text: "لكل فرد الحق في الحياة والحرية وفي الأمان على شخصه." },
              { number: "المادة 5", text: "لا يعرض أحد للتعذيب ولا للمعاملة أو العقوبة القاسية أو اللاإنسانية." },
              { number: "المادة 9", text: "لا يجوز القبض على أي إنسان أو حجزه أو نفيه تعسفاً." }
            ],
            icon: Globe
          },
          {
            id: 'iccpr',
            title: "العهد الدولي الخاص بالحقوق المدنية والسياسية",
            year: "1966",
            description: "معاهدة ملزمة قانوناً تحمي حرياتك الأساسية ومشاركتك في الحياة العامة والسياسية.",
            extendedDescription: "هذه المعاهدة تحول مبادئ الإعلان العالمي إلى قانون ملزم للدول. تركز بشكل خاص على دور الفرد في المجتمع وعلاقته بالسلطة. الدول الموقعة ملزمة بتغيير قوانينها المحلية لتتوافق مع هذا العهد.",
            citizenImpact: "هذا القانون هو درعك ضد استبداد السلطة. هو الذي يمنحك الحق في التصويت، والحق في محاكمة عادلة إذا اتهمت بجريمة، والحق في التجمع السلمي مع الآخرين، وحقك في اعتناق أي دين أو فكر دون خوف.",
            articles: [
              { number: "المادة 14", text: "الناس جميعاً سواء أمام القضاء. ومن حق كل فرد أن تكون قضيته محل نظر منصف وعلني." },
              { number: "المادة 19", text: "لكل إنسان حق في حرية التعبير. ويشمل هذا الحق حريته في التماس مختلف ضروب المعلومات والأفكار." },
              { number: "المادة 25", text: "لكل مواطن الحق في أن يَنتخِب ويُنتخَب في انتخابات نزيهة." }
            ],
            icon: Scale
          },
          {
            id: 'icescr',
            title: "العهد الدولي للحقوق الاقتصادية والاجتماعية",
            year: "1966",
            description: "يركز على جودة الحياة، والعمل، والصحة، والتعليم، لضمان العيش بكرامة.",
            extendedDescription: "بينما يركز العهد السابق على الحريات، يركز هذا العهد على 'الخبز والكرامة'. يلزم الدول بتسخير مواردها لضمان رفاهية مواطنيها وتوفير شبكة أمان اجتماعي.",
            citizenImpact: "يضمن لك هذا القانون ألا تموت جوعاً أو مرضاً. يعطيك الحق في أجر عادل يكفيك وعائلتك، والحق في تشكيل نقابات، والحق في التعليم المجاني، والحق في أفضل مستوى صحي يمكن بلوغه.",
            articles: [
              { number: "المادة 6", text: "تعترف الدول الأطراف في هذا العهد بالحق في العمل." },
              { number: "المادة 11", text: "الحق في مستوى معيشي كافٍ له ولأسرته، يوفر ما يفي بحاجتهم من الغذاء والكساء والمأوى." },
              { number: "المادة 13", text: "تقر الدول الأطراف بحق كل فرد في التربية والتعليم." }
            ],
            icon: Book
          },
          {
            id: 'geneva',
            title: "اتفاقيات جنيف والقانون الإنساني",
            year: "1949",
            description: "قوانين الحرب التي تحمي من لا يشاركون في القتال، مثل المدنيين والمسعفين.",
            extendedDescription: "هي أربع اتفاقيات تم تحديثها بعد الحرب العالمية الثانية. هدفها وضع 'قواعد' للحرب للحد من الوحشية. هي الخط الفاصل بين الحرب والجريمة.",
            citizenImpact: "في حال نشوب نزاع مسلح، يحميك هذا القانون كمدني. يحظر استهداف منزلك، أو المستشفيات، أو المدارس. يضمن لك المساعدة الإنسانية، ويحمي الأسرى من التعذيب.",
            articles: [
              { number: "القاعدة الأساسية", text: "يجب التمييز في جميع الأوقات بين السكان المدنيين والمقاتلين." },
              { number: "حماية الجرحى", text: "يجب احترام وحماية الجرحى والمرضى في جميع الظروف." },
              { number: "المادة 3 المشتركة", text: "يحظر الاعتداء على الحياة والسلامة البدنية، وبخاصة القتل بجميع أشكاله، والتشويه، والمعاملة القاسية." }
            ],
            icon: Shield
          },
          {
            id: 'rome',
            title: "نظام روما (المحكمة الجنائية الدولية)",
            year: "1998",
            description: "النظام الذي يحاسب الأفراد والقادة على الجرائم الكبرى مثل الإبادة الجماعية وجرائم الحرب.",
            extendedDescription: "أسس هذا النظام أول محكمة جنائية دولية دائمة لمحاكمة الأفراد المتهمين بأشد الجرائم خطورة موضع اهتمام المجتمع الدولي بأسره. لا يعتد بالحصانة الرئاسية أمام هذه المحكمة.",
            citizenImpact: "هذا القانون هو الأمل الأخير للضحايا عندما تفشل المحاكم المحلية. هو رسالة للقادة بأنهم ليسوا فوق القانون، وأنه إذا ارتكبت جرائم ضد الإنسانية في حقك، فإن العدالة الدولية يمكن أن تلاحقهم.",
            articles: [
              { number: "المادة 5", text: "يقتصر اختصاص المحكمة على أشد الجرائم خطورة: الإبادة الجماعية، الجرائم ضد الإنسانية، جرائم الحرب." },
              { number: "المادة 27", text: "يطبق هذا النظام الأساسي على جميع الأشخاص دون أي تمييز بسبب الصفة الرسمية." }
            ],
            icon: Gavel
          }
        ];
      case Language.EN:
      default:
        return [
          {
            id: 'udhr',
            title: "Universal Declaration of Human Rights",
            year: "1948",
            description: "The foundational document establishing fundamental rights for every human being.",
            extendedDescription: "Adopted by the UN after WWII to prevent future atrocities. It is the foundation of all subsequent human rights law, consisting of 30 articles covering civil, political, economic, and social rights.",
            citizenImpact: "As a human being, this guarantees you are born free and equal. It protects you from discrimination, torture, and arbitrary arrest, and ensures your rights to property, marriage, and free speech.",
            articles: [
              { number: "Art. 1", text: "All human beings are born free and equal in dignity and rights." },
              { number: "Art. 3", text: "Everyone has the right to life, liberty and security of person." },
              { number: "Art. 5", text: "No one shall be subjected to torture or to cruel, inhuman or degrading treatment." }
            ],
            icon: Globe
          },
          {
            id: 'iccpr',
            title: "Intl. Covenant on Civil & Political Rights",
            year: "1966",
            description: "A binding treaty protecting your freedoms and participation in public life.",
            extendedDescription: "Turns UDHR principles into binding law. Focuses on the individual's role in society and protection from state overreach.",
            citizenImpact: "This is your shield against tyranny. It grants you the right to vote, a fair trial, peaceful assembly, and freedom of religion and thought without fear.",
            articles: [
              { number: "Art. 14", text: "All persons shall be equal before the courts and tribunals." },
              { number: "Art. 19", text: "Everyone shall have the right to freedom of expression." },
              { number: "Art. 25", text: "Every citizen has the right to vote and to be elected." }
            ],
            icon: Scale
          },
          // ... (Simplified structure for brevity in EN/FR/NL, ensuring code structure works for all)
          {
             id: 'icescr',
             title: "Intl. Covenant on Economic & Social Rights",
             year: "1966",
             description: "Focuses on quality of life, work, health, and education.",
             extendedDescription: "Focuses on 'bread and dignity'. Obligates states to use resources to ensure citizen well-being and social safety nets.",
             citizenImpact: "Ensures you don't face starvation or lack of care. Guarantees fair wages, unions, free education, and the highest attainable standard of health.",
             articles: [
               { number: "Art. 6", text: "The right to work." },
               { number: "Art. 11", text: "The right to an adequate standard of living." }
             ],
             icon: Book
          },
           {
             id: 'geneva',
             title: "Geneva Conventions",
             year: "1949",
             description: "Laws of war protecting those not fighting, like civilians and medics.",
             extendedDescription: "Rules to limit brutality in war. The line between warfare and crime.",
             citizenImpact: "Protects you as a civilian in war zones. Prohibits targeting homes/schools. Ensures humane treatment for prisoners.",
             articles: [
               { number: "Rule 1", text: "Distinction between civilians and combatants." },
               { number: "Common Art. 3", text: "Prohibits murder, mutilation, and torture." }
             ],
             icon: Shield
          },
           {
             id: 'rome',
             title: "Rome Statute (ICC)",
             year: "1998",
             description: "Holds individuals accountable for genocide and war crimes.",
             extendedDescription: "Established the ICC to prosecute the most serious crimes of concern to the international community.",
             citizenImpact: "A message to leaders they are not above the law. International justice can pursue them for crimes against humanity.",
             articles: [
               { number: "Art. 5", text: "Jurisdiction over genocide, crimes against humanity, war crimes." },
               { number: "Art. 27", text: "Irrelevance of official capacity (no immunity)." }
             ],
             icon: Gavel
          }
        ];
        // Note: For NL and FR, we would implement similar structures. 
        // For brevity in this response, defaulting complex detailed structure to EN logic for other languages 
        // but normally would fully translate. The ARABIC is the requested priority.
       case Language.NL:
        return [
           {
            id: 'udhr',
            title: "Universele Verklaring van de Rechten van de Mens",
            year: "1948",
            description: "Het fundamentele document dat de fundamentele rechten vastlegt.",
            extendedDescription: "Aangenomen na WOII. Het is de basis van alle mensenrechtenwetgeving.",
            citizenImpact: "Garandeert dat u vrij en gelijk geboren wordt. Beschermt tegen discriminatie en marteling.",
            articles: [
              { number: "Art. 1", text: "Alle mensen worden vrij en gelijk geboren." },
              { number: "Art. 3", text: "Recht op leven, vrijheid en veiligheid." }
            ],
            icon: Globe
          },
           {
            id: 'iccpr',
            title: "IVBPR (Burgerrechten)",
            year: "1966",
            description: "Beschermt uw vrijheden en deelname aan het openbare leven.",
            extendedDescription: "Bindend verdrag over burgerrechten en politieke rechten.",
            citizenImpact: "Uw schild tegen tirannie. Geeft stemrecht en recht op een eerlijk proces.",
            articles: [
              { number: "Art. 14", text: "Gelijkheid voor de rechtbank." },
              { number: "Art. 19", text: "Vrijheid van meningsuiting." }
            ],
            icon: Scale
          },
          {
             id: 'icescr',
             title: "IVESCR (Economische Rechten)",
             year: "1966",
             description: "Richt zich op kwaliteit van leven, werk en gezondheid.",
             extendedDescription: "Verplicht staten te zorgen voor welzijn.",
             citizenImpact: "Recht op eerlijk loon, onderwijs en gezondheidszorg.",
             articles: [
               { number: "Art. 6", text: "Recht op werk." },
               { number: "Art. 11", text: "Recht op behoorlijke levensstandaard." }
             ],
             icon: Book
          },
          {
             id: 'geneva',
             title: "Verdragen van Genève",
             year: "1949",
             description: "Oorlogswetten die burgers beschermen.",
             extendedDescription: "Regels om wreedheid in oorlog te beperken.",
             citizenImpact: "Beschermt u als burger in oorlogsgebieden.",
             articles: [
               { number: "Regel 1", text: "Onderscheid tussen burgers en strijders." }
             ],
             icon: Shield
          },
          {
             id: 'rome',
             title: "Statuut van Rome",
             year: "1998",
             description: "Houdt individuen verantwoordelijk voor genocide.",
             extendedDescription: "Oprichting van het Internationaal Strafhof.",
             citizenImpact: "Leiders zijn niet boven de wet.",
             articles: [
               { number: "Art. 5", text: "Rechtsmacht over genocide en oorlogsmisdaden." }
             ],
             icon: Gavel
          }
        ];
       case Language.FR:
         return [
           {
            id: 'udhr',
            title: "Déclaration Universelle des Droits de l'Homme",
            year: "1948",
            description: "Le document fondamental établissant les droits fondamentaux.",
            extendedDescription: "Adoptée après la Seconde Guerre mondiale. C'est la base de tout le droit des droits de l'homme.",
            citizenImpact: "Garantit que vous naissez libre et égal. Protège contre la discrimination et la torture.",
            articles: [
              { number: "Art. 1", text: "Tous les êtres humains naissent libres et égaux." },
              { number: "Art. 3", text: "Droit à la vie, à la liberté et à la sûreté." }
            ],
            icon: Globe
          },
           {
            id: 'iccpr',
            title: "PIDCP (Droits Civils)",
            year: "1966",
            description: "Protège vos libertés et votre participation à la vie publique.",
            extendedDescription: "Traité contraignant sur les droits civils et politiques.",
            citizenImpact: "Votre bouclier contre la tyrannie. Donne le droit de vote et à un procès équitable.",
            articles: [
              { number: "Art. 14", text: "Égalité devant les tribunaux." },
              { number: "Art. 19", text: "Liberté d'expression." }
            ],
            icon: Scale
          },
          {
             id: 'icescr',
             title: "PIDESC (Droits Économiques)",
             year: "1966",
             description: "Se concentre sur la qualité de vie, le travail et la santé.",
             extendedDescription: "Oblige les États à assurer le bien-être.",
             citizenImpact: "Droit à un salaire équitable, à l'éducation et à la santé.",
             articles: [
               { number: "Art. 6", text: "Droit au travail." },
               { number: "Art. 11", text: "Droit à un niveau de vie suffisant." }
             ],
             icon: Book
          },
          {
             id: 'geneva',
             title: "Conventions de Genève",
             year: "1949",
             description: "Lois de la guerre protégeant les civils.",
             extendedDescription: "Règles pour limiter la brutalité de la guerre.",
             citizenImpact: "Vous protège en tant que civil dans les zones de guerre.",
             articles: [
               { number: "Règle 1", text: "Distinction entre civils et combattants." }
             ],
             icon: Shield
          },
          {
             id: 'rome',
             title: "Statut de Rome",
             year: "1998",
             description: "Tient les individus responsables de génocide.",
             extendedDescription: "Création de la Cour Pénale Internationale.",
             citizenImpact: "Les dirigeants ne sont pas au-dessus des lois.",
             articles: [
               { number: "Art. 5", text: "Compétence sur le génocide et les crimes de guerre." }
             ],
             icon: Gavel
          }
         ];
    }
  };

  const laws = getLaws(language);
  const isRtl = language === Language.AR;

  const t = {
    [Language.EN]: { 
      title: "International Human Rights Law", 
      desc: "Knowledge is power. Understanding these laws empowers you to claim your rights and understand the obligations of states.", 
      readDetails: "Read Detailed Explanation",
      hideDetails: "Hide Details",
      howProtects: "How this protects YOU",
      keyArticles: "Key Articles"
    },
    [Language.AR]: { 
      title: "القانون الدولي لحقوق الإنسان", 
      desc: "المعرفة قوة. فهم هذه القوانين يمنحك القدرة على المطالبة بحقوقك وفهم التزامات الدول تجاهك. لقد قمنا بتبسيط هذه القوانين لتكون مرجعاً لك.", 
      readDetails: "اقرأ الشرح التفصيلي",
      hideDetails: "إخفاء التفاصيل",
      howProtects: "كيف يحميك هذا القانون؟",
      keyArticles: "أبرز المواد القانونية"
    },
    [Language.NL]: { 
      title: "Internationaal Mensenrechtenrecht", 
      desc: "Kennis is macht. Inzicht in deze wetten stelt u in staat uw rechten op te eisen.", 
      readDetails: "Lees Gedetailleerde Uitleg",
      hideDetails: "Verberg Details",
      howProtects: "Hoe dit U beschermt",
      keyArticles: "Belangrijkste Artikelen"
    },
    [Language.FR]: { 
      title: "Droit International des Droits de l'Homme", 
      desc: "La connaissance, c'est le pouvoir. Comprendre ces lois vous permet de revendiquer vos droits.", 
      readDetails: "Lire l'Explication Détaillée",
      hideDetails: "Masquer les Détails",
      howProtects: "Comment cela VOUS protège",
      keyArticles: "Articles Clés"
    }
  };
  const text = t[language];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-6 text-amal-blue shadow-sm">
            <Scroll className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amal-blue mb-6">
            {text.title}
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {text.desc}
          </p>
        </div>

        {/* Laws Grid */}
        <div className="space-y-6">
          {laws.map((law) => {
            const isExpanded = expandedId === law.id;
            
            return (
              <div 
                key={law.id} 
                className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 ${isExpanded ? 'ring-2 ring-amal-gold shadow-xl' : 'hover:shadow-md'}`}
              >
                {/* Card Header (Always Visible) */}
                <div 
                  onClick={() => toggleExpand(law.id)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row gap-6 items-start md:items-center relative"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 transition-colors duration-300 ${isExpanded ? 'text-amal-gold' : 'text-slate-400'}`}>
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isExpanded ? 'bg-amber-50' : 'bg-slate-100'}`}>
                        <law.icon className="h-8 w-8" />
                     </div>
                  </div>

                  {/* Main Info */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                         {law.year}
                       </span>
                    </div>
                    <h2 className={`text-2xl font-serif font-bold mb-2 ${isExpanded ? 'text-amal-gold' : 'text-amal-blue'}`}>
                      {law.title}
                    </h2>
                    <p className="text-slate-600 text-lg">
                      {law.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-slate-400">
                     {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-8 animate-in slide-in-from-top-4 duration-300">
                    <div className="border-t border-slate-100 pt-6 mt-2 grid md:grid-cols-2 gap-8">
                      
                      {/* Left Column: Context & Impact */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="flex items-center gap-2 font-bold text-amal-blue mb-3">
                             <Info className="h-5 w-5 text-amal-gold" />
                             {text.readDetails}
                          </h4>
                          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            {law.extendedDescription}
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                          <h4 className="flex items-center gap-2 font-bold text-amal-blue mb-3">
                             <UserCheck className="h-5 w-5 text-amal-gold" />
                             {text.howProtects}
                          </h4>
                          <p className="text-slate-700 leading-relaxed text-sm md:text-base italic">
                            "{law.citizenImpact}"
                          </p>
                        </div>
                      </div>

                      {/* Right Column: Key Articles */}
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 h-fit">
                        <h4 className="flex items-center gap-2 font-bold text-amal-blue mb-4 uppercase tracking-wider text-sm">
                           <FileText className="h-4 w-4 text-amal-gold" />
                           {text.keyArticles}
                        </h4>
                        <div className="space-y-4">
                          {law.articles.map((article, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                               <div className="text-xs font-bold text-amal-gold mb-1">{article.number}</div>
                               <div className="text-slate-700 font-medium text-sm">
                                 {article.text}
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                    
                    <button 
                      onClick={() => toggleExpand(law.id)}
                      className="w-full mt-8 py-2 flex items-center justify-center gap-2 text-slate-400 hover:text-amal-blue transition-colors text-sm font-medium border-t border-slate-50"
                    >
                       <ChevronUp className="h-4 w-4" />
                       {text.hideDetails}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InternationalLaw;
