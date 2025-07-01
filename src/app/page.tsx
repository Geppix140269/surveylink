'use client'

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, CheckCircle, Globe, Users, Calendar, MessageSquare, ArrowRight, Shield, Award, TrendingUp, Euro, Clock, Phone, Mail, ChevronDown, Play, Target, Zap, BarChart3 } from 'lucide-react';

const SurveyLink = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchLocation, setSearchLocation] = useState('');
  const [animatedStats, setAnimatedStats] = useState({ surveyors: 0, transactions: 0, revenue: 0 });

  // Animate stats on load
  useEffect(() => {
    const targets = { surveyors: 250, transactions: 1250, revenue: 180000 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      surveyors: targets.surveyors / steps,
      transactions: targets.transactions / steps,
      revenue: targets.revenue / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setAnimatedStats({
        surveyors: Math.min(Math.floor(increment.surveyors * step), targets.surveyors),
        transactions: Math.min(Math.floor(increment.transactions * step), targets.transactions),
        revenue: Math.min(Math.floor(increment.revenue * step), targets.revenue)
      });
      
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const Header = () => (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <Globe className="h-10 w-10 text-emerald-600" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  SurveyLink
                </div>
                <div className="text-xs text-gray-500 font-medium">ITALIA</div>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === 'home' 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50' 
                  : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
              } rounded-t-lg`}
            >
              Piattaforma
            </button>
            <button 
              onClick={() => setActiveTab('surveyors')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === 'surveyors' 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50' 
                  : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
              } rounded-t-lg`}
            >
              Per Periti
            </button>
            <button 
              onClick={() => setActiveTab('success')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === 'success' 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50' 
                  : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
              } rounded-t-lg`}
            >
              Storie di Successo
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Accedi
            </button>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-emerald-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Diventa Partner
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-2 mb-8">
              <span className="text-emerald-200 text-sm font-medium mr-2">🚀 Piattaforma Leader in Italia</span>
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">LIVE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              La <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Rivoluzione</span>
              <br />delle Perizie Immobiliari
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Connetti con clienti internazionali di alta qualità. Aumenta i tuoi guadagni del 300%. 
              Gestisci tutto dalla nostra piattaforma professionale.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-3 shadow-2xl mb-8">
              <div className="flex">
                <div className="flex-1 flex items-center">
                  <MapPin className="h-6 w-6 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="Trova periti nella tua città..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="flex-1 px-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
                  />
                </div>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-200 flex items-center shadow-lg">
                  <Search className="h-5 w-5 mr-2" />
                  Cerca
                </button>
              </div>
            </div>
            
            <div className="flex justify-center space-x-8 text-sm text-slate-200">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-emerald-400" />
                Professionisti Verificati
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-emerald-400" />
                Pagamenti Garantiti
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-emerald-400" />
                +300% Guadagni Medi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats */}
      <div className="bg-white py-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {animatedStats.surveyors}+
                </div>
                <div className="text-gray-600 font-medium">Periti Partner Attivi</div>
                <div className="text-sm text-emerald-600 font-medium mt-1">↗ +45 questo mese</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200">
                <div className="text-4xl font-bold text-teal-600 mb-2">
                  {animatedStats.transactions.toLocaleString()}+
                </div>
                <div className="text-gray-600 font-medium">Perizie Completate</div>
                <div className="text-sm text-emerald-600 font-medium mt-1">↗ +127 questa settimana</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  €{animatedStats.revenue.toLocaleString()}+
                </div>
                <div className="text-gray-600 font-medium">Guadagni Generati/Mese</div>
                <div className="text-sm text-emerald-600 font-medium mt-1">↗ Media €6,200 per perito</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto per la Tua Perizia Immobiliare?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Connettiti con periti professionali in tutta Italia
          </p>
          <div className="space-x-4">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 inline-block">
              Trova un Perito
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-emerald-700 inline-block">
              Diventa Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyLink;