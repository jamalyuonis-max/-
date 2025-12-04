import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Heart, Shield, Users, Mail, PenTool, AlertTriangle } from 'lucide-react';
import { Language } from '../types';

interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const t = {
    [Language.EN]: {
      hero: {
        title: "These people need your help",
        subtitle: "Injustice happens when good people stand silent. Take action today.",
        cta: "Take Action",
        urgent: "Urgent"
      },
      campaign: {
        title: "Write for Rights",
        subtitle: "Send a card that makes a difference. Support the fight for human rights worldwide.",
        btn: "Order Now"
      },
      mission: {
        title: "Human Rights for Everyone",
        desc: "Amal Center strives for a just world where everyone has equal human rights and can live in freedom."
      },
      pillars: {
        who: "Who We Are",
        whoDesc: "Fighting for equal human rights worldwide since 1998.",
        whoBtn: "Read Our Story",
        what: "What We Do",
        whatDesc: "From the death penalty to freedom of expression, we protect human rights.",
        whatBtn: "View Our Themes",
        join: "Join Us",
        joinDesc: "Sign petitions, volunteer, donate and speak out against injustice.",
        joinBtn: "Get Involved"
      },
      stance: {
        title: "Where do you stand?",
        text: "Discrimination. Hate. Genocide. Human rights are under heavy pressure worldwide. This seems to be becoming increasingly normal. But it is not.",
        call: "This is the moment to choose where you stand. Do you look away or do you become a member?",
        btn: "Become a Member",
        sub: "With an annual contribution of $10 you are already a member."
      },
      newsletter: {
        title: "Stay Informed",
        text: "In our monthly newsletter you read the most important news about human rights and Amal.",
        btn: "Sign Up"
      }
    },
    [Language.AR]: {
      hero: {
        title: "هؤلاء الناس بحاجة لمساعدتك",
        subtitle: "الظلم يحدث عندما يصمت الأخيار. تحرك اليوم.",
        cta: "تحرك الآن",
        urgent: "عاجل"
      },
      campaign: {
        title: "اكتب من أجل الحقوق",
        subtitle: "أرسل بطاقة تصنع فرقاً. ادعم النضال من أجل حقوق الإنسان في جميع أنحاء العالم.",
        btn: "اطلب الآن"
      },
      mission: {
        title: "حقوق الإنسان للجميع",
        desc: "يسعى مركز أمل إلى عالم عادل يتمتع فيه الجميع بحقوق إنسان متساوية ويمكنهم العيش بحرية."
      },
      pillars: {
        who: "من نحن",
        whoDesc: "نناضل من أجل حقوق الإنسان المتساوية في جميع أنحاء العالم منذ عام ١٩٩٨.",
        whoBtn: "اقرأ قصتنا",
        what: "ماذا نفعل",
        whatDesc: "من عقوبة الإعدام إلى حرية التعبير، نحن نحمي حقوق الإنسان.",
        whatBtn: "شاهد قضايانا",
        join: "شارك معنا",
        joinDesc: "وقع العرائض، تطوع، تبرع وتحدث ضد الظلم.",
        joinBtn: "شارك الآن"
      },
      stance: {
        title: "أين تقف أنت؟",
        text: "التمييز. الكراهية. الإبادة الجماعية. حقوق الإنسان تتعرض لضغوط شديدة في جميع أنحاء العالم. يبدو أن هذا أصبح طبيعياً بشكل متزايد. لكنه ليس كذلك.",
        call: "هذه هي اللحظة لاختيار مكانك. هل ستشيح بوجهك أم ستصبح عضواً؟",
        btn: "كن عضواً",
        sub: "بمساهمة سنوية قدرها ١٠ دولارات، تصبح عضواً."
      },
      newsletter: {
        title: "ابق على اطلاع",
        text: "اقرأ أهم الأخبار حول حقوق الإنسان ومركز أمل في نشرتنا الشهرية.",
        btn: "اشترك"
      }
    },
    [Language.NL]: {
      hero: {
        title: "Deze mensen hebben jouw hulp nodig",
        subtitle: "Kom in actie tegen onrecht. Nu.",
        cta: "Kom in actie",
        urgent: "Urgent"
      },
      campaign: {
        title: "Write for Rights",
        subtitle: "Stuur kaarten die écht een verschil maken en steun de strijd voor mensenrechten wereldwijd.",
        btn: "Bestel nu"
      },
      mission: {
        title: "Mensenrechten voor iedereen",
        desc: "Amal streeft naar een rechtvaardige wereld waarin iedereen gelijke mensenrechten heeft en in vrijheid kan leven."
      },
      pillars: {
        who: "Wie we zijn",
        whoDesc: "Sinds 1998 strijden wij voor gelijke mensenrechten wereldwijd.",
        whoBtn: "Lees ons verhaal",
        what: "Wat we doen",
        whatDesc: "Van de doodstraf tot vrijheid van meningsuiting, wij beschermen de rechten van de mens.",
        whatBtn: "Bekijk onze thema's",
        join: "Doe mee",
        joinDesc: "Teken petities, word vrijwilliger, doneer en spreek je uit tegen onrechtvaardigheid.",
        joinBtn: "Kom in actie"
      },
      stance: {
        title: "Waar sta jij?",
        text: "Discriminatie. Haat. Genocide. Wereldwijd staan mensenrechten zwaar onder druk. Dat lijkt steeds normaler te worden. Maar dat is het niet.",
        call: "Dit is het moment om te kiezen waar je staat. Kijk je weg of word je lid?",
        btn: "Word lid",
        sub: "Met een jaarlijkse bijdrage van € 10,- ben je al lid."
      },
      newsletter: {
        title: "Blijf op de hoogte",
        text: "In onze maandelijkse nieuwsbrief lees je het belangrijkste nieuws over mensenrechten en Amnesty.",
        btn: "Ja, ik meld mij aan"
      }
    },
    [Language.FR]: {
      hero: {
        title: "Ces personnes ont besoin de votre aide",
        subtitle: "L'injustice persiste quand les gens bien se taisent. Agissez aujourd'hui.",
        cta: "Agir Maintenant",
        urgent: "Urgent"
      },
      campaign: {
        title: "Écrire pour les Droits",
        subtitle: "Envoyez une carte qui fait la différence. Soutenez la lutte pour les droits de l'homme dans le monde.",
        btn: "Commander"
      },
      mission: {
        title: "Droits de l'Homme pour Tous",
        desc: "Le Centre Amal œuvre pour un monde juste où chacun a des droits égaux et peut vivre en liberté."
      },
      pillars: {
        who: "Qui sommes-nous",
        whoDesc: "Nous luttons pour l'égalité des droits de l'homme dans le monde depuis 1998.",
        whoBtn: "Notre histoire",
        what: "Ce que nous faisons",
        whatDesc: "De la peine de mort à la liberté d'expression, nous protégeons les droits de l'homme.",
        whatBtn: "Nos thèmes",
        join: "Agir",
        joinDesc: "Signez des pétitions, faites du bénévolat, donnez et dénoncez l'injustice.",
        joinBtn: "Participer"
      },
      stance: {
        title: "Où vous situez-vous ?",
        text: "Discrimination. Haine. Génocide. Les droits de l'homme sont sous forte pression partout. Cela semble devenir normal. Mais ce n'est pas le cas.",
        call: "C'est le moment de choisir. Allez-vous détourner le regard ou devenir membre ?",
        btn: "Devenir membre",
        sub: "Avec une contribution annuelle de 10 €, vous êtes déjà membre."
      },
      newsletter: {
        title: "Restez informé",
        text: "Lisez les nouvelles les plus importantes sur les droits de l'homme dans notre newsletter mensuelle.",
        btn: "S'inscrire"
      }
    }
  };

  const text = t[language];
  const isRtl = language === Language.AR;

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 font-sans">
      
      {/* 1. Hero / Action Slider */}
      <section className="relative h-[600px] w-full bg-slate-900 flex items-center">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Protest" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
           <div className="max-w-2xl animate-fade-in-up">
              <span className="bg-red-600 text-white font-black uppercase px-3 py-1 text-sm tracking-widest mb-4 inline-block transform -skew-x-12">
                {text.hero.urgent}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6 font-sans tracking-tight">
                {text.hero.title}
              </h1>
              <p className="text-xl text-white font-medium mb-8 max-w-lg border-l-4 border-amal-gold pl-4">
                {text.hero.subtitle}
              </p>
              <Link to="/contact" className="inline-block bg-amal-gold hover:bg-amber-500 text-black font-black text-lg px-8 py-4 uppercase tracking-wide transition-transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                {text.hero.cta}
              </Link>
           </div>
        </div>
      </section>

      {/* 2. Seasonal / Urgent Campaign Card */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-white dark:bg-slate-800 rounded-none shadow-xl overflow-hidden flex flex-col md:flex-row border-l-8 border-amal-gold">
              <div className="md:w-1/2 relative min-h-[300px]">
                 <img src="https://picsum.photos/800/600?random=50" alt="Writing Letters" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-amal-gold/20 mix-blend-multiply"></div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase">
                   {text.campaign.title}
                 </h2>
                 <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 font-serif leading-relaxed">
                   {text.campaign.subtitle}
                 </p>
                 <div>
                   <Link to="/contact" className="inline-flex items-center gap-2 text-amal-blue dark:text-amal-gold font-black uppercase tracking-wider border-b-2 border-amal-blue dark:border-amal-gold hover:opacity-80 pb-1">
                     {text.campaign.btn} <ArrowRight className={`h-5 w-5 ${isRtl ? 'rotate-180' : ''}`} />
                   </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Mission Statement */}
      <section className="py-20 text-center px-6 bg-white dark:bg-slate-950">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase mb-6 tracking-tight">
               {text.mission.title}
            </h2>
            <div className="h-1 w-24 bg-amal-gold mx-auto mb-8"></div>
            <p className="text-2xl text-slate-600 dark:text-slate-400 font-serif italic leading-relaxed">
               "{text.mission.desc}"
            </p>
         </div>
      </section>

      {/* 4. The 3 Pillars (Who, What, Join) */}
      <section className="pb-24 px-6 bg-white dark:bg-slate-950">
         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 border border-slate-200 dark:border-slate-800">
            {/* Who We Are */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group">
               <Globe className="h-12 w-12 text-slate-900 dark:text-white mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4">{text.pillars.who}</h3>
               <p className="text-slate-600 dark:text-slate-400 mb-8 min-h-[3rem]">{text.pillars.whoDesc}</p>
               <Link to="/about" className="text-amal-gold font-bold uppercase text-sm hover:underline">{text.pillars.whoBtn} &rarr;</Link>
            </div>
            
            {/* What We Do */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group">
               <Shield className="h-12 w-12 text-slate-900 dark:text-white mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4">{text.pillars.what}</h3>
               <p className="text-slate-600 dark:text-slate-400 mb-8 min-h-[3rem]">{text.pillars.whatDesc}</p>
               <Link to="/issues" className="text-amal-gold font-bold uppercase text-sm hover:underline">{text.pillars.whatBtn} &rarr;</Link>
            </div>

            {/* Join Us */}
            <div className="p-10 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group">
               <Users className="h-12 w-12 text-slate-900 dark:text-white mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4">{text.pillars.join}</h3>
               <p className="text-slate-600 dark:text-slate-400 mb-8 min-h-[3rem]">{text.pillars.joinDesc}</p>
               <Link to="/contact" className="text-amal-gold font-bold uppercase text-sm hover:underline">{text.pillars.joinBtn} &rarr;</Link>
            </div>
         </div>
      </section>

      {/* 5. "Where Do You Stand?" - High Impact Section */}
      <section className="py-24 bg-amal-blue dark:bg-black text-white px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-10 opacity-10">
            <AlertTriangle className="h-64 w-64" />
         </div>
         <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
               <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none tracking-tight">
                  {text.stance.title}
               </h2>
               <p className="text-xl md:text-2xl font-medium mb-8 text-slate-300 leading-relaxed">
                  {text.stance.text}
               </p>
               <p className="text-lg font-bold text-white mb-8 border-l-4 border-amal-gold pl-4">
                  {text.stance.call}
               </p>
            </div>
            <div className="md:w-1/3 bg-white/10 backdrop-blur-sm p-8 border border-white/20 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300">
               <Heart className="h-12 w-12 mx-auto text-amal-gold mb-4" />
               <Link to="/contact" className="block w-full bg-amal-gold hover:bg-white hover:text-black text-black font-black uppercase py-4 text-lg mb-4 transition-colors">
                  {text.stance.btn}
               </Link>
               <p className="text-sm text-slate-300">
                  {text.stance.sub}
               </p>
            </div>
         </div>
      </section>

      {/* 6. Newsletter */}
      <section className="py-16 bg-amal-gold text-black px-6">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
               <Mail className="h-10 w-10 mt-1" />
               <div>
                  <h3 className="text-2xl font-black uppercase mb-2">{text.newsletter.title}</h3>
                  <p className="font-medium max-w-md">{text.newsletter.text}</p>
               </div>
            </div>
            <button className="bg-black text-white font-black uppercase px-8 py-3 hover:bg-slate-800 transition-colors shadow-lg">
               {text.newsletter.btn}
            </button>
         </div>
      </section>

    </div>
  );
};

export default Home;