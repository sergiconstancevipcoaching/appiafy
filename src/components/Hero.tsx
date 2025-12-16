import React, { useState } from 'react';
import { ArrowRight, Calendar, AlertTriangle, Sparkles, Zap, MessageCircle } from 'lucide-react';
import IAFYChat from './IAFYChat';

const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="relative z-50 py-6 bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo y título */}
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/30">
                  <img 
                    src="/5841271165010691996-removebg.png" 
                    alt="IAFY Logo" 
                    className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/40 rounded-2xl px-6 py-3">
                  <div className="text-white font-bold text-xl">Automatización Empresarial</div>
                  <div className="text-blue-300 text-base">Powered by AI</div>
                </div>
              </div>
            </div>

            {/* Botón Demo Gratis */}
            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg border border-blue-400/50">
                <Calendar className="w-5 h-5 mr-2" />
                <div className="text-center">
                  <div className="text-white font-bold">Demo Gratuita</div>
                  <div className="text-blue-100 text-sm">30 min • Sin compromiso</div>
                </div>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                
                {/* Badge ¡HOY! */}
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  ¡HOY!
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 overflow-hidden">
        {/* Efectos de fondo ultra-optimizados */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div className="space-y-8">
              {/* Badge de urgencia */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/40 rounded-full px-6 py-3 shadow-lg">
                <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-red-300 font-bold">Tu empresa pierde clientes AHORA</span>
              </div>

              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block text-white mb-2">Tu negocio</span>
                  <span className="block text-white mb-2">pierde hasta</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-500 mb-2">
                    50.000€ al año
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    sin automatización IA
                  </span>
                </h1>
              </div>

              {/* Subtítulo */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
                  <span className="text-blue-400 font-bold">Ecommerce, clínicas, inmobiliarias, despachos, agencias...</span> Cualquier sector que atiende clientes está perdiendo dinero cada día sin IA.
                  <span className="text-red-400 font-bold"> ¿Cuánto está perdiendo TU empresa?</span>
                </p>
              </div>

              {/* CTAs principales */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/iafyagency/30min?month=2025-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-red-600 via-blue-600 to-purple-600 hover:from-red-500 hover:via-blue-500 hover:to-purple-500 rounded-2xl shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    <Calendar className="w-6 h-6 mr-3" />
                    Demo gratuita en 30 minutos
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </a>

                <button
                  onClick={() => setIsChatOpen(true)}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-400 border-2 border-blue-400/50 hover:bg-blue-400/10 hover:border-blue-400 rounded-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>Hablar con IAfy</span>
                </button>
              </div>

              {/* Garantías */}
              <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Demo gratuita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Implementación en 7 días</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Sin permanencia</span>
                </div>
              </div>
            </div>

            {/* Avatar IA flotante dimensional - OPTIMIZADO Y PEQUEÑO */}
            <div className="relative w-full max-w-sm mx-auto">
              <div className="relative group">
                {/* Anillos dimensionales giratorios - Reducidos y optimizados */}
                <div className="absolute inset-0 flex items-center justify-center will-change-transform">
                  <div className="absolute w-56 h-56 border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute w-44 h-44 border-2 border-purple-500/20 rounded-full animate-spin-reverse"></div>
                </div>

                {/* Avatar IA central - MÁS PEQUEÑO */}
                <div className="relative w-56 h-56 mx-auto flex items-center justify-center">
                  {/* Efecto de energía - Simplificado */}
                  <div className="absolute inset-0 will-change-transform">
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-400/25 rounded-full blur-xl animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-purple-400/25 rounded-full blur-xl animate-float-delayed"></div>
                  </div>

                  {/* Cabeza del avatar - REDUCIDA 40% */}
                  <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl transform rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-xl will-change-transform">
                    <div className="absolute inset-1.5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl transform -rotate-45 group-hover:-rotate-90 transition-transform duration-500 flex items-center justify-center">
                      {/* Ojos IA - REDUCIDOS */}
                      <div className="flex space-x-5">
                        <div className="w-2.5 h-7 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-2.5 h-7 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Partículas flotantes - REDUCIDAS A LA MITAD */}
                  <div className="absolute inset-0 pointer-events-none will-change-transform">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-particle"
                        style={{
                          left: `${25 + Math.random() * 50}%`,
                          top: `${25 + Math.random() * 50}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${3 + Math.random()}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Ondas de energía - REDUCIDAS */}
                  <div className="absolute inset-0 flex items-center justify-center will-change-transform">
                    <div className="absolute w-44 h-44 border border-cyan-400/10 rounded-full animate-ping-slow"></div>
                    <div className="absolute w-52 h-52 border border-purple-400/10 rounded-full animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Insignias flotantes - SIMPLIFICADAS */}
                <div className="absolute top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg text-xs">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  IA Avanzada
                </div>

                <div className="absolute bottom-2 -left-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg text-xs">
                  <Zap className="w-3 h-3 inline mr-1" />
                  24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat integrado */}
      <IAFYChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Hero;