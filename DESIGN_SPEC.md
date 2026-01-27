# Portfolio Redesign Specification

## 문제점 분석

### 현재 이슈
1. **이미지 문제**
   - 이미지 크기가 너무 큼 (최적화 부족)
   - 제대로 표시되지 않는 이미지 다수
   - placeholder 이미지 사용 중 (via.placeholder.com)
   - 실제 프로젝트 스크린샷 없음

2. **UI/UX 문제**
   - 카테고리 구분이 명확하지 않음
   - 정보 계층 구조 개선 필요
   - 아이콘 시스템이 일관성 없음
   - 반응형 그리드 개선 필요

3. **컨텐츠 조직**
   - Notion 내용이 제대로 분류되지 않음
   - 경력과 프로젝트 구분 모호
   - 기술 스택 카테고리화 부족

---

## 디자인 솔루션

### 1. 이미지 최적화 전략

#### 이미지 크기 가이드라인
```
- Hero section avatar: 400x400px (max 100KB)
- Project thumbnails: 800x600px (16:10 ratio, max 200KB)
- Skill icons: 64x64px SVG preferred
- Company logos: 120x60px (2:1 ratio)
```

#### 이미지 최적화 기법
1. **WebP 포맷 사용** (fallback to PNG/JPG)
2. **Lazy loading** (Intersection Observer 활용)
3. **Progressive loading** (blur-up technique)
4. **Responsive images** (srcset, sizes)
5. **CDN 활용** (예: imgix, Cloudinary)

#### 실제 이미지 전환 계획
```typescript
// Before (placeholder)
image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Claude+Code+Portfolio'

// After (실제 스크린샷)
image: '/assets/projects/portfolio-screenshot.webp'
thumbnail: '/assets/projects/portfolio-thumb.webp'
```

---

### 2. UI 디자인 시스템

#### 아이콘 시스템
**사용: Heroicons (inline SVG)**

```typescript
// 카테고리별 아이콘 매핑
const categoryIcons = {
  development: 'CodeBracketIcon',      // 개발
  infrastructure: 'ServerIcon',        // 인프라
  security: 'ShieldCheckIcon',         // 보안
  management: 'ChartBarIcon',          // 관리
  ai: 'SparklesIcon'                   // AI/자동화
}

// 기술 스택 아이콘
const techIcons = {
  React: 'ReactLogoSVG',
  TypeScript: 'TSLogoSVG',
  Linux: 'LinuxLogoSVG',
  // ... 실제 기술 로고 SVG
}
```

#### 컬러 시스템 (개선)
```css
/* 카테고리별 색상 테마 */
--color-dev: #3b82f6;        /* Blue - 개발 */
--color-infra: #10b981;      /* Green - 인프라 */
--color-security: #ef4444;   /* Red - 보안 */
--color-management: #8b5cf6; /* Purple - 관리 */
--color-ai: #f59e0b;         /* Amber - AI */

/* Gradient overlays */
--gradient-dev: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
--gradient-infra: linear-gradient(135deg, #10b981 0%, #059669 100%);
```

---

### 3. 반응형 그리드 레이아웃

#### Projects Section - 개선된 그리드
```typescript
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns
// Ultra-wide: 4 columns (optional)

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* 동일 높이 카드 */}
  {/* aspect-ratio를 통한 이미지 비율 고정 */}
</div>
```

#### Skills Section - 카테고리 그리드
```typescript
// 2x2 그리드 (모바일은 1열)
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
  {/* 각 카테고리 카드 */}
</div>
```

#### About Section - 2열 레이아웃
```typescript
// Profile | Career Timeline
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
  {/* 왼쪽: 프로필 카드 */}
  {/* 오른쪽: 경력 타임라인 */}
</div>
```

---

### 4. 호버 오버레이 & 인터랙션

