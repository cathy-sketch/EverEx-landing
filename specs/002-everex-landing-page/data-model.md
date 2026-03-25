# Data Model: Everex 랜딩 페이지

**Branch**: `002-everex-landing-page` | **Date**: 2026-03-25

## 언어 컨텍스트

```typescript
type Locale = 'ko' | 'en';

interface I18nContext {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}
```

## 제품 (Product)

```typescript
interface Product {
  id: string;           // 'mora-vu' | 'mora-ex' | 'mora-care' | 'mora-cure' | 'mora-rehab'
  name: string;         // 'MORA Vu'
  target: string;       // '의료기관' | 'Healthcare Provider'
  summary: string;      // 한 줄 설명
  description: string;  // 2-3줄 설명
  icon: string;         // SVG path or emoji
}
```

**5개 제품 데이터**:

| id | name | target (ko) | target (en) |
|----|------|-------------|-------------|
| mora-vu | MORA Vu | 의료기관 | Healthcare Provider |
| mora-ex | MORA Ex | 의료기관 | Healthcare Provider |
| mora-care | MORA Care | 기업 복지 | Corporate Wellness |
| mora-cure | MORA Cure | 환자 | Patient |
| mora-rehab | MORA Rehab (EverEx Rehab) | 미국 의료기관 | US Healthcare Provider |

## 수상 실적 (Award)

```typescript
interface Award {
  id: string;
  name: string;         // 'CES 2024 Innovation Award'
  organization: string; // 'CES'
  year: number;         // 2024
  category: string;     // 'Healthcare'
}
```

**3개 수상 데이터**: CES 2024, iF Design Award 2024, Red Dot Award 2024

## 파트너 (Partner)

```typescript
interface Partner {
  id: string;
  name: string;         // 'Samsung'
  type: 'strategic' | 'global' | 'healthcare';
}
```

## 데모 신청 폼 (DemoRequest)

```typescript
interface DemoFormData {
  name: string;         // 필수
  organization: string; // 필수
  email: string;        // 필수, 이메일 형식 검증
  phone: string;        // 선택
  message: string;      // 선택
}

interface DemoFormState {
  data: DemoFormData;
  errors: Partial<Record<keyof DemoFormData, string>>;
  status: 'idle' | 'submitting' | 'success' | 'error';
}
```

## 유효성 검사 규칙

| 필드 | 규칙 | 오류 메시지 (ko) |
|------|------|-----------------|
| name | 필수, 1자 이상 | 이름을 입력해 주세요 |
| organization | 필수, 1자 이상 | 소속을 입력해 주세요 |
| email | 필수, 이메일 형식 | 올바른 이메일 주소를 입력해 주세요 |
