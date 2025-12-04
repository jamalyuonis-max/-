
import React from 'react';
import { Scale, FileText, Megaphone, Users, Shield, Globe } from 'lucide-react';
import { Language, Issue } from '../types';

interface IssuesProps {
  language: Language;
}

const Issues: React.FC<IssuesProps> = ({ language }) => {
  
  const getIssues = (lang: Language): Issue[] => {
    switch(lang) {
      case Language.AR:
        return [
          {
            id: '1', title: "الاعتقال التعسفي",
            description: "العمل على تأمين الإفراج عن سجناء الرأي وضمان محاكمات عادلة لجميع المعتقلين.",
            iconName: 'shield'
          },
          {
            id: '2', title: "حرية التعبير",
            description: "الدفاع عن حقوق الصحفيين والنشطاء والمواطنين في التعبير عن آرائهم دون خوف من الاضطهاد.",
            iconName: 'megaphone'
          },
          {
            id: '3', title: "حقوق المرأة",
            description: "المناصرة للمساواة بين الجنسين، ومحاربة العنف المنزلي، وتمكين المرأة في المجال القانوني.",
            iconName: 'users'
          },
          {
            id: '4', title: "حقوق اللاجئين",
            description: "تقديم المساعدة القانونية لطالبي اللجوء وضمان الحماية بموجب القانون الدولي.",
            iconName: 'globe'
          },
          {
            id: '5', title: "منع التعذيب",
            description: "توثيق حالات التعذيب والمطالبة بتنفيذ تشريعات مناهضة التعذيب.",
            iconName: 'file-text'
          },
          {
            id: '6', title: "حقوق العمال",
            description: "حماية العمال من الاستغلال وضمان ظروف عمل آمنة وأجور عادلة.",
            iconName: 'scale'
          }
        ];
      case Language.NL:
        return [
          {
            id: '1', title: "Willekeurige Detentie",
            description: "Werken aan de vrijlating van gewetensgevangenen en zorgen voor eerlijke processen voor alle gedetineerden.",
            iconName: 'shield'
          },
          {
            id: '2', title: "Vrijheid van Meningsuiting",
            description: "Verdediging van de rechten van journalisten, activisten en burgers om hun mening te uiten zonder angst voor vervolging.",
            iconName: 'megaphone'
          },
          {
            id: '3', title: "Vrouwenrechten",
            description: "Opkomen voor gendergelijkheid, huiselijk geweld bestrijden en vrouwen in de juridische sfeer versterken.",
            iconName: 'users'
          },
          {
            id: '4', title: "Vluchtelingenrechten",
            description: "Juridische bijstand verlenen aan asielzoekers en bescherming garanderen onder internationaal recht.",
            iconName: 'globe'
          },
          {
            id: '5', title: "Martelingpreventie",
            description: "Documenteren van martelgevallen en pleiten voor de implementatie van anti-martelwetgeving.",
            iconName: 'file-text'
          },
          {
            id: '6', title: "Arbeidsrechten",
            description: "Werknemers beschermen tegen uitbuiting en zorgen voor veilige werkomstandigheden en eerlijke lonen.",
            iconName: 'scale'
          }
        ];
      case Language.FR:
        return [
          {
            id: '1', title: "Détention Arbitraire",
            description: "Œuvrer pour la libération des prisonniers d'opinion et garantir des procès équitables pour tous les détenus.",
            iconName: 'shield'
          },
          {
            id: '2', title: "Liberté d'Expression",
            description: "Défendre les droits des journalistes, des militants et des citoyens à exprimer leurs opinions sans crainte de persécution.",
            iconName: 'megaphone'
          },
          {
            id: '3', title: "Droits des Femmes",
            description: "Plaider pour l'égalité des sexes, lutter contre la violence domestique et autonomiser les femmes dans la sphère juridique.",
            iconName: 'users'
          },
          {
            id: '4', title: "Droits des Réfugiés",
            description: "Fournir une assistance juridique aux demandeurs d'asile et garantir la protection en vertu du droit international.",
            iconName: 'globe'
          },
          {
            id: '5', title: "Prévention de la Torture",
            description: "Documenter les cas de torture et plaider pour la mise en œuvre de la législation anti-torture.",
            iconName: 'file-text'
          },
          {
            id: '6', title: "Droits du Travail",
            description: "Protéger les travailleurs contre l'exploitation et garantir des conditions de travail sûres et des salaires équitables.",
            iconName: 'scale'
          }
        ];
      case Language.EN:
      default:
        return [
          {
            id: '1', title: "Arbitrary Detention",
            description: "Working to secure the release of prisoners of conscience and ensuring fair trials for all detainees.",
            iconName: 'shield'
          },
          {
            id: '2', title: "Freedom of Expression",
            description: "Defending journalists, activists, and citizens' rights to express opinions without fear of persecution.",
            iconName: 'megaphone'
          },
          {
            id: '3', title: "Women's Rights",
            description: "Advocating for gender equality, fighting domestic violence, and empowering women in the legal sphere.",
            iconName: 'users'
          },
          {
            id: '4', title: "Refugee Rights",
            description: "Providing legal assistance to asylum seekers and ensuring protection under international law.",
            iconName: 'globe'
          },
          {
            id: '5', title: "Torture Prevention",
            description: "Documenting cases of torture and advocating for the implementation of anti-torture legislation.",
            iconName: 'file-text'
          },
          {
            id: '6', title: "Labor Rights",
            description: "Protecting workers from exploitation and ensuring safe working conditions and fair wages.",
            iconName: 'scale'
          }
        ];
    }
  };

  const issues = getIssues(language);
  
  const t = {
    [Language.EN]: { title: "Key Issues", sub: "We focus our efforts on the most pressing human rights challenges affecting our community." },
    [Language.AR]: { title: "القضايا الرئيسية", sub: "نركز جهودنا على تحديات حقوق الإنسان الأكثر إلحاحاً التي تؤثر على مجتمعنا." },
    [Language.NL]: { title: "Belangrijkste Kwesties", sub: "Wij richten onze inspanningen op de meest dringende mensenrechtenuitdagingen die onze gemeenschap beïnvloeden." },
    [Language.FR]: { title: "Dossiers Clés", sub: "Nous concentrons nos efforts sur les défis les plus urgents en matière de droits de l'homme affectant notre communauté." }
  };
  const text = t[language];

  const getIcon = (name: string) => {
    switch (name) {
      case 'shield': return <Shield className="h-8 w-8 text-white" />;
      case 'megaphone': return <Megaphone className="h-8 w-8 text-white" />;
      case 'users': return <Users className="h-8 w-8 text-white" />;
      case 'globe': return <Globe className="h-8 w-8 text-white" />;
      case 'file-text': return <FileText className="h-8 w-8 text-white" />;
      default: return <Scale className="h-8 w-8 text-white" />;
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-amal-blue mb-4">
          {text.title}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          {text.sub}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-1">
              <div className="bg-amal-blue h-24 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-amal-gold opacity-10"></div>
                {getIcon(issue.iconName)}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amal-blue mb-3">{issue.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {issue.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Issues;
