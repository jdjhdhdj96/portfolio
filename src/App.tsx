import { createContext, useContext } from 'react'

// Dummy theme context for compatibility
const ThemeContext = createContext<any>(null)
export const useTheme = () => useContext(ThemeContext)

export const App = () => {
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
        <div className="sidebar-brand" style={{ cursor: 'pointer' }} onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
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
                <span>개요 및 경력</span>
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
              <a href="#projects" className="sidebar-nav-link" onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}>
                <span className="sidebar-nav-icon">💼</span>
                <span>프로젝트</span>
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

        {/* Profile Grid */}
        <div className="profile-grid">
          {/* Profile Card 1: 서버 인프라 */}
          <div className="profile-card">
            <div className="profile-avatar">🖥️</div>
            <div className="profile-name">서버 인프라</div>
            <div className="profile-title">서버 관리(Linux, Windows)</div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-value">서버세팅</div>
                <div className="profile-stat-label">Server Setup</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">서버회수</div>
                <div className="profile-stat-label">Server Retrieval</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">서버입고</div>
                <div className="profile-stat-label">Server Receiving</div>
              </div>
            </div>
          </div>

          {/* Profile Card 2: 모니터링 */}
          <div className="profile-card">
            <div className="profile-avatar">🔒</div>
            <div className="profile-name">모니터링 및 보안 대응</div>
            <div className="profile-title">관제 및 침해사고</div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-value">SW, HW장애</div>
                <div className="profile-stat-label">현장 대응</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">네트워크 공격</div>
                <div className="profile-stat-label">유입 대응</div>
              </div>
            </div>
          </div>

          {/* Profile Card 3: 자동화 */}
          <div className="profile-card">
            <div className="profile-avatar">⚡</div>
            <div className="profile-name">업무 자동화</div>
            <div className="profile-title">Python · Bash · PowerShell</div>
            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-value">시간절약</div>
                <div className="profile-stat-label">Time Save</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">오류감소</div>
                <div className="profile-stat-label">Error Reduce</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section - 개요 및 경력 */}
        <div style={{ marginTop: 'var(--spacing-xl)' }}>
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
                  <li>약 5000대 이상 서버 안정적 운영 및 관리</li>
                  <li>PXE Boot 자동화로 서버 배포 시간 단축</li>
                  <li>월평균 30건 이상 보안 위협 탐지 및 차단</li>
                  <li>서버 모니터링 시스템 구축으로 장애 발견 시간 단축</li>
                  <li>JIRA 업무 프로세스 정립으로 SLA 준수</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills / Tech Stack Section */}
        <div id="skills" style={{ marginTop: 'var(--spacing-xl)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">기술 스택</h3>
            </div>
            <div className="table">
              <div className="table-row">
                <div className="table-cell bold">IDC/인프라</div>
                <div className="table-cell muted">서버 물류 관리, 레일킷 구성, 랙 마운트, 전원 및 네트워크 구성</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">서버/인프라</div>
                <div className="table-cell muted">물리 서버 세팅, RAID 구성, 장비 교체 및 재활용</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">서버 벤더 운영 경험</div>
                <div className="table-cell muted">DELL, HP, Supermicro, IBM 등 다양한 벤더 서버 운영</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">원격 관리</div>
                <div className="table-cell muted">iDRAC, iLO, IPMI 기반 원격 전원·콘솔·HW 모니터링</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">운영체제 (OS)</div>
                <div className="table-cell muted">Linux Server(Ubuntu, CentOS, Rocky), Windows Server 운영</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">네트워크</div>
                <div className="table-cell muted">IP 자원 관리, ACL 설정, 스위치 설정 및 운영</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">방화벽/보안 제어</div>
                <div className="table-cell muted">iptables, ipsec, 윈도우 방화벽 기반 접근 제어 정책 관리</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">침해사고 대응</div>
                <div className="table-cell muted">비정상 트래픽 분석, DDOS 대응, 해킹성 프로세스 추적 및 조치</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">보안 솔루션</div>
                <div className="table-cell muted">V3, Avast, DeepFinder 보안 솔루션 운영</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">시스템 운영(WEB)</div>
                <div className="table-cell muted">Apache, Nginx, IIS</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">시스템 운영(WAS)</div>
                <div className="table-cell muted">Tomcat, PHP-FPM</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">시스템 운영(DBMS)</div>
                <div className="table-cell muted">MySQL, MariaDB, MSSQL</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">서버 이전</div>
                <div className="table-cell muted">다양한 OS 및 애플리케이션 버전 환경에서 서버 이전 및 마이그레이션 수행</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">백업/복구 운영</div>
                <div className="table-cell muted">rsync 기반 로컬 백업 구성, Bacula, Cobian 백업 솔루션 활용 백업 관리 및 복구</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">모니터링</div>
                <div className="table-cell muted">서버 및 네트워크 모니터링 시스템 운영</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">야간당직/장애 대응</div>
                <div className="table-cell muted">24x7 야간당직 체계 운영, 긴급 장애 대응</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">트러블슈팅</div>
                <div className="table-cell muted">OS, 네트워크, 서비스 장애 원인 분석 및 조치</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">하드웨어 장애 처리</div>
                <div className="table-cell muted">디스크, 메모리, 전원 등 HW 장애 현장 대응</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">고객 커뮤니케이션</div>
                <div className="table-cell muted">장애 상황 공유, 진행 현황 안내, 고객사 CS 대응</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">스크립트/자동화</div>
                <div className="table-cell muted">Python, Shell Script, PowerShell 기반 운영 자동화</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">AI 모델 활용</div>
                <div className="table-cell muted">ChatGPT, Claude, Gemini 기반 업무 어시스턴트 활용 경험</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">AI 개발 도구 활용</div>
                <div className="table-cell muted">Claude Code 기반 Skills, Hooks, Plugin, Slash Command 등 활용 경험</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">협업 도구 활용</div>
                <div className="table-cell muted">Slack, Jira, Wiki 기반 운영 협업 경험</div>
              </div>
              <div className="table-row">
                <div className="table-cell bold">업무 프로세스 경험</div>
                <div className="table-cell muted">Jira 기반 업무 흐름 설계, 패턴 업무 인수인계 및 이력 관리</div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section - 프로젝트 */}
        <div id="projects" style={{ marginTop: 'var(--spacing-xl)' }}>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">프로젝트</h3>
            </div>

            {/* 카테고리 1: IDC 인프라 프로젝트 */}
            <div style={{ padding: 'var(--spacing-md)', borderBottom: '2px solid var(--border-color)' }}>
              <h4 style={{ color: 'var(--color-blue)', fontSize: '1.125rem', marginBottom: 'var(--spacing-md)', fontWeight: 700 }}>
                📦 IDC 인프라 프로젝트
              </h4>
            </div>

            <div className="table">
              {/* 대규모 신규서버 입고 */}
              <div className="table-row">
                <div className="table-cell bold">대규모 신규서버 입고</div>
                <div className="table-cell muted">신규 서비스 라인업 서버 입고(100대 이상)</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
              </div>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  📌 프로젝트 개요
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                  신규 서비스 라인업 출시를 위한 대규모 서버 입고 프로젝트. 100대 이상의 물리 서버를 체계적으로 입고하고 상품화하여
                  고객에게 제공할 수 있도록 인프라 세팅부터 네트워크 구성, OS 설치, 데이터 관리까지 전 과정을 수행.
                </p>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  🎯 주요 기능
                </h4>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', paddingLeft: '1.5rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  <li>인프라 세팅: 네트워크 스위치 구성, ACL(접근 제어 목록) 정책 설정</li>
                  <li>HW 세팅: 서버 메모리 증설 및 구성, 디스크 RAID 구성 및 파티셔닝</li>
                  <li>상품화: Windows Server, CentOS, Ubuntu 등 다양한 OS 설치 및 세팅</li>
                  <li>네트워크 세팅: IPMI(원격 관리) 설정, Console 접근 구성, IP 할당</li>
                  <li>입고 후 데이터 갱신: 자산 관리 DB 업데이트, 서버 인벤토리 등록</li>
                </ul>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  💡 성과
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  • 100대 이상 서버를 2주 내 입고 및 상품화 완료<br/>
                  • 체계적인 프로세스 수립으로 오류율 최소화<br/>
                  • 신규 서비스 라인업 적기 출시 기여<br/>
                  • 서버 자산 관리 데이터베이스 정확도 향상
                </p>
              </div>
            </div>

            {/* 카테고리 2: 업무 자동화 프로젝트 */}
            <div style={{ padding: 'var(--spacing-md)', borderBottom: '2px solid var(--border-color)', borderTop: '3px solid var(--border-color)', marginTop: 'var(--spacing-lg)' }}>
              <h4 style={{ color: 'var(--color-purple)', fontSize: '1.125rem', marginBottom: 'var(--spacing-md)', fontWeight: 700 }}>
                ⚡ 업무 자동화 프로젝트
              </h4>
            </div>

            <div className="table">
              {/* Windows 세팅 완료 체크리스트 */}
              <div className="table-row">
                <div className="table-cell bold">Windows 세팅 완료 체크리스트 (PowerShell)</div>
                <div className="table-cell muted">서버 정보 자동 수집 스크립트</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
              </div>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  📌 프로젝트 개요
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                  Windows Server 신규 세팅 후 시스템 정보를 자동으로 수집하고 검증하는 PowerShell 스크립트 개발.
                  호스트명, Uptime, OS 정보, 네트워크 설정, 디스크/파티션/메모리 정보를 자동으로 출력하여 작업 시간을 단축.
                </p>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  🎯 주요 기능
                </h4>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', paddingLeft: '1.5rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  <li>Host Name, Uptime, OS 버전 자동 확인</li>
                  <li>네트워크 설정 (IP, Gateway, DNS) 및 nslookup 테스트</li>
                  <li>디스크, 파티션, 메모리 정보 자동 수집</li>
                  <li>스크립트 실행 후 자동 삭제 (보안)</li>
                </ul>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  💡 성과
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  • 수동 확인 시간 20분 → 스크립트 실행 1분으로 단축<br/>
                  • 정보 누락 오류 제거로 재작업 감소<br/>
                  • 월 50대 이상 서버 세팅 시 약 15시간 절약
                </p>
              </div>

              {/* Linux 세팅 완료 체크리스트 */}
              <div className="table-row" style={{ borderTop: '2px solid var(--border-color)' }}>
                <div className="table-cell bold">Linux 세팅 완료 체크리스트 (Bash)</div>
                <div className="table-cell muted">다중 OS 지원 서버 검증 스크립트</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
              </div>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  📌 프로젝트 개요
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                  CentOS 7, Ubuntu 22.04 등 다중 Linux 배포판을 자동 감지하고, 각 OS에 맞는 명령어로 시스템 정보를 수집하는 Shell Script 개발.
                  OS별 차이를 자동 처리하여 통합 관리 환경 구축.
                </p>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  🎯 주요 기능
                </h4>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', paddingLeft: '1.5rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  <li>OS 자동 감지 (CentOS 7, Ubuntu 22.04)</li>
                  <li>Hostname, IP, Uptime, OS 정보 확인</li>
                  <li>디스크, 파티션, /etc/fstab, 메모리 정보 수집</li>
                  <li>Netstat 및 APM (Apache, MySQL, PHP) 설치 여부 확인</li>
                </ul>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  💡 성과
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  • OS별 명령어 차이로 인한 오류 제거<br/>
                  • CentOS/Ubuntu 통합 관리로 업무 표준화<br/>
                  • 월 40대 이상 Linux 서버 세팅 시 약 12시간 절약
                </p>
              </div>

              {/* Linux 재부팅 전 체크리스트 */}
              <div className="table-row" style={{ borderTop: '2px solid var(--border-color)' }}>
                <div className="table-cell bold">Linux 서버 재부팅 전 체크리스트 (Bash)</div>
                <div className="table-cell muted">시스템 상태 점검 및 오류 탐지</div>
                <div className="table-cell">
                  <span className="table-badge active">완료</span>
                </div>
              </div>
              <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  📌 프로젝트 개요
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                  서버 재부팅 전 시스템 상태를 종합적으로 점검하여 잠재적 오류를 사전에 탐지하는 Shell Script 개발.
                  디스크, 파일시스템, 시스템 로그 오류 확인, iptables 백업, 서비스 자동 시작 설정 검증 등을 자동화.
                </p>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  🎯 주요 기능
                </h4>
                <ul style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', paddingLeft: '1.5rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  <li>Disk Error Check (SMART 상태 확인)</li>
                  <li>Filesystem Error Check (tune2fs 상태 확인)</li>
                  <li>System Error Check (/var/log/messages 분석)</li>
                  <li>iptables 자동 백업 (날짜별 저장)</li>
                  <li>hosts.deny 정책 확인</li>
                  <li>Service Autostart 설정 검증 (Apache, MySQL 등)</li>
                  <li>rc.local 스크립트 확인</li>
                </ul>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  💡 성과
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  • 재부팅 후 서비스 미작동 사고 예방<br/>
                  • 디스크/파일시스템 오류 사전 탐지로 데이터 손실 방지<br/>
                  • 월 20대 서버 재부팅 시 약 8시간 절약 및 장애 발생 감소
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
