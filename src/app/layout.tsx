import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "만안역 중앙하이츠 포레",
  description: "더블시티 프리미엄 라이프! 더 가까워진 KTX광명역세권 생활, 더 빨라진 쾌속교통, 더 높아진 개발비전으로 초프리미엄을 누린다.",
  keywords: "만안역, 중앙하이츠, 포레, 아파트, 분양, KTX광명역, 안양",
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
