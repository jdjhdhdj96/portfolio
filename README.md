<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=250&section=header&text=Portfolio&fontSize=80&fontAlignY=40&animation=fadeIn&desc=Modern%20Dark%20Dashboard%20Design&descAlignY=60)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fbomaye%2Fportfolio&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-brightgreen?logo=github&style=flat-square)](https://bomaye.github.io/portfolio/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com/)

</div>

---

## 📌 프로젝트 소개

> **모던하고 인터랙티브한 다크 테마 대시보드 스타일의 개인 포트폴리오 웹사이트**

React 19와 TypeScript, TailwindCSS 4를 활용한 최신 웹 기술 스택 기반의 포트폴리오입니다.
확장 가능한 스킬 카드, 프로젝트 모달, 반응형 디자인 등 다양한 인터랙티브 요소를 포함합니다.

### 🌐 Live Demo
**👉 https://jdjhdhdj96.github.io/portfolio/**

---

## ✨ 주요 기능

### 🎯 Hero Section
- 타이핑 애니메이션과 그라데이션 효과
- 스크롤 다운 인디케이터
- 반응형 레이아웃

### 👤 About Section
- 자기소개 및 경력 정보
- 다크 대시보드 스타일 카드
- 부드러운 페이드인 애니메이션

### 💡 Skills Section
- **확장 가능한 스킬 카드**: 클릭 시 세부 기술 스택 표시
- 카테고리별 분류 (프론트엔드, 백엔드, 도구 등)
- 프로그레스 바를 통한 숙련도 시각화
- 인터랙티브 hover 효과

### 🚀 Projects Section
- 프로젝트 카드 그리드 레이아웃
- 모달을 통한 상세 정보 표시
- 기술 스택 뱃지
- 프로젝트 링크 및 GitHub 연동

### 📬 Contact Section
- 이메일, GitHub 등 연락처
- 소셜 미디어 링크
- 반응형 아이콘 레이아웃

### 🎨 추가 기능
- **다크 테마 대시보드 디자인**: 전문적이고 모던한 UI
- **최적화된 이미지 로딩**: 지연 로딩 및 Intersection Observer 활용
- **완전한 반응형**: 모바일, 태블릿, 데스크톱 대응
- **부드러운 스크롤 애니메이션**: 섹션 간 자연스러운 전환
- **네비게이션 바**: 고정형 헤더와 스크롤 하이라이트

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
│   └── assets/          # 이미지 및 정적 파일
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── OptimizedImage.tsx
│   │   └── ProjectModal.tsx
│   ├── sections/        # 페이지 섹션
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── data/            # 정적 데이터 (프로젝트, 스킬 등)
│   ├── App.tsx
│   └── main.tsx
├── CLAUDE.md            # 개발 가이드
└── package.json
```

---

## 🚀 시작하기

### 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/bomaye/portfolio.git

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


## 📄 라이선스

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bomaye)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email@example.com)

</div>

---

<div align="center">

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=150&section=footer)

</div>
