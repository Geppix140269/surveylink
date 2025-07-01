'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, Star, Shield, Users, TrendingUp, CheckCircle, Globe, Menu, X, ArrowRight } from 'lucide-react'

export default function Home() {
  const [searchCity, setSearchCity] = useState('')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({ surveyors: 0, transactions: 0, revenue: 0 })

  // Animate stats on load
  useEffect(() => {
    const targets = { surveyors: 250, transactions: 1250, revenue: 180000 }
    const duration = 2000
    const steps = 50
    const increment = {
      surveyors: targets.surveyors / steps,
      transactions: targets.transactions / steps,
      revenue: targets.revenue / steps
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setAnimatedStats({
        surveyors: Math.min(Math.floor(increment.surveyors * step), targets.surveyors),
        transactions: Math.min(Math.floor(increment.transactions * step), targets.transactions),
        revenue: Math.min(Math.floor(increment.revenue * step), targets.revenue)
      })
      
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-emerald-600 mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                SurveyLink
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600">Come Funziona</a>
              <a href="#surveyors" className="text-gray-700 hover:text-emerald-600">Trova Periti</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Prezzi</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="/auth/login" className="text-gray-700 hover:text-emerald-600">Accedi</a>
              <a href="/auth/register" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Diventa Partner
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Come Funziona</a>
              <a href="#surveyors" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Trova Periti</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Prezzi</a>
              <a href="/auth/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Accedi</a>
              <a href="/auth/register" className="block px-3 py-2 bg-emerald-600 text-white rounded-lg">
                Diventa Partner
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <span className="animate-pulse mr-2">🚀</span>
              Prima piattaforma di periti online in Italia
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Trova il <span className="text-emerald-600">Perito Perfetto</span>
              <br />per la Tua Proprietà
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connettiti con periti immobiliari verificati in tutta Italia. 
              Ricevi preventivi, confronta professionisti e prenota la tua perizia online.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-3">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center px-4">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="In quale città ti serve un perito?"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full py-3 outline-none"
                  />
                </div>
                <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Cerca Periti
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                Periti Verificati
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-emerald-500 mr-2" />
                Pagamenti Sicuri
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-emerald-500 mr-2" />
                Recensioni Reali
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                {animatedStats.surveyors}+
              </div>
              <div className="text-gray-600">Periti Verificati</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                {animatedStats.transactions.toLocaleString()}+
              </div>
              <div className="text-gray-600">Perizie Completate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                €{animatedStats.revenue.toLocaleString()}
              </div>
              <div className="text-gray-600">Volume Mensile</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Come Funziona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Cerca</h3>
              <p className="text-gray-600">Trova periti qualificati nella tua zona</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Confronta</h3>
              <p className="text-gray-600">Valuta profili, recensioni e preventivi</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Prenota</h3>
              <p className="text-gray-600">Scegli il professionista e prenota online</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sei un Perito Immobiliare?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Unisciti a SurveyLink e accedi a nuovi clienti in tutta Italia.
            Gestisci le tue perizie online e aumenta i tuoi guadagni.
          </p>
          <a
            href="/auth/register"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Diventa Partner
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
