'use client'

import { CheckCircle, Mail, Clock, Phone, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThankYou() {
  const [language, setLanguage] = useState('it')

  const t = {
    it: {
      title: 'Registrazione Completata!',
      subtitle: 'Benvenuto nella rete esclusiva di SurveyLink',
      checkEmail: 'Controlla la tua email',
      emailSent: 'Ti abbiamo inviato un\'email di conferma con tutti i dettagli.',
      whatNext: 'Cosa Succede Ora?',
      step1: 'Verifica del Profilo',
      step1Desc: 'Il nostro team verificherà le tue credenziali entro 24-48 ore',
      step2: 'Attivazione Account',
      step2Desc: 'Riceverai una notifica quando il tuo profilo sarà attivo',
      step3: 'Primi Clienti',
      step3Desc: 'Inizierai a ricevere richieste di preventivo dai clienti',
      needHelp: 'Hai bisogno di aiuto?',
      contactUs: 'Contattaci',
      backHome: 'Torna alla Home'
    },
    en: {
      title: 'Registration Complete!',
      subtitle: 'Welcome to SurveyLink\'s exclusive network',
      checkEmail: 'Check your email',
      emailSent: 'We\'ve sent you a confirmation email with all the details.',
      whatNext: 'What Happens Next?',
      step1: 'Profile Verification',
      step1Desc: 'Our team will verify your credentials within 24-48 hours',
      step2: 'Account Activation',
      step2Desc: 'You\'ll receive a notification when your profile is active',
      step3: 'First Clients',
      step3Desc: 'You\'ll start receiving quote requests from clients',
      needHelp: 'Need help?',
      contactUs: 'Contact us',
      backHome: 'Back to Home'
    }
  }

  useEffect(() => {
    // Check if there's a language preference in localStorage
    const savedLang = localStorage.getItem('language') || 'it'
    setLanguage(savedLang)
  }, [])

  const currentLang = language === 'it' ? t.it : t.en

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-emerald-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {currentLang.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {currentLang.subtitle}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-3">
              <Mail className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-blue-900">
                {currentLang.checkEmail}
              </h2>
            </div>
            <p className="text-blue-800">
              {currentLang.emailSent}
            </p>
          </div>

          <div className="text-left mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              {currentLang.whatNext}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full p-2 mr-4">
                  <Clock className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{currentLang.step1}</h4>
                  <p className="text-gray-600">{currentLang.step1Desc}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full p-2 mr-4">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{currentLang.step2}</h4>
                  <p className="text-gray-600">{currentLang.step2Desc}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 rounded-full p-2 mr-4">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{currentLang.step3}</h4>
                  <p className="text-gray-600">{currentLang.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-600 mb-4">
              {currentLang.needHelp}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <a href="mailto:support@surveylink.com" className="flex items-center text-emerald-600 hover:text-emerald-700">
                <Mail className="h-4 w-4 mr-1" />
                support@surveylink.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+39123456789" className="flex items-center text-emerald-600 hover:text-emerald-700">
                <Phone className="h-4 w-4 mr-1" />
                +39 123 456 789
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              {currentLang.backHome}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
