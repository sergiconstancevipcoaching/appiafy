import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles, Target, TrendingUp, Users, Euro, Clock, Zap, AlertTriangle, CheckCircle, Phone, Calendar, Activity, BarChart3 } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center bg-primary-gradient overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-20"
          loop
          playsInline
          preload="metadata"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eed8c6a27b1f8352e6c02c1c8c8b4c6b6c6b6&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-primary-900/60 to-danger-900/80"></div>
      </div>

      {/* Efectos de fondo espectaculares */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-danger-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-success-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge de urgencia */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-danger-500/20 to-primary-500/20 backdrop-blur-sm border border-danger-500/40 rounded-full px-8 py-4 mb-8 shadow-spectacular animate-pulse">
            <AlertTriangle className="w-6 h-6 text-danger-400 animate-bounce" />
            <span className="text-danger-300 font-bold text-lg">🚨 CRISIS EMPRESARIAL ACTIVA</span>
            <div className="w-3 h-3 bg-danger-500 rounded-full animate-ping"></div>
          </div>

          {/* Título principal ultra-impactante */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
            <span className="block text-white mb-4">
              Tu empresa pierde
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-danger-400 via-primary-400 to-success-400 mb-4">
              187.200€ al mes
            </span>
            <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              por no tener IA trabajando 24/7
            </span>
          </h1>

          {/* Subtítulo con urgencia */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 backdrop-blur-sm p-8 rounded-3xl border border-danger-400/30 shadow-spectacular">
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-200 leading-relaxed mb-6">
                <span className="text-danger-400 font-bold text-2xl md:text-3xl">CADA MINUTO QUE ESPERAS = 130€ PERDIDOS.</span>
                <br />
                Mientras lees esto, tu competencia está capturando clientes que deberían ser tuyos con IA que nunca duerme.
              </p>
              
              {/* Contador de pérdidas en tiempo real */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-danger-900/40 to-neutral-900/60 p-6 rounded-2xl border border-danger-500/30">
                  <div className="flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-danger-400 mr-2" />
                    <span className="text-danger-400 font-bold">POR MINUTO</span>
                  </div>
                  <div className="text-3xl font-black text-white flex items-center justify-center">
                    <span className="text-danger-400">-130</span>
                    <Euro className="w-6 h-6 text-danger-400 ml-1" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-900/40 to-neutral-900/60 p-6 rounded-2xl border border-primary-500/30">
                  <div className="flex items-center justify-center mb-3">
                    <Activity className="w-6 h-6 text-primary-400 mr-2" />
                    <span className="text-primary-400 font-bold">POR DÍA</span>
                  </div>
                  <div className="text-3xl font-black text-white flex items-center justify-center">
                    <span className="text-primary-400">-6.240</span>
                    <Euro className="w-6 h-6 text-primary-400 ml-1" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-success-900/40 to-neutral-900/60 p-6 rounded-2xl border border-success-500/30">
                  <div className="flex items-center justify-center mb-3">
                    <BarChart3 className="w-6 h-6 text-success-400 mr-2" />
                    <span className="text-success-400 font-bold">POR MES</span>
                  </div>
                  <div className="text-3xl font-black text-white flex items-center justify-center">
                    <span className="text-success-400">-187.200</span>
                    <Euro className="w-6 h-6 text-success-400 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beneficios clave */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-success-900/30 to-neutral-900/50 p-8 rounded-3xl border border-success-500/30 shadow-lg">
              <Target className="w-12 h-12 text-success-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">CAPTURA 100% DE LEADS</h3>
              <p className="text-neutral-300">Respuesta instantánea 24/7. Nunca más pierdas un cliente por no contestar.</p>
            </div>
            <div className="bg-gradient-to-br from-primary-900/30 to-neutral-900/50 p-8 rounded-3xl border border-primary-500/30 shadow-lg">
              <Zap className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AUTOMATIZACIÓN TOTAL</h3>
              <p className="text-neutral-300">WhatsApp, llamadas, agendas. Todo automático sin intervención humana.</p>
            </div>
            <div className="bg-gradient-to-br from-electric-900/30 to-neutral-900/50 p-8 rounded-3xl border border-electric-500/30 shadow-lg">
              <TrendingUp className="w-12 h-12 text-electric-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">ROI 320% GARANTIZADO</h3>
              <p className="text-neutral-300">Recuperas la inversión en 30 días o te devolvemos el dinero.</p>
            </div>
          </div>

          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-danger-600 via-primary-600 to-success-600 hover:from-danger-500 hover:via-primary-500 hover:to-success-500 rounded-2xl shadow-2xl hover:shadow-danger-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-danger-400/50"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-danger-500 via-primary-500 to-success-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <span className="relative flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 animate-pulse" />
                DETÉN LAS PÉRDIDAS INMEDIATAMENTE
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </a>

            <a
              href="https://wa.me/34621482256?text=🚨%20URGENTE%20-%20Mi%20empresa%20está%20perdiendo%20187.200€%20al%20mes%0A%0AHola%20Carlos,%20he%20visto%20que%20mi%20empresa%20está%20perdiendo%20dinero%20cada%20minuto%20sin%20IA.%0A%0ANECESITO%20una%20demo%20URGENTE%20para%20parar%20las%20pérdidas.%0A%0A¿Cuándo%20podemos%20hablar?"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-primary-400 border-2 border-primary-400/50 hover:bg-primary-400/10 hover:border-primary-400 rounded-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-3" />
              HABLAR CON ESPECIALISTA AHORA
            </a>
          </div>

          {/* Garantías y confianza */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success-400" />
              <span className="font-medium">30 días garantía</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-400" />
              <span className="font-medium">Sin permanencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-electric-400" />
              <span className="font-medium">Implementación en 7 días</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-gold-400" />
              <span className="font-medium">+50 empresas confían en nosotros</span>
            </div>
          </div>

          {/* Urgencia final */}
          <div className="mt-12 bg-gradient-to-r from-danger-900/40 to-primary-900/40 backdrop-blur-sm p-6 rounded-2xl border border-danger-400/30 max-w-4xl mx-auto">
            <p className="text-danger-300 font-bold text-lg mb-2">
              ⚠️ CADA SEGUNDO QUE ESPERAS = MÁS DINERO PERDIDO
            </p>
            <p className="text-neutral-300">
              Tu competencia ya está usando IA para capturar TUS clientes. ¿Hasta cuándo vas a permitir que te roben TU dinero?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;