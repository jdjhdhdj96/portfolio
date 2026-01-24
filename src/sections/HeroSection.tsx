export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
            Built with Claude Code
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          IDC 기술지원 엔지니어 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            & AI 활용 개발자
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          카페24 매니지드기술지원팀에서 서버 인프라 운영 경험을 바탕으로 <br className="hidden md:block" />
          Claude Code를 활용한 프론트엔드 개발까지 수행합니다.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            자세히 보기
          </a>
          <a
            href="https://github.com/jdjhdhdj96/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            GitHub
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            Linux / Windows Server
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            React / TypeScript
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            Claude Code AI
          </div>
        </div>
      </div>
    </section>
  );
};
