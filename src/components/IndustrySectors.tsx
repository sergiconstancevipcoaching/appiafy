import React from 'react';
import { Building2, Stethoscope, ShoppingBag, Home, Briefcase, Utensils, GraduationCap, Dumbbell, Euro, TrendingUp, Clock, ArrowRight } from 'lucide-react';

const IndustrySectors = () => {
  const sectors = [
    {
      icon: Stethoscope,
      name: 'Clínicas y Salud',
      gradient: 'from-blue-500 to-cyan-500',
      metrics: [
        { icon: Euro, value: '3.200€/mes', label: 'Ahorro en personal' },
        { icon: TrendingUp, value: '+85%', label: 'Más citas agendadas' },
        { icon: Clock, value: '24/7', label: 'Atención pacientes' }
      ],
      savings: '38.400€/año',
      example: 'Clínica Dental: automatiza citas, recordatorios y consultas básicas'
    },
    {
      icon: ShoppingBag,
      name: 'Ecommerce & Retail',
      gradient: 'from-purple-500 to-pink-500',
      metrics: [
        { icon: Euro, value: '2.800€/mes', label: 'Ahorro atención cliente' },
        { icon: TrendingUp, value: '+120%', label: 'Conversión ventas' },
        { icon: Clock, value: '0 min', label: 'Tiempo respuesta' }
      ],
      savings: '33.600€/año',
      example: 'Tienda Online: responde consultas, recomienda productos y cierra ventas'
    },
    {
      icon: Home,
      name: 'Inmobiliarias',
      gradient: 'from-orange-500 to-red-500',
      metrics: [
        { icon: Euro, value: '2.500€/mes', label: 'Ahorro en gestión' },
        { icon: TrendingUp, value: '+95%', label: 'Visitas agendadas' },
        { icon: Clock, value: '4h/día', label: 'Tiempo ahorrado' }
      ],
      savings: '30.000€/año',
      example: 'Agencia: cualifica leads, agenda visitas y filtra clientes serios'
    },
    {
      icon: Briefcase,
      name: 'Despachos y B2B',
      gradient: 'from-green-500 to-emerald-500',
      metrics: [
        { icon: Euro, value: '3.500€/mes', label: 'Ahorro operativo' },
        { icon: TrendingUp, value: '+150%', label: 'Reuniones cerradas' },
        { icon: Clock, value: '5h/día', label: 'Recuperadas' }
      ],
      savings: '42.000€/año',
      example: 'Abogados/Consultores: gestiona consultas iniciales y agenda reuniones'
    },
    {
      icon: Utensils,
      name: 'Restaurantes & Hostelería',
      gradient: 'from-yellow-500 to-orange-500',
      metrics: [
        { icon: Euro, value: '2.200€/mes', label: 'Ahorro en reservas' },
        { icon: TrendingUp, value: '+200%', label: 'Reservas online' },
        { icon: Clock, value: '24/7', label: 'Toma de pedidos' }
      ],
      savings: '26.400€/año',
      example: 'Restaurante: gestiona reservas, pedidos y consultas del menú'
    },
    {
      icon: GraduationCap,
      name: 'Educación & Formación',
      gradient: 'from-indigo-500 to-purple-500',
      metrics: [
        { icon: Euro, value: '2.600€/mes', label: 'Ahorro matrícula' },
        { icon: TrendingUp, value: '+180%', label: 'Inscripciones' },
        { icon: Clock, value: 'Auto', label: 'Resolución dudas' }
      ],
      savings: '31.200€/año',
      example: 'Academia: responde sobre cursos, matricula alumnos y agenda pruebas'
    },
    {
      icon: Dumbbell,
      name: 'Gimnasios & Wellness',
      gradient: 'from-pink-500 to-rose-500',
      metrics: [
        { icon: Euro, value: '2.400€/mes', label: 'Ahorro recepción' },
        { icon: TrendingUp, value: '+160%', label: 'Nuevos socios' },
        { icon: Clock, value: '24/7', label: 'Info y reservas' }
      ],
      savings: '28.800€/año',
      example: 'Gym: gestiona altas, reserva clases y responde sobre instalaciones'
    },
    {
      icon: Building2,
      name: 'Otros Sectores',
      gradient: 'from-slate-500 to-gray-500',
      metrics: [
        { icon: Euro, value: '2.000-4.000€', label: 'Ahorro mensual' },
        { icon: TrendingUp, value: '+100%', label: 'Productividad' },
        { icon: Clock, value: '24/7', label: 'Disponibilidad' }
      ],
      savings: '24.000-48.000€/año',
      example: 'Cualquier negocio con atención al cliente puede automatizar y ahorrar'
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Building2 className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Todos los Sectores</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6">
            IA para CUALQUIER sector empresarial
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Descubre cuánto puede ahorrar <span className="text-blue-400 font-bold">TU sector</span> con automatización IA
          </p>
        </div>

        {/* Grid de sectores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sectors.map((sector, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${sector.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-slate-600/50 p-6 transform hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${sector.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="w-7 h-7 text-white" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-4">{sector.name}</h3>

                {/* Metrics */}
                <div className="space-y-3 mb-4 flex-grow">
                  {sector.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <metric.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-bold text-sm">{metric.value}</div>
                        <div className="text-gray-400 text-xs truncate">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ahorro anual destacado */}
                <div className={`bg-gradient-to-r ${sector.gradient} bg-opacity-20 border border-white/20 rounded-xl p-3 mb-4`}>
                  <div className="text-center">
                    <div className="text-white font-black text-2xl">{sector.savings}</div>
                    <div className="text-gray-300 text-xs font-semibold">Ahorro anual</div>
                  </div>
                </div>

                {/* Example */}
                <div className="text-gray-400 text-sm italic border-t border-gray-700 pt-3">
                  {sector.example}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8 mb-8">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              ¿Cuánto puede ahorrar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">TU empresa</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Agenda una demo gratuita y te mostramos el ROI específico para tu negocio
            </p>

            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-blue-400/50"
            >
              <span>Ver mi ROI personalizado</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Demo gratuita de 30 minutos • Sin compromiso • Implementación en 7 días
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySectors;
