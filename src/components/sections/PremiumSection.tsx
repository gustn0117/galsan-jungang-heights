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
      <div className="bg-[#1a2744]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <button className="p-4 text-white/60 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          {subTabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`relative px-8 py-4 text-sm font-medium transition-colors
                ${activeSubTab === tab.id
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white"
                }
                ${i < subTabs.length - 1 ? "border-r border-white/10" : ""}
              `}
            >
              {tab.label}
              {activeSubTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div>
        {activeSubTab === "location" && (
          <div>
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

            {/* Location Info Grid */}
            <div className="max-w-[1200px] mx-auto px-6 py-20">
              <div className="text-center mb-14">
                <span className="text-gold text-[13px] tracking-[4px] font-medium">INFRASTRUCTURE</span>
                <h3 className="text-[28px] lg:text-[36px] font-bold text-gray-900 mt-4">
                  부평 교통의 핵심 허브 POINT!
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    num: "01",
                    badge: "인천1호선",
                    title: "갈산역 이용",
                    desc: "사당역까지 바로 갈산역 이용. 인천1호선 갈산역 도보 1분의 초역세권 프리미엄",
                    color: "border-blue-500"
                  },
                  {
                    num: "02",
                    badge: "서울7호선",
                    title: "부평구청역 이용",
                    desc: "1정거장, 약 도보 5분이면 서울7호선 부평구청역 이용. 7호선 직결운행 수혜",
                    color: "border-green-500"
                  },
                  {
                    num: "03",
                    badge: "GTX-B",
                    title: "부평역 이용",
                    desc: "3정거장이면 서해라인 GTX-B(시행예정) 부평역 이용. 광역교통망 수혜",
                    color: "border-purple-500"
                  },
                ].map((item) => (
                  <div key={item.num} className={`relative p-8 bg-white border-t-4 ${item.color} shadow-lg rounded-b-xl hover:shadow-xl transition-shadow`}>
                    <span className="text-gray-200 text-[48px] font-bold absolute top-2 right-4">{item.num}</span>
                    <span className="inline-block px-3 py-1 bg-navy text-white text-[11px] font-bold rounded-full mb-4">{item.badge}</span>
                    <h4 className="text-[18px] font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Surrounding Infrastructure */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="text-navy font-bold text-[18px] mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                    </span>
                    도로 교통
                  </h4>
                  <div className="space-y-3">
                    {[
                      "경인고속도로 IC 부평 인접",
                      "수도권제1순환고속도로 중동IC",
                      "서인천IC 방면 빠른 접근",
                      "부평역 방면 도로 인접",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        <span className="text-[14px] text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="text-navy font-bold text-[18px] mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </span>
                    생활 인프라
                  </h4>
                  <div className="space-y-3">
                    {[
                      "롯데마트 도보 약 2분",
                      "부평문화의거리 도보 약 2분",
                      "부평역지하상가 인접",
                      "부평중앙시장 인접",
                      "갈산천수변공원 도보 1분",
                      "갈산근린공원 인접",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        <span className="text-[14px] text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "premium4" && (
          <div>
            {/* Premium 4 Hero */}
            <div className="bg-gradient-to-b from-navy to-[#0d1a30] py-20 lg:py-28">
              <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                  <span className="text-gold text-[14px] tracking-[6px] font-medium">PREMIUM</span>
                  <h3 className="text-white text-[36px] lg:text-[48px] font-bold mt-4">
                    <span className="text-gold">4</span>
                  </h3>
                  <p className="text-white/50 text-[16px] mt-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    &ldquo; 걸어서 누리는 완성된 프리미엄 &rdquo;
                  </p>
                  <p className="text-white/40 text-[14px] mt-2">
                    중앙하이츠 갈산역 센트럴, 삶의 중심이 된다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      badge: "0분",
                      badgeColor: "bg-blue-500",
                      category: "교통중심",
                      title: "갈산역 도보 1분!",
                      desc: "인천1호선(2C11) 운행 시 7호선과의 직결운행으로 서울 4대 중심 업무지구까지 한 번에! 1정거장이면 서울7호선 부평구청역, 3정거장이면 GTX-B(시행예정) 부평역",
                      icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
                      num: 8
                    },
                    {
                      badge: "1분",
                      badgeColor: "bg-green-500",
                      category: "자연중심",
                      title: "갈산천수변공원",
                      desc: "갈산천 수변공원까지 1분! 단지에서 나오면 바로 수변공원이 펼쳐지는 자연친화적 주거환경. 갈산근린공원과 갈산천수변공원이 단지를 감싸는 쾌적한 녹지 프리미엄",
                      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                      num: 9
                    },
                    {
                      badge: "2분",
                      badgeColor: "bg-orange-500",
                      category: "생활중심",
                      title: "롯데마트 / 부평문화의거리",
                      desc: "부평역지하상가, 부평중앙시장 등 풍부한 생활편의시설이 도보 약 2분 거리에! 일상의 편리함을 걸어서 누리는 완벽한 생활 인프라",
                      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                      num: 10
                    },
                    {
                      badge: "10분",
                      badgeColor: "bg-purple-500",
                      category: "교육중심",
                      title: "고려대교육관 / 인천대공학관",
                      desc: "고려대교육관, 인천대공학관 등 우수한 교육 인프라가 가까이. 자녀 교육에 최적화된 교육환경을 갖추고 있습니다.",
                      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                      num: 11
                    },
                  ].map((item, i) => (
                    <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                          </svg>
                        </div>
                        <span className={`${item.badgeColor} text-white text-[13px] font-bold px-4 py-1.5 rounded-full`}>
                          {item.badge}
                        </span>
                        <span className="text-gold text-[12px] tracking-[2px] font-medium ml-auto">{item.category}</span>
                      </div>
                      <h4 className="text-white text-[20px] font-bold mb-3">{item.title}</h4>
                      <p className="text-white/60 text-[14px] leading-[1.8]">{item.desc}</p>
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
