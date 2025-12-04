import React from 'react';
import { Users, Shield, Globe } from 'lucide-react';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = {
    [Language.EN]: {
      title: "About Amal Center",
      subtitle: "We are a dedicated team of lawyers, researchers, and activists working tirelessly to uphold human dignity.",
      mission: "Our Mission",
      missionText: "Our mission is to provide effective legal protection for vulnerable groups, document human rights violations with precision, and advocate for systemic change that respects the inherent dignity of every individual.",
      vision: "Our Vision",
      visionText: "We envision a world where justice is accessible to all, where impunity is ended, and where human rights are not just ideals, but lived realities for every person, regardless of their background.",
      team: "Our Team",
      teamRole: "Senior Legal Advisor",
      teamDesc: "Specializing in international law and civil rights."
    },
    [Language.AR]: {
      title: "عن مركز أمل",
      subtitle: "نحن فريق مكرس من المحامين والباحثين والنشطاء نعمل بلا كلل لدعم الكرامة الإنسانية.",
      mission: "رسالتنا",
      missionText: "رسالتنا هي توفير الحماية القانونية الفعالة للفئات المستضعفة، وتوثيق انتهاكات حقوق الإنسان بدقة، والمطالبة بتغيير منهجي يحترم الكرامة المتأصلة لكل فرد.",
      vision: "رؤيتنا",
      visionText: "نطمح إلى عالم تكون فيه العدالة متاحة للجميع، وينتهي فيه الإفلات من العقاب، وتكون فيه حقوق الإنسان ليست مجرد مثل عليا، بل واقع يعيشه كل شخص.",
      team: "فريقنا",
      teamRole: "مستشار قانوني أول",
      teamDesc: "متخصص في القانون الدولي والحقوق المدنية."
    },
    [Language.NL]: {
      title: "Over Amal Centrum",
      subtitle: "Wij zijn een toegewijd team van advocaten, onderzoekers en activisten die onvermoeibaar werken aan het handhaven van de menselijke waardigheid.",
      mission: "Onze Missie",
      missionText: "Onze missie is het bieden van effectieve rechtsbescherming aan kwetsbare groepen, het nauwkeurig documenteren van mensenrechtenschendingen en het pleiten voor systemische veranderingen die de inherente waardigheid van elk individu respecteren.",
      vision: "Onze Visie",
      visionText: "We streven naar een wereld waar gerechtigheid voor iedereen toegankelijk is, waar straffeloosheid wordt beëindigd en waar mensenrechten geen idealen zijn, maar geleefde werkelijkheden voor iedereen.",
      team: "Ons Team",
      teamRole: "Senior Juridisch Adviseur",
      teamDesc: "Gespecialiseerd in internationaal recht en burgerrechten."
    },
    [Language.FR]: {
      title: "À propos du Centre Amal",
      subtitle: "Nous sommes une équipe dévouée d'avocats, de chercheurs et de militants travaillant sans relâche pour défendre la dignité humaine.",
      mission: "Notre Mission",
      missionText: "Notre mission est de fournir une protection juridique efficace aux groupes vulnérables, de documenter les violations des droits de l'homme avec précision et de plaider pour un changement systémique respectant la dignité inhérente de chaque individu.",
      vision: "Notre Vision",
      visionText: "Nous envisageons un monde où la justice est accessible à tous, où l'impunité prend fin et où les droits de l'homme ne sont pas seulement des idéaux, mais des réalités vécues pour chaque personne.",
      team: "Notre Équipe",
      teamRole: "Conseiller Juridique Senior",
      teamDesc: "Spécialisé en droit international et droits civils."
    }
  };

  const text = t[language];

  return (
    <div className="pt-10 pb-20 dark:bg-slate-950 transition-colors duration-300">
      {/* Header */}
      <div className="bg-amal-blue dark:bg-slate-900 text-white py-16 md:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {text.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-serif font-bold text-amal-blue dark:text-white mb-4 flex items-center gap-3">
              <Shield className="text-amal-gold" />
              {text.mission}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {text.missionText}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-amal-blue dark:text-white mb-4 flex items-center gap-3">
              <Globe className="text-amal-gold" />
              {text.vision}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {text.visionText}
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-16">
          <h2 className="text-3xl font-serif font-bold text-amal-blue dark:text-white text-center mb-12">
            {text.team}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 group-hover:border-amal-gold transition-colors">
                  <img 
                    src={`https://picsum.photos/300/300?random=${i + 10}`} 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-amal-blue dark:text-white">
                  {language === Language.EN ? `Team Member ${i}` : `عضو الفريق ${i}`}
                </h3>
                <p className="text-amal-gold text-sm font-medium mb-2">
                  {text.teamRole}
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm">
                  {text.teamDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;