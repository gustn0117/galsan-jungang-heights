import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "갈산역 중앙하이츠",
  description: "갈산역 중앙하이츠 - 프리미엄 주거의 새로운 기준",
  keywords: "갈산역, 중앙하이츠, 아파트, 분양",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&family=Noto+Serif+KR:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
