'use client'

import { useState } from 'react'
import { Globe, ArrowLeft } from 'lucide-react'

export default function Register() {
  const [loading, setLoading] = useState(false)
  const [language, setLanguage] = useState('it')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    professionalTitle: '',
    licenseNumber: '',
    yearsExperience: '',
    city: '',
    region: '',
    baseRate: '',
    specializations: [] as string[]
  })

  const t = {
    it: {
      title: 'Diventa Partner SurveyLink',
      subtitle: 'Unisciti alla rete esclusiva di periti professionisti',
      backToSite: 'Torna al sito',
      email: 'Email',
      password: 'Password',
      fullName: 'Nome Completo',
      phone: 'Telefono',
      professionalTitle: 'Titolo Professionale',
      licenseNumber: 'Numero Iscrizione Albo',
      yearsExperience: 'Anni di Esperienza',
      city: 'Città',
      region: 'Regione',
      baseRate: 'Tariffa Base (€)',
      specializations: 'Specializzazioni',
      select: 'Seleziona...',
      submit: 'Completa Registrazione',
      submitting: 'Registrazione in corso...',
      geometra: 'Geometra',
      ingegnere: 'Ingegnere',
      architetto: 'Architetto',
      perito: 'Perito'
    },
    en: {
      title: 'Become a SurveyLink Partner',
      subtitle: 'Join the exclusive network of professional surveyors',
      backToSite: 'Back to site',
      email: 'Email',
      password: 'Password',
      fullName: 'Full Name',
      phone: 'Phone',
      professionalTitle: 'Professional Title',
      licenseNumber: 'License Number',
      yearsExperience: 'Years of Experience',
      city: 'City',
      region: 'Region',
      baseRate: 'Base Rate (€)',
      specializations: 'Specializations',
      select: 'Select...',
      submit: 'Complete Registration',
      submitting: 'Registering...',
      geometra: 'Surveyor',
      ingegnere: 'Engineer',
      architetto: 'Architect',
      perito: 'Expert'
    }
  }

  const currentLang = language === 'it' ? t.it : t.en

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Store language preference
    localStorage.setItem('language', language)
    
    // For now, simulate registration success
    // In production, you would:
    // 1. Create user in Supabase
    // 2. Send email via EmailJS
    // 3. Handle errors
    
    setTimeout(() => {
      // Store registration data for thank you page
      localStorage.setItem('registrationData', JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        language: language
      }))
      
      // Redirect to thank you page
      window.location.href = '/auth/thank-you'
    }, 1500)
  }

  const specializationsList = {
    it: [
      'Residenziale', 'Commerciale', 'Industriale', 
      'Perizie Strutturali', 'Certificazione Energetica', 
      'Due Diligence', 'Valutazioni Immobiliari'
    ],
    en: [
      'Residential', 'Commercial', 'Industrial',
      'Structural Surveys', 'Energy Certification',
      'Due Diligence', 'Property Valuations'
    ]
  }

  const regions = [
    'Lombardia', 'Lazio', 'Campania', 'Sicilia', 'Veneto', 
    'Piemonte', 'Emilia-Romagna', 'Toscana', 'Puglia', 
    'Liguria', 'Calabria', 'Marche', 'Abruzzo', 'Sardegna'
  ]

  const currentSpecializations = language === 'it' ? specializationsList.it : specializationsList.en

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Globe className="h-8 w-8 text-emerald-600 mr-2" />
            <span className="text-2xl font-bold text-emerald-600">SurveyLink</span>
          </a>
          <div className="flex items-center space-x-4">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              <option value="it">🇮🇹 Italiano</option>
              <option value="en">🇬🇧 English</option>
            </select>
            <a href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-1" />
              {currentLang.backToSite}
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            {currentLang.title}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {currentLang.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Account Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.email} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.password} *
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.fullName} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.phone} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Professional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.professionalTitle} *
                </label>
                <select
                  required
                  value={formData.professionalTitle}
                  onChange={(e) => setFormData({...formData, professionalTitle: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">{currentLang.select}</option>
                  <option value="Geometra">{currentLang.geometra}</option>
                  <option value="Ingegnere">{currentLang.ingegnere}</option>
                  <option value="Architetto">{currentLang.architetto}</option>
                  <option value="Perito">{currentLang.perito}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.licenseNumber} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.yearsExperience} *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.yearsExperience}
                  onChange={(e) => setFormData({...formData, yearsExperience: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.baseRate} *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="50"
                  value={formData.baseRate}
                  onChange={(e) => setFormData({...formData, baseRate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.region} *
                </label>
                <select
                  required
                  value={formData.region}
                  onChange={(e) => setFormData({...formData, region: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">{currentLang.select}</option>
                  {regions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentLang.city} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Specializations */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {currentLang.specializations}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {currentSpecializations.map((spec) => (
                  <label key={spec} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.specializations.includes(spec)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            specializations: [...formData.specializations, spec]
                          })
                        } else {
                          setFormData({
                            ...formData,
                            specializations: formData.specializations.filter(s => s !== spec)
                          })
                        }
                      }}
                      className="mr-2 text-emerald-600"
                    />
                    <span className="text-sm">{spec}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {loading ? currentLang.submitting : currentLang.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
