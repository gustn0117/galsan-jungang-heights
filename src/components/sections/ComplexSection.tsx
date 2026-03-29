"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ImagePlaceholder from "../ImagePlaceholder";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "siteplan", label: "단지배치도" },
  { id: "unitplan", label: "동·호수 배치도" },
  { id: "community", label: "커뮤니티" },
];

interface ComplexSectionProps {
  initialSubTab?: string;
}

// 101동 (16F, 2라인, 동향) - 1호: 14세대, 2호: 13세대
const building101Floors = [
  { floor: "16F", units: ["1601", "1602"] },
  { floor: "15F", units: ["1501", "1502"] },
  { floor: "14F", units: ["1401", "1402"] },
  { floor: "13F", units: ["1301", "1302"] },
  { floor: "12F", units: ["1201", "1202"] },
  { floor: "11F", units: ["1101", "1102"] },
  { floor: "10F", units: [null, "1002"] },
  { floor: "9F", units: ["901", "902"] },
  { floor: "8F", units: ["801", "802"] },
  { floor: "7F", units: ["701", "702"] },
  { floor: "6F", units: ["601", "602"] },
  { floor: "5F", units: ["501", "502"] },
  { floor: "4F", units: ["401", "402"] },
  { floor: "3F", units: ["301", null] },
  { floor: "2F", units: [null, null] },
  { floor: "1F", units: [null, null] },
  { floor: "B1F", units: [null, null] },
];

// 102동 (16F, 2라인, 동향) - 1호: 13세대, 2호: 14세대
const building102Floors = [
  { floor: "16F", units: ["1601", "1602"] },
  { floor: "15F", units: ["1501", "1502"] },
  { floor: "14F", units: ["1401", "1402"] },
  { floor: "13F", units: ["1301", "1302"] },
  { floor: "12F", units: ["1201", "1202"] },
  { floor: "11F", units: ["1101", "1102"] },
  { floor: "10F", units: ["1001", null] },
  { floor: "9F", units: ["901", "902"] },
  { floor: "8F", units: ["801", "802"] },
  { floor: "7F", units: ["701", "702"] },
  { floor: "6F", units: ["601", "602"] },
  { floor: "5F", units: ["501", "502"] },
  { floor: "4F", units: ["401", "402"] },
  { floor: "3F", units: [null, "302"] },
  { floor: "2F", units: [null, null] },
  { floor: "1F", units: [null, null] },
  { floor: "B1F", units: [null, null] },
];

// 103동 (19F, 4라인, 남향) - 각 18세대
const building103Floors = [
  { floor: "19F", units: ["1901", "1902", "1903", "1904"] },
  { floor: "18F", units: ["1801", "1802", "1803", "1804"] },
  { floor: "17F", units: ["1701", "1702", null, null] },
  { floor: "16F", units: ["1601", "1602", "1603", "1604"] },
  { floor: "15F", units: ["1501", "1502", "1503", "1504"] },
  { floor: "14F", units: ["1401", "1402", "1403", "1404"] },
  { floor: "13F", units: ["1301", "1302", "1303", "1304"] },
  { floor: "12F", units: ["1201", "1202", "1203", "1204"] },
  { floor: "11F", units: ["1101", "1102", "1103", "1104"] },
  { floor: "10F", units: [null, "1002", "1003", "1004"] },
  { floor: "9F", units: ["901", "902", "903", "904"] },
  { floor: "8F", units: ["801", "802", "803", "804"] },
  { floor: "7F", units: ["701", "702", "703", "704"] },
  { floor: "6F", units: ["601", "602", "603", "604"] },
  { floor: "5F", units: ["501", "502", "503", "504"] },
  { floor: "4F", units: ["401", "402", "403", "404"] },
  { floor: "3F", units: ["301", "302", "303", "304"] },
  { floor: "2F", units: ["201", "202", "203", "204"] },
];

function getUnitStyle(unit: string | null): string {
  if (!unit) return "";
  return "bg-white";
}

const buildings = [
  { id: "101", label: "101동", direction: "동향", dirEn: "EAST", lines: "1호, 2호", floors: building101Floors, cols: ["1호", "2호"], total: 27, detail: "14 + 13 = 27세대" },
  { id: "102", label: "102동", direction: "동향", dirEn: "EAST", lines: "1호, 2호", floors: building102Floors, cols: ["1호", "2호"], total: 27, detail: "13 + 14 = 27세대" },
  { id: "103", label: "103동", direction: "남향", dirEn: "SOUTH", lines: "1호, 2호, 3호, 4호", floors: building103Floors, cols: ["1호", "2호", "3호", "4호"], total: 72, detail: "18 × 4 = 72세대" },
];

