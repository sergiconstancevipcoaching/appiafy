import React from 'react';
import { Zap, Target, TrendingUp, Shield, CheckCircle, ArrowRight, Sparkles, Clock, Users, Euro, Activity, BarChart3 } from 'lucide-react';

const ImmediateSolution = () => {
  const solutions = [
    {
      icon: Target,
      title: 'Atiende WhatsApp y llamadas sin intervención',
      description: 'Tu asistente IA responde automáticamente a consultas de pacientes las 24 horas del día.',
      before: 'Pierdes 40% de llamadas',
      after: 'Atención 24/7 automática',
      improvement: '+150% conversión',
      color: 'success',
      businessIcon: BarChart3
    },
    {
      icon: Zap,
      title: 'Agenda citas automáticamente, 24/7',
      description: 'Los pacientes pueden reservar citas en cualquier momento sin intervención humana.',
      before: 'Agenda manual limitada',
      after: 'Automatización completa',
      improvement: '24/7 disponible',
      color: 'primary',
      businessIcon: Activity
    },
    {
      icon: TrendingUp,
      title: 'Reduce hasta 2.500€/mes en plantilla',
      description: 'Automatiza tareas repetitivas y optimiza los recursos de tu equipo.',
      before: '2.500€/mes en personal',
      after: 'Automatización IA',
      improvement: '2.000€ ahorrados',
      color: 'electric',
      businessIcon: Euro
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-neutral-900 via-success-900/20 to-neutral-900 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-success-500/20 to-primary-500/20 backdrop-blur-sm border border-success-500/30 rounded-full px-6 sm:px-8 py-3 sm:py-4 mb-6 sm:mb-8 shadow-lg">
            <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-success-400 animate-spin" />
            <span className="text-success-300 font-medium text-base sm:text-lg">SOLUCIÓN INMEDIATA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-6 sm:mb-8 px-4">
            IAFY transforma tu empresa con IA
          </h2>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-neutral-700/50">
            <p className="text-lg sm:text-2xl lg:text-3xl text-neutral-300 leading-relaxed">
              Tecnología avanzada que trabaja mientras tú descansas. Implementación en 7 días.
            </p>
          </div>
        </div>

        {/* Grid de soluciones */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mb-12 sm:mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-3 bg-gradient-to-r from-${solution.color}-500 to-${solution.color}-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <div className={`relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-${solution.color}-500/30 transform hover:-translate-y-6 transition-all duration-500 h-full shadow-lg`}>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className={`bg-gradient-to-r from-${solution.color}-500 to-${solution.color}-600 w-16 sm:w-20 h-16 sm:h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                  </div>
                  <solution.businessIcon className={`w-8 sm:w-10 h-8 sm:h-10 text-${solution.color}-400 opacity-60`} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  {solution.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                  {solution.description}
                </p>

                {/* Antes/Después */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm sm:text-lg p-3 sm:p-4 bg-gradient-to-br from-danger-900/30 to-neutral-900/50 rounded-2xl border border-danger-500/30 space-y-1 sm:space-y-0">
                    <span className="text-danger-400 font-medium">❌ ANTES:</span>
                    <span className="text-neutral-400">{solution.before}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm sm:text-lg p-3 sm:p-4 bg-gradient-to-br from-success-900/30 to-neutral-900/50 rounded-2xl border border-success-500/30 space-y-1 sm:space-y-0">
                    <span className="text-success-400 font-medium">✅ DESPUÉS:</span>
                    <span className="text-white font-semibold">{solution.after}</span>
                  </div>
                </div>

                {/* Badge de mejora */}
                <div className={`inline-block bg-gradient-to-r from-${solution.color}-500 to-${solution.color}-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold shadow-lg`}>
                  {solution.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA de implementación */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-16 max-w-5xl mx-auto shadow-lg border-2 border-success-400/30">
            <Shield className="w-16 sm:w-20 h-16 sm:h-20 text-success-400 mx-auto mb-6 sm:mb-8" />
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              🚀 IMPLEMENTACIÓN EN 7 DÍAS
            </h3>
            <p className="text-lg sm:text-2xl text-neutral-300 mb-8 sm:mb-10">
              Demo gratuita en 30 minutos. Implementación completa en 7 días.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-5 sm:p-6 rounded-2xl border border-neutral-700/50">
                <div className="text-2xl sm:text-3xl font-bold text-success-400 mb-2">30 MIN</div>
                <div className="text-neutral-300 text-base sm:text-lg">Demo gratuita</div>
                <div className="text-neutral-400 text-xs sm:text-sm">Personalizada</div>
              </div>
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-5 sm:p-6 rounded-2xl border border-neutral-700/50">
                <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-2">7 DÍAS</div>
                <div className="text-neutral-300 text-base sm:text-lg">Implementación</div>
                <div className="text-neutral-400 text-xs sm:text-sm">Completa</div>
              </div>
              <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-5 sm:p-6 rounded-2xl border border-neutral-700/50">
                <div className="text-2xl sm:text-3xl font-bold text-gold-400 mb-2">24/7</div>
                <div className="text-neutral-300 text-base sm:text-lg">Funcionando</div>
                <div className="text-neutral-400 text-xs sm:text-sm">Sin descanso</div>
              </div>
            </div>

            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-2xl font-bold text-white bg-gradient-to-r from-success-600 to-primary-600 hover:from-success-500 hover:to-primary-500 rounded-3xl shadow-lg transform hover:-translate-y-3 hover:scale-105 transition-all duration-300"
            >
              <span>AGENDAR DEMO GRATUITA</span>
              <ArrowRight className="w-6 sm:w-8 h-6 sm:h-8 ml-3 sm:ml-4 group-hover:translate-x-2 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmediateSolution;