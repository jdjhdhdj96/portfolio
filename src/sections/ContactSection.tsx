export const ContactSection = () => {
  const contactInfo = [
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
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Contact
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          함께 일하고 싶으시다면 연락주세요!
        </p>

        {/* 연락처 정보 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <div
              key={info.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all"
            >
              <div className="text-4xl mb-3">{info.icon}</div>
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 transition-colors break-all"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-300">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* 포트폴리오 특징 */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            이 포트폴리오의 특징
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="text-white font-semibold mb-2">Claude Code로 제작</h4>
              <p className="text-gray-400 text-sm">
                전체 개발 과정을 AI와 협업하여 진행
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-white font-semibold mb-2">React + TypeScript</h4>
              <p className="text-gray-400 text-sm">
                모던 프론트엔드 기술 스택 활용
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="text-white font-semibold mb-2">TailwindCSS</h4>
              <p className="text-gray-400 text-sm">
                유틸리티 기반 반응형 디자인
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-white font-semibold mb-2">GitHub Actions</h4>
              <p className="text-gray-400 text-sm">
                자동 빌드 및 GitHub Pages 배포
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