#### Project Card Hover Effect
```typescript
interface HoverOverlay {
  // Initial state
  opacity: 0
  transform: 'scale(1)'

  // Hover state
  opacity: 1
  transform: 'scale(1.05)'

  // Overlay content
  - Quick view icon
  - GitHub link (if available)
  - Live demo link (if available)
  - Category badge
  - Tech stack tags
}
```

#### 구현 예시
```tsx
<div className="group relative overflow-hidden rounded-xl">
  {/* Image */}
  <img
    src={project.image}
    className="transition-transform duration-500 group-hover:scale-110"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">

    {/* Action buttons */}
    <div className="absolute inset-0 flex items-center justify-center gap-4">
      <a href={github} className="p-3 bg-white/20 backdrop-blur-sm rounded-full
                                    hover:bg-white/30 transition-colors">
        <GithubIcon />
      </a>
      <a href={demo} className="p-3 bg-white/20 backdrop-blur-sm rounded-full
                                  hover:bg-white/30 transition-colors">
        <ExternalLinkIcon />
      </a>
    </div>

    {/* Category badge */}
    <div className="absolute top-4 right-4">
      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
        {category}
      </span>
    </div>
  </div>
</div>
```

#### Skill Card Micro-interactions
```typescript
// Progress bar animation (현재 구현됨)
// + 추가: Hover시 tooltip 표시
const SkillTooltip = {
  content: '실무 경험 기반 자기평가',
  position: 'top',
  trigger: 'hover'
}
```

---

### 5. 카테고리별 컨텐츠 재구성

#### Notion 내용 기반 새로운 데이터 구조

```typescript
// 프로젝트 카테고리 확장
interface Project {
  id: number
  title: string
  description: string
  longDescription?: string  // 상세 설명 추가
  tags: string[]
  techStack: TechStack[]    // 구조화된 기술 스택
  image: string
  thumbnail?: string        // 썸네일 추가
  screenshots?: string[]    // 추가 스크린샷
  github: string | null
  demo: string | null
  highlight: boolean
  category: ProjectCategory
  period: string           // 기간 추가
  role?: string            // 역할 추가
  achievements?: string[]  // 성과 추가
}

type ProjectCategory =
  | 'development'      // 개발 프로젝트
  | 'infrastructure'   // 인프라 구축
  | 'security'         // 보안 대응
  | 'automation'       // 업무 자동화
  | 'management'       // 프로젝트 관리

// 기술 스택 구조화
interface TechStack {
  name: string
  category: 'language' | 'framework' | 'tool' | 'platform'
  icon?: string
  proficiency: number  // 0-100
}

// 경력 타임라인
interface Career {
  id: number
  company: string
  position: string
  period: {
    start: string
    end: string | 'present'
  }
  department: string
  location: string
  responsibilities: string[]
  achievements: Achievement[]
  projects: number[]  // Project ID 참조
}

interface Achievement {
  title: string
  description: string
  impact?: string     // 정량적 성과
  category: string
}
```

---

### 6. 섹션별 개선 계획

#### Hero Section
```
현재 문제:
- 단순한 타이핑 효과
- 정보 밀도 낮음

개선안:
✓ 현재 상태 유지 (깔끔한 디자인)
+ 실제 프로필 사진 옵션 추가
+ 주요 성과 숫자 강조 (예: "500+ 서버 세팅", "50+ 보안 대응")
```

#### About Section
```
현재 구조:
프로필 | 경력 요약

개선안:
✓ 기본 구조 유지
+ Timeline 시각화 추가
+ 회사 로고 추가
+ 성과 하이라이트 섹션 추가

새 컴포넌트:
<Timeline>
  <TimelineItem
    period="2023.01 - 현재"
    company="카페24"
    position="IDC 기술지원 엔지니어"
    achievements={[...]}
  />
</Timeline>
```

#### Skills Section
```
현재:
4개 카테고리 (Infrastructure, Security, Web Stack, Tools)

개선안:
5-6개 카테고리로 확장
+ 실제 기술 로고 SVG 사용
+ 각 스킬별 프로젝트 연결
+ "관련 프로젝트 보기" 링크

새 구조:
1. Infrastructure & Hardware
2. Operating Systems
3. Networking & Security
4. Web Technologies (APM)
5. DevOps & Automation
6. Tools & Collaboration
```

