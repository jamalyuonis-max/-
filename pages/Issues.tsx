import React, { useState } from 'react';
import { Scale, FileText, Megaphone, Users, Shield, Globe, ArrowUpRight, ChevronDown, ChevronUp, Activity, AlertCircle } from 'lucide-react';
import { Language, Issue } from '../types';

interface IssuesProps {
  language: Language;
}

const Issues: React.FC<IssuesProps> = ({ language }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const getIssues = (lang: Language): Issue[] => {
    switch(lang) {
      case Language.AR:
        return [
          {
            id: '1', title: "الاعتقال التعسفي",
            description: "العمل على تأمين الإفراج عن سجناء الرأي وضمان محاكمات عادلة لجميع المعتقلين.",
            longDescription: "الاعتقال التعسفي هو ممارسة تقوم بها السلطات بحرمان الأفراد من حريتهم دون سند قانوني واضح أو إجراءات قضائية عادلة. يشمل ذلك الحبس الاحتياطي المطول دون محاكمة، والاعتقال بسبب الآراء السياسية أو النشاط الحقوقي. نحن نعمل على توثيق هذه الحالات، وتقديم العون القانوني للمعتقلين، والضغط الدولي للإفراج عنهم. نركز بشكل خاص على حالات 'الاختفاء القسري' حيث يتم احتجاز الشخص في مكان مجهول دون الاعتراف باعتقاله.",
            statValue: "١٥٠٠+",
            statLabel: "حالة موثقة",
            iconName: 'shield'
          },
          {
            id: '2', title: "حرية التعبير",
            description: "الدفاع عن حقوق الصحفيين والنشطاء والمواطنين في التعبير عن آرائهم دون خوف من الاضطهاد.",
            longDescription: "حرية التعبير هي حجر الزاوية في أي مجتمع ديمقراطي. نواجه تزايداً في القوانين المقيدة للنشر، وحجب المواقع الإلكترونية، وملاحقة المدونين والصحفيين قضائياً بتهم فضفاضة مثل 'نشر أخبار كاذبة'. تشمل جهودنا الدفاع القانوني عن الصحفيين، وحملات ضد الرقابة، وتدريب النشطاء على الأمن الرقمي لحماية هوياتهم ومصادرهم.",
            statValue: "٣٠٠",
            statLabel: "صحفي مدعوم",
            iconName: 'megaphone'
          },
          {
            id: '3', title: "حقوق المرأة",
            description: "المناصرة للمساواة بين الجنسين، ومحاربة العنف المنزلي، وتمكين المرأة في المجال القانوني.",
            longDescription: "تعاني النساء من تمييز منهجي في القوانين والممارسات الاجتماعية. نعمل على إصلاح قوانين الأحوال الشخصية المجحفة، وتغليظ العقوبات على العنف الأسري والتحرش. كما نقدم برامج دعم قانوني ونفسي للناجيات من العنف، ونعمل على تمكين المرأة اقتصادياً وسياسياً لضمان مشاركتها الفعالة في صنع القرار.",
            statValue: "٤٥%",
            statLabel: "زيادة في الدعم",
            iconName: 'users'
          },
          {
            id: '4', title: "حقوق اللاجئين",
            description: "تقديم المساعدة القانونية لطالبي اللجوء وضمان الحماية بموجب القانون الدولي.",
            longDescription: "يواجه اللاجئون تحديات هائلة تشمل خطر الترحيل القسري، وصعوبة الوصول إلى الخدمات الأساسية كالصحة والتعليم، والتمييز العنصري. نحن نراقب التزام الدولة باتفاقية 1951 الخاصة بوضع اللاجئين، ونقدم استشارات قانونية لتسوية أوضاعهم، ونضغط لضمان عدم إعادتهم قسرياً إلى مناطق النزاع (مبدأ عدم الإعادة القسرية).",
            statValue: "١٢٠٠",
            statLabel: "عائلة مستفيدة",
            iconName: 'globe'
          },
          {
            id: '5', title: "منع التعذيب",
            description: "توثيق حالات التعذيب والمطالبة بتنفيذ تشريعات مناهضة التعذيب.",
            longDescription: "التعذيب جريمة ضد الإنسانية لا تسقط بالتقادم. نعمل على توثيق شهادات الضحايا بدقة عالية لاستخدامها في الملاحقات القضائية المحلية والدولية. نطالب بإنشاء آليات وقائية وطنية لزيارة السجون ومراكز الاحتجاز بشكل مفاجئ، ونقدم الدعم لإعادة تأهيل ضحايا التعذيب طبياً ونفسياً.",
            statValue: "صفر",
            statLabel: "تسامح مع التعذيب",
            iconName: 'file-text'
          },
          {
            id: '6', title: "حقوق العمال",
            description: "حماية العمال من الاستغلال وضمان ظروف عمل آمنة وأجور عادلة.",
            longDescription: "في ظل الظروف الاقتصادية الصعبة، يتعرض العمال لانتهاكات تشمل الفصل التعسفي، وتدني الأجور، وغياب معايير السلامة المهنية. ندافع عن حق العمال في تشكيل النقابات المستقلة، ونراقب التزام الشركات بقوانين العمل، ونكافح عمالة الأطفال بجميع أشكالها.",
            statValue: "٥٠",
            statLabel: "قضية عمالية",
            iconName: 'scale'
          }
        ];
      case Language.NL:
        return [
          {
            id: '1', title: "Willekeurige Detentie",
            description: "Werken aan de vrijlating van gewetensgevangenen en zorgen voor eerlijke processen voor alle gedetineerden.",
            longDescription: "Willekeurige detentie is de praktijk waarbij autoriteiten individuen van hun vrijheid beroven zonder duidelijke wettelijke basis of eerlijk proces. Dit omvat langdurige voorlopige hechtenis zonder proces en arrestaties op basis van politieke opvattingen. Wij documenteren deze gevallen, bieden juridische bijstand en oefenen internationale druk uit voor hun vrijlating.",
            statValue: "1500+",
            statLabel: "Gedocumenteerde Zaken",
            iconName: 'shield'
          },
          {
            id: '2', title: "Vrijheid van Meningsuiting",
            description: "Verdediging van de rechten van journalisten, activisten en burgers om hun mening te uiten zonder angst voor vervolging.",
            longDescription: "Vrijheid van meningsuiting is de hoeksteen van elke democratie. We zien een toename in wetten die publicatie beperken en de vervolging van journalisten. Onze inspanningen omvatten juridische verdediging, campagnes tegen censuur en training in digitale veiligheid.",
            statValue: "300",
            statLabel: "Journalisten Gesteund",
            iconName: 'megaphone'
          },
          {
            id: '3', title: "Vrouwenrechten",
            description: "Opkomen voor gendergelijkheid, huiselijk geweld bestrijden en vrouwen in de juridische sfeer versterken.",
            longDescription: "Vrouwen ervaren systemische discriminatie. We werken aan de hervorming van oneerlijke wetten inzake persoonlijke status en strengere straffen voor huiselijk geweld. We bieden ook juridische en psychologische steun aan overlevenden.",
            statValue: "45%",
            statLabel: "Toename in Steun",
            iconName: 'users'
          },
          {
            id: '4', title: "Vluchtelingenrechten",
            description: "Juridische bijstand verlenen aan asielzoekers en bescherming garanderen onder internationaal recht.",
            longDescription: "Vluchtelingen worden geconfronteerd met deportatie en gebrek aan diensten. Wij monitoren de naleving van het Vluchtelingenverdrag van 1951, bieden juridisch advies en zorgen ervoor dat ze niet gedwongen worden teruggestuurd naar conflictgebieden.",
            statValue: "1200",
            statLabel: "Gezinnen Geholpen",
            iconName: 'globe'
          },
          {
            id: '5', title: "Martelingpreventie",
            description: "Documenteren van martelgevallen en pleiten voor de implementatie van anti-martelwetgeving.",
            longDescription: "Marteling is een misdaad tegen de menselijkheid. We documenteren getuigenissen van slachtoffers voor vervolging. We eisen nationale preventieve mechanismen voor gevangenisbezoeken en bieden revalidatiesteun.",
            statValue: "0",
            statLabel: "Tolerantie",
            iconName: 'file-text'
          },
          {
            id: '6', title: "Arbeidsrechten",
            description: "Werknemers beschermen tegen uitbuiting en zorgen voor veilige werkomstandigheden en eerlijke lonen.",
            longDescription: "Werknemers worden geconfronteerd met ontslag en onveilige omstandigheden. Wij verdedigen het recht op vakbonden, monitoren bedrijven en bestrijden kinderarbeid.",
            statValue: "50",
            statLabel: "Arbeidszaken",
            iconName: 'scale'
          }
        ];
      case Language.FR:
        return [
          {
            id: '1', title: "Détention Arbitraire",
            description: "Œuvrer pour la libération des prisonniers d'opinion et garantir des procès équitables pour tous les détenus.",
            longDescription: "La détention arbitraire prive les individus de liberté sans base légale. Cela inclut la détention provisoire prolongée et les arrestations politiques. Nous documentons ces cas, fournissons une aide juridique et exerçons une pression internationale pour leur libération.",
            statValue: "1500+",
            statLabel: "Cas Documentés",
            iconName: 'shield'
          },
          {
            id: '2', title: "Liberté d'Expression",
            description: "Défendre les droits des journalistes, des militants et des citoyens à exprimer leurs opinions sans crainte de persécution.",
            longDescription: "La liberté d'expression est vitale. Nous luttons contre les lois restrictives et la censure. Nos efforts incluent la défense juridique des journalistes et la formation à la sécurité numérique.",
            statValue: "300",
            statLabel: "Journalistes Soutenus",
            iconName: 'megaphone'
          },
          {
            id: '3', title: "Droits des Femmes",
            description: "Plaider pour l'égalité des sexes, lutter contre la violence domestique et autonomiser les femmes dans la sphère juridique.",
            longDescription: "Les femmes subissent une discrimination systémique. Nous travaillons à réformer les lois inéquitables et à durcir les peines pour violence domestique, tout en offrant un soutien aux survivantes.",
            statValue: "45%",
            statLabel: "Augmentation du Soutien",
            iconName: 'users'
          },
          {
            id: '4', title: "Droits des Réfugiés",
            description: "Fournir une assistance juridique aux demandeurs d'asile et garantir la protection en vertu du droit international.",
            longDescription: "Les réfugiés font face à la déportation et au manque de services. Nous surveillons le respect de la Convention de 1951, offrons des conseils juridiques et luttons contre le refoulement.",
            statValue: "1200",
            statLabel: "Familles Aidées",
            iconName: 'globe'
          },
          {
            id: '5', title: "Prévention de la Torture",
            description: "Documenter les cas de torture et plaider pour la mise en œuvre de la législation anti-torture.",
            longDescription: "La torture est un crime contre l'humanité. Nous documentons les témoignages pour les poursuites, exigeons des visites surprises dans les prisons et soutenons la réhabilitation des victimes.",
            statValue: "0",
            statLabel: "Tolérance",
            iconName: 'file-text'
          },
          {
            id: '6', title: "Droits du Travail",
            description: "Protéger les travailleurs contre l'exploitation et garantir des conditions de travail sûres et des salaires équitables.",
            longDescription: "Nous défendons le droit de former des syndicats, surveillons la conformité des entreprises aux lois du travail et combattons le travail des enfants.",
            statValue: "50",
            statLabel: "Cas de Travail",
            iconName: 'scale'
          }
        ];
      case Language.EN:
      default:
        return [
          {
            id: '1', title: "Arbitrary Detention",
            description: "Working to secure the release of prisoners of conscience and ensuring fair trials for all detainees.",
            longDescription: "Arbitrary detention involves depriving individuals of liberty without a clear legal basis or fair due process. This includes prolonged pre-trial detention and arrests based on political views. We document these cases, provide legal aid, and apply international pressure for their release. We specifically focus on enforced disappearances.",
            statValue: "1500+",
            statLabel: "Documented Cases",
            iconName: 'shield'
          },
          {
            id: '2', title: "Freedom of Expression",
            description: "Defending journalists, activists, and citizens' rights to express opinions without fear of persecution.",
            longDescription: "Freedom of expression is the cornerstone of democracy. We face increasing restrictive laws and censorship. Our efforts include legal defense for journalists, campaigning against censorship, and digital security training to protect activists' identities.",
            statValue: "300",
            statLabel: "Journalists Supported",
            iconName: 'megaphone'
          },
          {
            id: '3', title: "Women's Rights",
            description: "Advocating for gender equality, fighting domestic violence, and empowering women in the legal sphere.",
            longDescription: "Women face systemic discrimination in laws and social practices. We work to reform unfair personal status laws and increase penalties for domestic violence. We also provide legal and psychological support programs for survivors.",
            statValue: "45%",
            statLabel: "Increase in Support",
            iconName: 'users'
          },
          {
            id: '4', title: "Refugee Rights",
            description: "Providing legal assistance to asylum seekers and ensuring protection under international law.",
            longDescription: "Refugees face deportation, lack of services, and discrimination. We monitor compliance with the 1951 Refugee Convention, provide legal counseling for status regularization, and fight against forced returns (refoulement).",
            statValue: "1200",
            statLabel: "Families Assisted",
            iconName: 'globe'
          },
          {
            id: '5', title: "Torture Prevention",
            description: "Documenting cases of torture and advocating for the implementation of anti-torture legislation.",
            longDescription: "Torture is a crime against humanity. We meticulously document victim testimonies for domestic and international prosecution. We demand national preventive mechanisms for surprise prison inspections and support victim rehabilitation.",
            statValue: "Zero",
            statLabel: "Tolerance",
            iconName: 'file-text'
          },
          {
            id: '6', title: "Labor Rights",
            description: "Protecting workers from exploitation and ensuring safe working conditions and fair wages.",
            longDescription: "Workers face arbitrary dismissal and unsafe conditions. We defend the right to form independent unions, monitor corporate compliance with labor laws, and fight against child labor in all forms.",
            statValue: "50",
            statLabel: "Labor Cases",
            iconName: 'scale'
          }
        ];
    }
  };

  const issues = getIssues(language);
  
  const t = {
    [Language.EN]: { 
      title: "Key Issues", 
      sub: "We focus our efforts on the most pressing human rights challenges affecting our community.",
      readMore: "Read detailed explanation",
      readLess: "Show less"
    },
    [Language.AR]: { 
      title: "القضايا الرئيسية", 
      sub: "نركز جهودنا على تحديات حقوق الإنسان الأكثر إلحاحاً التي تؤثر على مجتمعنا.",
      readMore: "اقرأ الشرح المفصل",
      readLess: "إخفاء التفاصيل"
    },
    [Language.NL]: { 
      title: "Belangrijkste Kwesties", 
      sub: "Wij richten onze inspanningen op de meest dringende mensenrechtenuitdagingen die onze gemeenschap beïnvloeden.",
      readMore: "Lees gedetailleerde uitleg",
      readLess: "Toon minder"
    },
    [Language.FR]: { 
      title: "Dossiers Clés", 
      sub: "Nous concentrons nos efforts sur les défis les plus urgents en matière de droits de l'homme affectant notre communauté.",
      readMore: "Lire l'explication détaillée",
      readLess: "Voir moins"
    }
  };
  const text = t[language];

  const getIcon = (name: string) => {
    switch (name) {
      case 'shield': return <Shield className="h-8 w-8" />;
      case 'megaphone': return <Megaphone className="h-8 w-8" />;
      case 'users': return <Users className="h-8 w-8" />;
      case 'globe': return <Globe className="h-8 w-8" />;
      case 'file-text': return <FileText className="h-8 w-8" />;
      default: return <Scale className="h-8 w-8" />;
    }
  };

  const getColorClass = (index: number) => {
    const colors = [
        'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
        'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
        'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
        'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
        'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amal-blue dark:text-white mb-6">
            {text.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed font-light">
            {text.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, idx) => {
            const isExpanded = expandedId === issue.id;
            
            return (
              <div 
                  key={issue.id} 
                  className={`group bg-white dark:bg-slate-900 rounded-3xl shadow-sm transition-all duration-300 border border-slate-100 dark:border-slate-800 relative overflow-hidden flex flex-col ${isExpanded ? 'row-span-2 shadow-2xl ring-2 ring-amal-gold/50' : 'hover:shadow-xl hover:-translate-y-2'}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Main Card Content */}
                <div className="p-8 flex-grow">
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {isExpanded ? <ChevronUp className="h-6 w-6 text-slate-300 dark:text-slate-600" /> : <ChevronDown className="h-6 w-6 text-slate-300 dark:text-slate-600" />}
                  </div>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${getColorClass(idx)}`}>
                    {getIcon(issue.iconName)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-amal-blue dark:text-white mb-4 font-serif group-hover:text-amal-gold transition-colors">
                    {issue.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                    {issue.description}
                  </p>
                </div>

                {/* Expanded Content Section */}
                {isExpanded && (
                  <div className="px-8 pb-8 bg-slate-50/50 dark:bg-slate-800/50 animate-in slide-in-from-top-4 fade-in duration-300 border-t border-slate-100 dark:border-slate-700 pt-6">
                     <div className="mb-6">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amal-gold mb-3">
                           <AlertCircle className="h-4 w-4" />
                           {language === Language.AR ? 'نظرة عامة' : 'Overview'}
                        </h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                          {issue.longDescription}
                        </p>
                     </div>
                     
                     {issue.statValue && (
                       <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 shadow-sm">
                          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-amal-blue dark:text-blue-400 rounded-full">
                             <Activity className="h-5 w-5" />
                          </div>
                          <div>
                             <div className="text-2xl font-bold text-amal-blue dark:text-white">{issue.statValue}</div>
                             <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">{issue.statLabel}</div>
                          </div>
                       </div>
                     )}
                  </div>
                )}
                
                {/* Expand Toggle Button */}
                <button 
                  onClick={() => toggleExpand(issue.id)}
                  className="w-full py-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border-t border-slate-100 dark:border-slate-700 text-sm font-bold text-amal-gold flex items-center justify-center gap-2 transition-colors uppercase tracking-wide"
                >
                   {isExpanded ? text.readLess : text.readMore}
                   {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Issues;