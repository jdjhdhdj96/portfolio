---
name: github-commit
description: Git 변경사항을 분석하고 컨벤셔널 커밋 메시지로 커밋
---

# GitHub 커밋 Skill

커밋을 요청받으면 다음 단계를 수행합니다:

## 1. 변경사항 분석

```bash
git status
git diff --stat
```

## 2. 커밋 메시지 생성 규칙

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅
- `refactor`: 리팩토링
- `test`: 테스트 추가
- `chore`: 기타 변경

## 3. 커밋 메시지 형식

```
<type>(<scope>): <description>

[optional body]
```

## 4. 실행

```bash
git add .
git commit -m "<generated message>"
git push origin main
```

## 예시

- `feat(hero): Add animation effect`
- `fix(navbar): Fix mobile menu toggle`
- `docs(readme): Update installation guide`
