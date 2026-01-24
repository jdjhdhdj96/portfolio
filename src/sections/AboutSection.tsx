export const AboutSection = () => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 프로필 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">프로필</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">이름</p>
                <p>홍길동</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">이메일</p>
                <p>developer@example.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">전문 분야</p>
                <p>Frontend Development, React, TypeScript</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">관심사</p>
                <p>UI/UX 디자인, 웹 접근성, 성능 최적화</p>
              </div>
            </div>
          </div>

          {/* 경력 요약 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">경력 요약</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">프론트엔드 개발자</h4>
                <p className="text-gray-600 mb-2">ABC 테크 | 2022 - 현재</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>React 기반 웹 애플리케이션 개발 및 유지보수</li>
                  <li>TypeScript 도입으로 코드 안정성 30% 향상</li>
                  <li>성능 최적화를 통한 로딩 시간 50% 단축</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">주니어 개발자</h4>
                <p className="text-gray-600 mb-2">XYZ 스타트업 | 2020 - 2022</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>반응형 웹 페이지 개발</li>
                  <li>RESTful API 연동 및 상태 관리</li>
                  <li>UI/UX 개선을 통한 사용자 만족도 향상</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">인턴</h4>
                <p className="text-gray-600 mb-2">DEF 회사 | 2019 - 2020</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>HTML, CSS, JavaScript 기반 웹 페이지 제작</li>
                  <li>Git을 활용한 협업 경험</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
