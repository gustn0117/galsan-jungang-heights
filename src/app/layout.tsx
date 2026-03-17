import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "중앙하이츠 갈산역 센트럴 | 갈산역 0분의 가치",
  description: "중앙하이츠 갈산역 센트럴 - 갈산역 '0분'의 가치, 걸어서 누리는 완성된 프리미엄. 총 126세대, 59타입 단일, 초역세권 프리미엄 주거",
  keywords: "갈산역, 중앙하이츠, 중앙하이츠갈산역센트럴, 아파트, 분양, 인천부평, 초역세권, 59타입",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanum-square.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
