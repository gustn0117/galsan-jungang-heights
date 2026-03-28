import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "중앙하이츠 갈산역 센트럴 | 갈산역 0분의 가치",
  description: "중앙하이츠 갈산역 센트럴 - 갈산역 '0분'의 가치, 걸어서 누리는 완성된 프리미엄. 총 126세대, 59타입 단일, 초역세권 프리미엄 주거",
  keywords: "갈산역, 중앙하이츠, 중앙하이츠갈산역센트럴, 아파트, 분양, 인천부평, 초역세권, 59타입",
  openGraph: {
    title: "중앙하이츠 갈산역 센트럴 | 갈산역 0분의 가치",
    description: "갈산역 도보 0분 초역세권, 갈산천수변공원 초근접. 총 126세대, 59타입 단일 평면. 특별공급 4/6, 1순위 4/7, 2순위 4/8",
    url: "https://중앙하이츠갈산역센트럴.kr",
    siteName: "중앙하이츠 갈산역 센트럴",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/hero-rendering.jpg",
        width: 1200,
        height: 630,
        alt: "중앙하이츠 갈산역 센트럴 조감도",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "중앙하이츠 갈산역 센트럴 | 갈산역 0분의 가치",
    description: "갈산역 도보 0분 초역세권, 갈산천수변공원 초근접. 총 126세대, 59타입 단일 평면.",
    images: ["/images/hero-rendering.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="72461112dc5c5b731d57e772619f5601740baaab" />
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
