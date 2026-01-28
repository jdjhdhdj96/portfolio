<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=250&section=header&text=Portfolio&fontSize=80&fontAlignY=40&animation=fadeIn&desc=Modern%20Dark%20Dashboard%20Design&descAlignY=60)

[![GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-brightgreen?logo=github&style=flat-square)](https://jdjhdhdj96.github.io/portfolio/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com/)

</div>

---

## 📌 프로젝트 소개

> **카페24 IDC 기술지원 엔지니어의 실무 경력 중심 포트폴리오**
>
> Claude Code를 활용하여 제작한 React 기반 포트폴리오 웹사이트

서버 인프라 구축, 보안 대응, 업무 자동화 등 **IDC 실무 경험을 6개 프로젝트**로 정리한 포트폴리오입니다.
React 19, TypeScript 5.9, TailwindCSS 4.1 등 최신 웹 기술 스택을 활용하여 개발했으며,
카테고리별 프로젝트 분류, 상세 모달, 반응형 디자인 등 인터랙티브한 UX를 제공합니다.

### 🌐 Live Demo
**👉 https://jdjhdhdj96.github.io/portfolio/**

---

## ✨ 주요 기능

### 🎯 Hero Section
- 그라데이션 타이틀 및 직무 강조 ("카페24 IDC 기술지원 엔지니어")
- **통계 카드 그리드**: 경험 연수, 프로젝트 수, 관리 서버 수 (카운터 애니메이션)
- CTA 버튼으로 섹션 이동
- 완전한 반응형 레이아웃

### 👤 About Section
- **프로필 카드**: 전문 분야, 핵심 역량, 관심사, 특기사항
- **경력 요약**: IDC 기술지원 엔지니어 → 주요 업무 → Claude Code 활용
- 부드러운 페이드인 애니메이션

### 💡 Skills Section
- **4개 카테고리**: Infrastructure, Networking & Security, Web Stack (APM), Tools & Collaboration
- **카테고리 필터 버튼**: 전체 / 개별 카테고리별 필터링
- 프로그레스 바를 통한 숙련도 시각화 (실무 경험 기반)
- 스킬 수, 평균 숙련도 등 요약 통계

### 🚀 Projects Section
- **6개 실무 프로젝트**: IDC 현장 경험 중심
- **카테고리별 분류**:
  - 🔵 개발 (Development)
  - 🟢 인프라 (Infrastructure)
  - 🔴 보안 (Security)
  - 🟡 자동화 (Automation)
  - 🟣 관리 (Management)
- **프로젝트 상세 모달**: 기술 스택, 역할, 성과, 프로젝트 기간 등 상세 정보
- 프로젝트 카드 그리드 레이아웃 (1/2/3 컬럼 반응형)
- GitHub 연동 및 데모 링크

### 📬 Contact Section
- **연락처 카드**: Email, GitHub, Location
- **포트폴리오 특징 소개**: Claude Code 활용, React + TypeScript, TailwindCSS, GitHub Actions
- GitHub 저장소 소스코드 확인 CTA

### 🎨 고급 기능
- **다크 테마 대시보드 디자인**: 전문적이고 모던한 UI
- **OptimizedImage 컴포넌트**: Intersection Observer 기반 지연 로딩
- **완전한 반응형**: 모바일, 태블릿, 데스크톱 완벽 대응
- **부드러운 스크롤 애니메이션**: 섹션 간 자연스러운 전환
- **네비게이션 바**: 고정형 헤더와 스크롤 하이라이트
- **구조화된 데이터**: TypeScript 인터페이스 기반 타입 안전성

---

## 🛠️ 기술 스택

### Frontend
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>

### Development Tools
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>

### Deployment
<img src="https://img.shields.io/badge/GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"/>

---

## 📂 프로젝트 구조

```
portfolio/
├── public/
│   └── assets/              # 이미지 및 정적 파일
│       └── projects/        # 프로젝트 스크린샷
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Footer.tsx       # 푸터
│   │   ├── Navbar.tsx       # 네비게이션 바
│   │   ├── OptimizedImage.tsx    # 지연 로딩 이미지 컴포넌트
│   │   └── ProjectModal.tsx      # 프로젝트 상세 모달
│   ├── sections/            # 페이지 섹션
│   │   ├── HeroSection.tsx       # 히어로 섹션
│   │   ├── AboutSection.tsx      # 자기소개
│   │   ├── SkillsSection.tsx     # 기술 스택
│   │   ├── ProjectsSection.tsx   # 프로젝트 (카테고리별)
│   │   └── ContactSection.tsx    # 연락처
│   ├── data/                # 정적 데이터 (TypeScript)
│   │   └── projects.ts      # 6개 실무 프로젝트 데이터
│   ├── App.tsx              # 메인 앱
│   └── main.tsx             # 진입점
├── CLAUDE.md                # 개발 가이드
├── DESIGN_SPEC.md           # 디자인 명세서
├── IMPLEMENTATION_SUMMARY.md # 구현 요약
└── package.json
```

---

## 💼 주요 프로젝트 (IDC 실무 경험)

이 포트폴리오는 카페24 IDC 기술지원팀에서의 실제 업무 경험을 기반으로 구성되었습니다.

### 1️⃣ Claude Code Portfolio (개발)
- React 19 + TypeScript + TailwindCSS 4 기반 포트폴리오
- GitHub Actions CI/CD 자동 배포
- Lighthouse 성능 점수 95+ 목표

### 2️⃣ 서버 자동 배포 시스템 (자동화)
- PXE Boot + Clonezilla 기반 OS 자동 설치
- 배포 시간 **70% 단축** (2시간 → 30분)
- 월 50대 이상 서버 자동화

### 3️⃣ 보안 위협 탐지 및 대응 (보안)
- DDoS/랜섬웨어 실시간 탐지 및 차단
- **월 30건 이상** 보안 위협 대응
- 평균 대응 시간 **15분 이내**

### 4️⃣ 서버 모니터링 & 알림 시스템 (자동화)
- Shell Script 기반 경량 모니터링
- 장애 발견 시간 **92% 단축** (1시간 → 5분)
- 100대 이상 서버 동시 관리

### 5️⃣ IDC 물리 인프라 관리 (인프라)
- **5000대 이상** 서버 물리적 설치 및 관리
- HP iLO, IPMI 원격 관리
- 하드웨어 장애 복구 시간 2시간 이내

### 6️⃣ JIRA 기반 업무 프로세스 관리 (관리)
- **월 200건 이상** 티켓 처리
- SLA 준수율 **95%** 지속 달성
- KB 문서 100개 이상 작성

---

## 🚀 시작하기

### 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/jdjhdhdj96/portfolio.git

# 디렉토리 이동
cd portfolio

# 의존성 설치
npm install

# 개발 서버 실행 (localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 배포

```bash
# GitHub Pages 배포
npm run deploy
```

---

## 📋 코딩 컨벤션

- **컴포넌트**: PascalCase (예: `HeroSection.tsx`)
- **함수/변수**: camelCase
- **모듈 시스템**: Named Export 사용 (export default 지양)
- **타입 안정성**: 모든 컴포넌트는 TypeScript로 작성
- **스타일링**: TailwindCSS 유틸리티 클래스 우선 사용

---

## 📞 Contact

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://jdjhdhdj96.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jdjhdhdj96)

</div>

---

## 📈 프로젝트 하이라이트

- 🎯 **6개 실무 프로젝트**: IDC 인프라/보안/자동화 경험 정리
- 🔧 **5000+ 서버 관리**: 물리 인프라 구축 및 운영
- 🛡️ **월 30+ 보안 대응**: DDoS/랜섬웨어 실시간 차단
- ⚡ **70% 효율 개선**: 업무 자동화를 통한 시간 단축
- 📊 **월 200+ 티켓**: 체계적인 업무 프로세스 관리
- 🚀 **최신 기술 스택**: React 19, TypeScript 5.9, TailwindCSS 4.1

---

<div align="center">

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=150&section=footer)

</div>
