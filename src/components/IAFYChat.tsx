import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface IAFYChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const IAFYChat: React.FC<IAFYChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '👋 ¡Hola! Soy IAfy, tu asistente de automatización empresarial.\n\n¿En qué puedo ayudarte hoy? Puedo mostrarte cómo nuestra IA puede transformar tu negocio, ahorrarte tiempo y aumentar tus ventas 24/7.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    '💰 Ver precios y planes',
    '📅 Agendar demo gratis',
    '🎯 ¿Cómo funciona?',
    '⭐ Ver casos de éxito'
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();

    if (lowerText.includes('precio') || lowerText.includes('coste') || lowerText.includes('plan')) {
      return '💰 **Planes de IAFY:**\n\n• Starter: 297€/mes\n  Perfecto para empezar\n\n• Professional: 497€/mes\n  El más popular (ROI 10x)\n\n• Enterprise: 997€/mes\n  Automatización total\n\n✅ Sin permanencia\n✅ Implementación en 7 días\n✅ Soporte 24/7\n\n¿Quieres que te ayude a elegir el plan ideal para tu negocio? Agenda una demo gratuita: https://calendly.com/iafyagency/30min';
    }
    if (lowerText.includes('demo') || lowerText.includes('prueba') || lowerText.includes('reunión') || lowerText.includes('agendar')) {
      return '📅 **¡Perfecto!** Te muestro cómo funciona:\n\n✨ Demo de 30 minutos 100% gratis\n✨ Sin compromiso ni presión\n✨ Verás casos reales de tu sector\n✨ Calculamos tu ROI específico\n\nAgenda aquí → https://calendly.com/iafyagency/30min\n\nO si prefieres, podemos hablar directamente por WhatsApp: +34 621 482 256';
    }
    if (lowerText.includes('caso') || lowerText.includes('ejemplo') || lowerText.includes('cliente') || lowerText.includes('éxito')) {
      return '⭐ **Casos de Éxito Reales:**\n\n🏥 Clínicas: 38.400€/año ahorrados\n  +85% más citas agendadas\n\n🛒 Ecommerce: +120% conversión\n  Atención instantánea 24/7\n\n🏢 Inmobiliarias: +95% visitas\n  Cualificación automática\n\n⚖️ Despachos: -60% llamadas perdidas\n  Agenda optimizada\n\n¿De qué sector es tu negocio? Te muestro casos específicos en una demo: https://calendly.com/iafyagency/30min';
    }
    if (lowerText.includes('funciona') || lowerText.includes('cómo') || lowerText.includes('qué hace') || lowerText.includes('hace')) {
      return '🤖 **Así funciona IAfy:**\n\n1️⃣ **Atiende automáticamente** WhatsApp, llamadas y emails 24/7\n\n2️⃣ **Responde consultas** con la información de tu negocio\n\n3️⃣ **Agenda citas** directamente en tu calendario\n\n4️⃣ **Cualifica leads** y te envía solo los calientes\n\n5️⃣ **Se integra** con tu CRM y herramientas\n\n✨ Todo sin intervención humana\n✨ Implementación en 7 días\n\n¿Te muestro cómo funciona específicamente para tu negocio? Agenda demo: https://calendly.com/iafyagency/30min';
    }
    if (lowerText.includes('hola') || lowerText.includes('buenas') || lowerText.includes('ey')) {
      return '👋 ¡Hola! Encantado de atenderte.\n\nSoy IAfy, tu asistente de automatización empresarial. Puedo ayudarte a:\n\n✨ Entender cómo funciona nuestra IA\n💰 Ver precios y planes\n📅 Agendar una demo gratuita\n⭐ Mostrarte casos de éxito\n\n¿Qué te gustaría saber?';
    }
    if (lowerText.includes('sector') || lowerText.includes('industria') || lowerText.includes('negocio')) {
      return '🎯 **Trabajamos con 8+ sectores:**\n\n🏥 Clínicas y salud\n🛒 Ecommerce\n🏢 Inmobiliarias\n⚖️ Despachos legales\n🍽️ Restaurantes\n📚 Centros educativos\n💪 Gimnasios\n🏢 Agencias y servicios\n\n¿Tu negocio está en alguno de estos? Cuéntame más y te muestro casos específicos de tu sector.';
    }

    return '✨ Entiendo. Para poder ayudarte mejor, te recomiendo que:\n\n📅 **Agendes una demo gratuita** (30 min) donde te muestro exactamente cómo IAfy funciona para tu negocio específico → https://calendly.com/iafyagency/30min\n\n💬 **O escríbeme directamente** al WhatsApp (+34 621 482 256) y hablamos en tiempo real.\n\n¿Qué prefieres?';
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg h-[90vh] max-h-[700px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-blue-500/30 flex flex-col animate-scaleIn overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500/20 bg-gradient-to-r from-slate-900/95 to-blue-900/30">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-60"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-xl border border-blue-400/30">
                <img
                  src="/5841271165010691996-removebg.png"
                  alt="IAFY Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg flex items-center">
                IAfy Assistant
                <Sparkles className="w-4 h-4 ml-2 text-blue-400" />
              </h3>
              <p className="text-blue-300 text-xs font-medium">Agente IA • Siempre disponible</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-all p-2 hover:bg-slate-800/50 rounded-xl hover:scale-110 transform duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white'
                      : 'bg-slate-800/80 text-slate-200 border border-blue-500/20'
                  }`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 px-2">
                    {message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-slate-800 rounded-2xl px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="px-4 py-3 border-t border-blue-500/20 bg-slate-900/50">
            <p className="text-xs text-blue-300 mb-3 font-medium">⚡ Respuestas rápidas:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(reply)}
                  className="text-xs px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 hover:to-purple-600/40 text-slate-200 rounded-full transition-all border border-blue-500/30 hover:border-blue-400/50 transform hover:scale-105 duration-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-blue-500/20 bg-slate-900/50">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-slate-800/60 text-white px-5 py-3 rounded-xl border border-blue-500/30 focus:border-blue-400 focus:outline-none transition-all placeholder:text-slate-500"
            />
            <button
              onClick={() => handleSendMessage(inputText)}
              disabled={!inputText.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-700 disabled:to-slate-700 text-white p-3 rounded-xl transition-all transform hover:scale-110 disabled:scale-100 shadow-lg disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAFYChat;
