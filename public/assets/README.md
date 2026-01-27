# Assets Directory

## Project Images

이미지 최적화 가이드라인:

### 이미지 규격
- **Main image**: 800x500px (16:10 ratio)
- **Thumbnail**: 400x250px
- **포맷**: WebP (fallback: JPG/PNG)
- **용량**: Main < 200KB, Thumbnail < 100KB

### 폴더 구조
```
public/assets/projects/
├── portfolio/
│   ├── main.jpg       # 메인 스크린샷
│   ├── thumb.jpg      # 썸네일
│   ├── hero.jpg       # 추가 스크린샷
│   ├── projects.jpg
│   └── skills.jpg
├── pxe-boot/
│   ├── main.jpg
│   └── thumb.jpg
├── security/
│   ├── main.jpg
│   └── thumb.jpg
├── monitoring/
│   ├── main.jpg
│   └── thumb.jpg
├── idc/
│   ├── main.jpg
│   └── thumb.jpg
└── jira/
    ├── main.jpg
    └── thumb.jpg
```

### 이미지 최적화 팁
1. **WebP 변환**: `cwebp -q 80 input.jpg -o output.webp`
2. **리사이즈**: ImageMagick, Photoshop, 또는 온라인 도구 사용
3. **압축**: TinyPNG, Squoosh 등 사용

### 임시 이미지
현재는 placeholder 이미지를 사용합니다.
실제 프로젝트 스크린샷을 준비한 후 이 폴더에 추가하세요.

### 스크린샷 촬영 가이드
1. **포트폴리오**: 실제 웹사이트 스크린샷 (전체 페이지)
2. **인프라/서버**: 시스템 다이어그램 또는 대시보드 (개인정보 제거)
3. **보안**: 모니터링 화면 (민감 정보 마스킹)
4. **자동화**: 스크립트 실행 결과 또는 플로우차트
5. **관리**: JIRA 보드 스크린샷 (개인정보 제거)
