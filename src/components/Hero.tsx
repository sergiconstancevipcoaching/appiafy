import React from 'react';
import { ArrowRight, Calendar, AlertTriangle, Sparkles, Zap } from 'lucide-react';

const Hero = () => {

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
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/30 overflow-hidden">
        {/* Efectos de fondo optimizados */}
        <div className="absolute inset-0 will-change-transform">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
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

                <a
                  href="https://wa.me/34621482256?text=Hola%2C%20tengo%20una%20empresa%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20IAFY%20y%20la%20automatizaci%C3%B3n%20con%20IA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-400 border-2 border-blue-400/50 hover:bg-blue-400/10 hover:border-blue-400 rounded-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Hablar por WhatsApp</span>
                </a>
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

            {/* Avatar IA flotante dimensional */}
            <div className="relative">
              <div className="relative group">
                {/* Anillos dimensionales giratorios */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-full h-full border-4 border-blue-500/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute w-5/6 h-5/6 border-4 border-purple-500/30 rounded-full animate-spin-reverse"></div>
                  <div className="absolute w-4/6 h-4/6 border-4 border-cyan-500/30 rounded-full animate-spin-slow"></div>
                </div>

                {/* Portal dimensional de fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

                {/* Avatar IA central */}
                <div className="relative aspect-square flex items-center justify-center">
                  {/* Efecto de energía */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400/40 rounded-full blur-2xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
                  </div>

                  {/* Cabeza del avatar */}
                  <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700 shadow-2xl">
                    <div className="absolute inset-2 bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-3xl transform -rotate-45 group-hover:-rotate-90 transition-transform duration-700 flex items-center justify-center">
                      {/* Ojos IA */}
                      <div className="flex space-x-8">
                        <div className="w-4 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
                        <div className="w-4 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Partículas flotantes */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Ondas de energía */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-64 h-64 border-2 border-cyan-400/20 rounded-full animate-ping-slow"></div>
                    <div className="absolute w-72 h-72 border-2 border-purple-400/20 rounded-full animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute w-80 h-80 border-2 border-blue-400/20 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>

                {/* Insignias flotantes */}
                <div className="absolute top-8 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl animate-bounce-slow">
                  <Sparkles className="w-5 h-5 inline mr-2" />
                  IA Avanzada
                </div>

                <div className="absolute bottom-8 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                  <Zap className="w-5 h-5 inline mr-2" />
                  24/7 Activo
                </div>

                {/* Texto descriptivo */}
                <div className="absolute -bottom-16 left-0 right-0 text-center">
                  <div className="inline-block bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-6 py-4">
                    <p className="text-blue-300 font-bold text-lg">
                      Tu Asistente IA Dimensional
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      Trabajando desde otra dimensión para tu empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;