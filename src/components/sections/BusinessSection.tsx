"use client";

import { useState } from "react";
import Image from "next/image";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "overview", label: "사업개요" },
  { id: "brand", label: "브랜드 소개" },
  { id: "directions", label: "오시는길" },
];

interface BusinessSectionProps {
  initialSubTab?: string;
}

export default function BusinessSection({ initialSubTab }: BusinessSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "overview");

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="사 업 안 내"
        subtitle="중앙하이츠 갈산역 센트럴의 사업 정보를 확인하세요."
        bgImage="/images/banner.jpg"
        fallbackGradient="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500"
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
      {activeSubTab === "overview" && (
        <div className="tab-content">
          {/* 프로젝트 네임 바 */}
          <div className="bg-navy">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-10 lg:py-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-gold/60" />
                  <span className="text-gold/70 text-[10px] tracking-[4px] font-medium uppercase">Project Overview</span>
                </div>
                <h3 className="text-white text-[24px] lg:text-[32px] font-bold leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  중앙하이츠 갈산역 센트럴
                </h3>
                <p className="text-white/35 text-[13px] mt-2 tracking-wide">
                  인천광역시 부평구 부평대로 258 · 지하 1층 ~ 지상 19층
                </p>
              </div>
              <div className="flex items-center gap-6 lg:gap-8">
                {[
                  { num: "126", unit: "세대", label: "총 세대수" },
                  { num: "50", unit: "세대", label: "일반분양" },
                  { num: "59", unit: "TYPE", label: "단일평형" },
                  { num: "0", unit: "분", label: "초역세권" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-white text-[28px] lg:text-[34px] font-bold leading-none" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.num}</span>
                      <span className="text-gold/60 text-[11px] font-medium">{item.unit}</span>
                    </div>
                    <p className="text-white/25 text-[10px] tracking-[1px] mt-1.5 uppercase">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="bg-gray-50/50">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-16 lg:py-24">

              {/* 조감도 이미지 */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-5 bg-gold rounded-full" />
                  <h4 className="text-navy text-[15px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>조감도</h4>
                </div>
                <div className="relative p-3 lg:p-4 bg-white rounded-lg border border-gray-200/80 shadow-sm">
                  {/* 골드 코너 장식 */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
                  <div className="relative overflow-hidden rounded">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src="/images/perspective.jpg"
                        alt="중앙하이츠 갈산역 센트럴 투시도"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1100px) 100vw, 1100px"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-[11px] mt-3 text-center tracking-wide">
                  * 상기 투시도는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
                </p>
              </div>

              {/* 사업 정보 테이블 */}
              <div data-animate className="bg-white overflow-hidden rounded-lg border border-gray-200/80 shadow-sm">
                <div className="bg-navy/[0.03] px-6 lg:px-8 py-4 border-b border-gray-200/80 flex items-center gap-3">
                  <span className="w-1 h-5 bg-gold rounded-full" />
                  <h4 className="text-navy text-[15px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>사업 정보</h4>
                </div>
                {[
                  { label: "사업명", value: "중앙하이츠 갈산역 센트럴", highlight: true },
                  { label: "위치", value: "인천광역시 부평구 부평대로 258" },
                  { label: "규모", value: "지하 1층 ~ 지상 19층, 3개동 총 126세대" },
                  { label: "일반분양", value: "50세대" },
                  { label: "타입", value: "59TYPE 단일 (전용 59.79㎡ / 공급 86.81㎡)" },
                  { label: "공급면적", value: "86.81㎡" },
                  { label: "전용면적", value: "59.79㎡" },
                  { label: "주거공용면적", value: "27.02㎡" },
                  { label: "기타공용면적", value: "78.65㎡" },
                  { label: "대지지분", value: "24.72㎡" },
                ].map((item, i) => (
                  <div key={i} className={`flex ${i > 0 ? "border-t border-gray-100" : ""} ${item.highlight ? "bg-gold/[0.03]" : i % 2 === 1 ? "bg-gray-50/40" : "bg-white"} hover:bg-gold/[0.02] transition-colors duration-200`}>
                    <div className="w-[130px] lg:w-[170px] flex-shrink-0 px-6 py-3.5 flex items-center border-r border-gray-100">
                      <span className="text-[13px] text-navy font-semibold tracking-wide">{item.label}</span>
                    </div>
                    <div className="flex-1 px-6 py-3.5 flex items-center">
                      <span className={`text-[14px] ${item.highlight ? "text-navy font-bold" : "text-gray-600"}`}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 면적 정보 */}
              <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200/80 rounded-lg overflow-hidden stagger-children">
                {[
                  { label: "공급면적", value: "86.81", unit: "㎡" },
                  { label: "전용면적", value: "59.79", unit: "㎡" },
                  { label: "주거공용", value: "27.02", unit: "㎡" },
                  { label: "기타공용", value: "78.65", unit: "㎡" },
                ].map((item, i) => (
                  <div key={i} className={`group relative bg-white p-6 text-center hover:bg-navy/[0.02] transition-colors duration-300 ${i < 3 ? "border-r border-gray-200/80" : ""} ${i < 2 ? "border-b lg:border-b-0 border-gray-200/80" : i === 2 ? "border-b lg:border-b-0 border-gray-200/80" : ""}`}>
                    <p className="text-gray-400 text-[10px] tracking-[2px] uppercase font-medium mb-3">{item.label}</p>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-navy text-[22px] font-bold leading-none group-hover:text-gold transition-colors duration-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.value}</span>
                      <span className="text-gray-300 text-[11px] ml-0.5">{item.unit}</span>
                    </div>
                    <div className="w-5 h-px bg-gold/30 mx-auto mt-3 group-hover:w-8 transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* 시행/시공 정보 카드 */}
              <div data-animate className="mt-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-5 bg-gold rounded-full" />
                  <h4 className="text-navy text-[15px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>시행 · 시공</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { role: "시행", company: "배조아파트소규모재건축사업조합", desc: "사업의 안정적 추진", accent: "bg-gold" },
                    { role: "시공/분양", company: "중앙건설산업(주)", desc: "품격 있는 시공 퀄리티", accent: "bg-navy" },
                    { role: "시행", company: "CA이엔씨(주)", desc: "전문적 사업 관리", accent: "bg-gold" },
                  ].map((item, i) => (
                    <div key={i} className="group bg-white rounded-lg border border-gray-200/80 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                      <div className={`h-1 ${item.accent}`} />
                      <div className="p-6">
                        <span className="text-gold text-[10px] tracking-[3px] font-semibold uppercase">{item.role}</span>
                        <h5 className="text-navy text-[15px] font-bold mt-2.5 group-hover:text-gold transition-colors duration-300" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                          {item.company}
                        </h5>
                        <p className="text-gray-400 text-[12px] mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 안내 */}
              <div className="flex items-center justify-center gap-4 mt-16 mb-4">
                <span className="w-12 h-px bg-gray-200" />
                <span className="w-1 h-1 bg-gold/40 rotate-45" />
                <span className="w-12 h-px bg-gray-200" />
              </div>
              <p className="text-gray-300 text-[11px] text-center tracking-wide">
                * 상기 내용은 인허가 과정에서 변경될 수 있으며, 자세한 사항은 분양홍보관에서 확인하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === "directions" && (
        <div className="tab-content bg-white">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-16 lg:py-20">

            {/* 섹션 헤더 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-gold" />
                <span className="text-gold text-[10px] tracking-[4px] font-medium uppercase">Directions</span>
              </div>
              <h3 className="text-navy text-[24px] lg:text-[28px] font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                오시는길
              </h3>
              <p className="text-gray-400 text-[14px] mt-2">인천광역시 부평구 부평대로 258</p>
            </div>

            {/* 지도 */}
            <div data-animate className="mb-10">
              <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-gray-50">
                {/* 지도 이미지 — /images/map-directions.jpg (권장: 1200x600px) */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] flex items-center justify-center">
                  <Image
                    src="/images/map-directions.jpg"
                    alt="중앙하이츠 갈산역 센트럴 오시는길 약도"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1100px) 100vw, 1100px"
                  />
                  {/* 하단 주소 오버레이 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gold/90 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="text-white text-[13px] font-medium">인천광역시 부평구 부평대로 258</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <p className="text-gray-300 text-[11px] mr-auto">외부 지도에서 상세 위치를 확인할 수 있습니다.</p>
                <a
                  href="https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%B6%80%ED%8F%89%EB%8C%80%EB%A1%9C%20258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#03C75A]/10 text-[#03C75A] text-[11px] font-semibold hover:bg-[#03C75A]/15 transition-colors"
                >
                  <span className="w-3.5 h-3.5 bg-[#03C75A] rounded-sm flex items-center justify-center text-white text-[8px] font-black">N</span>
                  네이버 지도
                </a>
                <a
                  href="https://map.kakao.com/?q=%EC%9D%B8%EC%B2%9C%20%EB%B6%80%ED%8F%89%EA%B5%AC%20%EB%B6%80%ED%8F%89%EB%8C%80%EB%A1%9C%20258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FEE500]/15 text-[#B8960A] text-[11px] font-semibold hover:bg-[#FEE500]/25 transition-colors"
                >
                  <span className="w-3.5 h-3.5 bg-[#FEE500] rounded-sm flex items-center justify-center text-[#3C1E1E] text-[8px] font-black">K</span>
                  카카오맵
                </a>
              </div>
            </div>

            {/* 교통 안내 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-5 bg-gold rounded-full" />
                <h4 className="text-navy text-[15px] font-bold tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>교통 안내</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
                {[
                  {
                    title: "지하철",
                    items: [
                      { badge: "인천1호선", color: "bg-[#7CA8D5]", desc: "갈산역 하차", highlight: "도보 1분" },
                      { badge: "서울7호선", color: "bg-[#6B8E4E]", desc: "부평구청역 하차", highlight: "도보 5분" },
                    ],
                  },
                  {
                    title: "버스",
                    items: [
                      { badge: "간선", color: "bg-[#3366CC]", desc: "12, 28, 36, 83번", highlight: "정류장 인접" },
                      { badge: "마을", color: "bg-[#55B555]", desc: "부평구 마을버스", highlight: "도보 2분" },
                    ],
                  },
                  {
                    title: "자가용",
                    items: [
                      { badge: "고속도로", color: "bg-[#E85050]", desc: "경인고속도로", highlight: "부평IC" },
                      { badge: "주요도로", color: "bg-[#FF9933]", desc: "부평대로 인접", highlight: "직진 1분" },
                    ],
                  },
                ].map((card, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 p-5">
                    <h5 className="text-navy text-[13px] font-bold tracking-wide mb-4">{card.title}</h5>
                    <div className="space-y-2.5">
                      {card.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <span className={`${item.color} text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide flex-shrink-0 mt-0.5`}>
                            {item.badge}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="text-gray-500 text-[12px]">{item.desc}</span>
                            <span className="text-navy font-bold text-[12px] ml-1.5">{item.highlight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 분양홍보관 안내 */}
            <div data-animate className="overflow-hidden rounded-lg border border-gray-200">
              <div className="bg-gray-50 px-6 py-3.5 border-b border-gray-200 flex items-center gap-3">
                <span className="w-1 h-4 bg-gold rounded-full" />
                <h4 className="text-navy text-[14px] font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>분양홍보관 안내</h4>
              </div>
              {[
                { label: "주소", value: "인천광역시 부평구 부평대로 258" },
                { label: "분양문의", value: "1800-5636", isPhone: true },
                { label: "운영시간", value: "평일 10:00 ~ 18:00 / 주말·공휴일 10:00 ~ 17:00" },
              ].map((item, i) => (
                <div key={i} className={`flex ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <div className="w-[120px] lg:w-[150px] flex-shrink-0 px-5 py-3.5 flex items-center bg-gray-50/60 border-r border-gray-100">
                    <span className="text-[12px] text-navy font-semibold">{item.label}</span>
                  </div>
                  <div className="flex-1 px-5 py-3.5 flex items-center">
                    {item.isPhone ? (
                      <a href="tel:18005636" className="text-[13px] text-navy font-bold hover:text-gold transition-colors flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[13px] text-gray-600">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-[11px] text-center tracking-wide mt-10">
              * 분양홍보관 운영시간은 사정에 따라 변경될 수 있습니다. 방문 전 전화 문의를 권장합니다.
            </p>
          </div>
        </div>
      )}

      {activeSubTab === "brand" && (
        <div className="tab-content">
          {/* 브랜드 히어로 */}
          <div className="relative bg-[#060a14] overflow-hidden">
            {/* 배경 장식 */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/[0.03] to-transparent rounded-full" />
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.015]" style={{
                backgroundImage: `linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)`,
                backgroundSize: '80px 80px'
              }} />
            </div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="relative max-w-[1100px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
              {/* 코너 장식 */}
              <div className="absolute top-8 left-8 lg:top-12 lg:left-12 w-16 h-16 border-t border-l border-gold/15" />
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12 w-16 h-16 border-t border-r border-gold/15" />
              <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 w-16 h-16 border-b border-l border-gold/15" />
              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 w-16 h-16 border-b border-r border-gold/15" />

              <div className="max-w-[700px] mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-10">
                  <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
                  <span className="text-gold/60 text-[10px] tracking-[6px] font-medium uppercase">Brand Identity</span>
                  <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
                </div>
                <div className="flex justify-center mb-10">
                  <Image
                    src="/images/logo-bi.png"
                    alt="중앙하이츠 갈산역 센트럴"
                    width={400}
                    height={90}
                    className="h-[60px] lg:h-[80px] w-auto brightness-0 invert"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-10">
                  <span className="w-6 h-px bg-gold/30" />
                  <span className="w-1.5 h-1.5 bg-gold/50 rotate-45" />
                  <span className="w-6 h-px bg-gold/30" />
                </div>
                <p className="text-white/40 text-[14px] lg:text-[15px] leading-[2.2] tracking-wide">
                  중앙건설산업(주)이 선보이는 프리미엄 주거 브랜드
                  <br />
                  입주민의 삶의 질을 최우선으로 생각하며
                  <br />
                  최고의 입지와 품격 있는 설계로 차별화된 주거 가치를 제공합니다
                </p>
              </div>
            </div>
          </div>

          {/* 브랜드 핵심 수치 */}
          <div className="bg-navy">
            <div className="max-w-[1100px] mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4" data-animate>
                {[
                  { num: "0", unit: "분", label: "갈산역 도보", sub: "초역세권" },
                  { num: "126", unit: "세대", label: "총 세대수", sub: "프리미엄 규모" },
                  { num: "59", unit: "㎡", label: "전용면적", sub: "단일 TYPE" },
                  { num: "19", unit: "층", label: "최고층수", sub: "3개동" },
                ].map((item, i) => (
                  <div key={i} className={`relative py-8 lg:py-10 text-center ${i < 3 ? "border-r border-white/[0.06]" : ""} ${i < 2 ? "border-b lg:border-b-0 border-white/[0.06]" : i === 2 ? "border-b lg:border-b-0 border-white/[0.06]" : ""}`}>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span className="text-white text-[32px] lg:text-[40px] font-bold leading-none" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.num}</span>
                      <span className="text-gold/70 text-[12px] font-medium ml-0.5">{item.unit}</span>
                    </div>
                    <p className="text-white/50 text-[12px] font-medium mt-2 tracking-wide">{item.label}</p>
                    <p className="text-white/20 text-[10px] mt-1 tracking-[2px] uppercase">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 브랜드 슬로건 */}
          <div className="relative bg-[#f8f7f4] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
              <div data-animate className="text-center mb-20">
                <span className="text-gold text-[10px] tracking-[6px] font-medium uppercase">Brand Slogan</span>
                <div className="mt-8 mb-8">
                  <p className="text-navy/30 text-[14px] tracking-[3px] mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>&ldquo;</p>
                  <h3 className="text-navy text-[22px] lg:text-[30px] font-bold leading-[1.6]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    갈산역 <span className="text-gold">&lsquo;0분&rsquo;</span>의 가치
                    <br />
                    중앙하이츠에서 누리다
                  </h3>
                  <p className="text-navy/30 text-[14px] tracking-[3px] mt-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>&rdquo;</p>
                </div>
                <div className="flex items-center justify-center gap-2 mb-5">
                  <span className="w-8 h-px bg-gold/30" />
                  <span className="w-1 h-1 bg-gold/40 rotate-45" />
                  <span className="w-8 h-px bg-gold/30" />
                </div>
                <p className="text-gray-400 text-[13px] tracking-[2px]">
                  차원이 다른 역세권, 차이나는 프리미엄
                </p>
              </div>

              {/* 4대 프리미엄 카피 */}
              <div data-animate className="space-y-0 mb-24">
                {[
                  { num: "01", label: "교통", eng: "TRANSPORT", copy: "내집앞 갈산역으로 여유가 스며드는 생활을 누리다", highlight: "갈산역 도보 1분" },
                  { num: "02", label: "자연", eng: "NATURE", copy: "내집앞 수변공원과 천변을 따라 조성된 산책로를 통해 에코 힐링 라이프를 누리다", highlight: "갈산천 수변공원 1분" },
                  { num: "03", label: "생활", eng: "LIFESTYLE", copy: "내집앞 중심상권과 대형마트, 부평구청 등 편리한 생활인프라를 원스톱으로 즐기다", highlight: "롯데마트 도보 2분" },
                  { num: "04", label: "교육", eng: "EDUCATION", copy: "도보권 내 우수한 학교와 도서관 등 풍부한 교육인프라를 누리다", highlight: "우수 학군 도보권" },
                ].map((item, i) => (
                  <div key={i} className={`group flex items-stretch border-b border-gray-200/80 ${i === 0 ? "border-t" : ""}`}>
                    {/* 넘버링 */}
                    <div className="hidden md:flex w-[80px] flex-shrink-0 items-center justify-center border-r border-gray-200/80">
                      <span className="text-gold/30 text-[28px] font-light" style={{ fontFamily: "'Noto Serif KR', serif" }}>{item.num}</span>
                    </div>
                    {/* 라벨 */}
                    <div className="hidden lg:flex w-[140px] flex-shrink-0 items-center justify-center border-r border-gray-200/80 px-4">
                      <div className="text-center">
                        <p className="text-navy text-[14px] font-bold">{item.label}</p>
                        <p className="text-gray-300 text-[9px] tracking-[2px] uppercase mt-0.5">{item.eng}</p>
                      </div>
                    </div>
                    {/* 카피 */}
                    <div className="flex-1 flex items-center px-6 lg:px-8 py-6 lg:py-7">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 lg:hidden">
                          <span className="text-gold/40 text-[14px] font-light">{item.num}</span>
                          <span className="text-navy text-[13px] font-bold">{item.label}</span>
                        </div>
                        <p className="text-gray-600 text-[14px] leading-[1.8]">{item.copy}</p>
                      </div>
                    </div>
                    {/* 하이라이트 */}
                    <div className="hidden sm:flex w-[180px] flex-shrink-0 items-center justify-center border-l border-gray-200/80 px-4">
                      <span className="text-gold text-[12px] font-semibold tracking-wide group-hover:text-navy transition-colors duration-300">{item.highlight}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 시행/시공 정보 */}
              <div data-animate>
                <div className="text-center mb-10">
                  <span className="text-gold text-[10px] tracking-[6px] font-medium uppercase">Project Partners</span>
                  <h3 className="text-navy text-[22px] lg:text-[28px] font-bold mt-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    시행 · 시공
                  </h3>
                  <div className="w-10 h-[2px] bg-gold mx-auto mt-5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
                  {[
                    { role: "시행", company: "배조아파트소규모\n재건축사업조합", desc: "사업의 안정적 추진", accent: "bg-gold" },
                    { role: "시공 · 분양", company: "중앙건설산업(주)", desc: "품격 있는 시공 퀄리티", accent: "bg-navy" },
                    { role: "시행", company: "CA이엔씨(주)", desc: "전문적 사업 관리", accent: "bg-gold" },
                  ].map((item, i) => (
                    <div key={i} className="group bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className={`h-1 ${item.accent}`} />
                      <div className="p-7 text-center">
                        <span className="text-gold text-[10px] tracking-[3px] font-semibold uppercase">{item.role}</span>
                        <h5 className="text-navy text-[15px] font-bold mt-3 group-hover:text-gold transition-colors duration-300 whitespace-pre-line" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                          {item.company}
                        </h5>
                        <p className="text-gray-400 text-[12px] mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 안내 */}
              <div className="flex items-center justify-center gap-4 mt-16 mb-4">
                <span className="w-12 h-px bg-gray-200" />
                <span className="w-1 h-1 bg-gold/40 rotate-45" />
                <span className="w-12 h-px bg-gray-200" />
              </div>
              <p className="text-gray-300 text-[11px] text-center tracking-wide">
                * 상기 내용은 인허가 과정에서 변경될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
