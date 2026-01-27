import { useTheme } from '../App'

export const AboutSection = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className={`section-padding ${
        isDark ? 'bg-slate-800' : 'bg-slate-50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll animate-fade-in-up">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              isDark
                ? 'bg-blue-500/20 text-blue-400'
                : 'bg-blue-100 text-blue-600'
            }`}
          >
            소개
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            About Me
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            IDC 인프라 운영 경험과 AI 기반 개발 역량을 갖춘 엔지니어입니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Profile card */}
          <div className="animate-on-scroll animate-fade-in-left animation-delay-200">
            <div
              className={`h-full p-6 sm:p-8 rounded-2xl shadow-lg card-hover ${
                isDark
                  ? 'bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-700'
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}
                >
                  <svg
                    className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  프로필
                </h3>
              </div>

              <div className="space-y-5">
                {[
                  {
                    label: '전문 분야',
                    value: 'IDC 인프라 운영, 서버 기술지원',
                    icon: '🖥️'
                  },
                  {
                    label: '핵심 역량',
                    value: 'Linux/Windows 서버 관리, 네트워크 구성, 보안 관제',
                    icon: '⚡'
                  },
                  {
                    label: '관심사',
                    value: 'AI 기반 업무 자동화, Claude Code 활용, DevOps',
                    icon: '🤖'
                  },
                  {
                    label: '특기사항',
                    value: '이 포트폴리오 자체가 Claude Code로 제작되었습니다',
                    icon: '✨'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl transition-colors ${
                      isDark
                        ? 'bg-slate-800/50 hover:bg-slate-800'
                        : 'bg-white/80 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p
                          className={`font-semibold text-sm uppercase tracking-wide mb-1 ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`}
                        >
                          {item.label}
                        </p>
                        <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career summary */}
          <div className="animate-on-scroll animate-fade-in-right animation-delay-400">
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}
              >
                <svg
                  className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                경력 요약
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'IDC 기술지원 엔지니어',
                  company: '카페24 매니지드기술지원팀 | 2023',
                  color: 'blue',
                  items: [
                    '서버호스팅 신규 세팅 및 OS 설치 (CentOS, Ubuntu, Windows Server)',
                    'HP/SuperMicro 서버 하드웨어 관리 (iLO/IPMI)',
                    '침해사고 대응 및 보안 관제 (DDoS, 랜섬웨어)',
                    '서버 모니터링 및 장애 대응'
                  ]
                },
                {
                  title: '주요 업무',
                  company: 'SK-IDC 인프라 운영',
                  color: 'purple',
                  items: [
                    'PXE Boot / Clonezilla 기반 OS 배포 자동화',
                    '네트워크 구성 및 방화벽 설정',
                    'JIRA 기반 업무 프로세스 관리',
                    '고객사 기술 지원 및 트러블슈팅'
                  ]
                },
                {
                  title: 'Claude Code 활용',
                  company: 'AI 기반 개발 역량',
                  color: 'green',
                  items: [
                    'React + TypeScript + TailwindCSS 웹 개발',
                    'GitHub Actions CI/CD 파이프라인 구성',
                    'Conventional Commits 기반 버전 관리'
                  ]
                }
              ].map((career, index) => {
                const colorClasses = {
                  blue: {
                    border: 'border-blue-500',
                    bg: isDark ? 'bg-blue-500/10' : 'bg-blue-50',
                    text: isDark ? 'text-blue-400' : 'text-blue-600'
                  },
                  purple: {
                    border: 'border-purple-500',
                    bg: isDark ? 'bg-purple-500/10' : 'bg-purple-50',
                    text: isDark ? 'text-purple-400' : 'text-purple-600'
                  },
                  green: {
                    border: 'border-green-500',
                    bg: isDark ? 'bg-green-500/10' : 'bg-green-50',
                    text: isDark ? 'text-green-400' : 'text-green-600'
                  }
                }[career.color]!

                return (
                  <div
                    key={index}
                    className={`border-l-4 ${colorClasses.border} pl-4 sm:pl-6 py-3 rounded-r-lg transition-colors ${colorClasses.bg}`}
                  >
                    <h4
                      className={`text-lg sm:text-xl font-semibold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {career.title}
                    </h4>
                    <p className={`text-sm mb-3 ${colorClasses.text}`}>{career.company}</p>
                    <ul
                      className={`space-y-2 text-sm sm:text-base ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {career.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colorClasses.border.replace('border-', 'bg-')}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
