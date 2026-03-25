# Research: Everex 랜딩 페이지

**Branch**: `002-everex-landing-page` | **Date**: 2026-03-25

## 언어 전환 구현 방식

- **Decision**: React Context + `useState`로 현재 언어(`ko`/`en`)를 관리. `localStorage`에 저장해 새로고침 시 유지.
- **Rationale**: Next.js i18n 라우팅(`/ko`, `/en` 경로 분기) 없이 단일 URL에서 인라인 전환. URL 분리는 v1 범위 밖(spec Assumptions 참조).
- **Alternatives considered**: `next-intl` 라이브러리 → 외부 의존성 추가 불필요, 텍스트 양이 적어 인라인 객체로 충분.

## 데모 신청 폼 구현 방식

- **Decision**: React `useState`로 폼 상태 관리, 클라이언트 사이드 유효성 검사, 제출 시 성공 메시지 표시.
- **Rationale**: 백엔드 연동 없는 MVP. 실제 서버 액션 또는 API 연동은 후속 작업.
- **Alternatives considered**: Next.js Server Action → 백엔드 연동 시 자연스러운 전환이지만 현재 불필요.

## 반응형 레이아웃

- **Decision**: Tailwind CSS 4의 반응형 유틸리티(`sm:`, `md:`, `lg:`) 활용. 기존 프로젝트에 이미 설치됨.
- **Rationale**: 추가 의존성 없이 반응형 구현 가능.
- **Alternatives considered**: Carbon Grid 시스템 → `@carbon/react` 미설치, CSS 토큰만 있으므로 Tailwind 사용.

## 제품 카드 아이콘

- **Decision**: SVG 인라인 아이콘 또는 텍스트 기반 이모지/아이콘 대체. 외부 이미지 에셋 불필요.
- **Rationale**: 파트너 로고 등 외부 이미지 에셋이 현재 없으므로 텍스트/SVG로 구현.
- **Alternatives considered**: Next.js `<Image>` with everex.co.kr 이미지 → 외부 도메인 허용 설정 필요, 저작권 이슈 가능성.

## 기존 게시판 코드 유지

- **Decision**: `app/page.tsx`를 랜딩 페이지로 교체. 기존 게시판은 `/posts`로 유지.
- **Rationale**: spec의 "기존 게시판 코드는 별도로 유지" Assumption 반영.
