import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, AlertTriangle } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Intentar reproducir con audio primero
      const playWithAudio = async () => {
        try {
          video.muted = false;
          await video.play();
        } catch (error) {
          // Si falla con audio, intentar sin audio
          try {
            video.muted = true;
            await video.play();
          } catch (secondError) {
            console.log('Autoplay no permitido');
          }
        }
      };
      
      playWithAudio();
    }
  }, []);

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
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
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
                <span className="text-red-300 font-bold">🚨 Tu negocio pierde clientes</span>
              </div>

              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block text-white mb-2">Tu empresa</span>
                  <span className="block text-white mb-2">pierde</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-500 mb-2">
                    30.000€ al año
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    por no tener IA
                  </span>
                </h1>
              </div>

              {/* Subtítulo */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
                  Mientras lees esto, tu competencia captura clientes con IA 24/7. 
                  <span className="text-red-400 font-bold"> ¿Hasta cuándo vas a permitir que te roben ventas?</span>
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

            {/* Video a la derecha */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl">
                  <div className="aspect-video">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-3xl"
                      loop
                      playsInline
                      preload="metadata"
                      controls
                    >
                      <source src="https://videomp46523.live-website.com/wp-content/uploads/2025/07/VIDEO-WEBINAR-PREVIO-A-DEMO-2.mp4" type="video/mp4" />
                      <div className="flex items-center justify-center h-full bg-slate-800 text-white">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                          </div>
                          <p>Cargando video...</p>
                        </div>
                      </div>
                    </video>
                  </div>
                  
                  {/* Overlay con información */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-white font-bold text-lg mb-1">
                        Descubre cómo IAFY automatiza tu empresa
                      </div>
                      <div className="text-slate-300 text-sm">
                        Ve casos reales de empresas que ya están ganando con IA
                      </div>
                    </div>
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