#### Projects Section ⚠️ 주요 개선 필요
```
현재 문제:
❌ placeholder 이미지
❌ 카테고리 구분 약함
❌ 상세 정보 부족

개선안:
1. 실제 스크린샷 추가
   - 포트폴리오: 실제 화면 캡처
   - 인프라: 시스템 다이어그램
   - 보안: 모니터링 대시보드 (개인정보 제거)

2. 카테고리 필터 강화
   <FilterTabs>
     - 전체
     - 개발 프로젝트
     - 인프라 구축
     - 보안 대응
     - 자동화/스크립트
   </FilterTabs>

3. 카드 레이아웃 개선
   - 이미지: 16:10 비율 고정
   - 카테고리 뱃지 명확히
   - 기술 스택 아이콘 표시
   - 상세보기 모달 추가

4. 프로젝트 상세 모달
   <ProjectModal>
     - 큰 스크린샷
     - 상세 설명
     - 기술 스택 상세
     - 역할 및 기여도
     - 성과 및 배운 점
     - 관련 링크
   </ProjectModal>
```

#### Contact Section
```
현재: 기본적인 연락처 폼

개선안:
+ 소셜 미디어 링크 강화
+ GitHub contribution graph
+ 이메일 직접 연결
+ 위치 정보 (서울, 한국)
```

---

### 7. 새로운 프로젝트 데이터 (예시)

