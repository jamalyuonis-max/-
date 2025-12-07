import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, Scale, Lightbulb } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Language } from '../types';

interface GeminiAssistantProps {
  language: Language;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isRtl = language === Language.AR;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getSystemInstruction = (lang: Language) => {
    switch (lang) {
      case Language.AR:
        return "أنت أمل AI، مساعد مفيد ومتعاطف لمركز أمل لحقوق الإنسان. هدفك هو مساعدة المستخدمين في العثور على معلومات حول حقوق الإنسان، ورسالة المركز، والتقارير الأخيرة. كن محترفًا وموجزًا ومحترمًا. استخدم التنسيق (نقاط، خط عريض) لتسهيل القراءة. لا تقدم مشورة قانونية محددة، بل معلومات عامة ووجههم للاتصال بمحامي المركز للحالات الخاصة.";
      case Language.NL:
        return "Je bent Amal AI, een behulpzame en empathische assistent voor het Amal Centrum voor Mensenrechten. Je doel is om gebruikers te helpen informatie te vinden over mensenrechten, de missie van het centrum en recente rapporten. Wees professioneel, beknopt en respectvol. Gebruik opmaak (opsommingstekens, vetgedrukt) voor de leesbaarheid. Geef geen specifiek juridisch advies, maar algemene informatie en verwijs hen door naar de advocaten van het centrum voor specifieke gevallen.";
      case Language.FR:
        return "Vous êtes Amal AI, un assistant utile et empathique pour le Centre Amal pour les droits de l'homme. Votre objectif est d'aider les utilisateurs à trouver des informations sur les droits de l'homme, la mission du centre et les rapports récents. Soyez professionnel, concis et respectueux. Utilisez le formatage (puces, gras) pour la lisibilité. Ne fournissez pas de conseils juridiques spécifiques, mais plutôt des informations générales et guidez-les vers les avocats du centre pour les cas spécifiques.";
      case Language.EN:
      default:
        return "You are Amal AI, a helpful and empathetic assistant for the Amal Center for Human Rights. Your goal is to help users find information about human rights, the center's mission, and recent reports. Be professional, concise, and respectful. Use formatting (bullet points, bold text) to make answers easy to read. Do not provide specific legal advice, but rather general information and guide them to contact the center's lawyers for specific cases.";
    }
  };

  const t = {
    [Language.EN]: { 
      askBtn: "Ask Amal AI", 
      title: "Amal AI Assistant", 
      welcome: "Welcome! I can help you with questions about our mission, human rights topics, or website navigation.",
      placeholder: "Type your question...",
      error: "I apologize, but I am having trouble connecting right now. Please try again later.",
      suggestions: ["What are human rights?", "How can I volunteer?", "Report a violation", "Donate securely"]
    },
    [Language.AR]: { 
      askBtn: "اسأل أمل", 
      title: "مساعد أمل الذكي", 
      welcome: "مرحباً! يمكنني مساعدتك في الأسئلة حول مهمتنا، أو موضوعات حقوق الإنسان، أو تصفح الموقع.",
      placeholder: "اكتب سؤالك...",
      error: "أعتذر، لكنني أواجه مشكلة في الاتصال الآن. يرجى المحاولة مرة أخرى لاحقًا.",
      suggestions: ["ما هي حقوق الإنسان؟", "كيف يمكنني التطوع؟", "الإبلاغ عن انتهاك", "التبرع الآمن"]
    },
    [Language.NL]: { 
      askBtn: "Vraag Amal AI", 
      title: "Amal AI Assistent", 
      welcome: "Welkom! Ik kan u helpen met vragen over onze missie, mensenrechtenonderwerpen of navigatie op de website.",
      placeholder: "Typ uw vraag...",
      error: "Mijn excuses, maar ik heb momenteel problemen met verbinden. Probeer het later opnieuw.",
      suggestions: ["Wat zijn mensenrechten?", "Hoe word ik vrijwilliger?", "Meld een schending", "Veilig doneren"]
    },
    [Language.FR]: { 
      askBtn: "Demander à Amal AI", 
      title: "Assistant Amal AI", 
      welcome: "Bienvenue ! Je peux vous aider avec des questions sur notre mission, les sujets liés aux droits de l'homme ou la navigation sur le site.",
      placeholder: "Tapez votre question...",
      error: "Je m'excuse, mais j'ai des problèmes de connexion pour le moment. Veuillez réessayer plus tard.",
      suggestions: ["Que sont les droits de l'homme ?", "Comment faire du bénévolat ?", "Signaler une violation", "Faire un don"]
    }
  };

