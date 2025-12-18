import React, { useState } from 'react';
import { Calculator, TrendingUp, TrendingDown, Euro, Users, Clock, ArrowRight, Zap, Target, Activity, BarChart3 } from 'lucide-react';

const ROICalculator = () => {
  const [customers, setCustomers] = useState(100);
  const [avgValue, setAvgValue] = useState(150);
  const [lostCalls, setLostCalls] = useState(30);
  const [staffCost, setStaffCost] = useState(2000);

  const calculations = {
    monthlyRevenue: customers * avgValue,
    lostRevenue: (customers * avgValue * lostCalls) / 100,
    totalLoss: ((customers * avgValue * lostCalls) / 100) + staffCost,
    withIAFY: {
      recovered: ((customers * avgValue * lostCalls) / 100) * 0.85,
      staffSavings: staffCost * 0.7,
      iafyCost: 497
    }
  };

  calculations.withIAFY.totalSavings = calculations.withIAFY.recovered + calculations.withIAFY.staffSavings - calculations.withIAFY.iafyCost;
  calculations.withIAFY.roi = ((calculations.withIAFY.totalSavings / calculations.withIAFY.iafyCost) * 100);

  return (
    <section className="relative py-24 lg:py-32 bg-primary-gradient overflow-hidden">
      {/* Efectos de fondo espectaculares */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success-500/15 rounded-full blur-3xl animate-spectacular"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-spectacular delay-1000"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header espectacular */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 card-success rounded-full px-10 py-5 mb-8 shadow-spectacular animate-electric">
            <Calculator className="w-8 h-8 text-success-400" />
            <span className="text-success-300 font-bold text-xl">CALCULADORA ROI PERSONALIZADA</span>
            <Zap className="w-6 h-6 text-primary-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-success-100 to-primary-200 mb-8 leading-tight">
            Calcula tu retorno de inversión
          </h2>
          <div className="max-w-5xl mx-auto card-primary p-8 rounded-3xl shadow-spectacular">
            <p className="text-2xl lg:text-3xl text-neutral-300 leading-relaxed">
              <span className="text-success-400 font-bold text-3xl">DATOS REALES.</span> Descubre cuánto puedes ahorrar y ganar con IAFY en tu empresa específica
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Inputs de calculadora espectaculares */}
          <div className="space-y-8 lg:space-y-10">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary-500 to-success-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative card-primary p-6 sm:p-10 rounded-3xl shadow-spectacular">
                <div className="flex items-center justify-center sm:justify-start space-x-4 mb-8 sm:mb-10">
                  <Target className="w-8 sm:w-10 h-8 sm:h-10 text-primary-400" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Datos de tu empresa</h3>
                  <Activity className="w-6 sm:w-8 h-6 sm:h-8 text-primary-400 opacity-60" />
                </div>
                
                <div className="space-y-8 sm:space-y-10">
                  <div>
                    <label className="block text-white font-semibold mb-5 text-lg sm:text-xl">
                      <Users className="w-6 sm:w-8 h-6 sm:h-8 inline mr-2 sm:mr-4" />
                      Clientes nuevos por mes
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="500"
                      value={customers}
                      onChange={(e) => setCustomers(Number(e.target.value))}
                      className="w-full slider"
                    />
                    <div className="grid grid-cols-3 gap-2 text-neutral-400 text-sm sm:text-lg mt-4 w-full">
                      <span className="text-left">50</span>
                      <span className="text-primary-400 font-bold text-xl sm:text-2xl text-center">{customers}</span>
                      <span className="text-right">500</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-5 text-lg sm:text-xl">
                      <Euro className="w-6 sm:w-8 h-6 sm:h-8 inline mr-2 sm:mr-4" />
                      Valor promedio por cliente
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="500"
                      value={avgValue}
                      onChange={(e) => setAvgValue(Number(e.target.value))}
                      className="w-full slider"
                    />
                    <div className="grid grid-cols-3 gap-2 text-neutral-400 text-sm sm:text-lg mt-4 w-full">
                      <span className="text-left">50€</span>
                      <span className="text-primary-400 font-bold text-xl sm:text-2xl flex items-center justify-center">
                        {avgValue}
                        <Euro className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                      </span>
                      <span className="text-right">500€</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-5 text-lg sm:text-xl">
                      <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 inline mr-2 sm:mr-4" />
                      % de llamadas/mensajes perdidos
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      value={lostCalls}
                      onChange={(e) => setLostCalls(Number(e.target.value))}
                      className="w-full slider"
                    />
                    <div className="grid grid-cols-3 gap-2 text-neutral-400 text-sm sm:text-lg mt-4 w-full">
                      <span className="text-left">10%</span>
                      <span className="text-danger-400 font-bold text-xl sm:text-2xl text-center">{lostCalls}%</span>
                      <span className="text-right">60%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-5 text-lg sm:text-xl">
                      <Clock className="w-6 sm:w-8 h-6 sm:h-8 inline mr-2 sm:mr-4" />
                      Coste mensual personal administrativo
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="5000"
                      step="100"
                      value={staffCost}
                      onChange={(e) => setStaffCost(Number(e.target.value))}
                      className="w-full slider"
                    />
                    <div className="grid grid-cols-3 gap-2 text-neutral-400 text-sm sm:text-lg mt-4 w-full">
                      <span className="text-left">1.000€</span>
                      <span className="text-primary-400 font-bold text-xl sm:text-2xl flex items-center justify-center">
                        {staffCost}
                        <Euro className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                      </span>
                      <span className="text-right">5.000€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resultados espectaculares */}
          <div className="space-y-8 lg:space-y-10">
            {/* Situación actual */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-danger-500 to-gold-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative card-danger p-6 sm:p-10 rounded-3xl shadow-spectacular">
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
                  <TrendingDown className="w-8 sm:w-10 h-8 sm:h-10 text-danger-400 sm:mr-4" />
                  <span>Situación actual (sin IAFY)</span>
                  <BarChart3 className="hidden sm:block w-8 h-8 text-danger-400 opacity-60 sm:ml-auto" />
                </h3>
                
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 card-primary rounded-2xl space-y-2 sm:space-y-0">
                    <span className="text-neutral-300 font-medium text-sm sm:text-lg">Ingresos mensuales potenciales</span>
                    <span className="text-white font-bold text-xl sm:text-2xl flex items-center">
                      {calculations.monthlyRevenue.toLocaleString()}
                      <Euro className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 card-danger rounded-2xl space-y-2 sm:space-y-0">
                    <span className="text-neutral-300 font-medium text-sm sm:text-lg">Ingresos perdidos por llamadas</span>
                    <span className="text-danger-400 font-bold text-xl sm:text-2xl flex items-center">
                      -{calculations.lostRevenue.toLocaleString()}
                      <Euro className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 card-danger rounded-2xl space-y-2 sm:space-y-0">
                    <span className="text-neutral-300 font-medium text-sm sm:text-lg">Coste personal administrativo</span>
                    <span className="text-danger-400 font-bold text-xl sm:text-2xl flex items-center">
                      -{staffCost.toLocaleString()}
                      <Euro className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                    </span>
                  </div>
                  <div className="border-t border-neutral-700 pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 card-danger rounded-2xl border-2 border-danger-400/40 space-y-2 sm:space-y-0">
                      <span className="text-white font-bold text-lg sm:text-2xl">Pérdida total mensual</span>
                      <span className="text-danger-400 font-bold text-2xl sm:text-3xl flex items-center">
                        -{calculations.totalLoss.toLocaleString()}
                        <Euro className="w-6 sm:w-8 h-6 sm:h-8 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Con IAFY */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-success-500 to-primary-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative card-success p-6 sm:p-10 rounded-3xl shadow-spectacular">
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
                  <Zap className="w-8 sm:w-10 h-8 sm:h-10 text-success-400 sm:mr-4" />
                  <span>Con IAFY</span>
                  <Activity className="hidden sm:block w-8 h-8 text-success-400 opacity-60 sm:ml-auto" />
                </h3>
                
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 card-success rounded-2xl space-y-2 sm:space-y-0">
                    <span className="text-neutral-300 font-medium text-sm sm:text-lg">Ingresos recuperados (85%)</span>
                    <span className="text-success-400 font-bold text-xl sm:text-2xl flex items-center">
                      +{calculations.withIAFY.recovered.toLocaleString()}
                      <Euro className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 card-success rounded-2xl space-y-2 sm:space-y-0">
                    <span className="text-neutral-300 font-medium text-sm sm:text-lg">Ahorro en personal (70%)</span>
                    <span className="text-success-400 font-bold text-xl sm:text-2xl flex items-center">
                      +{calculations.withIAFY.staffSavings.toLocaleString()}
                      <Euro className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 card-primary rounded-2xl space-y-2 sm:space-y-0">
                    <span className="text-neutral-300 font-medium text-sm sm:text-lg">Coste IAFY Professional</span>
                    <span className="text-primary-400 font-bold text-xl sm:text-2xl flex items-center">
                      -{calculations.withIAFY.iafyCost}
                      <Euro className="w-5 sm:w-6 h-5 sm:h-6 ml-1" />
                    </span>
                  </div>
                  <div className="border-t border-neutral-700 pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 card-success rounded-2xl mb-4 border-2 border-success-400/40 space-y-2 sm:space-y-0">
                      <span className="text-white font-bold text-lg sm:text-2xl">Beneficio neto mensual</span>
                      <span className="text-success-400 font-bold text-2xl sm:text-3xl flex items-center">
                        +{calculations.withIAFY.totalSavings.toLocaleString()}
                        <Euro className="w-6 sm:w-8 h-6 sm:h-8 ml-1" />
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 card-primary rounded-2xl border-2 border-primary-400/40 space-y-2 sm:space-y-0">
                      <span className="text-white font-bold text-lg sm:text-2xl">ROI</span>
                      <span className="text-primary-400 font-bold text-2xl sm:text-3xl">{calculations.withIAFY.roi.toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proyección anual espectacular */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-gold-500 to-success-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative card-electric p-6 sm:p-10 rounded-3xl text-center shadow-spectacular">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Proyección anual</h3>
                <div className="text-4xl sm:text-7xl font-black text-gradient-electric mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0">
                  <span>+{(calculations.withIAFY.totalSavings * 12).toLocaleString()}</span>
                  <Euro className="w-10 sm:w-16 h-10 sm:h-16 sm:ml-2" />
                </div>
                <div className="text-neutral-300 text-lg sm:text-2xl font-semibold">Beneficio total en 12 meses</div>
                <div className="text-success-400 text-base sm:text-lg mt-4">
                  Recuperas la inversión en {Math.ceil(calculations.withIAFY.iafyCost / calculations.withIAFY.totalSavings)} mes{Math.ceil(calculations.withIAFY.iafyCost / calculations.withIAFY.totalSavings) > 1 ? 'es' : ''}
                </div>
              </div>
            </div>

            {/* CTA espectacular */}
            <a
              href="https://calendly.com/iafyagency/30min?month=2025-06"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full inline-flex items-center justify-center px-6 sm:px-10 py-6 sm:py-8 text-lg sm:text-2xl font-bold text-white btn-primary rounded-3xl shadow-spectacular transform hover:-translate-y-3 hover:scale-105 transition-all duration-300"
            >
              <span className="relative flex flex-col sm:flex-row items-center text-center sm:text-left space-y-2 sm:space-y-0">
                <span className="flex items-center">
                  EMPEZAR A AHORRAR {calculations.withIAFY.totalSavings.toLocaleString()}
                  <Euro className="w-6 sm:w-8 h-6 sm:h-8 mx-1 sm:mx-2" />
                  /MES
                </span>
              </span>
              <ArrowRight className="relative w-6 sm:w-8 h-6 sm:h-8 ml-2 sm:ml-4 group-hover:translate-x-2 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;