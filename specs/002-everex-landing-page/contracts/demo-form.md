# Contract: Demo Form

**Type**: UI Contract (Client-side only, MVP)

## 입력 필드

| 필드 | 타입 | 필수 | 유효성 검사 |
|------|------|------|------------|
| name | string | Yes | 1자 이상 |
| organization | string | Yes | 1자 이상 |
| email | string | Yes | RFC 5322 이메일 형식 |
| phone | string | No | 없음 |
| message | string | No | 없음 |

## 상태 전이

```
idle → submitting → success
              ↓
            error (네트워크 오류 시)
```

## 성공 응답 (MVP)

- 폼이 숨겨지고 성공 메시지가 표시된다.
- 성공 메시지 (ko): "데모 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다."
- 성공 메시지 (en): "Your demo request has been submitted. Our team will contact you shortly."

## 오류 표시

- 각 필드 바로 아래에 인라인으로 표시
- 색상: `var(--cds-support-error)` (#da1e28)
