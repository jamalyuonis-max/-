import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Upload } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [submitted, setSubmitted] = useState(false);

  const t = {
    [Language.EN]: {
      title: "Contact Us",
      subtitle: "Reach out to us for legal assistance, media inquiries, or to volunteer. Your communication is secure.",
      messageSent: "Message Sent",
      thankYou: "Thank you for contacting us. We will respond shortly.",
      sendAnother: "Send another message",
      nameLabel: "Name (Optional)",
      namePlaceholder: "Your name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      subjects: ["General Inquiry", "Legal Aid Request", "Press/Media"],
      messageLabel: "Message",
      messagePlaceholder: "How can we help you?",
      attachLabel: "Attach Evidence (Image/Video)",
      attachHelp: "Max size: 10MB. Supported: JPG, PNG, MP4.",
      privacy: "I agree to the privacy policy and consent to having this data processed.",
      sendBtn: "Send Secure Message",
      location: "Our Location",
      emailUs: "Email Us",
      callUs: "Call Us",
      hours: "Mon-Fri, 9am - 5pm",
      mapPlaceholder: "Google Maps Placeholder"
    },
    [Language.AR]: {
      title: "اتصل بنا",
      subtitle: "تواصل معنا للحصول على مساعدة قانونية، أو استفسارات إعلامية، أو للتطوع. اتصالاتك آمنة.",
      messageSent: "تم إرسال الرسالة",
      thankYou: "شكراً لتواصلك معنا. سنرد عليك قريباً.",
      sendAnother: "إرسال رسالة أخرى",
      nameLabel: "الاسم (اختياري)",
      namePlaceholder: "اسمك",
      emailLabel: "البريد الإلكتروني",
      subjectLabel: "الموضوع",
      subjects: ["استفسار عام", "طلب مساعدة قانونية", "صحافة/إعلام"],
      messageLabel: "الرسالة",
      messagePlaceholder: "كيف يمكننا مساعدتك؟",
      attachLabel: "أرفق أدلة (صورة/فيديو)",
      attachHelp: "الحد الأقصى ١٠ ميجابايت. التنسيقات المدعومة: JPG, PNG, MP4.",
      privacy: "أوافق على سياسة الخصوصية وأوافق على معالجة هذه البيانات.",
      sendBtn: "إرسال رسالة آمنة",
      location: "موقعنا",
      emailUs: "راسلنا",
      callUs: "اتصل بنا",
      hours: "الإثنين-الجمعة، ٩ص - ٥م",
      mapPlaceholder: "عنصر نائب لخرائط جوجل"
    },
    [Language.NL]: {
      title: "Neem Contact Op",
      subtitle: "Neem contact met ons op voor juridische bijstand, mediavragen of om vrijwilliger te worden. Uw communicatie is veilig.",
      messageSent: "Bericht Verzonden",
      thankYou: "Bedankt dat u contact met ons heeft opgenomen. We reageren zo snel mogelijk.",
      sendAnother: "Stuur nog een bericht",
      nameLabel: "Naam (Optioneel)",
      namePlaceholder: "Uw naam",
      emailLabel: "E-mailadres",
      subjectLabel: "Onderwerp",
      subjects: ["Algemene Vraag", "Verzoek Juridische Hulp", "Pers/Media"],
      messageLabel: "Bericht",
      messagePlaceholder: "Hoe kunnen we u helpen?",
      attachLabel: "Bewijs Toevoegen (Afbeelding/Video)",
      attachHelp: "Max grootte 10MB. Ondersteund: JPG, PNG, MP4.",
      privacy: "Ik ga akkoord met het privacybeleid en stem in met de verwerking van deze gegevens.",
      sendBtn: "Verstuur Veilig Bericht",
      location: "Onze Locatie",
      emailUs: "Mail Ons",
      callUs: "Bel Ons",
      hours: "Ma-Vr, 9:00 - 17:00",
      mapPlaceholder: "Google Maps Plaatshouder"
    },
    [Language.FR]: {
      title: "Contactez-Nous",
      subtitle: "Contactez-nous pour une assistance juridique, des demandes médias ou pour faire du bénévolat. Votre communication est sécurisée.",
      messageSent: "Message Envoyé",
      thankYou: "Merci de nous avoir contactés. Nous vous répondrons sous peu.",
      sendAnother: "Envoyer un autre message",
      nameLabel: "Nom (Optionnel)",
      namePlaceholder: "Votre nom",
      emailLabel: "Adresse E-mail",
      subjectLabel: "Sujet",
      subjects: ["Demande Générale", "Demande d'Aide Juridique", "Presse/Médias"],
      messageLabel: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      attachLabel: "Joindre des Preuves (Image/Vidéo)",
      attachHelp: "Taille max 10 Mo. Formats supportés : JPG, PNG, MP4.",
      privacy: "J'accepte la politique de confidentialité et consens au traitement de ces données.",
      sendBtn: "Envoyer Message Sécurisé",
      location: "Notre Adresse",
      emailUs: "Écrivez-nous",
      callUs: "Appelez-nous",
      hours: "Lun-Ven, 9h - 17h",
      mapPlaceholder: "Espace réservé Google Maps"
    }
  };

  const text = t[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-amal-blue dark:text-white mb-4">
            {text.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  {text.messageSent}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {text.thankYou}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-amal-gold font-medium hover:underline"
                >
                  {text.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {text.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-amal-gold focus:border-transparent outline-none transition-shadow bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder={text.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {text.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-amal-gold focus:border-transparent outline-none transition-shadow bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {text.subjectLabel}
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-amal-gold focus:border-transparent outline-none transition-shadow bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    {text.subjects.map(sub => <option key={sub}>{sub}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {text.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-amal-gold focus:border-transparent outline-none transition-shadow resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder={text.messagePlaceholder}
                  ></textarea>
                </div>

                {/* File Upload Field */}
                <div>
                  <label htmlFor="file-upload" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    {text.attachLabel}
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 dark:border-slate-700 border-dashed rounded-lg hover:border-amal-gold dark:hover:border-amal-gold transition-colors bg-slate-50 dark:bg-slate-800/50 group cursor-pointer relative">
                    <input 
                      id="file-upload" 
                      name="file-upload" 
                      type="file" 
                      accept="image/*,video/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-slate-600 dark:text-slate-400 justify-center">
                        <span className="relative rounded-md font-medium text-amal-gold group-hover:text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amal-gold">
                           <span>Upload a file</span>
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {text.attachHelp}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" required className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-slate-600 dark:text-slate-400">
                    {text.privacy}
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amal-blue hover:bg-slate-800 dark:bg-amal-gold dark:hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  {text.sendBtn}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4 transition-colors">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full text-amal-blue dark:text-blue-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{text.location}</h3>
                <p className="text-slate-600 dark:text-slate-400">123 Justice Avenue, Suite 400<br />Civil City, CC 90210</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4 transition-colors">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full text-amal-blue dark:text-blue-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{text.emailUs}</h3>
                <p className="text-slate-600 dark:text-slate-400">contact@amal-center.org<br />press@amal-center.org</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4 transition-colors">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full text-amal-blue dark:text-blue-400">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{text.callUs}</h3>
                <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567<br />{text.hours}</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl h-48 w-full flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm transition-colors">
              {text.mapPlaceholder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;