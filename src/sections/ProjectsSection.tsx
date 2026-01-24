export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'React와 TypeScript로 구축한 전자상거래 플랫폼. 장바구니, 결제, 주문 관리 기능 구현',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Redux'],
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=E-Commerce',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '드래그 앤 드롭 기능이 있는 칸반 보드 스타일의 작업 관리 애플리케이션',
      tags: ['React', 'Next.js', 'MongoDB', 'DnD'],
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Task+Manager',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보를 제공하는 대시보드. OpenWeather API 연동',
      tags: ['React', 'API', 'Chart.js', 'CSS'],
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Weather+App',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: '마크다운 에디터와 SEO 최적화가 적용된 개인 블로그 플랫폼',
      tags: ['Next.js', 'TypeScript', 'MDX', 'SEO'],
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Blog',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: '반응형 디자인과 애니메이션이 적용된 개인 포트폴리오 웹사이트',
      tags: ['React', 'TailwindCSS', 'Vite'],
      image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Portfolio',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'WebSocket을 활용한 실시간 채팅 애플리케이션',
      tags: ['React', 'Node.js', 'Socket.io', 'Express'],
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Chat+App',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          진행했던 주요 프로젝트들
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group"
            >
              {/* 프로젝트 이미지 */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* 기술 스택 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 링크 버튼 */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
