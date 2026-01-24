export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          안녕하세요, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            개발자입니다
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          사용자 경험을 중시하는 프론트엔드 개발자입니다. <br />
          React와 TypeScript를 활용하여 직관적이고 아름다운 웹 애플리케이션을 만듭니다.
        </p>
      </div>
    </section>
  );
};