```typescript
const enhancedProjects: Project[] = [
  {
    id: 1,
    title: 'Claude Code Portfolio',
    description: 'AI 기반 포트폴리오 웹사이트 개발',
    longDescription: `
      Claude Code AI를 활용하여 완전히 새롭게 제작한 개인 포트폴리오.
      기획부터 디자인, 개발, 배포까지 전 과정을 AI와 협업하여 진행.
    `,
    techStack: [
      { name: 'React 18', category: 'framework', proficiency: 85 },
      { name: 'TypeScript', category: 'language', proficiency: 80 },
      { name: 'TailwindCSS', category: 'framework', proficiency: 90 },
      { name: 'Vite', category: 'tool', proficiency: 75 },
      { name: 'GitHub Actions', category: 'platform', proficiency: 70 }
    ],
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Claude AI'],
    image: '/assets/projects/portfolio/main.webp',
    thumbnail: '/assets/projects/portfolio/thumb.webp',
    screenshots: [
      '/assets/projects/portfolio/hero.webp',
      '/assets/projects/portfolio/projects.webp',
      '/assets/projects/portfolio/skills.webp'
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
      'Lighthouse 성능 점수 95+ 달성'
    ]
  },

  {
    id: 2,
    title: '서버 자동 배포 시스템',
    description: 'PXE Boot 기반 OS 자동 설치 시스템',
    longDescription: `
      고객사 서버 세팅 시간을 70% 단축시킨 자동화 시스템.
      PXE Boot와 Clonezilla를 활용하여 대량의 서버를 빠르게 배포.
    `,
    techStack: [
      { name: 'PXE Boot', category: 'platform', proficiency: 90 },
      { name: 'Clonezilla', category: 'tool', proficiency: 85 },
      { name: 'TFTP', category: 'platform', proficiency: 80 },
      { name: 'Shell Script', category: 'language', proficiency: 85 },
      { name: 'Kickstart/Preseed', category: 'tool', proficiency: 75 }
    ],
    tags: ['Linux', 'Automation', 'PXE', 'Clonezilla'],
    image: '/assets/projects/pxe-boot/diagram.webp',
    thumbnail: '/assets/projects/pxe-boot/thumb.webp',
    github: null,
    demo: null,
    highlight: false,
    category: 'automation',
    period: '2023.03 - 2023.06',
    role: 'Infrastructure Engineer',
    achievements: [
      '서버 OS 설치 시간 2시간 → 30분으로 단축',
      'CentOS, Ubuntu, Windows Server 통합 관리',
      '월평균 50대 서버 배포 자동화',
      '설치 오류율 90% 감소'
    ]
  },

  {
    id: 3,
    title: '보안 위협 탐지 및 대응',
    description: 'DDoS/랜섬웨어 등 침해사고 실시간 대응',
    longDescription: `
      실시간 트래픽 모니터링을 통한 보안 위협 탐지 및 즉각 대응.
      DDoS 공격, TCP Flooding, 랜섬웨어 감염 등 다양한 보안 이슈 해결.
    `,
    techStack: [
      { name: 'tcpdump', category: 'tool', proficiency: 85 },
      { name: 'Wireshark', category: 'tool', proficiency: 80 },
      { name: 'iptables', category: 'tool', proficiency: 85 },
      { name: 'fail2ban', category: 'tool', proficiency: 75 },
      { name: 'ModSecurity', category: 'tool', proficiency: 70 }
    ],
    tags: ['Security', 'DDoS', 'Firewall', 'Incident Response'],
    image: '/assets/projects/security/dashboard.webp',
    thumbnail: '/assets/projects/security/thumb.webp',
    github: null,
    demo: null,
    highlight: true,
    category: 'security',
    period: '2023.01 - 현재',
    role: 'Security Operations',
    achievements: [
      '월평균 30건 이상의 보안 위협 탐지 및 차단',
      'DDoS 공격 평균 대응 시간 15분 이내',
      '랜섬웨어 감염 서버 복구 및 재발 방지',
      '보안 이슈 KB 문서 50개 이상 작성'
    ]
  },

  {
    id: 4,
    title: '서버 모니터링 & 알림 시스템',
    description: 'SMS 기반 실시간 서버 상태 모니터링',
    longDescription: `
      Shell Script 기반의 경량 모니터링 시스템.
      디스크, 메모리, 프로세스, 네트워크 상태를 실시간 감시하고
      임계치 초과시 SMS로 즉시 알림.
    `,
    techStack: [
      { name: 'Bash Script', category: 'language', proficiency: 90 },
      { name: 'Cron', category: 'tool', proficiency: 85 },
      { name: 'SMS API', category: 'platform', proficiency: 70 },
      { name: 'Zabbix', category: 'tool', proficiency: 60 }
    ],
    tags: ['Monitoring', 'Shell Script', 'Automation', 'SMS'],
    image: '/assets/projects/monitoring/system.webp',
    thumbnail: '/assets/projects/monitoring/thumb.webp',
    github: null,
    demo: null,
    highlight: false,
    category: 'automation',
    period: '2023.05 - 2023.08',
    role: 'DevOps Engineer',
    achievements: [
      '24/7 실시간 모니터링 체계 구축',
      '장애 발견 평균 시간 1시간 → 5분으로 단축',
      '100대 이상의 서버 동시 모니터링',
      'False positive 알림 80% 감소'
    ]
  },

  {
    id: 5,
    title: 'IDC 물리 인프라 관리',
    description: 'SK-IDC 서버호스팅 인프라 운영',
    longDescription: `
      HP ProLiant, SuperMicro 등 다양한 하드웨어 관리.
      iLO, IPMI를 통한 원격 관리 및 장애 대응.
      전원, 네트워크, 스토리지 등 물리 인프라 전반 운영.
    `,
    techStack: [
      { name: 'HP iLO', category: 'platform', proficiency: 90 },
      { name: 'IPMI', category: 'platform', proficiency: 85 },
      { name: 'RAID', category: 'tool', proficiency: 80 },
      { name: 'Network Switch', category: 'platform', proficiency: 75 }
    ],
    tags: ['Hardware', 'iLO', 'IPMI', 'Infrastructure'],
    image: '/assets/projects/idc/datacenter.webp',
    thumbnail: '/assets/projects/idc/thumb.webp',
    github: null,
    demo: null,
    highlight: false,
    category: 'infrastructure',
    period: '2023.01 - 현재',
    role: 'Infrastructure Engineer',
    achievements: [
      '500대 이상 서버 물리적 관리',
      '하드웨어 장애 평균 복구 시간 2시간 이내',
      '서버 수명 주기 관리 프로세스 정립',
      '데이터센터 효율화를 통한 전력 소비 10% 절감'
    ]
  },

  {
    id: 6,
    title: 'JIRA 기반 업무 프로세스 관리',
    description: '체계적인 티켓 시스템 운영',
    longDescription: `
      JIRA를 활용한 전체 업무 라이프사이클 관리.
      서버 세팅부터 장애 대응, 회수까지 모든 프로세스를 추적하고
      통계 데이터를 통한 업무 효율화.
    `,
    techStack: [
      { name: 'JIRA', category: 'tool', proficiency: 90 },
      { name: 'Confluence', category: 'tool', proficiency: 85 },
      { name: 'Slack', category: 'tool', proficiency: 90 },
      { name: 'JQL', category: 'language', proficiency: 75 }
    ],
    tags: ['JIRA', 'Project Management', 'Workflow', 'Automation'],
    image: '/assets/projects/jira/workflow.webp',
    thumbnail: '/assets/projects/jira/thumb.webp',
    github: null,
    demo: null,
    highlight: false,
    category: 'management',
    period: '2023.01 - 현재',
    role: 'Process Manager',
    achievements: [
      '월평균 200개 이상의 티켓 처리',
      'SLA 준수율 95% 이상 달성',
      'KB 문서 체계 정립 (100개 이상)',
      '업무 프로세스 자동화로 처리 시간 30% 단축'
    ]
  }
]
```

