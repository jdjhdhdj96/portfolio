export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Claude Code Portfolio',
      description: 'Claude Code AI를 활용하여 제작한 반응형 포트폴리오. React + TypeScript + TailwindCSS 기반으로 GitHub Actions를 통한 자동 배포 구성',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Claude Code', 'GitHub Actions'],
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Claude+Code+Portfolio',
      github: 'https://github.com/jdjhdhdj96/portfolio',
      demo: 'https://jdjhdhdj96.github.io/portfolio/',
      highlight: true,
    },
    {
      id: 2,
      title: '서버 세팅 자동화',
      description: 'PXE Boot와 Clonezilla를 활용한 서버 OS 배포 자동화. CentOS, Ubuntu, Windows Server 이미지 관리 및 배포',
      tags: ['Linux', 'PXE Boot', 'Clonezilla', 'Shell Script'],
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=Server+Setup',
      github: null,
      demo: null,
    },
    {
      id: 3,
      title: '침해사고 대응',
      description: 'DDoS 공격, TCP Flooding, 랜섬웨어 등 보안 위협 탐지 및 대응. 트래픽 분석을 통한 원인 파악 및 고객 안내',
      tags: ['Security', 'Traffic Analysis', 'Firewall', 'Incident Response'],
      image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Security+Response',
      github: null,
      demo: null,
    },
    {
      id: 4,
      title: '서버 모니터링 시스템',
      description: 'SMS 알림 기반 서버 상태 모니터링. 디스크 용량, 프로세스 상태, 네트워크 연결 등 실시간 감시 및 장애 대응',
      tags: ['Monitoring', 'SMS Alert', 'Shell Script', 'Linux'],
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Monitoring',
      github: null,
      demo: null,
    },
    {
      id: 5,
      title: 'IDC 인프라 관리',
      description: 'SK-IDC 기반 서버호스팅 인프라 운영. HP/SuperMicro 서버 하드웨어 관리, iLO/IPMI 원격 콘솔, 네트워크 구성',
      tags: ['HP Server', 'iLO/IPMI', 'Network', 'Hardware'],
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=IDC+Infra',
      github: null,
      demo: null,
    },
    {
      id: 6,
      title: 'JIRA 기반 업무 관리',
      description: 'JIRA를 활용한 체계적인 업무 프로세스 관리. 서버 세팅, 장애 대응, 회수 등 전체 라이프사이클 추적',
      tags: ['JIRA', 'Confluence', 'Workflow', 'Documentation'],
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=JIRA+Workflow',
      github: null,
      demo: null,
    },
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Projects & Experience
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          카페24 IDC 기술지원팀 주요 업무 및 개인 프로젝트
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white border-2 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
                project.highlight
                  ? 'border-purple-400 ring-2 ring-purple-200'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* 프로젝트 이미지 */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.highlight && (
                  <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Claude Code
                  </div>
                )}
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* 기술 스택 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        tag === 'Claude Code'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 링크 버튼 */}
                {(project.github || project.demo) && (
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
