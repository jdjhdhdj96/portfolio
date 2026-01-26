import { createContext, useContext, useState } from 'react'

// Dummy theme context for compatibility
const ThemeContext = createContext<any>(null)
export const useTheme = () => useContext(ThemeContext)

export const App = () => {
  const [showAllSkills, setShowAllSkills] = useState(false)

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          IDC 기술지원팀
        </div>
        
        <nav>
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <a href="#overview" className="sidebar-nav-link active" onClick={(e) => {
                e.preventDefault()
                scrollToSection('overview')
              }}>
                <span className="sidebar-nav-icon">📊</span>
                <span>개요</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#projects" className="sidebar-nav-link" onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}>
                <span className="sidebar-nav-icon">💼</span>
                <span>주요 업무</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#skills" className="sidebar-nav-link" onClick={(e) => {
                e.preventDefault()
                scrollToSection('skills')
              }}>
                <span className="sidebar-nav-icon">⚡</span>
                <span>기술 스택</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#experience" className="sidebar-nav-link" onClick={(e) => {
                e.preventDefault()
                scrollToSection('experience')
              }}>
                <span className="sidebar-nav-icon">🏢</span>
                <span>경력</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#contact" className="sidebar-nav-link" onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}>
                <span className="sidebar-nav-icon">✉️</span>
                <span>연락처</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header id="overview" className="main-header">
          <div>
            <h1 className="main-title">포트폴리오</h1>
            <p className="main-subtitle">카페24 IDC 기술지원팀 엔지니어 | 2023.01 - 2024.03</p>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="stats-grid">
          {/* Stat 1: 서버 관리 */}
          <div className="stat-card">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">서버 관리</div>
              </div>
              <div className="stat-card-icon blue">
                🖥️
              </div>
            </div>
            <div className="stat-card-value">500+</div>
            <div className="stat-card-footer">
              <span className="stat-badge positive">+25%</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>운영 중</span>
            </div>
          </div>

          {/* Stat 2: 보안 대응 */}
          <div className="stat-card">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">보안 대응</div>
              </div>
              <div className="stat-card-icon purple">
                🔒
              </div>
            </div>
            <div className="stat-card-value">30+</div>
            <div className="stat-card-footer">
              <span className="stat-badge positive">+12%</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>월평균 건수</span>
            </div>
          </div>

          {/* Stat 3: 업무 처리 */}
          <div className="stat-card">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">업무 처리</div>
              </div>
              <div className="stat-card-icon green">
                📋
              </div>
            </div>
            <div className="stat-card-value">200+</div>
            <div className="stat-card-footer">
              <span className="stat-badge positive">+18%</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>월평균 티켓</span>
            </div>
          </div>

          {/* Stat 4: 경력 기간 */}
          <div className="stat-card">
            <div className="stat-card-header">
              <div>
                <div className="stat-card-title">경력 기간</div>
              </div>
              <div className="stat-card-icon red">
                📅
              </div>
            </div>
            <div className="stat-card-value">1년+</div>
            <div className="stat-card-footer">
              <span className="stat-badge positive">+100%</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>지속 성장</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div id="projects" className="content-grid">
          {/* Recent Projects */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">프로젝트</h3>
            </div>
            <div className="table">
              <div className="table-row">
                <div className="table-cell bold">PXE Boot 자동 배포 시스템</div>
                <div className="table-cell muted">인프라 자동화</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
                <div className="table-cell muted">2023-06</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">DeepFinder 보안 위협 탐지</div>
                <div className="table-cell muted">보안 솔루션</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
                <div className="table-cell muted">2023-11</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">서버 모니터링 SMS 알림</div>
                <div className="table-cell muted">장애 대응</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
                <div className="table-cell muted">2023-08</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">IDC 신규 서버 대량 입고 (100대+)</div>
                <div className="table-cell muted">인프라 운영</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
                <div className="table-cell muted">2023-10</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">JIRA 기반 업무 프로세스 개편</div>
                <div className="table-cell muted">협업 도구</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
                <div className="table-cell muted">2024-01</div>
              </div>
            </div>
          </div>

          {/* Skills / Tech Stack */}
          <div id="skills" className="card">
            <div className="card-header">
              <h3 className="card-title">주요 기술 스택</h3>
              <a
                href="#"
                className="card-action"
                onClick={(e) => {
                  e.preventDefault()
                  setShowAllSkills(!showAllSkills)
                }}
              >
                {showAllSkills ? '접기 ↑' : '전체보기 →'}
              </a>
            </div>
            <div className="table">
              <div className="table-row">
                <div className="table-cell bold">운영체제 (OS)</div>
                <div className="table-cell muted">Windows Server, Linux (Ubuntu, CentOS, Rocky), PXE 자동 배포</div>
                <div className="table-cell">
                  <span className="table-badge active">전문가</span>
                </div>
                <div className="table-cell muted">95%</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">서버/인프라</div>
                <div className="table-cell muted">물리 서버 세팅, RAID 구성, 네트워크 설정</div>
                <div className="table-cell">
                  <span className="table-badge active">전문가</span>
                </div>
                <div className="table-cell muted">92%</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">보안/백신</div>
                <div className="table-cell muted">V3, Avast, DeepFinder 보안 솔루션 운영</div>
                <div className="table-cell">
                  <span className="table-badge active">전문가</span>
                </div>
                <div className="table-cell muted">90%</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">업무 협업</div>
                <div className="table-cell muted">Slack, Jira, Confluence 협업 도구</div>
                <div className="table-cell">
                  <span className="table-badge active">전문가</span>
                </div>
                <div className="table-cell muted">93%</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">모니터링/장애대응</div>
                <div className="table-cell muted">서버/네트워크 모니터링, 장애 대응 프로세스</div>
                <div className="table-cell">
                  <span className="table-badge active">전문가</span>
                </div>
                <div className="table-cell muted">94%</div>
              </div>

              {showAllSkills && (
                <>
                  <div className="table-row">
                    <div className="table-cell bold">AI 활용 자동화</div>
                    <div className="table-cell muted">ChatGPT, Claude, Gemini 기반 문서화 및 로그 분석</div>
                    <div className="table-cell">
                      <span className="table-badge active">숙련</span>
                    </div>
                    <div className="table-cell muted">85%</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell bold">네트워크</div>
                    <div className="table-cell muted">IP 관리, ACL, 스위치 설정</div>
                    <div className="table-cell">
                      <span className="table-badge active">숙련</span>
                    </div>
                    <div className="table-cell muted">87%</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell bold">IDC 운영 지원</div>
                    <div className="table-cell muted">서버 물류, 랙 마운트, 전원/네트워크 구성</div>
                    <div className="table-cell">
                      <span className="table-badge active">전문가</span>
                    </div>
                    <div className="table-cell muted">91%</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell bold">시스템 운영</div>
                    <div className="table-cell muted">Apache, Tomcat, MariaDB 운영 관리</div>
                    <div className="table-cell">
                      <span className="table-badge active">숙련</span>
                    </div>
                    <div className="table-cell muted">83%</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell bold">스크립트/자동화</div>
                    <div className="table-cell muted">Python, Shell Script 기반 업무 자동화</div>
                    <div className="table-cell">
                      <span className="table-badge active">숙련</span>
                    </div>
                    <div className="table-cell muted">88%</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="profile-grid">
          {/* Profile Card 1: IDC 엔지니어 */}
          <div className="profile-card">
            <div className="profile-avatar">🖥️</div>
            <div className="profile-name">서버 인프라</div>
            <div className="profile-title">Linux/Windows 서버 관리</div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-value">500+</div>
                <div className="profile-stat-label">Servers</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">1년+</div>
                <div className="profile-stat-label">Experience</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">95%</div>
                <div className="profile-stat-label">Uptime</div>
              </div>
            </div>
          </div>

          {/* Profile Card 2: 보안 전문 */}
          <div className="profile-card">
            <div className="profile-avatar">🔒</div>
            <div className="profile-name">보안 대응</div>
            <div className="profile-title">DDoS · 랜섬웨어 탐지</div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-value">30+</div>
                <div className="profile-stat-label">Monthly</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">15분</div>
                <div className="profile-stat-label">Avg Time</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">100%</div>
                <div className="profile-stat-label">Response</div>
              </div>
            </div>
          </div>

          {/* Profile Card 3: 자동화 */}
          <div className="profile-card">
            <div className="profile-avatar">⚡</div>
            <div className="profile-name">업무 자동화</div>
            <div className="profile-title">Shell Script · PXE Boot</div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-value">70%</div>
                <div className="profile-stat-label">Time Save</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">50+</div>
                <div className="profile-stat-label">Servers/Mo</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">90%</div>
                <div className="profile-stat-label">Error Reduce</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div id="experience" style={{ marginTop: 'var(--spacing-xl)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">경력 정보</h3>
            </div>
            <div style={{ padding: 'var(--spacing-md) 0' }}>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  카페24 IDC 기술지원팀
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
                  2023.01 - 2024.03 (1년 3개월) | SK-IDC 기반 서버호스팅 인프라 운영
                </p>
                <p style={{ color: 'var(--color-yellow)', fontSize: '0.9375rem', marginBottom: '1rem', fontWeight: 600 }}>
                  
                </p>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                  <li>서버호스팅 신규 세팅 및 OS 설치 (CentOS, Ubuntu, Windows Server)</li>
                  <li>HP/SuperMicro 하드웨어 관리 (iLO, IPMI 원격 콘솔)</li>
                  <li>침해사고 대응 (DDoS, TCP Flooding, 랜섬웨어 등)</li>
                  <li>네트워크 구성 및 방화벽 설정</li>
                  <li>서버 모니터링 및 장애 대응 (디스크, 메모리, 프로세스)</li>
                  <li>JIRA 기반 업무 프로세스 관리 (월 200건 이상 티켓 처리)</li>
                  <li>PXE Boot/Clonezilla 활용 자동 배포 시스템 구축</li>
                </ul>
              </div>
              
              <div style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  주요 성과
                </h4>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                  <li>500대 이상 서버 안정적 운영 및 관리</li>
                  <li>PXE Boot 자동화로 서버 배포 시간 70% 단축 (2시간 → 30분)</li>
                  <li>월평균 30건 이상 보안 위협 탐지 및 차단</li>
                  <li>서버 모니터링 시스템 구축으로 장애 발견 시간 92% 단축 (1시간 → 5분)</li>
                  <li>JIRA 업무 프로세스 정립으로 SLA 준수율 95% 달성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" style={{ marginTop: 'var(--spacing-xl)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">연락처</h3>
            </div>
            <div style={{ padding: 'var(--spacing-md) 0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
                <div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>이메일</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500 }}>준비중</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>GitHub</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500 }}>
                    <a href="https://github.com/jdjhdhdj96" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-blue)', textDecoration: 'none' }}>
                      github.com/jdjhdhdj96
                    </a>
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>위치</div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500 }}>서울, 대한민국</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
