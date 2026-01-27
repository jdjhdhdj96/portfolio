import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../App'
import { projects, categoryLabels, categoryColors, type ProjectCategory, type Project } from '../data/projects'
import { ProjectModal } from '../components/ProjectModal'

export const ProjectsSection = () => {
  const { theme } = useTheme()
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all')
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isDark = theme === 'dark'

  const categories: Array<{ key: ProjectCategory | 'all'; label: string }> = [
    { key: 'all', label: '전체' },
    { key: 'development', label: '개발' },
    { key: 'infrastructure', label: '인프라' },
    { key: 'security', label: '보안' },
    { key: 'automation', label: '자동화' },
    { key: 'management', label: '관리' },
  ]

  // Lazy loading for images
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const projectId = parseInt(img.dataset.projectId || '0')
            if (projectId) {
              setLoadedImages((prev) => new Set([...prev, projectId]))
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '100px' }
    )

    const images = document.querySelectorAll('[data-project-id]')
    images.forEach((img) => observer.observe(img))

    return () => observer.disconnect()
  }, [activeFilter])

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section
        ref={sectionRef}
        className={`section-padding ${isDark ? 'bg-slate-900' : 'bg-white'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-12 animate-on-scroll animate-fade-in-up">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
                isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
              }`}
            >
              프로젝트
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Projects & Experience
            </h2>
            <p
              className={`text-base sm:text-lg max-w-2xl mx-auto ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              카페24 IDC 기술지원팀 주요 업무 및 개인 프로젝트
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-on-scroll animate-fade-in-up animation-delay-200">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.key
                    ? isDark
                      ? 'bg-white text-slate-900'
                      : 'bg-slate-900 text-white'
                    : isDark
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => {
              const colors = categoryColors[project.category]

              return (
                <div
                  key={project.id}
                  className={`animate-on-scroll animate-fade-in-up group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isDark
                      ? 'bg-slate-800 border border-slate-700'
                      : 'bg-white border border-slate-200 shadow-sm'
                  } ${
                    project.highlight
                      ? isDark
                        ? 'ring-2 ring-purple-500/50 border-purple-500/50'
                        : 'ring-2 ring-purple-400 border-purple-400'
                      : isDark
                        ? 'hover:border-blue-500/50'
                        : 'hover:border-blue-300 hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    {/* Loading placeholder */}
                    <div
                      data-project-id={project.id}
                      className={`absolute inset-0 ${
                        isDark ? 'bg-slate-700' : 'bg-slate-200'
                      } ${loadedImages.has(project.id) ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-8 h-8 border-2 border-t-transparent rounded-full animate-spin ${
                            isDark ? 'border-slate-500' : 'border-slate-400'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onLoad={() =>
                        setLoadedImages((prev) => new Set([...prev, project.id]))
                      }
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://via.placeholder.com/800x500/${
                          project.category === 'development' ? '3b82f6' :
                          project.category === 'security' ? 'ef4444' :
                          project.category === 'infrastructure' ? '10b981' :
                          project.category === 'automation' ? 'f59e0b' : '8b5cf6'
                        }/ffffff?text=${encodeURIComponent(project.title)}`
                      }}
                      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        loadedImages.has(project.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                        {/* Quick view button */}
                        <button
                          className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleProjectClick(project)
                          }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          상세보기
                        </button>

                        {/* Action buttons */}
                        <div className="flex gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                              aria-label="View GitHub repository"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                              aria-label="View live demo"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full shadow-lg ${
                        isDark ? colors.badgeDark : colors.badge
                      }`}>
                        {categoryLabels[project.category]}
                      </span>
                    </div>

                    {/* Highlight badge */}
                    {project.highlight && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project info */}
                  <div className="p-5 sm:p-6">
                    <h3
                      className={`text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-4 line-clamp-2 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Period & Role */}
                    <div className="flex flex-wrap gap-3 mb-4 text-xs">
                      <div className={`flex items-center gap-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{project.period}</span>
                      </div>
                      <div className={`flex items-center gap-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="truncate">{project.role}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            tag === 'Claude AI' || tag === 'Claude Code'
                              ? isDark
                                ? 'bg-purple-500/20 text-purple-400'
                                : 'bg-purple-100 text-purple-700'
                              : isDark
                                ? 'bg-slate-700 text-slate-300'
                                : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            isDark
                              ? 'bg-slate-700 text-slate-400'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats - achievements count */}
                    <div className={`pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                      <div className="flex items-center justify-between text-xs">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                          주요 성과
                        </span>
                        <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          {project.achievements.length}개
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className={`text-6xl mb-4`}>🔍</div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                프로젝트가 없습니다
              </h3>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                다른 카테고리를 선택해보세요
              </p>
            </div>
          )}

          {/* View more CTA */}
          <div className="text-center mt-10 sm:mt-12 animate-on-scroll animate-fade-in-up animation-delay-400">
            <a
              href="https://github.com/jdjhdhdj96"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
