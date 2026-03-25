import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everex — AI 근골격계 재활",
  description: "Bringing Personalized Rehabilitation to Everyone. AI 기반 근골격계 재활 디지털 헬스케어 기업 Everex의 MORA 플랫폼.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard — Toss Product Sans와 가장 유사한 오픈소스 한국어 폰트 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Tossface — 토스 이모지 폰트 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
