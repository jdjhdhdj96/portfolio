import { useEffect } from 'react'
import { useTheme } from '../App'
import type { Project } from '../data/projects'
import { categoryColors } from '../data/projects'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const colors = categoryColors[project.category]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 ${
          isDark ? 'bg-black/80' : 'bg-black/50'
        } backdrop-blur-sm`}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-scale-in ${
          isDark ? 'bg-slate-800' : 'bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
            isDark
              ? 'bg-slate-700 hover:bg-slate-600 text-white'
              : 'bg-white hover:bg-slate-100 text-slate-900 shadow-lg'
          }`}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-t-2xl bg-gradient-to-br from-slate-700 to-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://via.placeholder.com/1200x600/${
                project.category === 'development'
                  ? '3b82f6'
                  : project.category === 'security'
                    ? 'ef4444'
                    : project.category === 'infrastructure'
                      ? '10b981'
                      : project.category === 'automation'
                        ? 'f59e0b'
                        : '8b5cf6'
              }/ffffff?text=${encodeURIComponent(project.title)}`
            }}
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                isDark ? colors.badgeDark : colors.badge
              }`}
            >
              {project.category === 'development'
                ? '개발'
                : project.category === 'infrastructure'
                  ? '인프라'
                  : project.category === 'security'
                    ? '보안'
                    : project.category === 'automation'
                      ? '자동화'
                      : '관리'}
            </span>
          </div>

          {/* Highlight badge */}
          {project.highlight && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {project.title}
            </h2>
            <p
              className={`text-base sm:text-lg mb-4 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {project.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className={`w-5 h-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  {project.period}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className={`w-5 h-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
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
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  {project.role}
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="flex flex-wrap gap-3 mb-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-700 text-white hover:bg-slate-600'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          )}

          {/* Long description */}
          <div className="mb-8">
            <h3
              className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              프로젝트 소개
            </h3>
            <p
              className={`text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {project.longDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3
              className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              기술 스택
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className={`p-3 rounded-lg border ${
                    isDark
                      ? 'bg-slate-700/50 border-slate-600'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      {tech.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        isDark
                          ? 'bg-slate-600 text-slate-300'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {tech.category}
                    </span>
                  </div>
                  <div
                    className={`w-full h-1.5 rounded-full overflow-hidden ${
                      isDark ? 'bg-slate-600' : 'bg-slate-200'
                    }`}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: `${tech.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h3
              className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              주요 성과
            </h3>
            <ul className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDark ? colors.bgDark : colors.bg
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        isDark
                          ? colors.badgeDark.split(' ')[1]
                          : colors.badge.split(' ')[1]
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span
                    className={`flex-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3
              className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              태그
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                    isDark
                      ? 'bg-slate-700 text-slate-300'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