export default function ComplexSection({ initialSubTab }: ComplexSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "siteplan");
  const [activeBuilding, setActiveBuilding] = useState("101");

  useEffect(() => {
    if (initialSubTab) setActiveSubTab(initialSubTab);
  }, [initialSubTab]);

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="단 지 안 내"
        subtitle="중앙하이츠 갈산역 센트럴의 단지 정보를 확인하세요."
        bgImage="/images/banner.jpg"
        fallbackGradient="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500"
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
      {activeSubTab === "siteplan" && (
        <div className="tab-content bg-white">
          <div className="max-w-[1100px] mx-auto px-6 py-20 lg:py-28">
            {/* 섹션 헤더 */}
            <div className="text-center mb-16">
              <span className="text-gold text-[11px] tracking-[6px] font-medium uppercase">Site Plan</span>
              <h3 className="text-navy text-[28px] lg:text-[36px] font-bold mt-4 leading-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                단지배치도
              </h3>
              <div className="w-12 h-[2px] bg-gold mx-auto mt-6" />
              <p className="text-gray-400 text-[14px] mt-5 tracking-wide">
                총 126세대 · 3개동 · 59TYPE 단일평형
              </p>
            </div>

            {/* 이미지 영역 */}
            <div data-animate="scale-up" className="relative mb-16">
              {/* 이미지 프레임 */}
              <div className="relative">
                {/* 골드 코너 장식 */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/50 z-10" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold/50 z-10" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold/50 z-10" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/50 z-10" />

                <div className="border border-gray-200/80 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
                  <Image
                    src="/images/site-plan.jpg"
                    alt="중앙하이츠 갈산역 센트럴 단지배치도"
                    width={2400}
                    height={1698}
                    className="w-full h-auto"
                    sizes="(max-width: 1100px) 100vw, 1100px"
                    quality={85}
                  />
                </div>
              </div>
            </div>

            {/* 동별 정보 카드 */}
            <div data-animate className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-200 rounded-lg overflow-hidden mb-8 stagger-children">
              {[
                { dong: "101동", floor: "B1 ~ 16F", lines: "2라인", direction: "동향", units: "27", color: "border-l-navy" },
                { dong: "102동", floor: "B1 ~ 16F", lines: "2라인", direction: "동향", units: "27", color: "border-l-navy" },
                { dong: "103동", floor: "2F ~ 19F", lines: "4라인", direction: "남향", units: "72", color: "border-l-gold" },
              ].map((b, i) => (
                <div key={i} className={`group relative border-l-4 ${b.color} ${i < 2 ? "lg:border-r border-gray-200 border-b lg:border-b-0" : ""} py-7 px-7 hover:bg-gray-50/60 transition-all duration-300`}>
                  {/* 동 번호 + 향 */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-navy text-[24px] lg:text-[28px] font-bold" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{b.dong}</span>
                      <span className="text-[10px] font-semibold text-gold tracking-[2px] px-2.5 py-1 bg-gold/[0.06] rounded-sm">{b.direction}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-navy text-[30px] lg:text-[36px] font-bold leading-none" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{b.units}</span>
                      <span className="text-gray-400 text-[13px] ml-0.5">세대</span>
                    </div>
                  </div>
                  {/* 세부 정보 */}
                  <div className="flex items-center gap-4 text-gray-400 text-[13px] lg:text-[14px]">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                      </svg>
                      <span>{b.floor}</span>
                    </div>
                    <span className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                      <span>{b.lines}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 구분선 + 안내 */}
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="w-12 h-px bg-gray-200" />
              <span className="w-1 h-1 bg-gold/40 rotate-45" />
              <span className="w-12 h-px bg-gray-200" />
            </div>
            <p className="text-gray-300 text-[11px] text-center tracking-wide">
              * 본 단지배치도는 소비자의 이해를 돕기 위한 것으로, 실제와 다소 차이가 있을 수 있습니다.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {activeSubTab === "unitplan" && (
          <div className="tab-content">
            {/* 섹션 헤더 */}
            <div className="text-center mb-14">
              <span className="text-gold text-[12px] tracking-[5px] font-medium">UNIT PLAN</span>
              <h3 className="text-[28px] lg:text-[34px] font-bold text-gray-900 mt-3 tracking-tight">동·호수 배치도</h3>
              <p className="text-gray-400 text-[14px] mt-3">중앙하이츠 갈산역 센트럴의 동·호수 배치를 확인하세요.</p>
              <div className="flex items-center justify-center gap-3 mt-5">
                <span className="w-10 h-[1px] bg-gold/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="w-10 h-[1px] bg-gold/40" />
              </div>
            </div>

            {/* Summary Stats - 네이비 배경 */}
            <div className="relative bg-navy rounded-xl overflow-hidden mb-12">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(201,169,110,0.4) 20px, rgba(201,169,110,0.4) 21px)`
              }} />
              <div className="relative grid grid-cols-2">
                {/* 총 세대수 */}
                <div className="flex flex-col items-center justify-center py-8 px-6 border-r border-white/10">
                  <p className="text-white/40 text-[10px] tracking-[3px] font-medium uppercase mb-2">총 세대수</p>
                  <p className="text-white text-[48px] lg:text-[52px] font-bold leading-none">126</p>
                  <p className="text-gold text-[12px] font-medium mt-1">세대</p>
                </div>
                {/* 59 TYPE */}
                <div className="flex flex-col items-center justify-center py-8 px-6">
                  <p className="text-white/40 text-[10px] tracking-[3px] font-medium uppercase mb-2">평형</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-gold text-[48px] lg:text-[52px] font-bold leading-none">59</span>
                    <span className="text-white/50 text-[13px] font-medium">TYPE</span>
                  </div>
                  <p className="text-white/30 text-[11px] mt-1">단일 평형</p>
                </div>
              </div>
            </div>

            {/* 동호배치도 이미지 */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-12 border border-gray-100">
              <Image
                src="/images/unitplan.jpg"
                alt="동·호수 배치도"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* 범례 */}
            <div className="max-w-[500px] mx-auto mb-14">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                  <p className="text-center text-navy text-[16px] font-bold tracking-wide">범례</p>
                </div>
                {[
                  { label: "조합원", count: "71세대", color: "bg-[#F5D89A]", textColor: "text-[#8B6914]" },
                  { label: "일반", count: "50세대", color: "bg-[#A8D8EA]", textColor: "text-[#1A6B8A]" },
                  { label: "보류지", count: "5세대", color: "bg-[#B0A080]", textColor: "text-white" },
                ].map((item, i) => (
                  <div key={i} className="flex border-b border-gray-100 last:border-b-0">
                    <div className={`w-1/2 ${item.color} flex items-center justify-center py-4`}>
                      <span className={`${item.textColor} text-[17px] font-bold`}>{item.label}</span>
                    </div>
                    <div className="w-1/2 flex items-center justify-center py-4 bg-white">
                      <span className="text-gray-800 text-[17px] font-bold">{item.count}</span>
                    </div>
                  </div>
                ))}
                <div className="flex border-t-2 border-gray-300">
                  <div className="w-1/2 flex items-center justify-center py-4 bg-gray-50">
                    <span className="text-navy text-[17px] font-bold">합계</span>
                  </div>
                  <div className="w-1/2 flex items-center justify-center py-4 bg-white">
                    <span className="text-navy text-[19px] font-bold">126세대</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 안내 문구 */}
            <div className="bg-gray-50 rounded-lg border border-gray-100 px-6 py-5">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-[12px] text-gray-400 leading-[1.8]">
                  <p>※ 위 이미지 및 내용, 문구 등은 소비자의 이해를 돕기 위해 제작, 표기된 것으로 실제와 차이가 있습니다.</p>
                  <p>※ 위 개발내용은 사업주체 및 관계기관의 사정에 따라 변경될 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "community" && (
          <div className="tab-content">
            <div className="text-center mb-14">
              <span className="text-gold text-[12px] tracking-[5px] font-medium">COMMUNITY</span>
              <h3 className="text-[28px] lg:text-[34px] font-bold text-gray-900 mt-3 tracking-tight">커뮤니티</h3>
              <p className="text-gray-400 text-[14px] mt-3">입주민을 위한 프리미엄 커뮤니티 시설</p>
              <div className="flex items-center justify-center gap-3 mt-5">
                <span className="w-10 h-[1px] bg-gold/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="w-10 h-[1px] bg-gold/40" />
              </div>
            </div>

            {/* 피트니스 대표 이미지 */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/images/community-1.jpg"
                alt="CENTRAL Fitness Gym"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <span className="text-gold text-[11px] tracking-[3px] font-medium">FITNESS CENTER</span>
                <h4 className="text-white text-[24px] font-bold mt-1">CENTRAL Fitness Gym</h4>
              </div>
            </div>

            {/* 나머지 이미지 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md bg-white">
                <Image
                  src="/images/community-2.jpg"
                  alt="피트니스 평면도"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-[16px] font-bold">커뮤니티 시설 평면도</p>
                  <p className="text-white/60 text-[13px] mt-1">B101호 피트니스 센터</p>
                </div>
              </div>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/community-3.jpg"
                  alt="피트니스 내부"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-[16px] font-bold">피트니스 센터 내부</p>
                  <p className="text-white/60 text-[13px] mt-1">최신 운동기구 완비</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 rounded-lg border border-gray-100 px-6 py-5">
              <p className="text-[12px] text-gray-400 leading-[1.8]">
                ※ 상기 이미지는 CG로 제작된 것으로 실제와 차이가 있을 수 있습니다.<br />
                ※ 커뮤니티 시설은 사업주체 및 관계기관의 사정에 따라 변경될 수 있습니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