---

### 8. 구현 우선순위

#### Phase 1: 기반 개선 (1-2일)
- [ ] 이미지 최적화 시스템 구축
- [ ] 실제 프로젝트 스크린샷 생성
- [ ] 데이터 구조 개선 (확장된 Project 인터페이스)
- [ ] 아이콘 시스템 통일 (Heroicons)

#### Phase 2: UI/UX 개선 (2-3일)
- [ ] Project card hover overlay 강화
- [ ] 카테고리 필터 개선
- [ ] 반응형 그리드 최적화
- [ ] 프로젝트 상세 모달 추가

#### Phase 3: 컨텐츠 재구성 (1-2일)
- [ ] Notion 내용 기반 데이터 재작성
- [ ] About section 타임라인 추가
- [ ] Skills section 카테고리 확장
- [ ] 성과 지표 추가

#### Phase 4: 최적화 & 폴리싱 (1일)
- [ ] 이미지 lazy loading 최적화
- [ ] 애니메이션 성능 개선
- [ ] Lighthouse 점수 최적화
- [ ] 접근성 (a11y) 개선

---

### 9. 참고 디자인 패턴 (예시 사이트 기반)

#### 카테고리 구분
```
예시 사이트처럼 명확한 섹션 구분:
- 각 섹션에 번호 부여 (01, 02, 03...)
- 섹션별 컬러 테마
- 아이콘을 통한 시각적 구분
```

#### 데이터 시각화
```
수치 강조:
- 큰 폰트 사이즈
- 퍼센트/숫자 하이라이트
- 진행률 바 활용
```

#### 그리드 레이아웃
```
일관된 간격:
- gap-6 (모바일)
- gap-8 (태블릿)
- gap-10 (데스크톱)

카드 크기 통일:
- min-height 설정
- aspect-ratio 고정
```

---

## 다음 단계

1. ✅ 디자인 스펙 문서 작성 완료
2. ⏭️ 실제 프로젝트 스크린샷 준비
3. ⏭️ 개선된 컴포넌트 구현
4. ⏭️ 데이터 마이그레이션
5. ⏭️ 테스트 및 최적화

---

**승인 후 구현 시작 예정**
