import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, Calendar, ArrowRight, Phone, Mail, Target, TrendingUp, Euro, Clock, CheckCircle, AlertTriangle, Activity, BarChart3, Users, Shield } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
  actions?: Array<{
    type: 'calendly' | 'whatsapp' | 'link';
    text: string;
    url?: string;
    message?: string;
  }>;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [conversationStage, setConversationStage] = useState('initial');
  const [urgencyLevel, setUrgencyLevel] = useState(0);
  const [leadScore, setLeadScore] = useState(0);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mostrar mensaje de bienvenida inmediatamente al cargar la página
  useEffect(() => {
    if (!hasShownWelcome) {
      setTimeout(() => {
        addBotMessage(
          "🚀 ¡ALERTA EMPRESARIAL CRÍTICA!\n\nSoy Carlos Mendoza, el especialista #1 en automatización empresarial de España.\n\nDIAGNÓSTICO INMEDIATO: Tu empresa está perdiendo 187.200€ AL MES por no tener IA trabajando 24/7.\n\nDATOS REALES:\n💸 40% de llamadas perdidas = 74.880€/mes\n💸 Clientes nocturnos perdidos = 56.160€/mes\n💸 Personal administrativo innecesario = 56.160€/mes\n\n¿Cuál es tu nombre? Necesito cualificarte para la DEMO URGENTE que va a transformar tu negocio.",
          ["Mi nombre es...", "¿Cómo pierdes tanto dinero?", "Quiero la demo YA", "¿Qué es IAFY exactamente?", "Casos de éxito reales"]
        );
        setHasShownWelcome(true);
      }, 2000);
    }
  }, [hasShownWelcome]);

  useEffect(() => {
    if (isOpen && messages.length === 0 && hasShownWelcome) {
      setTimeout(() => {
        addBotMessage(
          "🔥 ¡PERFECTO! Veo que estás listo para actuar.\n\nComo especialista en ventas con +15 años automatizando empresas, te garantizo que en los próximos 5 minutos vas a descubrir:\n\n✅ Exactamente cuánto dinero pierdes cada día\n✅ Cómo recuperar esas pérdidas en 7 días\n✅ El plan específico para tu empresa\n✅ Garantía total de resultados\n\n¿Cuál es tu nombre? Voy a hacer un análisis personalizado de tu situación.",
          ["Mi nombre es...", "Analiza mi empresa", "¿Cuánto cuesta?", "Casos de éxito", "Garantías reales"]
        );
      }, 500);
    }
  }, [isOpen, messages.length, hasShownWelcome]);

  const addBotMessage = (text: string, quickReplies?: string[], actions?: Message['actions']) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      quickReplies,
      actions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#calendly-section') || 
                           document.querySelector('[data-url*="calendly"]')?.closest('section');
    
    if (calendlySection) {
      calendlySection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    } else {
      window.open('https://calendly.com/iafyagency/30min?month=2025-06', '_blank');
    }
  };

  const openWhatsApp = (customMessage?: string) => {
    const defaultMessage = customMessage || 
      `🚨 URGENTE - Demo IAFY\n\nHola Carlos, soy ${userName || 'un empresario'} ${userCompany ? `de ${userCompany}` : ''}.\n\n✅ CONFIRMADO: Mi empresa pierde dinero cada día sin IA\n✅ NECESITO: Demo personalizada INMEDIATA\n✅ OBJETIVO: Implementar automatización en 7 días\n\n¿Cuándo podemos hacer la demo? Quiero empezar YA.`;
    
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/34621482256?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const calculateLeadScore = (message: string): number => {
    let score = leadScore;
    
    const positiveWords = ['urgente', 'necesito', 'quiero', 'cuando', 'precio', 'demo', 'implementar', 'empresa', 'negocio', 'clientes', 'ventas', 'automatizar', 'ahora', 'ya'];
    const urgentWords = ['ya', 'ahora', 'inmediato', 'rapido', 'hoy', 'urgente', 'crisis', 'perdiendo'];
    const businessWords = ['empresa', 'negocio', 'clientes', 'ventas', 'facturación', 'empleados', 'costes'];
    
    positiveWords.forEach(word => {
      if (message.toLowerCase().includes(word)) score += 10;
    });
    
    urgentWords.forEach(word => {
      if (message.toLowerCase().includes(word)) {
        score += 25;
        setUrgencyLevel(prev => prev + 1);
      }
    });

    businessWords.forEach(word => {
      if (message.toLowerCase().includes(word)) score += 15;
    });
    
    setLeadScore(Math.min(score, 100));
    return score;
  };

  const getBotResponse = (userMessage: string): { text: string; quickReplies?: string[]; actions?: Message['actions'] } => {
    const message = userMessage.toLowerCase();
    const score = calculateLeadScore(userMessage);

    // RESPUESTAS ESPECÍFICAS PARA CADA OPCIÓN RÁPIDA
    
    // RESPUESTA: "Mi nombre es..."
    if (message.includes('mi nombre es') || message.includes('soy') || message.includes('me llamo')) {
      const nameMatch = userMessage.match(/(?:mi nombre es|soy|me llamo)\s+([a-záéíóúñ\s]+)/i);
      if (nameMatch) {
        setUserName(nameMatch[1].trim());
        setConversationStage('qualifying');
        return {
          text: `¡Excelente ${nameMatch[1].trim()}! 🎯\n\nANÁLISIS INMEDIATO DE TU SITUACIÓN:\n\nComo especialista que ha automatizado +50 empresas, veo que tu negocio está en MODO SUPERVIVENCIA en lugar de MODO CRECIMIENTO.\n\nDIAGNÓSTICO PROFESIONAL:\n📊 Pérdida estimada: 187.200€/mes\n📊 Eficiencia actual: 35% (debería ser 95%)\n📊 Competencia ganando: Mientras duermes\n📊 Potencial de crecimiento: +180% con IA\n\nPREGUNTA CLAVE: ¿Cuál es tu empresa, ${nameMatch[1].trim()}? Necesito hacer un cálculo exacto de tus pérdidas específicas.`,
          quickReplies: ["Mi empresa es...", "¿Cómo calculas las pérdidas?", "Quiero ver casos similares", "Demo personalizada YA", "¿Qué garantías ofreces?"]
        };
      }
    }

    // RESPUESTA: "¿Cómo pierdes tanto dinero?" / "¿Cómo calculas las pérdidas?"
    if (message.includes('cómo pierdes') || message.includes('tanto dinero') || message.includes('cómo calculas') || message.includes('pérdidas')) {
      setConversationStage('educating');
      return {
        text: `📊 METODOLOGÍA CIENTÍFICA DE CÁLCULO DE PÉRDIDAS\n\nFÓRMULA PROBADA (aplicada en +50 empresas):\n\n1. LLAMADAS PERDIDAS (40% promedio)\n💸 500 llamadas/mes × 40% perdidas = 200 oportunidades\n💸 200 oportunidades × 374€ valor promedio = 74.880€/mes\n\n2. HORARIO LIMITADO (16h sin atención)\n💸 Clientes nocturnos/fines de semana = 56.160€/mes\n💸 Competencia capturando TUS clientes = 28.080€/mes\n\n3. PERSONAL ADMINISTRATIVO INNECESARIO\n💸 Recepcionista: 2.400€/mes\n💸 Coordinador: 2.800€/mes\n💸 Tareas que IA hace gratis = 28.080€/mes\n\nTOTAL PÉRDIDA MENSUAL: 187.200€\nPÉRDIDA ANUAL: 2.246.400€\n\n¿Quieres que calculemos TU pérdida exacta?`,
        quickReplies: ["Sí, mi pérdida exacta", "¿Cómo lo solucionáis?", "Casos de empresas similares", "Demo con cálculos reales", "Implementar YA"]
      };
    }

    // RESPUESTA: "Quiero la demo YA" / "Demo personalizada YA"
    if (message.includes('demo ya') || message.includes('demo personalizada') || message.includes('quiero ya') || message.includes('urgente')) {
      setUrgencyLevel(prev => prev + 3);
      setConversationStage('closing');
      return {
        text: `🔥 **¡PERFECTO! DETECTO URGENCIA MÁXIMA.**\n\n**DEMO PERSONALIZADA INMEDIATA** - Lo que verás:\n\n**MINUTO 1-5:** Análisis de tu empresa específica\n📊 Cálculo exacto de pérdidas actuales\n📊 Potencial de crecimiento con IA\n\n**MINUTO 6-15:** IA funcionando EN VIVO\n🤖 Conversaciones reales con clientes\n🤖 Agenda automática en acción\n🤖 Integración con tu CRM\n\n**MINUTO 16-25:** Plan de implementación\n⚡ Cronograma de 7 días\n⚡ ROI garantizado específico\n⚡ Inversión vs retorno\n\n**MINUTO 26-30:** Cierre y próximos pasos\n✅ Contrato si decides continuar\n✅ Inicio inmediato\n\n**¿Prefieres que te llame AHORA o agendamos para hoy?**`,
        actions: [
          {
            type: 'whatsapp',
            text: '📞 LLAMARME AHORA (INMEDIATO)',
            message: `🚨 URGENTE - Llamada Inmediata\n\nHola Carlos, NECESITO que me llames AHORA.\n\nDetectaste urgencia máxima y tienes razón. Mi empresa está perdiendo dinero cada minuto.\n\n¿Puedes llamarme en los próximos 5 minutos?\n\nMi teléfono: [AÑADIR TELÉFONO]\nMi empresa: [AÑADIR EMPRESA]`
          },
          {
            type: 'calendly',
            text: '📅 AGENDAR PARA HOY',
          }
        ],
        quickReplies: ["¿Cuánto cuesta exactamente?", "Garantías de resultados", "Casos de éxito similares"]
      };
    }

    // RESPUESTA: "¿Qué es IAFY exactamente?"
    if (message.includes('qué es iafy') || message.includes('iafy exactamente') || message.includes('qué es')) {
      return {
        text: `🚀 **IAFY = LA REVOLUCIÓN EMPRESARIAL #1 EN ESPAÑA**\n\n**QUÉ SOMOS:**\nLa plataforma de automatización empresarial más avanzada de Europa. Convertimos tu empresa en una máquina de ventas 24/7.\n\n**TECNOLOGÍA EXCLUSIVA:**\n🤖 **GPT-4 Personalizado:** Entrenado específicamente para TU empresa\n🤖 **Voz Humana:** Indistinguible de una persona real\n🤖 **WhatsApp Oficial:** API certificada por Meta\n🤖 **Integración Total:** Con cualquier CRM existente\n\n**RESULTADOS GARANTIZADOS:**\n📈 **+180% conversiones** (promedio clientes)\n📈 **-70% costes** operativos\n📈 **24/7 atención** sin descanso\n📈 **ROI 320%** en 30 días\n\n**DIFERENCIA CLAVE:** No somos un chatbot básico. Somos tu empleado perfecto que nunca duerme, nunca se enferma, nunca pide vacaciones.\n\n**¿Quieres ver exactamente cómo funcionaría en TU empresa?**`,
        quickReplies: ["Sí, demo para mi empresa", "Casos de mi sector", "¿Cuánto cuesta?", "Garantías reales", "Empezar implementación"]
      };
    }

    // RESPUESTA: "Casos de éxito reales" / "Casos de empresas similares"
    if (message.includes('casos') || message.includes('éxito') || message.includes('ejemplos') || message.includes('similares')) {
      return {
        text: `🏆 **CASOS DE ÉXITO VERIFICADOS** (Clientes reales):\n\n**TECHSOLUTIONS MADRID** (Consultoría IT)\n💰 **Antes:** Perdían 4.200€/mes en llamadas\n💰 **Después:** +180% conversiones, +6.300€/mes extra\n💰 **ROI:** 420% en 45 días\n\n**INNOVAMARKETING BCN** (Marketing Digital)\n💰 **Antes:** 3 empleados administrativos (6.600€/mes)\n💰 **Después:** IA hace todo, ahorran 5.200€/mes\n💰 **ROI:** 280% mensual\n\n**GLOBALTRADE VALENCIA** (Comercio Internacional)\n💰 **Antes:** Perdían clientes internacionales (horarios)\n💰 **Después:** +300% clientes, 24/7 multiidioma\n💰 **ROI:** 450% en 60 días\n\n**CLÍNICA DENTAL PREMIUM** (Sector Salud)\n💰 **Antes:** 40% citas perdidas por no contestar\n💰 **Después:** 95% ocupación, +150 pacientes/mes\n💰 **ROI:** 380% mensual\n\n**¿Quieres ser nuestro próximo caso de éxito?**`,
        actions: [
          {
            type: 'whatsapp',
            text: '📞 HABLAR CON CLIENTES REALES',
            message: `Hola Carlos, he visto los casos de éxito.\n\n¿Puedo hablar directamente con algún cliente para verificar los resultados?\n\nQuiero resultados similares para mi empresa.\n\nMi sector: [AÑADIR SECTOR]\nMi empresa: [AÑADIR EMPRESA]`
          },
          {
            type: 'calendly',
            text: '🏆 SER EL PRÓXIMO CASO',
          }
        ],
        quickReplies: ["Demo para mi sector", "¿Cómo lo conseguís?", "Garantías de resultados", "Empezar YA"]
      };
    }

    // RESPUESTA: "Mi empresa es..."
    if (message.includes('mi empresa es') || message.includes('trabajo en') || message.includes('empresa es')) {
      const companyMatch = userMessage.match(/(?:mi empresa es|trabajo en|empresa es)\s+([a-záéíóúñ\s]+)/i);
      if (companyMatch) {
        setUserCompany(companyMatch[1].trim());
      }
      setConversationStage('analyzing');
      return {
        text: `📊 **ANÁLISIS EMPRESARIAL INMEDIATO**\n\n${companyMatch ? `**${companyMatch[1].trim()}** - ` : ''}**DIAGNÓSTICO PROFESIONAL:**\n\n**SITUACIÓN ACTUAL DETECTADA:**\n💸 **Pérdida estimada:** 15.600€/mes\n💸 **Eficiencia operativa:** 35% (debería ser 95%)\n💸 **Clientes perdidos:** 40% por falta de atención 24/7\n💸 **Competencia ganando:** Mientras tu equipo descansa\n\n**SOLUCIÓN IAFY PERSONALIZADA:**\n✅ **IA entrenada** específicamente para tu sector\n✅ **Automatización total** de consultas repetitivas\n✅ **Captación 24/7** sin intervención humana\n✅ **Integración perfecta** con tus sistemas actuales\n\n**PROYECCIÓN CON IAFY:**\n📈 **+180% conversiones** en 30 días\n📈 **-70% costes** operativos\n📈 **+24/7 disponibilidad** para clientes\n📈 **ROI 320%** garantizado\n\n**¿Quieres ver exactamente cómo funcionaría en tu empresa?**`,
        actions: [
          {
            type: 'calendly',
            text: '🎯 DEMO PERSONALIZADA PARA MI EMPRESA',
          },
          {
            type: 'whatsapp',
            text: '📞 ANÁLISIS URGENTE',
            message: `Hola Carlos, soy ${userName} de ${companyMatch?.[1] || 'mi empresa'}.\n\nHe visto el análisis y es exacto. Estamos perdiendo 15.600€/mes.\n\nNECESITO una demo personalizada URGENTE para mi sector específico.\n\n¿Cuándo podemos hacerla?`
          }
        ],
        quickReplies: ["¿Cuánto cuesta exactamente?", "Casos de mi sector", "Garantías de ROI", "Implementar esta semana"]
      };
    }

    // RESPUESTA: "¿Cuánto cuesta?" / "¿Cuánto cuesta exactamente?"
    if (message.includes('cuánto cuesta') || message.includes('precio') || message.includes('coste') || message.includes('inversión')) {
      setConversationStage('pricing');
      return {
        text: `💰 **INVERSIÓN vs RETORNO GARANTIZADO:**\n\n**IAFY PROFESSIONAL** (Más popular)\n💳 **Inversión:** 497€/mes\n💰 **Tu retorno:** 15.600€+/mes\n💰 **Beneficio neto:** +15.103€/mes\n💰 **ROI:** 3.038% mensual\n\n**COMPARATIVA REAL:**\n❌ **Sin IAFY:** Pierdes 15.600€/mes\n✅ **Con IAFY:** Ganas 15.103€/mes extra\n🔥 **Diferencia:** +30.703€/mes\n\n**GARANTÍAS BLINDADAS:**\n🛡️ **30 días prueba** → Si no funciona, dinero devuelto\n🛡️ **ROI garantizado** → O trabajamos gratis\n🛡️ **Sin permanencia** → Cancelas cuando quieras\n🛡️ **Soporte 24/7** → Nunca estás solo\n\n**PREGUNTA CLAVE:** ¿Prefieres seguir perdiendo 15.600€ cada mes o empezar a ganar 15.103€ extra?\n\n**OFERTA ESPECIAL HOY:** Primera implementación GRATIS (valor 2.500€)`,
        actions: [
          {
            type: 'calendly',
            text: '💰 EMPEZAR A GANAR 15.103€/MES',
          },
          {
            type: 'whatsapp',
            text: '📞 CERRAR AHORA CON DESCUENTO',
            message: `Hola Carlos, he visto los números:\n\n✅ Inversión: 497€/mes\n✅ Retorno: 15.600€+/mes\n✅ Beneficio: +15.103€/mes\n✅ ROI: 3.038%\n\nQuiero la oferta especial de implementación gratis.\n\n¿Podemos cerrar ahora mismo?`
          }
        ],
        quickReplies: ["¿Garantía real?", "Casos con ROI similar", "Empezar implementación", "Oferta especial"]
      };
    }

    // RESPUESTA: "¿Garantías reales?" / "Garantías de resultados"
    if (message.includes('garantía') || message.includes('garantías') || message.includes('seguro') || message.includes('resultados')) {
      return {
        text: `🛡️ **GARANTÍAS BLINDADAS VERIFICABLES:**\n\n**1. GARANTÍA DE RESULTADOS (30 DÍAS)**\n✅ Si no recuperas la inversión → **DINERO DEVUELTO 100%**\n✅ Si no aumentan conversiones → **TRABAJAMOS GRATIS**\n✅ Si no reduces costes → **REEMBOLSO INMEDIATO**\n\n**2. GARANTÍA TÉCNICA**\n✅ **99.9% uptime** → Compensación si falla\n✅ **Respuesta <1 segundo** → O mejoramos gratis\n✅ **Integración perfecta** → O desarrollamos gratis\n\n**3. GARANTÍA COMERCIAL**\n✅ **Sin permanencia** → Cancelas cuando quieras\n✅ **Soporte 24/7** → Siempre disponible\n✅ **Actualizaciones gratis** → De por vida\n\n**4. GARANTÍA LEGAL**\n✅ **Contrato blindado** → Protección total\n✅ **GDPR compliant** → Datos seguros\n✅ **Seguro responsabilidad** → 1M€ cobertura\n\n**PRUEBA SOCIAL:** +50 empresas confían en nosotros\n**SATISFACCIÓN:** 98% clientes renovaron\n\n**¿Listo para empezar sin riesgo?**`,
        actions: [
          {
            type: 'calendly',
            text: '🛡️ EMPEZAR SIN RIESGO',
          },
          {
            type: 'whatsapp',
            text: '📞 CERRAR CON GARANTÍAS',
            message: `Hola Carlos, he visto todas las garantías:\n\n✅ 30 días dinero devuelto\n✅ Resultados garantizados\n✅ Sin permanencia\n✅ Soporte 24/7\n\nEstoy convencido. ¿Podemos cerrar con todas las garantías incluidas?`
          }
        ],
        quickReplies: ["Empezar implementación", "Ver contrato", "Casos verificables", "Cerrar YA"]
      };
    }

    // RESPUESTA: "Empezar implementación" / "Implementar YA"
    if (message.includes('empezar') || message.includes('implementar') || message.includes('ya') || message.includes('cerrar')) {
      return {
        text: `🚀 **¡PERFECTO! CERRAMOS AHORA MISMO.**\n\n**PROCESO DE IMPLEMENTACIÓN INMEDIATA:**\n\n**HOY (Día 0):**\n✅ Firma de contrato digital\n✅ Acceso inmediato a plataforma\n✅ Análisis técnico de tu empresa\n\n**DÍAS 1-3: CONFIGURACIÓN**\n⚡ Entrenamiento IA con tu información\n⚡ Integración con tus sistemas\n⚡ Configuración de respuestas personalizadas\n\n**DÍAS 4-6: PRUEBAS**\n🧪 Tests con conversaciones reales\n🧪 Ajustes finos de personalidad\n🧪 Validación de integraciones\n\n**DÍA 7: ¡FUNCIONANDO!**\n🎯 Lanzamiento en producción\n🎯 Monitoreo en tiempo real\n🎯 Soporte técnico activo\n\n**BONUS ESPECIAL HOY:**\n🎁 Implementación gratis (valor 2.500€)\n🎁 Primer mes 50% descuento\n🎁 Soporte premium 3 meses gratis\n\n**¿Cómo prefieres cerrar?**`,
        actions: [
          {
            type: 'calendly',
            text: '📅 DEMO + CIERRE (30 MIN)',
          },
          {
            type: 'whatsapp',
            text: '📞 CERRAR POR TELÉFONO AHORA',
            message: `Hola Carlos, estoy listo para CERRAR AHORA MISMO.\n\nQuiero implementar IAFY en mi empresa con todos los bonus:\n✅ Implementación gratis\n✅ Primer mes 50% descuento\n✅ Soporte premium 3 meses\n\n¿Podemos cerrar por teléfono en los próximos 5 minutos?\n\nMi teléfono: [AÑADIR NÚMERO]`
          }
        ]
      };
    }

    // RESPUESTAS GENERALES ULTRA-AGRESIVAS MEJORADAS
    if (message.includes('demo') || message.includes('ver') || message.includes('mostrar')) {
      return {
        text: `🎯 **DEMO PERSONALIZADA = CIERRE GARANTIZADO**\n\nEn **30 minutos** verás:\n\n**ANÁLISIS REAL DE TU EMPRESA:**\n💰 Cuánto dinero pierdes EXACTAMENTE cada día\n💰 Cuánto ganarías con IAFY (números reales)\n💰 ROI específico para TU sector\n\n**IA FUNCIONANDO EN VIVO:**\n🤖 Conversaciones reales con tus clientes\n🤖 Agenda automática en acción\n🤖 Integración con tu CRM funcionando\n\n**PLAN DE IMPLEMENTACIÓN:**\n⚡ Cronograma específico de 7 días\n⚡ Equipo técnico asignado\n⚡ Garantías contractuales\n\n**CIERRE INMEDIATO:**\n✅ Contrato si decides continuar\n✅ Inicio en 24 horas\n✅ Bonus especiales solo hoy\n\n**¿Prefieres que te llame AHORA o agendamos?**`,
        actions: [
          {
            type: 'whatsapp',
            text: '📞 LLAMARME AHORA (INMEDIATO)',
            message: `Hola Carlos, quiero la demo personalizada.\n\n¿Puedes llamarme AHORA? Estoy listo para ver los números reales y cerrar si me convence.\n\nMi teléfono: [AÑADIR NÚMERO]\nMi empresa: [AÑADIR EMPRESA]\nMi sector: [AÑADIR SECTOR]`
          },
          {
            type: 'calendly',
            text: '📅 AGENDAR DEMO + CIERRE',
          }
        ],
        quickReplies: ["¿Qué veré exactamente?", "¿Es realmente gratis?", "Casos de mi sector", "Cerrar ahora"]
      };
    }

    // Respuesta por defecto - MÁXIMA AGRESIVIDAD MEJORADA
    return {
      text: `⚠️ **ALERTA CRÍTICA: PÉRDIDA ACTIVA EN TIEMPO REAL**\n\nCada minuto que pasa sin IA = **4.33€ perdidos**\nCada hora = **260€ perdidos**\nCada día = **6.240€ perdidos**\n\n**REALIDAD BRUTAL:**\n💸 Tu competencia está capturando TUS clientes AHORA MISMO\n💸 Pierdes 6.240€ CADA DÍA que esperas\n💸 187.200€ CADA MES sin automatización\n💸 2.246.400€ CADA AÑO de pérdidas\n\n**SOLUCIÓN INMEDIATA:** Demo de 30 min donde te muestro:\n✅ Cómo recuperar esas pérdidas en 7 días\n✅ Plan específico para TU empresa\n✅ ROI garantizado del 320%\n✅ Implementación sin riesgo\n\n**PREGUNTA DIRECTA:** ¿Prefieres seguir perdiendo 6.240€ cada día o empezar a ganarlos?`,
      actions: [
        {
          type: 'whatsapp',
          text: '🚨 PARAR PÉRDIDAS AHORA MISMO',
          message: `🚨 URGENTE - Parar Pérdidas Inmediatas\n\nHola Carlos, tienes razón. Mi empresa está perdiendo 6.240€ cada día.\n\nNECESITO hablar contigo AHORA MISMO para parar las pérdidas.\n\n¿Puedes llamarme en los próximos 2 minutos?\n\nMi teléfono: [AÑADIR TELÉFONO]\nMi empresa: [AÑADIR EMPRESA]`
        },
        {
          type: 'calendly',
          text: '📅 DEMO URGENTE (30 MIN)',
        }
      ],
      quickReplies: ["¿Cuánto ganaré exactamente?", "Casos de éxito", "Garantías totales", "CERRAR YA"]
    };
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addUserMessage(inputText);
    const userMessage = inputText;
    setInputText('');

    simulateTyping();
    setTimeout(() => {
      const response = getBotResponse(userMessage);
      addBotMessage(response.text, response.quickReplies, response.actions);
    }, 1200 + Math.random() * 600);
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);
    simulateTyping();
    setTimeout(() => {
      const response = getBotResponse(reply);
      addBotMessage(response.text, response.quickReplies, response.actions);
    }, 800);
  };

  const handleAction = (action: NonNullable<Message['actions']>[0]) => {
    if (action.type === 'calendly') {
      scrollToCalendly();
    } else if (action.type === 'whatsapp') {
      openWhatsApp(action.message);
    } else if (action.type === 'link' && action.url) {
      window.open(action.url, '_blank');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante FIJO EN TODA LA APLICACIÓN */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative"
          >
            {/* Efecto de brillo mejorado */}
            <div className="absolute -inset-4 bg-gradient-to-r from-danger-500 via-primary-500 to-success-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
            
            {/* Botón principal */}
            <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-4 rounded-full border border-white/40 shadow-spectacular hover:scale-110 transition-all duration-300">
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-white" />
                
                {/* Badge de urgencia */}
                <div className="absolute -top-2 -right-2 bg-danger-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg">
                  🚨 URGENTE
                </div>
              </div>
            </div>

            {/* Tooltip mejorado */}
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-neutral-900 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap shadow-xl border border-danger-400/30">
                <div className="font-bold text-danger-400">🚨 Carlos - Especialista #1 España</div>
                <div className="text-neutral-300">Tu empresa pierde 6.240€/día</div>
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900"></div>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Ventana del chatbot FIJA EN TODA LA APLICACIÓN */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl shadow-2xl border border-neutral-700/50 z-[9999] flex flex-col overflow-hidden">
          {/* Header ULTRA-AGRESIVO */}
          <div className="bg-gradient-to-r from-danger-600 via-primary-600 to-success-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success-400 rounded-full border-2 border-white flex items-center justify-center">
                  <Target className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Carlos Mendoza</h3>
                <p className="text-primary-100 text-sm flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  🚨 Especialista #1 España
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors duration-200 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lead Score Indicator */}
          {leadScore > 0 && (
            <div className="bg-gradient-to-r from-success-600/20 to-primary-600/20 p-2 border-b border-neutral-700/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-success-400 font-semibold">Lead Score: {leadScore}/100</span>
                <span className="text-primary-400">Urgencia: {urgencyLevel > 3 ? '🔥 MÁXIMA' : urgencyLevel > 1 ? '⚡ ALTA' : '📊 MEDIA'}</span>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                  {message.isBot && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="w-4 h-4 text-danger-400" />
                      <span className="text-xs text-neutral-400 font-semibold">Carlos - Especialista IAFY</span>
                      <div className="w-2 h-2 bg-danger-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                  <div className={`p-4 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-danger-600/20 via-primary-600/20 to-success-600/20 border border-danger-500/30 text-white' 
                      : 'bg-gradient-to-r from-success-600 to-primary-600 text-white'
                  }`}>
                    <p className="whitespace-pre-line text-sm leading-relaxed font-medium">{message.text}</p>
                  </div>
                  
                  {/* Action buttons ULTRA-AGRESIVOS */}
                  {message.actions && (
                    <div className="mt-3 space-y-2">
                      {message.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleAction(action)}
                          className="block w-full text-left px-4 py-3 text-sm bg-gradient-to-r from-danger-600 to-primary-600 hover:from-danger-500 hover:to-primary-500 text-white rounded-xl border border-danger-400/50 hover:border-danger-400 transition-all duration-200 transform hover:scale-105 font-bold shadow-lg"
                        >
                          <div className="flex items-center justify-between">
                            <span>{action.text}</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Quick replies ULTRA-AGRESIVAS */}
                  {message.quickReplies && (
                    <div className="mt-3 space-y-1">
                      {message.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="block w-full text-left px-3 py-2 text-sm bg-neutral-800/50 hover:bg-neutral-700/50 text-neutral-300 hover:text-white rounded-lg border border-neutral-600/30 hover:border-danger-500/50 transition-all duration-200 font-medium"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {message.isBot && (
                  <div className="order-1 mr-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-danger-500 via-primary-500 to-success-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
                {!message.isBot && (
                  <div className="order-2 ml-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-success-500 to-primary-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing indicator ULTRA-AGRESIVO */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-danger-500 via-primary-500 to-success-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-danger-600/20 via-primary-600/20 to-success-600/20 border border-danger-500/30 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-danger-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-success-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input ULTRA-AGRESIVO */}
          <div className="p-4 border-t border-neutral-700/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu respuesta..."
                className="flex-1 bg-neutral-800/50 border border-neutral-600/50 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:border-danger-500/50 transition-colors duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-danger-600 via-primary-600 to-success-600 hover:from-danger-500 hover:via-primary-500 hover:to-success-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Quick actions ULTRA-AGRESIVAS */}
            <div className="flex space-x-2 mt-3">
              <button
                onClick={() => handleQuickReply("🚨 DEMO URGENTE YA")}
                className="flex-1 bg-gradient-to-r from-danger-600/20 to-primary-600/20 border border-danger-500/30 text-danger-400 px-3 py-2 rounded-lg text-xs font-bold hover:bg-danger-600/30 transition-all duration-200"
              >
                <AlertTriangle className="w-3 h-3 inline mr-1" />
                DEMO YA
              </button>
              <button
                onClick={() => handleQuickReply("¿Cuánto ganaré exactamente?")}
                className="flex-1 bg-gradient-to-r from-primary-600/20 to-success-600/20 border border-primary-500/30 text-primary-400 px-3 py-2 rounded-lg text-xs font-bold hover:bg-primary-600/30 transition-all duration-200"
              >
                <Euro className="w-3 h-3 inline mr-1" />
                ROI
              </button>
              <button
                onClick={() => openWhatsApp()}
                className="flex-1 bg-gradient-to-r from-success-600/20 to-danger-600/20 border border-success-500/30 text-success-400 px-3 py-2 rounded-lg text-xs font-bold hover:bg-success-600/30 transition-all duration-200"
              >
                <Phone className="w-3 h-3 inline mr-1" />
                LLAMAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;