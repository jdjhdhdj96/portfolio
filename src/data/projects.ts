export type ProjectCategory =
  | 'development'
  | 'infrastructure'
  | 'security'
  | 'automation'
  | 'management'

export interface TechStack {
  name: string
  category: 'language' | 'framework' | 'tool' | 'platform'
  icon?: string
  proficiency: number
}

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  techStack: TechStack[]
  image: string
  thumbnail?: string
  screenshots?: string[]
  github: string | null
  demo: string | null
  highlight: boolean
  category: ProjectCategory
  period: string
  role: string
  achievements: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Claude Code Portfolio',
    description: 'AI 기반 개인 포트폴리오 웹사이트 - React + TypeScript + TailwindCSS',
    longDescription: `Claude Code AI를 활용하여 완전히 새롭게 제작한 개인 포트폴리오 웹사이트입니다. 기획부터 디자인, 개발, 배포까지 전 과정을 AI와 협업하여 진행했으며, GitHub Actions를 통한 자동 배포 파이프라인을 구축했습니다. 반응형 디자인과 다크모드를 완벽하게 지원하며, 최신 웹 기술 스택을 활용했습니다.`,
    techStack: [
      { name: 'React 18', category: 'framework', proficiency: 85 },
      { name: 'TypeScript', category: 'language', proficiency: 80 },
      { name: 'TailwindCSS', category: 'framework', proficiency: 90 },
      { name: 'Vite', category: 'tool', proficiency: 75 },
      { name: 'GitHub Actions', category: 'platform', proficiency: 70 }
    ],
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Claude AI', 'GitHub Actions'],
    image: '/assets/projects/portfolio/main.jpg',
    thumbnail: '/assets/projects/portfolio/thumb.jpg',
    screenshots: [
      '/assets/projects/portfolio/hero.jpg',
      '/assets/projects/portfolio/projects.jpg',
      '/assets/projects/portfolio/skills.jpg'
    ],
    github: 'https://github.com/jdjhdhdj96/portfolio',
    demo: 'https://jdjhdhdj96.github.io/portfolio/',
    highlight: true,
    category: 'development',
    period: '2024.01 - 진행중',
    role: 'Full-stack Developer',
    achievements: [
      'Claude Code를 활용한 완전 자동화 개발 프로세스 구축',
      'GitHub Pages를 통한 무료 호스팅 및 CI/CD 파이프라인 구현',
      '반응형 디자인 및 다크모드 완벽 지원',
      'Lighthouse 성능 점수 95+ 달성 목표'
    ]
  },
  {
    id: 2,
    title: '서버 자동 배포 시스템',
    description: 'PXE Boot 기반 OS 자동 설치 - 배포 시간 70% 단축',
    longDescription: `고객사 서버 세팅 시간을 대폭 단축시킨 자동화 시스템입니다. PXE Boot와 Clonezilla를 활용하여 CentOS, Ubuntu, Windows Server 등 다양한 OS를 네트워크를 통해 자동으로 배포합니다. Kickstart와 Preseed를 활용한 무인 설치 프로세스를 구축하여 대량의 서버를 빠르고 일관되게 세팅할 수 있습니다.`,
    techStack: [
      { name: 'PXE Boot', category: 'platform', proficiency: 90 },
      { name: 'Clonezilla', category: 'tool', proficiency: 85 },
      { name: 'TFTP/DHCP', category: 'platform', proficiency: 80 },
      { name: 'Shell Script', category: 'language', proficiency: 85 },
      { name: 'Kickstart/Preseed', category: 'tool', proficiency: 75 }
    ],
    tags: ['Linux', 'Automation', 'PXE Boot', 'Clonezilla', 'DevOps'],
    image: '/assets/projects/pxe-boot/main.jpg',
    thumbnail: '/assets/projects/pxe-boot/thumb.jpg',
    github: null,
    demo: null,
    highlight: false,
    category: 'automation',
    period: '2023.03 - 2023.06',
    role: 'Infrastructure Engineer',
    achievements: [
      '서버 OS 설치 시간 2시간 → 30분으로 단축 (70% 개선)',
      'CentOS, Ubuntu, Windows Server 통합 관리 체계 구축',
      '월평균 50대 이상 서버 배포 자동화',
      '설치 오류율 90% 감소 달성'
    ]
  },
  {
    id: 3,
    title: '보안 위협 탐지 및 대응',
    description: 'DDoS/랜섬웨어 실시간 탐지 - 월 30건 이상 위협 차단',
    longDescription: `실시간 트래픽 모니터링을 통한 보안 위협 탐지 및 즉각 대응 시스템입니다. DDoS 공격, TCP Flooding, 랜섬웨어 감염 등 다양한 보안 이슈를 신속하게 파악하고 대응합니다. tcpdump, Wireshark를 활용한 패킷 분석과 iptables, fail2ban을 통한 실시간 차단으로 고객 서버를 보호합니다.`,
    techStack: [
      { name: 'tcpdump', category: 'tool', proficiency: 85 },
      { name: 'Wireshark', category: 'tool', proficiency: 80 },
      { name: 'iptables', category: 'tool', proficiency: 85 },
      { name: 'fail2ban', category: 'tool', proficiency: 75 },
      { name: 'ModSecurity', category: 'tool', proficiency: 70 }
    ],
    tags: ['Security', 'DDoS', 'Firewall', 'Incident Response', 'Network'],
    image: '/assets/projects/security/main.jpg',
    thumbnail: '/assets/projects/security/thumb.jpg',
    github: null,
    demo: null,
    highlight: true,
    category: 'security',
    period: '2023.01 - 현재',
    role: 'Security Operations Engineer',
    achievements: [
      '월평균 30건 이상의 보안 위협 탐지 및 차단',
      'DDoS 공격 평균 대응 시간 15분 이내 달성',
      '랜섬웨어 감염 서버 복구 및 재발 방지 체계 구축',
      '보안 이슈 대응 KB 문서 50개 이상 작성'
    ]
  },
  {
    id: 4,
    title: '서버 모니터링 & 알림 시스템',
    description: 'SMS 기반 실시간 서버 상태 모니터링 - 장애 발견 시간 92% 단축',
    longDescription: `Shell Script 기반의 경량 실시간 모니터링 시스템입니다. 디스크 용량, 메모리 사용률, 프로세스 상태, 네트워크 연결 등 주요 지표를 지속적으로 감시하고, 임계치 초과 시 SMS로 즉시 알림을 발송합니다. 100대 이상의 서버를 동시에 모니터링하며, False positive를 최소화한 스마트 알림 시스템을 구축했습니다.`,
    techStack: [
      { name: 'Bash Script', category: 'language', proficiency: 90 },
      { name: 'Cron', category: 'tool', proficiency: 85 },
      { name: 'SMS API', category: 'platform', proficiency: 70 },
      { name: 'Zabbix', category: 'tool', proficiency: 60 },
      { name: 'Nagios', category: 'tool', proficiency: 55 }
    ],
    tags: ['Monitoring', 'Shell Script', 'Automation', 'SMS', 'DevOps'],
    image: '/assets/projects/monitoring/main.jpg',
    thumbnail: '/assets/projects/monitoring/thumb.jpg',
    github: null,
    demo: null,
    highlight: false,
    category: 'automation',
    period: '2023.05 - 2023.08',
    role: 'DevOps Engineer',
    achievements: [
      '24/7 실시간 모니터링 체계 구축',
      '장애 발견 평균 시간 1시간 → 5분으로 단축 (92% 개선)',
      '100대 이상의 서버 동시 모니터링 관리',
      'False positive 알림 80% 감소를 통한 알림 품질 개선'
    ]
  },
  {
    id: 5,
    title: 'IDC 물리 인프라 관리',
    description: 'SK-IDC 서버호스팅 인프라 운영 - 500대 이상 서버 관리',
    longDescription: `SK-IDC에서 운영하는 서버호스팅 물리 인프라 전반을 관리합니다. HP ProLiant, SuperMicro 등 다양한 하드웨어의 설치, 유지보수, 장애 대응을 담당하며, iLO와 IPMI를 통한 원격 관리 시스템을 운영합니다. RAID 구성, 네트워크 스위치 설정, 전원 관리 등 데이터센터 인프라의 모든 영역을 다룹니다.`,
    techStack: [
      { name: 'HP iLO', category: 'platform', proficiency: 90 },
      { name: 'IPMI', category: 'platform', proficiency: 85 },
      { name: 'RAID', category: 'tool', proficiency: 80 },
      { name: 'Network Switch', category: 'platform', proficiency: 75 },
      { name: 'Hardware Diagnostics', category: 'tool', proficiency: 85 }
    ],
    tags: ['Hardware', 'iLO', 'IPMI', 'Infrastructure', 'Datacenter'],
    image: '/assets/projects/idc/main.jpg',
    thumbnail: '/assets/projects/idc/thumb.jpg',
    github: null,
    demo: null,
    highlight: false,
    category: 'infrastructure',
    period: '2023.01 - 현재',
    role: 'Infrastructure Engineer',
    achievements: [
      '500대 이상 서버의 물리적 설치 및 관리',
      '하드웨어 장애 평균 복구 시간 2시간 이내 달성',
      '서버 수명 주기 관리 프로세스 정립 및 문서화',
      '데이터센터 효율화를 통한 전력 소비 10% 절감'
    ]
  },
  {
    id: 6,
    title: 'JIRA 기반 업무 프로세스 관리',
    description: '체계적인 티켓 시스템 운영 - 월 200건 이상 처리, SLA 95%',
    longDescription: `JIRA를 활용한 전체 업무 라이프사이클 관리 시스템입니다. 서버 세팅 요청부터 장애 대응, 서버 회수까지 모든 프로세스를 티켓으로 관리하고 추적합니다. Confluence를 통한 KB 문서 체계를 구축하여 팀 지식을 공유하고, Slack 연동을 통한 실시간 알림으로 빠른 대응 체계를 만들었습니다.`,
    techStack: [
      { name: 'JIRA', category: 'tool', proficiency: 90 },
      { name: 'Confluence', category: 'tool', proficiency: 85 },
      { name: 'Slack', category: 'tool', proficiency: 90 },
      { name: 'JQL', category: 'language', proficiency: 75 },
      { name: 'Automation', category: 'tool', proficiency: 70 }
    ],
    tags: ['JIRA', 'Project Management', 'Workflow', 'Automation', 'Documentation'],
    image: '/assets/projects/jira/main.jpg',
    thumbnail: '/assets/projects/jira/thumb.jpg',
    github: null,
    demo: null,
    highlight: false,
    category: 'management',
    period: '2023.01 - 현재',
    role: 'Process Manager',
    achievements: [
      '월평균 200개 이상의 티켓 효율적 처리',
      'SLA 준수율 95% 이상 지속 달성',
      'KB 문서 체계 정립 및 100개 이상 작성',
      '업무 프로세스 자동화로 처리 시간 30% 단축'
    ]
  }
]

