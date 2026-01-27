import { useTheme } from '../App'

interface ContactInfo {
  icon: string
  label: string
  value: string
  link: string | null
}

interface Feature {
  icon: string
  title: string
  description: string
}

export const ContactSection = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      label: 'Email',
      value: '이메일 문의',
      link: null,
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/jdjhdhdj96',
      link: 'https://github.com/jdjhdhdj96',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Seoul, Korea',
      link: null,
    },
  ]

  const features: Feature[] = [
    {
      icon: '🤖',
      title: 'Claude Code로 제작',
      description: '전체 개발 과정을 AI와 협업하여 진행',
    },
    {
      icon: '⚡',
      title: 'React + TypeScript',
      description: '모던 프론트엔드 기술 스택 활용',
    },
    {
      icon: '🎨',
      title: 'TailwindCSS',
      description: '유틸리티 기반 반응형 디자인',
    },
    {
      icon: '🚀',
      title: 'GitHub Actions',
      description: '자동 빌드 및 GitHub Pages 배포',
    },
  ]

  return (
    <section
      className={`section-padding ${
        isDark
          ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800'
          : 'bg-gradient-to-br from-slate-800 to-slate-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 animate-on-scroll animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-blue-500/20 text-blue-400">
            연락처
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            함께 일하고 싶으시다면 연락주세요!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={info.label}
              className="animate-on-scroll animate-fade-in-up card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 text-center"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">{info.icon}</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">{info.label}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors break-all text-sm sm:text-base inline-flex items-center gap-1 justify-center"
                >
                  {info.value}
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ) : (
                <p className="text-slate-400 text-sm sm:text-base">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Portfolio features */}
        <div className="animate-on-scroll animate-fade-in-up animation-delay-400 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            이 포트폴리오의 특징
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 text-center">
            <a
              href="https://github.com/jdjhdhdj96/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
