
import React from 'react';
import { Book, Gavel, Globe, Scale, Shield, FileText, Scroll } from 'lucide-react';
import { Language } from '../types';

interface InternationalLawProps {
  language: Language;
}

const InternationalLaw: React.FC<InternationalLawProps> = ({ language }) => {

  const getLaws = (lang: Language) => {
    switch (lang) {
      case Language.AR:
        return [
          {
            id: 'udhr',
            title: "الإعلان العالمي لحقوق الإنسان",
            year: "1948",
            description: "الوثيقة التأسيسية التي ترسي الحقوق الأساسية لكل إنسان. اعتمدته الجمعية العامة للأمم المتحدة، ويضع معياراً مشتركاً للإنجاز لجميع الشعوب والأمم.",
            keyPoints: ["يولد جميع الناس أحراراً ومتساوين.", "حظر التعذيب والرق.", "الحق في محاكمة عادلة والخصوصية."],
            icon: Globe
          },
          {
            id: 'iccpr',
            title: "العهد الدولي الخاص بالحقوق المدنية والسياسية",
            year: "1966",
            description: "معاهدة متعددة الأطراف تلزم الدول باحترام الحقوق المدنية والسياسية للأفراد، بما في ذلك الحق في الحياة، وحرية الدين، وحرية التعبير، وحرية التجمع.",
            keyPoints: ["الحق في الحياة.", "التحرر من التعذيب.", "الحق في محاكمة عادلة.", "حرية الفكر والتعبير."],
            icon: Scale
          },
          {
            id: 'icescr',
            title: "العهد الدولي الخاص بالحقوق الاقتصادية والاجتماعية والثقافية",
            year: "1966",
            description: "يضمن التمتع بالحقوق الاقتصادية والاجتماعية والثقافية، بما في ذلك الحق في التعليم، والأجور العادلة، وظروف العمل الآمنة، ومستوى معيشي لائق.",
            keyPoints: ["الحق في العمل.", "الحق في الضمان الاجتماعي.", "الحق في الصحة والتعليم."],
            icon: Book
          },
          {
            id: 'geneva',
            title: "اتفاقيات جنيف",
            year: "1949",
            description: "سلسلة من الاجتماعات الدبلوماسية الدولية التي أنتجت عدداً من الاتفاقيات، ولا سيما القانون الإنساني للنزاعات المسلحة، وهي مجموعة من القوانين الدولية للمعاملة الإنسانية للعسكريين الجرحى أو الأسرى، والطواقم الطبية والمدنيين غير العسكريين أثناء الحرب أو النزاعات المسلحة.",
            keyPoints: ["حماية المدنيين في زمن الحرب.", "معاملة أسرى الحرب.", "حماية الجرحى."],
            icon: Shield
          },
          {
            id: 'rome',
            title: "نظام روما الأساسي للمحكمة الجنائية الدولية",
            year: "1998",
            description: "المعاهدة التي أنشأت المحكمة الجنائية الدولية (ICC). وتحدد أربع جرائم دولية أساسية: الإبادة الجماعية، والجرائم ضد الإنسانية، وجرائم الحرب، وجريمة العدوان.",
            keyPoints: ["الإبادة الجماعية.", "الجرائم ضد الإنسانية.", "جرائم الحرب.", "العدوان."],
            icon: Gavel
          }
        ];
      case Language.NL:
        return [
          {
            id: 'udhr',
            title: "Universele Verklaring van de Rechten van de Mens (UVRM)",
            year: "1948",
            description: "Het fundamentele document dat de fundamentele rechten van ieder mens vastlegt. Aangenomen door de Algemene Vergadering van de VN, stelt het een gemeenschappelijke standaard voor alle volkeren en naties.",
            keyPoints: ["Alle mensen worden vrij en gelijk geboren.", "Verbod op marteling en slavernij.", "Recht op een eerlijk proces en privacy."],
            icon: Globe
          },
          {
            id: 'iccpr',
            title: "Internationaal Verdrag inzake Burgerrechten en Politieke Rechten (IVBPR)",
            year: "1966",
            description: "Een multilateraal verdrag dat naties verplicht de burgerrechten en politieke rechten van individuen te respecteren, waaronder het recht op leven, vrijheid van godsdienst, vrijheid van meningsuiting en vrijheid van vergadering.",
            keyPoints: ["Recht op leven.", "Vrijheid van marteling.", "Recht op een eerlijk proces.", "Vrijheid van gedachte en meningsuiting."],
            icon: Scale
          },
          {
            id: 'icescr',
            title: "Internationaal Verdrag inzake Economische, Sociale en Culturele Rechten (IVESCR)",
            year: "1966",
            description: "Garandeert het genot van economische, sociale en culturele rechten, waaronder het recht op onderwijs, eerlijke lonen, veilige werkomstandigheden en een adequate levensstandaard.",
            keyPoints: ["Recht op werk.", "Recht op sociale zekerheid.", "Recht op gezondheid en onderwijs."],
            icon: Book
          },
          {
            id: 'geneva',
            title: "Verdragen van Genève",
            year: "1949",
            description: "Een reeks internationale diplomatieke bijeenkomsten die een aantal overeenkomsten opleverden, met name het Humanitair Oorlogsrecht, een groep internationale wetten voor de humane behandeling van gewonden of gevangengenomen militair personeel, medisch personeel en niet-militaire burgers tijdens oorlog of gewapende conflicten.",
            keyPoints: ["Bescherming van burgers in oorlogstijd.", "Behandeling van krijgsgevangenen.", "Bescherming van gewonden."],
            icon: Shield
          },
          {
            id: 'rome',
            title: "Statuut van Rome inzake het Internationaal Strafhof",
            year: "1998",
            description: "Het verdrag dat het Internationaal Strafhof (ICC) oprichtte. Het stelt vier internationale kernmisdaden vast: genocide, misdaden tegen de menselijkheid, oorlogsmisdaden en het misdrijf agressie.",
            keyPoints: ["Genocide.", "Misdaden tegen de menselijkheid.", "Oorlogsmisdaden.", "Agressie."],
            icon: Gavel
          }
        ];
      case Language.FR:
        return [
          {
            id: 'udhr',
            title: "Déclaration Universelle des Droits de l'Homme (DUDH)",
            year: "1948",
            description: "Le document fondamental établissant les droits fondamentaux de chaque être humain. Adopté par l'Assemblée générale des Nations Unies, il établit une norme commune de réalisation pour tous les peuples et toutes les nations.",
            keyPoints: ["Tous les êtres humains naissent libres et égaux.", "Interdiction de la torture et de l'esclavage.", "Droit à un procès équitable et à la vie privée."],
            icon: Globe
          },
          {
            id: 'iccpr',
            title: "Pacte International relatif aux Droits Civils et Politiques (PIDCP)",
            year: "1966",
            description: "Un traité multilatéral qui engage les nations à respecter les droits civils et politiques des individus, y compris le droit à la vie, la liberté de religion, la liberté d'expression et la liberté de réunion.",
            keyPoints: ["Droit à la vie.", "Liberté de la torture.", "Droit à un procès équitable.", "Liberté de pensée et d'expression."],
            icon: Scale
          },
          {
            id: 'icescr',
            title: "Pacte International relatif aux Droits Économiques, Sociaux et Culturels (PIDESC)",
            year: "1966",
            description: "Assure la jouissance des droits économiques, sociaux et culturels, y compris les droits à l'éducation, à des salaires équitables, à des conditions de travail sûres et à un niveau de vie suffisant.",
            keyPoints: ["Droit au travail.", "Droit à la sécurité sociale.", "Droit à la santé et à l'éducation."],
            icon: Book
          },
          {
            id: 'geneva',
            title: "Conventions de Genève",
            year: "1949",
            description: "Une série de réunions diplomatiques internationales qui ont produit un certain nombre d'accords, en particulier le Droit Humanitaire des Conflits Armés, un ensemble de lois internationales pour le traitement humain du personnel militaire blessé ou capturé, du personnel médical et des civils non militaires pendant la guerre ou les conflits armés.",
            keyPoints: ["Protection des civils en temps de guerre.", "Traitement des prisonniers de guerre.", "Protection des blessés."],
            icon: Shield
          },
          {
            id: 'rome',
            title: "Statut de Rome de la Cour Pénale Internationale",
            year: "1998",
            description: "Le traité qui a créé la Cour Pénale Internationale (CPI). Il établit quatre crimes internationaux fondamentaux : le génocide, les crimes contre l'humanité, les crimes de guerre et le crime d'agression.",
            keyPoints: ["Génocide.", "Crimes contre l'humanité.", "Crimes de guerre.", "Agression."],
            icon: Gavel
          }
        ];
      case Language.EN:
      default:
        return [
          {
            id: 'udhr',
            title: "Universal Declaration of Human Rights (UDHR)",
            year: "1948",
            description: "The foundational document establishing the fundamental rights of every human being. Adopted by the UN General Assembly, it sets a common standard of achievement for all peoples and nations.",
            keyPoints: ["All human beings are born free and equal.", "Ban on torture and slavery.", "Right to fair trial and privacy."],
            icon: Globe
          },
          {
            id: 'iccpr',
            title: "International Covenant on Civil and Political Rights (ICCPR)",
            year: "1966",
            description: "A multilateral treaty that commits nations to respect the civil and political rights of individuals, including the right to life, freedom of religion, freedom of speech, and freedom of assembly.",
            keyPoints: ["Right to life.", "Freedom from torture.", "Right to a fair trial.", "Freedom of thought and expression."],
            icon: Scale
          },
          {
            id: 'icescr',
            title: "International Covenant on Economic, Social and Cultural Rights (ICESCR)",
            year: "1966",
            description: "Ensures the enjoyment of economic, social, and cultural rights, including the rights to education, fair wages, safe working conditions, and adequate standard of living.",
            keyPoints: ["Right to work.", "Right to social security.", "Right to health and education."],
            icon: Book
          },
          {
            id: 'geneva',
            title: "Geneva Conventions",
            year: "1949",
            description: "A series of international diplomatic meetings that produced a number of agreements, in particular the Humanitarian Law of Armed Conflicts, a group of international laws for the humane treatment of wounded or captured military personnel, medical personnel and non-military civilians during war or armed conflicts.",
            keyPoints: ["Protection of civilians in wartime.", "Treatment of prisoners of war.", "Protection of the wounded."],
            icon: Shield
          },
          {
            id: 'rome',
            title: "Rome Statute of the International Criminal Court",
            year: "1998",
            description: "The treaty that established the International Criminal Court (ICC). It establishes four core international crimes: genocide, crimes against humanity, war crimes, and the crime of aggression.",
            keyPoints: ["Genocide.", "Crimes against humanity.", "War crimes.", "Aggression."],
            icon: Gavel
          }
        ];
    }
  };

  const laws = getLaws(language);

  const t = {
    [Language.EN]: { title: "International Human Rights Law", desc: "Access key legal instruments and treaties that form the foundation of international human rights protection. We believe that knowledge of the law is the first step towards justice.", keyPoints: "Key Provisions" },
    [Language.AR]: { title: "القانون الدولي لحقوق الإنسان", desc: "اطلع على الصكوك والمعاهدات القانونية الرئيسية التي تشكل أساس الحماية الدولية لحقوق الإنسان. نحن نؤمن بأن معرفة القانون هي الخطوة الأولى نحو العدالة.", keyPoints: "أحكام رئيسية" },
    [Language.NL]: { title: "Internationaal Mensenrechtenrecht", desc: "Krijg toegang tot belangrijke juridische instrumenten en verdragen die de basis vormen van internationale mensenrechtenbescherming. Wij geloven dat kennis van de wet de eerste stap is naar gerechtigheid.", keyPoints: "Belangrijkste Bepalingen" },
    [Language.FR]: { title: "Droit International des Droits de l'Homme", desc: "Accédez aux principaux instruments juridiques et traités qui constituent le fondement de la protection internationale des droits de l'homme. Nous croyons que la connaissance du droit est le premier pas vers la justice.", keyPoints: "Dispositions Clés" }
  };
  const text = t[language];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4 text-amal-blue">
            <Scroll className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-amal-blue mb-4">
            {text.title}
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            {text.desc}
          </p>
        </div>

        {/* Laws Grid */}
        <div className="space-y-8">
          {laws.map((law) => (
            <div key={law.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon Column */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amal-blue text-white rounded-xl flex items-center justify-center">
                    <law.icon className="h-8 w-8" />
                  </div>
                  <div className="mt-2 text-center text-sm font-bold text-slate-400">
                    {law.year}
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-grow">
                  <h2 className="text-2xl font-serif font-bold text-amal-blue mb-3">
                    {law.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {law.description}
                  </p>
                  
                  {/* Key Points */}
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <h4 className="text-sm font-bold text-amal-gold uppercase tracking-wider mb-3 flex items-center gap-2">
                       <FileText className="h-4 w-4" />
                       {text.keyPoints}
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {law.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-amal-blue rounded-full mt-2 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalLaw;
