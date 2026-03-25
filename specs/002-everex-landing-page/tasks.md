# Tasks: Everex 랜딩 페이지

**Input**: Design documents from `/specs/002-everex-landing-page/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)

---

## Phase 1: Setup

**Purpose**: 컴포넌트 디렉토리 구조 생성 및 언어 컨텍스트 인프라 준비

- [X] T001 `components/landing/` 디렉토리 생성 및 i18n 텍스트 상수 파일 작성 (`components/landing/i18n.ts`) — 한국어/영어 전체 텍스트 객체 및 `useLocale` 훅 정의
- [X] T002 `app/layout.tsx` 메타데이터 업데이트 (title: "Everex — AI 근골격계 재활", description 업데이트)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: 모든 섹션 컴포넌트가 공유하는 언어 컨텍스트 Provider 구현

**⚠️ CRITICAL**: 이 Phase 완료 전에 어떤 섹션 컴포넌트도 시작할 수 없음

- [X] T003 `LocaleProvider` React Context 구현 (`components/landing/LocaleContext.tsx`) — `locale` 상태, `setLocale`, `localStorage` 유지, `useLocale()` 훅 export

**Checkpoint**: LocaleProvider 완료 — 모든 섹션 컴포넌트 병렬 작업 가능

---

## Phase 3: User Story 1 - 히어로 섹션 (Priority: P1) 🎯 MVP

**Goal**: 방문자가 스크롤 없이 Everex의 핵심 가치와 데모 신청 CTA를 확인할 수 있다.

**Independent Test**: `bun dev` 실행 후 `localhost:3000`에서 히어로 섹션이 렌더링되고 "데모 신청" 버튼 클릭 시 #demo 섹션으로 스크롤 이동 확인. KO/EN 전환 시 텍스트 변경 확인.

### Implementation for User Story 1

- [X] T004 [US1] `Header` 컴포넌트 구현 (`components/landing/Header.tsx`) — 로고, 내비게이션 앵커 링크(#products, #awards, #demo), KO/EN 전환 버튼, Carbon 헤더 스타일 적용
- [X] T005 [US1] `HeroSection` 컴포넌트 구현 (`components/landing/HeroSection.tsx`) — 태그라인("Bringing Personalized Rehabilitation to Everyone"), 서브카피, "데모 신청" CTA 버튼(#demo 앵커), 한국어/영어 텍스트 지원
- [X] T006 [US1] `app/page.tsx` 업데이트 — 기존 게시판 홈 코드를 랜딩 페이지로 교체, `LocaleProvider`로 래핑, `Header` + `HeroSection` 렌더링

**Checkpoint**: User Story 1 독립 테스트 가능 — 히어로 섹션 단독으로 배포/데모 가능

---

## Phase 4: User Story 2 - MORA 제품 섹션 (Priority: P2)

**Goal**: 방문자가 5개 MORA 제품 카드를 탐색하고 자신에게 맞는 제품을 식별할 수 있다.

**Independent Test**: 제품 섹션에서 5개 카드(MORA Vu, Ex, Care, Cure, Rehab)가 모두 표시되고, 각 카드에 제품명/대상/기능 요약이 있음. KO/EN 전환 시 텍스트 변경 확인.

### Implementation for User Story 2

- [X] T007 [US2] 제품 데이터 상수 정의 (`components/landing/i18n.ts`에 추가) — 5개 MORA 제품의 ko/en 이름, target, summary, description
- [X] T008 [US2] `ProductsSection` 컴포넌트 구현 (`components/landing/ProductsSection.tsx`) — 5개 제품 카드 그리드, 제품명/대상 사용자/기능 설명, Carbon 카드 스타일, 반응형 레이아웃
- [X] T009 [US2] `app/page.tsx`에 `ProductsSection` 추가 (`id="products"` 앵커 포함)

**Checkpoint**: User Stories 1, 2 모두 독립적으로 테스트 가능

---

## Phase 5: User Story 3 - 신뢰도 섹션 + 데모 폼 (Priority: P3)

**Goal**: 방문자가 수상/파트너 정보로 신뢰를 형성하고 데모 신청 폼을 제출할 수 있다.

**Independent Test**: 수상 3개(CES 2024, iF, Red Dot)와 파트너(Samsung, LG, Novartis)가 표시됨. 데모 폼에서 필수 항목 미입력 시 오류 표시, 정상 입력 후 제출 시 성공 메시지 표시.

### Implementation for User Story 3

- [X] T010 [P] [US3] `AwardsSection` 컴포넌트 구현 (`components/landing/AwardsSection.tsx`) — CES 2024 혁신상, iF Design Award, Red Dot Award 카드, KO/EN 지원
- [X] T011 [P] [US3] `PartnersSection` 컴포넌트 구현 (`components/landing/PartnersSection.tsx`) — Samsung, LG, Novartis 파트너 로고(텍스트 기반), KO/EN 지원
- [X] T012 [US3] `DemoFormSection` 컴포넌트 구현 (`components/landing/DemoFormSection.tsx`) — 이름/소속/이메일(필수)/연락처/메시지 필드, 클라이언트 사이드 유효성 검사, 인라인 오류 메시지(`--cds-support-error`), 제출 성공 메시지, KO/EN 지원
- [X] T013 [US3] `app/page.tsx`에 `AwardsSection`, `PartnersSection`, `DemoFormSection` 추가 (`id="awards"`, `id="partners"`, `id="demo"` 앵커 포함)

**Checkpoint**: User Stories 1, 2, 3 모두 독립적으로 테스트 가능

---

## Phase 6: User Story 4 - 언어 전환 (Priority: P4)

**Goal**: 모든 섹션의 텍스트가 KO/EN으로 완전히 전환되고 새로고침 시 설정이 유지된다.

**Independent Test**: KO→EN 전환 후 전체 페이지 텍스트가 영어로 변경됨. 새로고침 후에도 영어 유지. EN→KO 전환 확인.

### Implementation for User Story 4

- [X] T014 [US4] `i18n.ts`의 모든 영어 텍스트 완성 확인 및 누락된 번역 추가 — Hero, Products, Awards, Partners, DemoForm, Header, Footer 섹션
- [X] T015 [US4] `localStorage` 기반 언어 설정 유지 로직 검증 (`LocaleContext.tsx`) — 초기 로드 시 저장된 언어 복원

**Checkpoint**: User Story 4 완료 — 전체 KO/EN 전환 기능 동작

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: 반응형, 접근성, 푸터, 전체 통합 검증

- [X] T016 [P] `Footer` 컴포넌트 구현 (`components/landing/Footer.tsx`) — Everex 회사명, 저작권, 링크, KO/EN 지원
- [X] T017 [P] 반응형 레이아웃 검증 및 수정 — 모바일(375px), 태블릿(768px), 데스크톱(1440px) 기준 전체 섹션 확인
- [X] T018 `app/page.tsx`에 `Footer` 추가 및 전체 페이지 통합 최종 점검
- [X] T019 [P] `app/layout.tsx` 메타데이터 최종 업데이트 — OG 태그, lang 속성 반영

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: 즉시 시작 가능
- **Foundational (Phase 2)**: Phase 1 완료 후 — 모든 User Story를 블로킹
- **User Story Phases (3~6)**: Phase 2 완료 후 순차 진행 (단일 개발자 기준 P1→P2→P3→P4)
- **Polish (Phase 7)**: 모든 User Story 완료 후

### User Story Dependencies

- **US1 (P1)**: Phase 2 완료 후 즉시 시작 — 다른 스토리에 의존 없음
- **US2 (P2)**: Phase 2 완료 후 시작 — US1과 독립적 (app/page.tsx에서 조합)
- **US3 (P3)**: Phase 2 완료 후 시작 — US1, US2와 독립적
- **US4 (P4)**: Phase 2의 LocaleContext 완료 필요 — 각 섹션 텍스트 완성 확인

### Parallel Opportunities

- T010, T011 (AwardsSection, PartnersSection) 병렬 작업 가능
- T016, T017 (Footer, 반응형 검증) 병렬 작업 가능

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. T001, T002 (Setup)
2. T003 (LocaleProvider)
3. T004, T005, T006 (Header + Hero + page.tsx)
4. **STOP and VALIDATE**: `bun dev`로 히어로 섹션 확인

### Incremental Delivery

1. Phase 1+2 → 인프라 준비
2. Phase 3 (US1) → 히어로 단독 배포 가능 (MVP)
3. Phase 4 (US2) → 제품 섹션 추가
4. Phase 5 (US3) → 신뢰도 + 데모 폼 추가
5. Phase 6 (US4) → 언어 전환 완성
6. Phase 7 → 폴리시

---

## Notes

- `components/landing/i18n.ts`는 T001에서 생성, T007/T014에서 내용 추가
- `app/page.tsx`는 T006(US1), T009(US2), T013(US3)에서 순차 수정 — 충돌 주의
- 기존 `app/posts/` 게시판 코드 유지 필수
- Carbon CSS 토큰(`globals.css`)은 수정하지 않고 그대로 활용
