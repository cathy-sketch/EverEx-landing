# Quickstart: Everex 랜딩 페이지

## 개발 환경 실행

```bash
bun dev
# http://localhost:3000 에서 확인
```

## 주요 파일 위치

| 목적 | 파일 |
|------|------|
| 랜딩 페이지 루트 | `app/page.tsx` |
| 언어 텍스트 상수 | `components/landing/i18n.ts` |
| 히어로 섹션 | `components/landing/HeroSection.tsx` |
| 제품 섹션 | `components/landing/ProductsSection.tsx` |
| 수상 섹션 | `components/landing/AwardsSection.tsx` |
| 파트너 섹션 | `components/landing/PartnersSection.tsx` |
| 데모 폼 섹션 | `components/landing/DemoFormSection.tsx` |
| 헤더 | `components/landing/Header.tsx` |
| 푸터 | `components/landing/Footer.tsx` |

## 언어 전환 구조

```tsx
// app/page.tsx 최상단에서 LocaleProvider로 래핑
// 모든 컴포넌트에서 useLocale() 훅으로 locale 및 텍스트 접근
const { locale, t } = useLocale();
```

## 섹션 순서 (스크롤 순)

1. `<Header />` — 내비게이션, KO/EN 전환
2. `#hero` — HeroSection
3. `#products` — ProductsSection
4. `#awards` — AwardsSection
5. `#partners` — PartnersSection
6. `#demo` — DemoFormSection
7. `<Footer />`
