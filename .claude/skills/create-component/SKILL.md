---
name: create-component
description: 프로젝트 컨벤션에 맞는 React 컴포넌트 자동 생성
---

# 컴포넌트 생성 Skill

새 컴포넌트 요청 시 다음 템플릿을 사용합니다:

## 섹션 컴포넌트 (src/sections/)

```tsx
import { FC } from 'react';

interface [Name]SectionProps {
  id?: string;
}

export const [Name]Section: FC<[Name]SectionProps> = ({ id = '[name]' }) => {
  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          [Title]
        </h2>
        {/* 내용 */}
      </div>
    </section>
  );
};
```

## 규칙

- 파일명: PascalCase (예: HeroSection.tsx)
- named export 사용
- Props 인터페이스 정의
- TailwindCSS 클래스 사용
- 반응형 고려 (max-w-6xl, px-4)
