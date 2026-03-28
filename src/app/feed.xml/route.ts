const BASE_URL = "https://중앙하이츠갈산역센트럴.kr";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>중앙하이츠 갈산역 센트럴</title>
    <link>${BASE_URL}</link>
    <description>중앙하이츠 갈산역 센트럴 - 갈산역 '0분'의 가치, 걸어서 누리는 완성된 프리미엄. 총 126세대, 59타입 단일, 초역세권 프리미엄 주거</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>중앙하이츠 갈산역 센트럴 입주자 모집공고</title>
      <link>${BASE_URL}/#sales</link>
      <description>인천광역시 부평구 부평대로 268 외 1필지, 총 126세대 중 일반분양 50세대. 특별공급 2026.04.06, 1순위 2026.04.07, 2순위 2026.04.08</description>
      <pubDate>${new Date("2026-03-27").toUTCString()}</pubDate>
      <guid>${BASE_URL}/#sales</guid>
    </item>
    <item>
      <title>중앙하이츠 갈산역 센트럴 사업개요</title>
      <link>${BASE_URL}/#business</link>
      <description>갈산역 도보 0분 초역세권, 갈산천수변공원 초근접, 59타입 단일 평면, 2026년 9월 입주 예정</description>
      <pubDate>${new Date("2026-03-27").toUTCString()}</pubDate>
      <guid>${BASE_URL}/#business</guid>
    </item>
    <item>
      <title>중앙하이츠 갈산역 센트럴 관심고객 등록</title>
      <link>${BASE_URL}/#register</link>
      <description>중앙하이츠 갈산역 센트럴 관심고객 사전등록 안내</description>
      <pubDate>${new Date("2026-03-27").toUTCString()}</pubDate>
      <guid>${BASE_URL}/#register</guid>
    </item>
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