  const text = t[language];

  // Helper to format basic markdown (bold **text**)
  const formatText = (text: string) => {
    // Split by bold markers
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-amal-blue dark:text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const handleSend = async (customMessage?: string) => {
    const msgText = customMessage || input;
    if (!msgText.trim() || !process.env.API_KEY) return;

    const userMessage: ChatMessage = { role: 'user', text: msgText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: getSystemInstruction(language),
          thinkingConfig: { thinkingBudget: 1024 } // Enable Thinking for nuanced answers
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessageStream({ message: userMessage.text });
      
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of result) {
         const text = chunk.text;
         if (text) {
             fullResponse += text;
             setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = fullResponse;
                return newMessages;
             });
         }
      }

    } catch (error) {
      console.error("Error calling Gemini:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: text.error
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!process.env.API_KEY) return null;

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 z-40 bg-amal-gold hover:bg-amber-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 group animate-bounce-slow ${isRtl ? 'left-6' : 'right-6'}`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
            {text.askBtn}
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed bottom-6 z-50 w-full max-w-[350px] md:max-w-[400px] h-[600px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-10 fade-in duration-300 ${isRtl ? 'left-6' : 'right-6'}`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="bg-amal-blue dark:bg-slate-800 p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amal-gold" />
              <h3 className="font-bold">{text.title}</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-slate-700 p-1 rounded transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
            {messages.length === 0 && (
              <div className="text-center text-slate-500 dark:text-slate-400 mt-6">
                <Scale className="h-12 w-12 mx-auto mb-3 text-slate-300 dark:text-slate-600" />
                <p className="text-sm mb-6 px-4">
                  {text.welcome}
                </p>
                
                {/* Suggestions Chips */}
                <div className="flex flex-wrap gap-2 justify-center px-2">
                  {text.suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(suggestion)}
                      className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amal-gold hover:text-amal-gold dark:hover:text-amal-gold px-3 py-1.5 rounded-full transition-colors shadow-sm flex items-center gap-1.5"
                    >
                      <Lightbulb className="h-3 w-3" />
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${
                    msg.role === 'user'
                      ? `bg-amal-blue text-white ${isRtl ? 'rounded-bl-none' : 'rounded-br-none'}`
                      : `bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 ${isRtl ? 'rounded-br-none' : 'rounded-bl-none'}`
                  }`}
                >
                  {formatText(msg.text)}
                </div>
              </div>
            ))}
            
            {isLoading && (
               <div className="flex justify-start">
                 <div className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 shadow-sm ${isRtl ? 'rounded-br-none' : 'rounded-bl-none'}`}>
                   <div className="flex items-center gap-2 text-xs text-slate-500">
                     <Loader2 className="h-3.5 w-3.5 animate-spin text-amal-gold" />
                     <span className="animate-pulse">{language === Language.AR ? 'أفكر...' : 'Thinking...'}</span>
                   </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={text.placeholder}
                className="flex-grow px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-amal-gold focus:border-transparent text-sm"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className={`bg-amal-gold hover:bg-amber-600 text-white p-2.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md ${isRtl ? 'rotate-180' : ''}`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center mt-2">
               <span className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
                <Sparkles className="h-2 w-2" />
                {language === Language.AR ? 'مدعوم بواسطة Gemini 2.5 Flash' : 'Powered by Gemini 2.5 Flash'}
               </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;