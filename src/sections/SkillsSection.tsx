import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../App'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  color: string
  icon: string
  skills: Skill[]
}

export const SkillsSection = () => {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isDark = theme === 'dark'

  const skillCategories: SkillCategory[] = [
    {
      title: 'Infrastructure',
      color: 'blue',
      icon: '🖥️',
      skills: [
        { name: 'Linux (CentOS/Ubuntu)', level: 90 },
        { name: 'Windows Server', level: 85 },
        { name: 'HP Server (iLO/IPMI)', level: 90 },
        { name: 'PXE Boot / Clonezilla', level: 85 },
        { name: 'Server Hardware', level: 85 },
      ],
    },
    {
      title: 'Networking & Security',
      color: 'green',
      icon: '🔒',
      skills: [
        { name: 'Network Configuration', level: 85 },
        { name: 'Firewall Management', level: 80 },
        { name: 'Security Incident Response', level: 85 },
        { name: 'Traffic Analysis', level: 75 },
        { name: 'DNS/NAT Configuration', level: 80 },
      ],
    },
    {
      title: 'Web Stack (APM)',
      color: 'orange',
      icon: '🌐',
      skills: [
        { name: 'Apache HTTP Server', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'PHP', level: 70 },
        { name: 'Shell Scripting', level: 85 },
      ],
    },
    {
      title: 'Tools & Collaboration',
      color: 'purple',
      icon: '🛠️',
      skills: [
        { name: 'JIRA', level: 90 },
        { name: 'Confluence/Wiki', level: 85 },
        { name: 'Slack', level: 90 },
        { name: 'Git/GitHub', level: 80 },
        { name: 'Claude Code (AI)', level: 85 },
      ],
    },
  ]

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      {
        bg: string
        bgDark: string
        border: string
        borderDark: string
        progress: string
        text: string
        textDark: string
        badge: string
        badgeDark: string
      }
    > = {
      blue: {
        bg: 'bg-blue-50',
        bgDark: 'bg-blue-500/10',
        border: 'border-blue-200',
        borderDark: 'border-blue-500/30',
        progress: 'bg-gradient-to-r from-blue-500 to-blue-600',
        text: 'text-blue-600',
        textDark: 'text-blue-400',
        badge: 'bg-blue-100 text-blue-700',
        badgeDark: 'bg-blue-500/20 text-blue-400',
      },
      green: {
        bg: 'bg-green-50',
        bgDark: 'bg-green-500/10',
        border: 'border-green-200',
        borderDark: 'border-green-500/30',
        progress: 'bg-gradient-to-r from-green-500 to-green-600',
        text: 'text-green-600',
        textDark: 'text-green-400',
        badge: 'bg-green-100 text-green-700',
        badgeDark: 'bg-green-500/20 text-green-400',
      },
      orange: {
        bg: 'bg-orange-50',
        bgDark: 'bg-orange-500/10',
        border: 'border-orange-200',
        borderDark: 'border-orange-500/30',
        progress: 'bg-gradient-to-r from-orange-500 to-orange-600',
        text: 'text-orange-600',
        textDark: 'text-orange-400',
        badge: 'bg-orange-100 text-orange-700',
        badgeDark: 'bg-orange-500/20 text-orange-400',
      },
      purple: {
        bg: 'bg-purple-50',
        bgDark: 'bg-purple-500/10',
        border: 'border-purple-200',
        borderDark: 'border-purple-500/30',
        progress: 'bg-gradient-to-r from-purple-500 to-purple-600',
        text: 'text-purple-600',
        textDark: 'text-purple-400',
        badge: 'bg-purple-100 text-purple-700',
        badgeDark: 'bg-purple-500/20 text-purple-400',
      },
    }
    return colors[color]
  }

  const filteredCategories =
    activeFilter === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.color === activeFilter)

  return (
    <section
      ref={sectionRef}
      className={`section-padding ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-slate-50 to-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 animate-on-scroll animate-fade-in-up">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
            }`}
          >
            기술 스택
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Skills
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            카페24 IDC 기술지원팀 실무 경험 기반 기술 스택
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-on-scroll animate-fade-in-up animation-delay-200">
          {[
            { key: 'all', label: '전체', color: 'slate' },
            { key: 'blue', label: 'Infrastructure', color: 'blue' },
            { key: 'green', label: 'Security', color: 'green' },
            { key: 'orange', label: 'Web Stack', color: 'orange' },
            { key: 'purple', label: 'Tools', color: 'purple' },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? isDark
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-900 text-white'
                  : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color)
            return (
              <div
                key={category.title}
                className={`animate-on-scroll animate-fade-in-up card-hover rounded-2xl p-5 sm:p-6 border-2 ${
                  isDark
                    ? `${colorClasses.bgDark} ${colorClasses.borderDark}`
                    : `${colorClasses.bg} ${colorClasses.border}`
                }`}
                style={{
                  animationDelay: `${(categoryIndex + 1) * 100}ms`
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3
                    className={`text-lg sm:text-xl font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-1.5">
                        <span
                          className={`font-medium text-sm ${
                            isDark ? 'text-slate-300' : 'text-slate-700'
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            isDark ? colorClasses.badgeDark : colorClasses.badge
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full rounded-full h-2 overflow-hidden ${
                          isDark ? 'bg-slate-700' : 'bg-slate-200'
                        }`}
                      >
                        <div
                          className={`${colorClasses.progress} h-2 rounded-full transition-all duration-1000 ease-out ${
                            isVisible ? '' : 'w-0'
                          }`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total skills count */}
                <div
                  className={`mt-5 pt-4 border-t ${
                    isDark ? 'border-slate-700' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}
                    >
                      Total Skills
                    </span>
                    <span
                      className={`text-lg font-bold ${
                        isDark ? colorClasses.textDark : colorClasses.text
                      }`}
                    >
                      {category.skills.length}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary stats */}
        <div
          className={`mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 animate-on-scroll animate-fade-in-up animation-delay-600`}
        >
          {[
            { label: 'Total Skills', value: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), icon: '📊' },
            { label: 'Categories', value: skillCategories.length, icon: '📁' },
            { label: 'Average Level', value: `${Math.round(skillCategories.flatMap(c => c.skills).reduce((acc, s) => acc + s.level, 0) / skillCategories.flatMap(c => c.skills).length)}%`, icon: '📈' },
            { label: 'Years Experience', value: '2+', icon: '🎯' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`p-4 sm:p-6 rounded-xl text-center ${
                isDark
                  ? 'bg-slate-800/50 border border-slate-700'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              <span className="text-2xl sm:text-3xl mb-2 block">{stat.icon}</span>
              <div
                className={`text-2xl sm:text-3xl font-bold mb-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
