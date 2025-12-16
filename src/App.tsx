import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

// Lazy load components para optimizar carga inicial
const UrgentProblem = lazy(() => import('./components/UrgentProblem'));
const ImmediateSolution = lazy(() => import('./components/ImmediateSolution'));
const IndustrySectors = lazy(() => import('./components/IndustrySectors'));
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const RiskFreeOffer = lazy(() => import('./components/RiskFreeOffer'));
const CalendlySection = lazy(() => import('./components/CalendlySection'));
const FloatingCTA = lazy(() => import('./components/FloatingCTA'));
const Footer = lazy(() => import('./components/Footer'));
const ChatBot = lazy(() => import('./components/ChatBot'));

// Lazy load pages
const Documentation = lazy(() => import('./pages/Documentation'));
const APIReference = lazy(() => import('./pages/APIReference'));
const ImplementationGuides = lazy(() => import('./pages/ImplementationGuides'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Blog = lazy(() => import('./pages/Blog'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Loading component optimizado
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-300 text-lg font-semibold">Cargando...</p>
    </div>
  </div>
);

function HomePage() {
  return (
    <div className="font-inter antialiased">
      <Hero />
      <Suspense fallback={<PageLoader />}>
        <UrgentProblem />
        <ImmediateSolution />
        <IndustrySectors />
        <ROICalculator />
        <RiskFreeOffer />
        <CalendlySection />
        <Footer />
        <FloatingCTA />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="relative">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documentacion" element={<Documentation />} />
            <Route path="/api-reference" element={<APIReference />} />
            <Route path="/guias-implementacion" element={<ImplementationGuides />} />
            <Route path="/casos-de-exito" element={<CaseStudies />} />
            <Route path="/blog-empresarial" element={<Blog />} />
            <Route path="/centro-de-ayuda" element={<HelpCenter />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos-de-servicio" element={<TermsOfService />} />
          </Routes>

          <ChatBot />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;