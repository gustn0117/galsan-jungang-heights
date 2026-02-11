"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";

const subTabs = [
  { id: "location", label: "입지환경" },
  { id: "premium7", label: "프리미엄 7" },
];

interface PremiumSectionProps {
  initialSubTab?: string;
}

export default function PremiumSection({ initialSubTab }: PremiumSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "location");

  return (
    <section className="pt-[72px]">
      {/* Section Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 flex items-center justify-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          프 리 미 엄
        </h2>
        <p className="absolute bottom-8 text-white/70 text-sm text-center w-full">
          더 가까워진 KTX광명역세권 생활, 더 빨라진 쾌속교통,
          <br />
          더 높아진 개발비전으로 초프리미엄을 누린다.
        </p>
      </div>

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
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div>
        {activeSubTab === "location" && (
          <div>
            {/* KTX 광명역세권 Section */}
            <div className="relative h-[80vh] min-h-[600px]">
              <ImagePlaceholder
                number={8}
                gradient="gradient-night"
                height="h-full"
                label="도시 야경 (KTX광명역세권)"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1400px] mx-auto px-6 w-full">
                  <div className="max-w-[500px]">
                    <h3 className="text-white text-[36px] lg:text-[44px] font-bold leading-tight mb-4">
                      KTX광명역세권!
                      <br />
                      앞선 생활의 중심
                    </h3>
                  </div>
                  <div className="mt-16 text-right max-w-[600px] ml-auto">
                    <p className="text-white/80 text-[20px] italic font-light mb-8"
                      style={{ fontFamily: "'Georgia', serif" }}>
                      Double Infra
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      중앙대학교병원 · 롯데몰 · 이케아 · 코스트코(광명역),
                      <br />
                      석수시장, 석수2동행정복지센터 및 다목적 체육관
                      <br />
                      · 와룡산, 충훈공원, 안양천 등 풍부한 생활 인프라
                    </p>
                  </div>
                </div>
              </div>

              {/* Circle images at bottom */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
                {[9, 10, 11, 12].map((num) => (
                  <div
                    key={num}
                    className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-white/30"
                  >
                    <ImagePlaceholder
                      number={num}
                      gradient="bg-gradient-to-br from-gray-500 to-gray-700"
                      height="h-full"
                      label=""
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Additional location info */}
            <div className="max-w-[1200px] mx-auto px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { num: 13, title: "교통", desc: "KTX광명역, 1호선 만안역 인접" },
                  { num: 14, title: "교육", desc: "석수도서관, 화장초교, 충훈고교" },
                  { num: 15, title: "편의", desc: "롯데몰, 이케아, 코스트코 등" },
                ].map((item) => (
                  <div key={item.num} className="text-center">
                    <ImagePlaceholder
                      number={item.num}
                      gradient="gradient-location"
                      height="h-[250px]"
                      label={item.title}
                      dark
                      className="rounded-lg"
                    />
                    <h4 className="text-lg font-bold text-gray-900 mt-4">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "premium7" && (
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">프리미엄 7</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[16, 17, 18, 19, 20, 21, 22].map((num, i) => (
                <div key={num} className={`${i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                  <ImagePlaceholder
                    number={num}
                    gradient={i % 2 === 0 ? "gradient-premium" : "gradient-night"}
                    height="h-[280px]"
                    label={`프리미엄 ${i + 1}`}
                    className="rounded-lg"
                  />
                  <h4 className="text-base font-bold text-gray-900 mt-4">프리미엄 {i + 1}</h4>
                  <p className="text-sm text-gray-500 mt-1">프리미엄 {i + 1} 설명 영역</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
