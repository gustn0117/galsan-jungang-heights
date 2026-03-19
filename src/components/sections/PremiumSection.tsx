"use client";

import { useState } from "react";
import Image from "next/image";
import ImagePlaceholder from "../ImagePlaceholder";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "location", label: "입지환경" },
  { id: "premium4", label: "프리미엄 4" },
];

interface PremiumSectionProps {
  initialSubTab?: string;
}

export default function PremiumSection({ initialSubTab }: PremiumSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "location");

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="프 리 미 엄"
        subtitle="걸어서 누리는 완성된 프리미엄을 만나보세요."
        bgImage="/images/banner.jpg"
        fallbackGradient="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600"
      />

      {/* Sub Navigation */}
      <div className="relative">
        <div className="bg-[#0c1320]">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center overflow-x-auto">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`relative px-10 py-5 text-[13px] tracking-[0.5px] font-medium transition-all duration-300 whitespace-nowrap
                  ${activeSubTab === tab.id
                    ? "text-gold"
                    : "text-white/30 hover:text-white/55"
                  }
                `}
              >
                {tab.label}
                {activeSubTab === tab.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      </div>

      {/* Content */}
      <div>
        {activeSubTab === "location" && (
          <div className="tab-content">
            {/* Location Hero */}
            <div className="relative h-[80vh] min-h-[600px]">
              <Image
                src="/images/location-hero.jpg"
                alt="입지환경"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1400px] mx-auto px-6 w-full">
                  <div className="max-w-[500px]">
                    <span className="text-gold text-[12px] tracking-[4px] font-medium mb-4 block">LOCATION</span>
                    <h3 className="text-white text-[36px] lg:text-[44px] font-bold leading-tight mb-4">
                      갈산역 도보 1분!
                      <br />
                      초역세권의 가치
                    </h3>
                    <p className="text-white/70 text-[15px] leading-relaxed">
                      내집앞 갈산역 초역세권, 내집앞 수변공원 초공세권
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 교통 인프라 섹션 */}
            <div data-animate className="bg-white">
              <div className="max-w-[1100px] mx-auto px-6 py-24 lg:py-32">
                {/* 섹션 헤더 */}
                <div className="text-center mb-20">
                  <span className="text-gold text-[11px] tracking-[6px] font-medium uppercase">Infrastructure</span>
                  <h3 className="text-navy text-[26px] lg:text-[36px] font-bold mt-5 leading-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                    부평 교통의 핵심 허브
                  </h3>
                  <div className="w-12 h-[2px] bg-gold mx-auto mt-6" />
                  <p className="text-gray-400 text-[14px] mt-5 tracking-wide">
                    트리플 역세권, 서울과 인천을 잇는 광역 교통망
                  </p>
                </div>

                {/* 교통 노선 — 심플 리스트 */}
                <div className="space-y-0 mb-24">
                  {[
                    { num: "01", line: "인천1호선", station: "갈산역", time: "도보 1분", desc: "인천1호선 갈산역 도보 1분의 초역세권 프리미엄" },
                    { num: "02", line: "서울7호선", station: "부평구청역", time: "1정거장", desc: "1정거장, 약 도보 5분이면 서울7호선 부평구청역 이용" },
                    { num: "03", line: "GTX-B", station: "부평역", time: "3정거장", desc: "서해라인 GTX-B(시행예정) 부평역, 광역교통망 수혜" },
                  ].map((item, i) => (
                    <div key={i} className="group border-b border-gray-100 first:border-t hover:bg-gray-50/60 transition-all duration-300">
                      <div className="flex items-center py-8 lg:py-10 gap-6 lg:gap-10 relative">
                        {/* 좌측 골드 악센트 (hover) */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-10 bg-gold transition-all duration-300 rounded-full" />
                        {/* 번호 */}
                        <span className="text-gray-200 text-[32px] lg:text-[40px] font-bold leading-none w-14 flex-shrink-0 text-center group-hover:text-gold/30 transition-colors duration-300 pl-3" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                          {item.num}
                        </span>
                        {/* 노선 + 역 */}
                        <div className="flex-1 min-w-0">
                          <p className="text-gold text-[11px] tracking-[3px] font-medium mb-1.5">{item.line}</p>
                          <h4 className="text-navy text-[18px] lg:text-[22px] font-bold group-hover:tracking-wide transition-all duration-300" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{item.station}</h4>
                          <p className="text-gray-400 text-[13px] mt-2 hidden lg:block">{item.desc}</p>
                        </div>
                        {/* 소요시간 */}
                        <div className="text-right flex-shrink-0">
                          <p className="text-navy text-[22px] lg:text-[28px] font-bold leading-none group-hover:text-gold transition-colors duration-300" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{item.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 위치도 */}
                <div data-animate className="mb-24">
                  <div className="text-center mb-12">
                    <span className="text-gold text-[11px] tracking-[6px] font-medium uppercase">Location Map</span>
                    <h3 className="text-navy text-[22px] lg:text-[28px] font-bold mt-4" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                      위치도
                    </h3>
                    <div className="w-10 h-[2px] bg-gold mx-auto mt-5" />
                  </div>
                  <div className="relative">
                    <div className="h-[350px] sm:h-[420px] lg:h-[520px] overflow-hidden border border-gray-200/60 shadow-sm">
                      <Image
                        src="/images/location.jpg"
                        alt="중앙하이츠 갈산역 센트럴 위치도"
                        width={1800}
                        height={1031}
                        className="max-w-none w-[170%] h-auto"
                        sizes="1870px"
                      />
                    </div>
                    <p className="text-gray-300 text-[11px] text-center mt-4 tracking-wide">
                      * 본 위치도는 소비자의 이해를 돕기 위한 것으로, 실제와 다소 차이가 있을 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 구분 장식 */}
                <div className="flex items-center justify-center gap-4 mb-24">
                  <span className="w-16 h-px bg-gray-200" />
                  <span className="w-1.5 h-1.5 bg-gold/40 rotate-45" />
                  <span className="w-16 h-px bg-gray-200" />
                </div>

                {/* 주변 인프라 */}
                <div data-animate className="mb-6">
                  <div className="text-center mb-14">
                    <span className="text-gold text-[11px] tracking-[6px] font-medium uppercase">Surrounding</span>
                    <h3 className="text-navy text-[22px] lg:text-[28px] font-bold mt-4" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                      풍부한 생활 인프라
                    </h3>
                    <div className="w-10 h-[2px] bg-gold mx-auto mt-5" />
                  </div>

                  <div className="bg-gray-50/60 rounded-sm py-12 px-6 lg:px-10">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8 lg:gap-y-10 stagger-children">
                      {[
                        { name: "경인고속도로", sub: "IC 부평 인접", category: "도로" },
                        { name: "수도권제1순환", sub: "중동IC", category: "도로" },
                        { name: "롯데마트", sub: "도보 약 2분", category: "쇼핑" },
                        { name: "부평문화의거리", sub: "도보 약 2분", category: "문화" },
                        { name: "부평역지하상가", sub: "인접", category: "쇼핑" },
                        { name: "부평중앙시장", sub: "인접", category: "전통시장" },
                        { name: "갈산천수변공원", sub: "도보 1분", category: "공원" },
                        { name: "갈산근린공원", sub: "인접", category: "공원" },
                        { name: "서인천IC", sub: "빠른 접근", category: "도로" },
                        { name: "부평역", sub: "도로 인접", category: "교통" },
                      ].map((item, i) => (
                        <div key={i} className="text-center group cursor-default">
                          <p className="text-navy text-[14px] font-bold group-hover:text-gold transition-colors duration-300">{item.name}</p>
                          <p className="text-gray-400 text-[12px] mt-1">{item.sub}</p>
                          <div className="w-4 h-px bg-gold/30 mx-auto mt-3 group-hover:w-6 group-hover:bg-gold/50 transition-all duration-300" />
                          <p className="text-gray-300 text-[10px] mt-2 tracking-[2px] uppercase">{item.category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "premium4" && (
          <div className="tab-content">
            {/* Premium 4 — Grand Header */}
            <div className="relative bg-[#0a0f1a] overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/[0.04] to-transparent rounded-full" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              </div>

              <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-20">
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 mb-8">
                    <span className="w-12 h-px bg-gold/40" />
                    <span className="text-gold/70 text-[11px] tracking-[6px] font-medium uppercase">Premium Value</span>
                    <span className="w-12 h-px bg-gold/40" />
                  </div>
                  <h3 className="text-white text-[40px] lg:text-[56px] font-bold leading-none mb-2" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                    프리미엄 <span className="text-gold">4</span>
                  </h3>
                  <div className="w-16 h-[2px] bg-gold mx-auto mt-6 mb-6 premium4-line" />
                  <p className="text-white/40 text-[15px] lg:text-[17px] tracking-wide" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                    걸어서 누리는 완성된 프리미엄
                  </p>
                  <p className="text-white/25 text-[13px] mt-3 tracking-[1px]">
                    중앙하이츠 갈산역 센트럴, 삶의 중심이 되다
                  </p>
                </div>
              </div>
            </div>

            {/* Premium 4 — Feature Cards (alternating magazine layout) */}
            <div className="bg-[#0a0f1a] py-10 lg:py-16 space-y-10 lg:space-y-16">
              {[
                {
                  num: "01",
                  badge: "도보 1분",
                  category: "교통중심",
                  title: "갈산역 도보 1분\n초역세권의 가치",
                  desc: "인천1호선(2C11) 운행 시 7호선과의 직결운행으로 서울 4대 중심 업무지구까지 한 번에! 1정거장이면 서울7호선 부평구청역, 3정거장이면 GTX-B(시행예정) 부평역",
                  highlights: ["인천1호선 갈산역", "서울7호선 부평구청역", "GTX-B 부평역"],
                  placeholderNum: 12,
                  gradient: "gradient-premium",
                  imageSrc: "/images/premium-transport.jpg",
                },
                {
                  num: "02",
                  badge: "도보 1분",
                  category: "자연중심",
                  title: "갈산천수변공원\n자연과 함께하는 일상",
                  desc: "갈산천 수변공원까지 1분! 단지에서 나오면 바로 수변공원이 펼쳐지는 자연친화적 주거환경. 갈산근린공원과 갈산천수변공원이 단지를 감싸는 쾌적한 녹지 프리미엄",
                  highlights: ["갈산천 수변공원", "갈산근린공원", "자연친화 주거"],
                  placeholderNum: 9,
                  gradient: "gradient-aerial",
                  imageSrc: "/lake.png",
                },
                {
                  num: "03",
                  badge: "도보 2분",
                  category: "생활중심",
                  title: "롯데마트 · 부평문화의거리\n완벽한 생활 인프라",
                  desc: "부평역지하상가, 부평중앙시장 등 풍부한 생활편의시설이 도보 약 2분 거리에! 일상의 편리함을 걸어서 누리는 완벽한 생활 인프라",
                  highlights: ["롯데마트", "부평문화의거리", "부평역지하상가"],
                  placeholderNum: 10,
                  gradient: "gradient-night",
                  imageSrc: "/images/premium-life.jpg",
                },
                {
                  num: "04",
                  badge: "도보 10분",
                  category: "교육중심",
                  title: "고려대교육관 · 인천대공학관\n교육의 미래를 품다",
                  desc: "고려대교육관, 인천대공학관 등 우수한 교육 인프라가 가까이. 자녀 교육에 최적화된 교육환경을 갖추고 있습니다.",
                  highlights: ["고려대교육관", "인천대공학관", "최적 교육환경"],
                  placeholderNum: 11,
                  gradient: "gradient-hero",
                  imageSrc: "/images/premium-edu.jpg",
                },
              ].map((item, i) => {
                const isReversed = i % 2 === 1;
                return (
                  <div key={i} className="premium4-card">
                    <div className={`max-w-[1400px] mx-auto flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[420px] lg:min-h-[500px] group`}>
                      {/* Image Area */}
                      <div className={`relative lg:w-[55%] premium4-image-area ${isReversed ? "premium4-blend-left" : "premium4-blend-right"}`}>
                        {"imageSrc" in item && item.imageSrc ? (
                          <div className="relative h-[300px] lg:h-full min-h-[300px]">
                            <Image
                              src={item.imageSrc}
                              alt={item.category}
                              fill
                              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                              sizes="(max-width: 1024px) 100vw, 55vw"
                            />
                            <div className="absolute inset-0 bg-[#0a1528]/10 z-[1]" />
                          </div>
                        ) : (
                          <ImagePlaceholder
                            number={item.placeholderNum}
                            gradient={item.gradient}
                            height="h-[300px] lg:h-full"
                            label={`${item.category} 이미지`}
                          />
                        )}
                        {/* Number overlay */}
                        <div className={`absolute top-5 ${isReversed ? "right-5" : "left-5"} z-10`}>
                          <span className="text-white/[0.07] text-[100px] lg:text-[140px] font-black leading-none select-none" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                            {item.num}
                          </span>
                        </div>
                        {/* Badge */}
                        <div className={`absolute bottom-5 ${isReversed ? "right-5" : "left-5"} z-10`}>
                          <span className="bg-gold/90 backdrop-blur-sm text-[#0a0f1a] text-[11px] font-bold px-4 py-2 tracking-[1px]">
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className={`lg:w-[45%] flex items-center ${isReversed ? "lg:pr-14 lg:pl-8" : "lg:pl-14 lg:pr-8"} px-6 py-12 lg:py-0`}>
                        <div className="w-full max-w-[480px]">
                          {/* Number + Category */}
                          <div className="flex items-center gap-3 mb-7">
                            <span className="text-gold/30 text-[13px] font-bold tracking-wider" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{item.num}</span>
                            <span className="w-6 h-px bg-gold/40" />
                            <span className="text-gold text-[11px] tracking-[4px] font-medium uppercase">{item.category}</span>
                          </div>

                          {/* Title */}
                          <h4 className="text-white text-[24px] lg:text-[30px] font-bold leading-[1.4] mb-6 whitespace-pre-line" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                            {item.title}
                          </h4>

                          {/* Accent line */}
                          <div className="w-10 h-[2px] bg-gradient-to-r from-gold/60 to-transparent mb-6" />

                          {/* Description */}
                          <p className="text-white/45 text-[14px] lg:text-[15px] leading-[1.9] mb-8">
                            {item.desc}
                          </p>

                          {/* Highlight tags */}
                          <div className="flex flex-wrap gap-2.5">
                            {item.highlights.map((tag, j) => (
                              <span key={j} className="text-[11px] text-gold/70 border border-gold/15 bg-gold/[0.04] px-3.5 py-1.5 tracking-[0.5px]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 카드 간 구분 — 얇은 골드 라인 */}
                    {i < 3 && (
                      <div className="max-w-[800px] mx-auto py-1">
                        <div className="h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Summary Strip */}
            <div className="bg-[#070b14] border-t border-white/[0.04]">
              <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                  {[
                    { time: "1분", label: "갈산역", sub: "교통" },
                    { time: "1분", label: "수변공원", sub: "자연" },
                    { time: "2분", label: "롯데마트", sub: "생활" },
                    { time: "10분", label: "교육 인프라", sub: "교육" },
                  ].map((item, i) => (
                    <div key={i} className="text-center group">
                      <div className="text-gold text-[28px] lg:text-[36px] font-bold leading-none mb-2" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                        {item.time}
                      </div>
                      <div className="w-6 h-px bg-gold/30 mx-auto mb-3 group-hover:w-10 transition-all duration-300" />
                      <div className="text-white/80 text-[14px] font-medium mb-1">{item.label}</div>
                      <div className="text-white/30 text-[11px] tracking-[2px] uppercase">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
