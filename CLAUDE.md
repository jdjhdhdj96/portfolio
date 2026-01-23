## Portfolio Project

## 개요
React + TypeScript + TailwindCSS 기반 개인 포트폴리오

## 기술 스택
- React 18 + TypeScript + Vite
- TailwindCSS
- GitHub Pages 배포

## 코딩 컨벤션
- 컴포넌트: PascalCase (예: HeroSection.tsx)
- 함수/변수: camelCase
- export default 대신 named export 사용
- 모든 컴포넌트는 TypeScript로 작성

## 폴더 구조
```
src/
├── components/  # 재사용 컴포넌트
├── sections/    # 페이지 섹션
├── data/        # 정적 데이터
└── assets/      # 이미지 등
```

## 명령어
- `npm run dev`: 개발 서버(localhost:5173)
- `npm run build`: 프로덕션 빌드
- `npm run preview`: 빌드 미리보기
