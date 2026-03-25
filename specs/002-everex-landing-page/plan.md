# Implementation Plan: Everex 랜딩 페이지

**Branch**: `002-everex-landing-page` | **Date**: 2026-03-25 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-everex-landing-page/spec.md`

## Summary

기존 Next.js 16 + TypeScript + Carbon Design System(커스텀 CSS 토큰) 프로젝트에서 Everex의 AI 근골격계 재활 브랜드 랜딩 페이지를 구축한다. 단일 페이지(`/`) 내 6개 섹션(Hero, Products, Awards, Partners, Demo Form, Footer)으로 구성하며, 한국어/영어 인라인 전환을 지원한다. 데모 신청 폼은 MVP로 클라이언트 사이드 유효성 검사 + 성공 메시지만 제공한다.

## Technical Context

**Language/Version**: TypeScript 5 / Node.js 20
**Primary Dependencies**: Next.js 16.1.6 (App Router), React 19, Tailwind CSS 4, IBM Plex Sans (Google Fonts)
**Storage**: N/A (폼 제출 데이터는 클라이언트 사이드만, 백엔드 연동 없음)
**Testing**: N/A (v1 범위 밖)
**Target Platform**: Web (모바일/태블릿/데스크톱 반응형)
**Project Type**: Web application — single-page landing
**Performance Goals**: 핵심 콘텐츠 렌더링 3초 이내 (일반 4G 기준)
**Constraints**: 외부 UI 라이브러리 추가 없음, 기존 Carbon CSS 토큰 활용, 기존 게시판 코드 유지
**Scale/Scope**: 단일 랜딩 페이지, 6개 섹션, 2개 언어

## Constitution Check

Constitution이 미설정(템플릿 상태)이므로 N/A. 추가 제약 없음.

## Project Structure

### Documentation (this feature)

```text
specs/002-everex-landing-page/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── demo-form.md
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
app/
├── layout.tsx           # 기존 유지 (metadata 업데이트)
├── globals.css          # 기존 유지 (추가 토큰 없음)
├── page.tsx             # 랜딩 페이지 루트 (기존 게시판 → 랜딩으로 교체)
├── posts/               # 기존 게시판 유지
└── api/
    └── posts/           # 기존 유지

components/
├── landing/
│   ├── Header.tsx          # 내비게이션 + 언어 전환 버튼
│   ├── HeroSection.tsx     # P1: 태그라인, 서브카피, CTA
│   ├── ProductsSection.tsx # P2: MORA 5개 제품 카드
│   ├── AwardsSection.tsx   # P3: 수상 실적 카드
│   ├── PartnersSection.tsx # P3: 파트너 로고
│   ├── DemoFormSection.tsx # P3: 데모 신청 폼
│   └── Footer.tsx          # 푸터
└── landing/
    └── i18n.ts             # 한국어/영어 텍스트 상수
```

**Structure Decision**: Next.js App Router 단일 프로젝트 구조. 랜딩 컴포넌트는 `components/landing/`에 분리하고 `app/page.tsx`에서 조합한다. 기존 게시판(`app/posts/`)은 그대로 유지한다.

## Complexity Tracking

해당 없음 (Constitution 미설정, 단순 랜딩 페이지).