export const categoryLabels: Record<ProjectCategory, string> = {
  development: '개발',
  infrastructure: '인프라',
  security: '보안',
  automation: '자동화',
  management: '관리'
}

export const categoryColors: Record<ProjectCategory, {
  badge: string
  badgeDark: string
  border: string
  borderDark: string
  bg: string
  bgDark: string
}> = {
  development: {
    badge: 'bg-blue-100 text-blue-700',
    badgeDark: 'bg-blue-500/20 text-blue-400',
    border: 'border-blue-500',
    borderDark: 'border-blue-500/50',
    bg: 'bg-blue-50',
    bgDark: 'bg-blue-500/10'
  },
  infrastructure: {
    badge: 'bg-green-100 text-green-700',
    badgeDark: 'bg-green-500/20 text-green-400',
    border: 'border-green-500',
    borderDark: 'border-green-500/50',
    bg: 'bg-green-50',
    bgDark: 'bg-green-500/10'
  },
  security: {
    badge: 'bg-red-100 text-red-700',
    badgeDark: 'bg-red-500/20 text-red-400',
    border: 'border-red-500',
    borderDark: 'border-red-500/50',
    bg: 'bg-red-50',
    bgDark: 'bg-red-500/10'
  },
  automation: {
    badge: 'bg-amber-100 text-amber-700',
    badgeDark: 'bg-amber-500/20 text-amber-400',
    border: 'border-amber-500',
    borderDark: 'border-amber-500/50',
    bg: 'bg-amber-50',
    bgDark: 'bg-amber-500/10'
  },
  management: {
    badge: 'bg-purple-100 text-purple-700',
    badgeDark: 'bg-purple-500/20 text-purple-400',
    border: 'border-purple-500',
    borderDark: 'border-purple-500/50',
    bg: 'bg-purple-50',
    bgDark: 'bg-purple-500/10'
  }
}
