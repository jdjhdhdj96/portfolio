import { useState, useEffect } from 'react'
import { useTheme } from '../App'

export const HeroSection = () => {
  const { theme } = useTheme()
  const [yearsCount, setYearsCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const [serversCount, setServersCount] = useState(0)
  const isDark = theme === 'dark'

  // Counter animation
  useEffect(() => {
    const animateCount = (setter: (val: number) => void, target: number, duration: number) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
      return timer
    }

    const timer1 = animateCount(setYearsCount, 2, 1500)
    const timer2 = animateCount(setProjectsCount, 50, 2000)
    const timer3 = animateCount(setServersCount, 500, 2500)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-blue-500' : 'bg-blue-400'
        }`} />
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-purple-500' : 'bg-purple-400'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        {/* Header Badge */}
        <div className="text-center mb-8 animate-fade-in">
          <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold ${
            isDark
              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
              : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Portfolio 2024
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-6 animate-fade-in animation-delay-100">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
            카페24 IDC
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              기술지원 엔지니어
            </span>
          </h1>
          <p className={`text-xl sm:text-2xl font-medium ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            서버 인프라 운영 및 AI 활용 개발
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 animate-fade-in animation-delay-200">
          {/* Card 1: Years of Experience */}
          <div className={`relative rounded-2xl p-8 shadow-xl border overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
            isDark
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-blue-100'
          }`}>
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />

            {/* Icon and Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                isDark ? 'bg-blue-500/20' : 'bg-blue-50'
              }`}>
                📅
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
              }`}>
                Experience
              </span>
            </div>

            {/* Number */}
            <div className="mb-2">
              <div className="flex items-baseline gap-2">
                <span className={`text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {yearsCount}
                </span>
                <span className={`text-3xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>+</span>
              </div>
            </div>

            {/* Label */}
            <div className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Years in IDC
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Since</span>
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>2023</span>
              </div>
              <div className="flex justify-between">
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Current</span>
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>2024</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className={`h-2 rounded-full overflow-hidden ${
                isDark ? 'bg-slate-700' : 'bg-blue-100'
              }`}>
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                  style={{ width: '100%' }}
                />
              </div>
              <p className={`text-xs mt-2 text-center font-medium ${
                isDark ? 'text-slate-500' : 'text-slate-500'
              }`}>
                100% Commitment
              </p>
            </div>
          </div>

          {/* Card 2: Projects Completed */}
          <div className={`relative rounded-2xl p-8 shadow-xl border overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
            isDark
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-purple-100'
          }`}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600" />

            <div className="flex items-center justify-between mb-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                isDark ? 'bg-purple-500/20' : 'bg-purple-50'
              }`}>
                🚀
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'
              }`}>
                Projects
              </span>
            </div>

            <div className="mb-2">
              <div className="flex items-baseline gap-2">
                <span className={`text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {projectsCount}
                </span>
                <span className={`text-3xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>+</span>
              </div>
            </div>

            <div className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Projects Done
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Infrastructure</span>
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>20</span>
              </div>
              <div className="flex justify-between">
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Security</span>
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>30+</span>
              </div>
            </div>

            {/* Donut chart simulation */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-24 h-24">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={isDark ? '#334155' : '#e9d5ff'}
                    strokeWidth="12"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#gradient-purple)"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="62.8"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-sm font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Servers Managed */}
          <div className={`relative rounded-2xl p-8 shadow-xl border overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
            isDark
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-green-100'
          }`}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600" />

            <div className="flex items-center justify-between mb-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                isDark ? 'bg-green-500/20' : 'bg-green-50'
              }`}>
                🖥️
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
              }`}>
                Infrastructure
              </span>
            </div>

            <div className="mb-2">
              <div className="flex items-baseline gap-2">
                <span className={`text-5xl font-black bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {serversCount}
                </span>
                <span className={`text-3xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>+</span>
              </div>
            </div>

            <div className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Servers Managed
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Linux</span>
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>350+</span>
              </div>
              <div className="flex justify-between">
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Windows</span>
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>150+</span>
              </div>
            </div>

            {/* Mini bars */}
            <div className="mt-6 space-y-2">
              <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-green-100'}`}>
                <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '90%' }} />
              </div>
              <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-green-100'}`}>
                <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '75%' }} />
              </div>
              <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-green-100'}`}>
                <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 animate-fade-in animation-delay-300">
          <button
            onClick={() => scrollToSection('about')}
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            포트폴리오 탐색하기
            <svg
              className="w-5 h-5 transform group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
