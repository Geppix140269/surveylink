'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, Star, Shield, Users, TrendingUp, CheckCircle, Globe, Menu, X, ArrowRight, Building2, FileCheck, Clock, Award, ChevronRight, BarChart3, Target, Zap } from 'lucide-react'

type Language = 'it' | 'en'

export default function Home() {
  const [searchCity, setSearchCity] = useState('')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [language, setLanguage] = useState<Language>('it')
  const [animatedStats, setAnimatedStats] = useState({ 
    surveyors: 0, 
    transactions: 0, 
    satisfaction: 0, 
    cities: 0  // Added this property
  })

  // Translations
  const t = {
    it: {
      // Navigation
      howItWorks: 'Come Funziona',
      features: 'Funzionalità',
      pricing: 'Prezzi',
      aboutUs: 'Chi Siamo',
      login: 'Accedi',
      getStarted: 'Inizia Ora',
      
      // Hero
      heroTitle: 'Perizie Immobiliari Professionali in',
      heroTitleHighlight: 'Tutta Italia',
      heroSubtitle: 'Connetti con periti certificati, ricevi preventivi trasparenti e gestisci le tue perizie online con la massima sicurezza.',
      searchPlaceholder: 'Inserisci città o CAP...',
      searchButton: 'Trova Periti',
      trustedBy: 'Scelto da oltre 2,500+ proprietari immobiliari',
      
      // Stats
      statSurveyors: 'Periti Verificati',
      statTransactions: 'Perizie Completate',
      statSatisfaction: 'Soddisfazione',
      statCities: 'Città Coperte',
      
      // Features Section
      featuresTitle: 'Perché Scegliere SurveyLink',
      featuresSubtitle: 'La piattaforma più completa per le tue perizie immobiliari',
      
      feature1Title: 'Periti Verificati',
      feature1Desc: 'Tutti i nostri professionisti sono certificati e verificati. Garanzia di qualità e professionalità.',
      
      feature2Title: 'Preventivi Trasparenti',
      feature2Desc: 'Ricevi preventivi dettagliati e confronta le offerte. Nessun costo nascosto.',
      
      feature3Title: 'Processo Digitale',
      feature3Desc: 'Gestisci tutto online: dalla richiesta al pagamento, fino alla consegna del report.',
      
      feature4Title: 'Garanzia 100%',
      feature4Desc: 'Soddisfatti o rimborsati. La tua tranquillità è la nostra priorità.',
      
      // How it Works
      howTitle: 'Come Funziona SurveyLink',
      howSubtitle: 'Tre semplici passi per la tua perizia',
      
      step1Title: 'Descrivi le tue esigenze',
      step1Desc: 'Inserisci i dettagli della proprietà e il tipo di perizia richiesta',
      
      step2Title: 'Ricevi preventivi',
      step2Desc: 'Periti qualificati ti invieranno preventivi dettagliati entro 24 ore',
      
      step3Title: 'Scegli e prenota',
      step3Desc: 'Confronta, scegli il professionista e prenota la perizia online',
      
      // Services
      servicesTitle: 'I Nostri Servizi',
      servicesSubtitle: 'Copertura completa per ogni esigenza',
      
      service1: 'Perizie Residenziali',
      service1Desc: 'Valutazioni complete per appartamenti e case',
      
      service2: 'Perizie Commerciali', 
      service2Desc: 'Analisi professionale per immobili commerciali',
      
      service3: 'Certificazioni Energetiche',
      service3Desc: 'APE e certificazioni per efficienza energetica',
      
      service4: 'Due Diligence',
      service4Desc: 'Analisi approfondita per investimenti sicuri',
      
      // CTA
      ctaTitle: 'Sei un Perito Professionista?',
      ctaSubtitle: 'Unisciti alla rete leader in Italia. Aumenta i tuoi clienti e gestisci tutto online.',
      ctaButton: 'Diventa Partner',
      ctaStats1: 'Aumento medio fatturato',
      ctaStats2: 'Nuovi clienti al mese',
      
      // Footer
      footerDesc: 'La piattaforma leader per perizie immobiliari in Italia',
      footerRights: '© 2024 SurveyLink. Tutti i diritti riservati.',
      privacy: 'Privacy',
      terms: 'Termini',
      contact: 'Contatti'
    },
    en: {
      // Navigation
      howItWorks: 'How It Works',
      features: 'Features',
      pricing: 'Pricing',
      aboutUs: 'About Us',
      login: 'Sign In',
      getStarted: 'Get Started',
      
      // Hero
      heroTitle: 'Professional Property Surveys Across',
      heroTitleHighlight: 'All of Italy',
      heroSubtitle: 'Connect with certified surveyors, receive transparent quotes, and manage your property surveys online with complete security.',
      searchPlaceholder: 'Enter city or ZIP code...',
      searchButton: 'Find Surveyors',
      trustedBy: 'Trusted by 2,500+ property owners',
      
      // Stats
      statSurveyors: 'Verified Surveyors',
      statTransactions: 'Surveys Completed',
      statSatisfaction: 'Satisfaction Rate',
      statCities: 'Cities Covered',
      
      // Features Section
      featuresTitle: 'Why Choose SurveyLink',
      featuresSubtitle: 'The most comprehensive platform for your property surveys',
      
      feature1Title: 'Verified Surveyors',
      feature1Desc: 'All our professionals are certified and verified. Quality and professionalism guaranteed.',
      
      feature2Title: 'Transparent Quotes',
      feature2Desc: 'Receive detailed quotes and compare offers. No hidden costs.',
      
      feature3Title: 'Digital Process',
      feature3Desc: 'Manage everything online: from request to payment, to report delivery.',
      
      feature4Title: '100% Guarantee',
      feature4Desc: 'Satisfaction guaranteed or your money back. Your peace of mind is our priority.',
      
      // How it Works
      howTitle: 'How SurveyLink Works',
      howSubtitle: 'Three simple steps to your survey',
      
      step1Title: 'Describe your needs',
      step1Desc: 'Enter property details and the type of survey required',
      
      step2Title: 'Receive quotes',
      step2Desc: 'Qualified surveyors will send detailed quotes within 24 hours',
      
      step3Title: 'Choose and book',
      step3Desc: 'Compare, choose the professional and book the survey online',
      
      // Services
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Complete coverage for every need',
      
      service1: 'Residential Surveys',
      service1Desc: 'Complete valuations for apartments and houses',
      
      service2: 'Commercial Surveys',
      service2Desc: 'Professional analysis for commercial properties',
      
      service3: 'Energy Certifications',
      service3Desc: 'EPC and energy efficiency certifications',
      
      service4: 'Due Diligence',
      service4Desc: 'In-depth analysis for secure investments',
      
      // CTA
      ctaTitle: 'Are You a Professional Surveyor?',
      ctaSubtitle: 'Join the leading network in Italy. Increase your clients and manage everything online.',
      ctaButton: 'Become a Partner',
      ctaStats1: 'Average revenue increase',
      ctaStats2: 'New clients per month',
      
      // Footer
      footerDesc: 'The leading platform for property surveys in Italy',
      footerRights: '© 2024 SurveyLink. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact'
    }
  }

  const currentLang = t[language]

  // Animate stats on scroll
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats')
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Start animation
          const targets = { surveyors: 350, transactions: 2847, satisfaction: 98, cities: 120 }
          const duration = 2000
          const steps = 60
          const increment = {
            surveyors: targets.surveyors / steps,
            transactions: targets.transactions / steps,
            satisfaction: targets.satisfaction / steps,
            cities: targets.cities / steps
          }

          let step = 0
          const timer = setInterval(() => {
            step++
            setAnimatedStats({
              surveyors: Math.min(Math.floor(increment.surveyors * step), targets.surveyors),
              transactions: Math.min(Math.floor(increment.transactions * step), targets.transactions),
              satisfaction: Math.min(Math.floor(increment.satisfaction * step), targets.satisfaction),
              cities: Math.min(Math.floor(increment.cities * step), targets.cities)
            })
            
            if (step >= steps) clearInterval(timer)
          }, duration / steps)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SurveyLink</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                {currentLang.howItWorks}
              </a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                {currentLang.features}
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                {currentLang.pricing}
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                {currentLang.aboutUs}
              </a>
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Language Switcher */}
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-gray-600 text-sm font-medium cursor-pointer focus:outline-none"
              >
                <option value="it">🇮🇹 IT</option>
                <option value="en">🇬🇧 EN</option>
              </select>
              
              <a href="/auth/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                {currentLang.login}
              </a>
              <a href="/auth/register" className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                {currentLang.getStarted}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#how" className="block text-gray-600 hover:text-gray-900 font-medium py-2">
                {currentLang.howItWorks}
              </a>
              <a href="#features" className="block text-gray-600 hover:text-gray-900 font-medium py-2">
                {currentLang.features}
              </a>
              <a href="#services" className="block text-gray-600 hover:text-gray-900 font-medium py-2">
                {currentLang.pricing}
              </a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900 font-medium py-2">
                {currentLang.aboutUs}
              </a>
              <div className="pt-4 border-t">
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="w-full mb-3 p-2 border rounded-lg"
                >
                  <option value="it">🇮🇹 Italiano</option>
                  <option value="en">🇬🇧 English</option>
                </select>
                <a href="/auth/login" className="block text-center text-gray-600 font-medium py-2 mb-2">
                  {currentLang.login}
                </a>
                <a href="/auth/register" className="block text-center bg-emerald-600 text-white py-3 rounded-lg font-medium">
                  {currentLang.getStarted}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {currentLang.heroTitle}
              <span className="text-emerald-600 block md:inline"> {currentLang.heroTitleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              {currentLang.heroSubtitle}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative bg-white rounded-2xl shadow-xl p-2">
                <div className="flex">
                  <div className="flex-1 flex items-center px-4">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder={currentLang.searchPlaceholder}
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                      className="w-full py-4 text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                  <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all flex items-center space-x-2">
                    <Search className="h-5 w-5" />
                    <span>{currentLang.searchButton}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span>{currentLang.trustedBy}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {animatedStats.surveyors}+
              </div>
              <div className="text-gray-600">{currentLang.statSurveyors}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {animatedStats.transactions.toLocaleString()}+
              </div>
              <div className="text-gray-600">{currentLang.statTransactions}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {animatedStats.satisfaction}%
              </div>
              <div className="text-gray-600">{currentLang.statSatisfaction}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {animatedStats.cities}+
              </div>
              <div className="text-gray-600">{currentLang.statCities}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLang.featuresTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLang.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {currentLang.feature1Title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentLang.feature1Desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {currentLang.feature2Title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentLang.feature2Desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {currentLang.feature3Title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentLang.feature3Desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {currentLang.feature4Title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentLang.feature4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLang.howTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLang.howSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines - hidden on mobile */}
            <div className="hidden md:block absolute top-24 left-1/3 w-1/3 h-0.5 bg-gray-300"></div>
            <div className="hidden md:block absolute top-24 right-1/3 w-1/3 h-0.5 bg-gray-300"></div>
            
            <div className="relative">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                1
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {currentLang.step1Title}
                </h3>
                <p className="text-gray-600">
                  {currentLang.step1Desc}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                2
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {currentLang.step2Title}
                </h3>
                <p className="text-gray-600">
                  {currentLang.step2Desc}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                3
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {currentLang.step3Title}
                </h3>
                <p className="text-gray-600">
                  {currentLang.step3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentLang.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLang.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 flex items-start space-x-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang.service1}
                </h3>
                <p className="text-gray-600">
                  {currentLang.service1Desc}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 flex items-start space-x-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang.service2}
                </h3>
                <p className="text-gray-600">
                  {currentLang.service2Desc}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 flex items-start space-x-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang.service3}
                </h3>
                <p className="text-gray-600">
                  {currentLang.service3Desc}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 flex items-start space-x-4 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLang.service4}
                </h3>
                <p className="text-gray-600">
                  {currentLang.service4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section for Surveyors */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentLang.ctaTitle}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {currentLang.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">+300%</div>
                  <div className="text-gray-600">{currentLang.ctaStats1}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">15-20</div>
                  <div className="text-gray-600">{currentLang.ctaStats2}</div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              
                href="/auth/register"
                className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all"
              >
                {currentLang.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">SurveyLink</span>
              </div>
              <p className="text-gray-400 max-w-md">
                {currentLang.footerDesc}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Link Utili</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{currentLang.howItWorks}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{currentLang.pricing}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{currentLang.aboutUs}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legale</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{currentLang.privacy}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{currentLang.terms}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{currentLang.contact}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{currentLang.footerRights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
