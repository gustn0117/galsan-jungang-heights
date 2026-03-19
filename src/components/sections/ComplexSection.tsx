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
  { floor: "10F", units: ["보류지", "1002"] },
  { floor: "9F", units: ["901", "902"] },
  { floor: "8F", units: ["801", "802"] },
  { floor: "7F", units: ["701", "702"] },
  { floor: "6F", units: ["601", "602"] },
  { floor: "5F", units: ["501", "502"] },
  { floor: "4F", units: ["401", "402"] },
  { floor: "3F", units: ["301", null] },
  { floor: "2F", units: ["상가", "상가"] },
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
  { floor: "10F", units: ["1001", "보류지"] },
  { floor: "9F", units: ["901", "902"] },
  { floor: "8F", units: ["801", "802"] },
  { floor: "7F", units: ["701", "702"] },
  { floor: "6F", units: ["601", "602"] },
  { floor: "5F", units: ["501", "502"] },
  { floor: "4F", units: ["401", "402"] },
  { floor: "3F", units: [null, "302"] },
  { floor: "2F", units: ["상가", "상가"] },
  { floor: "1F", units: [null, null] },
  { floor: "B1F", units: [null, null] },
];

// 103동 (19F, 4라인, 남향) - 각 18세대
const building103Floors = [
  { floor: "19F", units: ["1901", "1902", "1903", "1904"] },
  { floor: "18F", units: ["1801", "1802", "1803", "1804"] },
  { floor: "17F", units: ["1701", "1702", "보류지", "보류지"] },
  { floor: "16F", units: ["1601", "1602", "1603", "1604"] },
  { floor: "15F", units: ["1501", "1502", "1503", "1504"] },
  { floor: "14F", units: ["1401", "1402", "1403", "1404"] },
  { floor: "13F", units: ["1301", "1302", "1303", "1304"] },
  { floor: "12F", units: ["1201", "1202", "1203", "1204"] },
  { floor: "11F", units: ["1101", "1102", "1103", "1104"] },
  { floor: "10F", units: ["보류지", "1002", "1003", "1004"] },
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
  if (unit === "보류지") return "bg-amber-100 text-amber-700 font-medium";
  if (unit === "상가") return "bg-gray-200 text-gray-600 font-medium";
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
                      <span className="text-navy text-[20px] font-bold" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{b.dong}</span>
                      <span className="text-[10px] font-semibold text-gold tracking-[2px] px-2.5 py-1 bg-gold/[0.06] rounded-sm">{b.direction}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-navy text-[26px] font-bold leading-none" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{b.units}</span>
                      <span className="text-gray-400 text-[11px] ml-0.5">세대</span>
                    </div>
                  </div>
                  {/* 세부 정보 */}
                  <div className="flex items-center gap-4 text-gray-400 text-[12px]">
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
              <div className="relative grid grid-cols-2 lg:grid-cols-5">
                {/* 총 세대수 */}
                <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center py-8 px-6 border-b lg:border-b-0 lg:border-r border-white/10">
                  <p className="text-white/40 text-[10px] tracking-[3px] font-medium uppercase mb-2">총 세대수</p>
                  <p className="text-white text-[42px] font-bold leading-none">126</p>
                  <p className="text-gold text-[12px] font-medium mt-1">세대</p>
                </div>
                {/* 59 TYPE */}
                <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center py-8 px-6 border-b lg:border-b-0 lg:border-r border-white/10">
                  <p className="text-white/40 text-[10px] tracking-[3px] font-medium uppercase mb-2">평형</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-gold text-[42px] font-bold leading-none">59</span>
                    <span className="text-white/50 text-[13px] font-medium">TYPE</span>
                  </div>
                  <p className="text-white/30 text-[11px] mt-1">단일 평형</p>
                </div>
                {/* 조합원 */}
                <div className="flex flex-col items-center justify-center py-8 px-6 border-r border-white/10">
                  <p className="text-white/40 text-[10px] tracking-[3px] font-medium uppercase mb-2">조합원</p>
                  <p className="text-white text-[32px] font-bold leading-none">71</p>
                  <p className="text-white/30 text-[11px] mt-1">세대</p>
                </div>
                {/* 일반 */}
                <div className="flex flex-col items-center justify-center py-8 px-6 border-r border-white/10">
                  <p className="text-white/40 text-[10px] tracking-[3px] font-medium uppercase mb-2">일반분양</p>
                  <p className="text-white text-[32px] font-bold leading-none">50</p>
                  <p className="text-white/30 text-[11px] mt-1">세대</p>
                </div>
                {/* 보류지 */}
                <div className="flex flex-col items-center justify-center py-8 px-6">
                  <p className="text-white/40 text-[10px] tracking-[3px] font-medium uppercase mb-2">보류지</p>
                  <p className="text-amber-400 text-[32px] font-bold leading-none">5</p>
                  <p className="text-white/30 text-[11px] mt-1">세대</p>
                </div>
              </div>
            </div>

            {/* Building Selector Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-50 rounded-xl p-1.5 border border-gray-100">
                {buildings.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBuilding(b.id)}
                    className={`relative px-8 py-3 rounded-lg text-[14px] font-medium transition-all duration-300 ${
                      activeBuilding === b.id
                        ? "bg-navy text-white shadow-md"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <span className="relative z-10">{b.label}</span>
                    {activeBuilding === b.id && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gold rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Building Content */}
            {buildings.filter(b => b.id === activeBuilding).map((b) => (
              <div key={b.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Building Header */}
                <div className="bg-navy px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-10 bg-gold rounded-full" />
                      <div>
                        <h4 className="text-white text-[22px] font-bold tracking-tight">{b.label}</h4>
                        <p className="text-white/40 text-[11px] tracking-[3px] mt-0.5">{b.dirEn} FACING</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-white/30 text-[10px] tracking-[2px] uppercase">라인</p>
                        <p className="text-white/70 text-[13px] font-medium mt-0.5">{b.lines}</p>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-right">
                        <p className="text-white/30 text-[10px] tracking-[2px] uppercase">향</p>
                        <p className="text-white/70 text-[13px] font-medium mt-0.5">{b.direction}</p>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-right">
                        <p className="text-white/30 text-[10px] tracking-[2px] uppercase">세대수</p>
                        <p className="text-gold text-[20px] font-bold mt-0.5">{b.total}<span className="text-[12px] text-white/40 ml-1">세대</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table Area */}
                <div className="p-8">
                  <div className="overflow-x-auto">
                    <table className="unit-table text-sm mx-auto">
                      <thead>
                        <tr>
                          <th className="floor-label !bg-navy !text-white">층</th>
                          {b.cols.map((col) => (
                            <th key={col}>{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.floors.map((row) => (
                          <tr key={row.floor}>
                            <td className="floor-label">{row.floor}</td>
                            {row.units.map((unit, colIdx) => (
                              <td key={colIdx} className={unit ? getUnitStyle(unit) : "bg-gray-50"}>
                                {unit || ""}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Building Footer */}
                <div className="bg-gray-50/80 px-8 py-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {[
                        { color: "bg-white border-gray-300", label: "조합원 / 일반" },
                        { color: "bg-amber-100 border-amber-300", label: "보류지" },
                        { color: "bg-gray-200 border-gray-300", label: "상가" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded-[2px] border ${item.color}`} />
                          <span className="text-[12px] text-gray-400">{item.label}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[12px] text-gray-300">{b.detail}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* 안내 문구 */}
            <div className="mt-14 bg-gray-50 rounded-lg border border-gray-100 px-6 py-5">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8">커뮤니티</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[24, 25, 26, 27].map((num, i) => (
                <ImagePlaceholder
                  key={num}
                  number={num}
                  gradient={i % 2 === 0 ? "gradient-community" : "gradient-silver"}
                  height="h-[300px]"
                  label={`커뮤니티 시설 ${i + 1}`}
                  dark
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
