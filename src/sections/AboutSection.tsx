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
                <p className="font-semibold text-gray-900">전문 분야</p>
                <p>IDC 인프라 운영, 서버 기술지원</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">핵심 역량</p>
                <p>Linux/Windows 서버 관리, 네트워크 구성, 보안 관제</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">관심사</p>
                <p>AI 기반 업무 자동화, Claude Code 활용, DevOps</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">특기사항</p>
                <p>이 포트폴리오 자체가 Claude Code로 제작되었습니다</p>
              </div>
            </div>
          </div>

          {/* 경력 요약 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">경력 요약</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">IDC 기술지원 엔지니어</h4>
                <p className="text-gray-600 mb-2">카페24 매니지드기술지원팀 | 2023</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>서버호스팅 신규 세팅 및 OS 설치 (CentOS, Ubuntu, Windows Server)</li>
                  <li>HP/SuperMicro 서버 하드웨어 관리 (iLO/IPMI)</li>
                  <li>침해사고 대응 및 보안 관제 (DDoS, 랜섬웨어)</li>
                  <li>서버 모니터링 및 장애 대응</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">주요 업무</h4>
                <p className="text-gray-600 mb-2">SK-IDC 인프라 운영</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>PXE Boot / Clonezilla 기반 OS 배포 자동화</li>
                  <li>네트워크 구성 및 방화벽 설정</li>
                  <li>JIRA 기반 업무 프로세스 관리</li>
                  <li>고객사 기술 지원 및 트러블슈팅</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-gray-900">Claude Code 활용</h4>
                <p className="text-gray-600 mb-2">AI 기반 개발 역량</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>React + TypeScript + TailwindCSS 웹 개발</li>
                  <li>GitHub Actions CI/CD 파이프라인 구성</li>
                  <li>Conventional Commits 기반 버전 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
