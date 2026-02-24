import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 | 중앙하이츠 갈산역 센트럴",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
