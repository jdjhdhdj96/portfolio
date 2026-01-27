import type { ReactNode } from 'react'
import { useTheme } from '../App'

interface SocialLink {
  name: string
  url: string
  icon: ReactNode
}

interface QuickLink {
  name: string
  href: string
}

export const Footer = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/jdjhdhdj96',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:developer@example.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  const quickLinks: QuickLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className={`py-12 sm:py-16 transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-300' : 'bg-slate-900 text-slate-300'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="inline-block mb-4"
            >
              <span className="text-2xl font-bold gradient-text">Portfolio</span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              IDC 기술지원 경험과 AI 활용 개발 역량을 갖춘 엔지니어입니다. React와
              TypeScript로 모던 웹을 만듭니다.
            </p>
            {/* Social links - mobile/tablet view */}
            <div className="flex space-x-3 lg:hidden">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white'
                      : 'bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white'
                  }`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect - desktop view */}
          <div className="hidden lg:block">
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
                >
                  <span
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isDark
                        ? 'bg-slate-800 group-hover:bg-blue-600 group-hover:text-white'
                        : 'bg-slate-800 group-hover:bg-blue-600 group-hover:text-white'
                    }`}
                  >
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-slate-800' : 'border-slate-800'} pt-8`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-slate-500 text-sm sm:text-base">
                © {new Date().getFullYear()} Portfolio. Built with React + TypeScript +
                TailwindCSS
              </p>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Powered by Claude Code AI
              </p>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white'
                  : 'bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white'
              }`}
              aria-label="Back to top"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
