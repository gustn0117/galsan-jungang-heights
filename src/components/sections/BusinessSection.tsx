"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "overview", label: "사업개요" },
  { id: "brand", label: "브랜드 소개" },
  { id: "directions", label: "오시는길" },
  { id: "agreement", label: "상호협의결과서" },
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
      <div className="bg-[#1a2744]">
        <div className="max-w-[1200px] mx-auto flex items-center overflow-x-auto">
          <button className="p-4 text-white/60 hover:text-white flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          {subTabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`relative px-8 py-4 text-sm font-medium transition-colors whitespace-nowrap
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
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {activeSubTab === "overview" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">사업개요</h3>
            <p className="text-gray-400 text-sm mb-10">중앙하이츠 갈산역 센트럴의 주요 사업 정보입니다.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ImagePlaceholder
                number={4}
                gradient="gradient-location"
                height="h-[450px]"
                label="조감도 이미지"
                dark
                className="rounded-lg"
              />
              <div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="space-y-0">
                    {[
                      { label: "사업명", value: "중앙하이츠 갈산역 센트럴" },
                      { label: "위치", value: "인천 부평구 부평대로 258" },
                      { label: "총 세대수", value: "126세대" },
                      { label: "일반분양", value: "50세대" },
                      { label: "타입", value: "59type 단일" },
                      { label: "공급면적", value: "86.81㎡" },
                      { label: "전용면적", value: "59.79㎡" },
                      { label: "시행", value: "배조아파트소규모재건축사업조합" },
                      { label: "시공/분양", value: "중앙건설산업(주)" },
                      { label: "시행", value: "CA이엔씨(주)" },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start py-3.5 ${i > 0 ? 'border-t border-gray-200' : ''}`}>
                        <span className="text-[13px] text-navy font-semibold w-[100px] flex-shrink-0">{item.label}</span>
                        <span className="text-[14px] text-gray-700 font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { num: "126", label: "총 세대" },
                    { num: "50", label: "일반분양" },
                    { num: "59", label: "타입" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-navy text-center py-5 rounded-lg">
                      <p className="text-gold text-[24px] font-bold">{stat.num}</p>
                      <p className="text-white/60 text-[12px] mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "brand" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">브랜드 소개</h3>
            <p className="text-gray-400 text-sm mb-10">중앙하이츠 - 신뢰와 품격의 주거 브랜드</p>

            <div className="bg-gradient-to-br from-navy to-[#2a4470] rounded-2xl p-10 lg:p-16 text-white mb-10">
              <div className="max-w-[600px]">
                <span className="text-gold text-[12px] tracking-[4px] font-medium">BRAND STORY</span>
                <h4 className="text-[32px] lg:text-[40px] font-bold mt-4 mb-6 leading-tight">
                  중앙하이츠
                </h4>
                <p className="text-white/70 text-[15px] leading-[1.9] mb-6">
                  중앙건설산업(주)이 선보이는 프리미엄 주거 브랜드 중앙하이츠는
                  입주민의 삶의 질을 최우선으로 생각하며, 최고의 입지와
                  품격 있는 설계로 차별화된 주거 가치를 제공합니다.
                </p>
                <div className="w-16 h-[1px] bg-gold/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "시행", company: "배조아파트소규모재건축사업조합", desc: "사업의 안정적 추진을 위한 전문 시행" },
                { title: "시공/분양", company: "중앙건설산업(주)", desc: "품격 있는 시공 퀄리티와 분양 서비스" },
                { title: "시행", company: "CA이엔씨(주)", desc: "전문적인 사업 관리 및 추진" },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <span className="text-gold text-[11px] tracking-[2px] font-semibold">{item.title}</span>
                  <h5 className="text-[16px] font-bold text-gray-900 mt-2">{item.company}</h5>
                  <p className="text-[13px] text-gray-500 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === "directions" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">오시는길</h3>
            <p className="text-gray-400 text-sm mb-10">분양홍보관 위치를 안내해 드립니다.</p>

            <ImagePlaceholder
              number={6}
              gradient="gradient-location"
              height="h-[500px]"
              label="오시는길 지도"
              dark
              className="rounded-lg"
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-navy font-bold text-[15px] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  분양홍보관
                </h4>
                <p className="text-gray-600 text-[14px]">인천 부평구 부평대로 258</p>
                <div className="mt-4 space-y-2">
                  <p className="text-[13px] text-gray-500">
                    <span className="font-semibold text-gray-700">분양문의</span> 1800-5636
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-navy font-bold text-[15px] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  교통편
                </h4>
                <div className="space-y-2 text-[13px] text-gray-600">
                  <p>인천1호선 갈산역 하차 후 도보 1분</p>
                  <p>서울7호선 부평구청역 하차 후 도보 약 5분</p>
                  <p>경인고속도로 IC 부평 이용</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "agreement" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">상호협의결과서</h3>
            <ImagePlaceholder
              number={7}
              gradient="gradient-silver"
              height="h-[600px]"
              label="상호협의결과서 문서"
              dark
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
