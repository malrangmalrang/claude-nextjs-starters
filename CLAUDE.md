# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 + TypeScript + Tailwind CSS v4 기반의 한국어 스타터킷입니다. shadcn/ui 컴포넌트와 다크모드를 포함하여 빠른 웹 개발을 위한 기본 구조가 설정되어 있습니다.

## 개발 명령어

```bash
# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 실행
npm run lint
```

## 아키텍처 구조

### 전역 상수 중앙화

모든 사이트 설정과 콘텐츠는 `lib/constants.ts`에서 중앙 관리됩니다:
- `NAV_ITEMS`: 네비게이션 메뉴 항목
- `SITE_CONFIG`: 사이트 메타데이터 (이름, 설명, URL, 저작권)
- `FEATURES`: 기능 목록 (아이콘, 제목, 설명)

새로운 페이지나 기능을 추가할 때는 먼저 이 파일을 수정하세요.

### 테마 시스템

다크모드는 Context API 기반으로 구현되어 있습니다:
- `components/theme/theme-provider.tsx`: ThemeProvider와 useTheme 훅 제공
- localStorage에 사용자 선택 저장
- 시스템 테마 자동 감지 (`prefers-color-scheme`)
- `html` 태그에 `light`/`dark` 클래스 적용하여 Tailwind CSS와 연동

루트 레이아웃(`app/layout.tsx`)에서 ThemeProvider로 전체 앱을 감싸고 있으며, `suppressHydrationWarning` 속성으로 SSR 불일치를 방지합니다.

### 레이아웃 구조

루트 레이아웃은 다음과 같은 구조를 가집니다:
```
<ThemeProvider>
  <div className="flex min-h-screen flex-col">
    <Header />      # 네비게이션 + 테마 토글
    <main />        # 페이지 콘텐츠 (flex-1으로 확장)
    <Footer />      # 사이트 정보
  </div>
</ThemeProvider>
```

Header는 데스크톱에서 `Navigation` 컴포넌트를, 모바일에서 `MobileNav` 컴포넌트를 렌더링합니다.

### 페이지 구성 패턴

홈페이지(`app/page.tsx`)는 섹션 컴포넌트를 조합하여 구성됩니다:
- `HeroSection`: 메인 히어로 영역
- `FeaturesGrid`: FEATURES 상수를 사용하여 기능 그리드 렌더링
- `CtaSection`: 행동 유도 섹션

새로운 랜딩 섹션을 추가할 때는 `components/sections/`에 컴포넌트를 생성하고 페이지에서 조합하세요.

### UI 컴포넌트

`components/ui/`에는 shadcn/ui 기반의 재사용 가능한 컴포넌트가 있습니다:
- `Button`, `Card`, `Badge`: 기본 UI 요소
- `Sheet`, `DropdownMenu`: 오버레이 컴포넌트
- `Input`, `Textarea`, `Separator`: 폼 및 레이아웃 요소

모든 UI 컴포넌트는 `class-variance-authority`와 `tailwind-merge`를 사용하여 스타일 변형을 관리합니다.

### TypeScript 경로 별칭

`@/*`는 프로젝트 루트를 가리킵니다 (`tsconfig.json`):
```typescript
import { SITE_CONFIG } from '@/lib/constants'
import { Button } from '@/components/ui/button'
```

## 스타일링 규칙

- Tailwind CSS v4 사용
- 유틸리티 클래스를 조합하여 스타일링
- `lib/utils.ts`의 `cn()` 함수로 조건부 클래스 병합
- 다크모드는 `dark:` 접두사 사용 (예: `dark:bg-zinc-900`)
- Geist Sans와 Geist Mono 폰트가 CSS 변수로 설정됨 (`--font-geist-sans`, `--font-geist-mono`)

## 언어 설정

- 기본 언어: 한국어 (`<html lang="ko">`)
- 메타데이터 locale: `ko_KR`
- UI 텍스트와 콘텐츠는 한국어로 작성되어 있습니다
