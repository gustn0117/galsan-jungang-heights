"use client";

import { useState } from "react";
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

export default function ComplexSection({ initialSubTab }: ComplexSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "siteplan");

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="단 지 안 내"
        subtitle="중앙하이츠 갈산역 센트럴의 단지 정보를 확인하세요."
        bgImage="/images/banner-complex.jpg"
        fallbackGradient="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500"
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
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {activeSubTab === "siteplan" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">단지배치도</h3>
            <ImagePlaceholder
              number={23}
              gradient="gradient-community"
              height="h-[600px]"
              label="단지배치도 이미지"
              dark
              className="rounded-lg"
            />
          </div>
        )}

        {activeSubTab === "unitplan" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">동·호수 배치도</h3>
            <p className="text-gray-500 text-sm mb-8">갈산역 센트럴 중앙하이츠의 동·호수 배치를 확인하세요.</p>

            {/* Summary Card */}
            <div className="bg-gradient-to-r from-[#f9f6f0] to-[#f5f0e6] rounded-2xl p-8 mb-10 border border-[#e8dcc8]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-500 mb-1">총 세대수</p>
                  <p className="text-4xl font-bold text-navy">126<span className="text-lg font-normal text-gray-500 ml-1">세대</span></p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-5xl font-bold text-navy border-2 border-navy rounded-full w-20 h-20 flex items-center justify-center">59</span>
                  <span className="text-sm text-gray-500 ml-2">TYPE 단일</span>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">조합원</p>
                    <p className="text-2xl font-bold text-navy">71<span className="text-sm font-normal text-gray-500">세대</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">일반</p>
                    <p className="text-2xl font-bold text-navy">50<span className="text-sm font-normal text-gray-500">세대</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">보류지</p>
                    <p className="text-2xl font-bold text-amber-600">5<span className="text-sm font-normal text-gray-500">세대</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 md:gap-6 mb-8 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-white border-2 border-gray-300 rounded-sm" />
                <span className="text-sm text-gray-600">조합원 / 일반</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-amber-100 border-2 border-amber-300 rounded-sm" />
                <span className="text-sm text-gray-600">보류지</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-gray-200 border-2 border-gray-300 rounded-sm" />
                <span className="text-sm text-gray-600">상가</span>
              </div>
            </div>

            {/* Building Tables */}
            <div className="flex flex-col xl:flex-row gap-8 justify-center">
              {/* 101동 + 102동 그룹 */}
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                {/* 101동 */}
                <div>
                  <h4 className="text-lg font-bold text-center mb-4 text-navy">101동</h4>
                  <table className="unit-table text-sm mx-auto">
                    <thead>
                      <tr>
                        <th className="floor-label !bg-navy !text-white">층</th>
                        <th>1호</th>
                        <th>2호</th>
                      </tr>
                    </thead>
                    <tbody>
                      {building101Floors.map((row) => (
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
                  <div className="mt-3 text-center">
                    <div className="flex justify-center gap-4 text-xs text-gray-500">
                      <span>라인: <b className="text-gray-700">1호, 2호</b></span>
                      <span>향: <b className="text-gray-700">동향</b></span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">세대수: <b className="text-gray-700">14</b> + <b className="text-gray-700">13</b> = 27세대</p>
                  </div>
                </div>

                {/* 102동 */}
                <div>
                  <h4 className="text-lg font-bold text-center mb-4 text-navy">102동</h4>
                  <table className="unit-table text-sm mx-auto">
                    <thead>
                      <tr>
                        <th className="floor-label !bg-navy !text-white">층</th>
                        <th>1호</th>
                        <th>2호</th>
                      </tr>
                    </thead>
                    <tbody>
                      {building102Floors.map((row) => (
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
                  <div className="mt-3 text-center">
                    <div className="flex justify-center gap-4 text-xs text-gray-500">
                      <span>라인: <b className="text-gray-700">1호, 2호</b></span>
                      <span>향: <b className="text-gray-700">동향</b></span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">세대수: <b className="text-gray-700">13</b> + <b className="text-gray-700">14</b> = 27세대</p>
                  </div>
                </div>
              </div>

              {/* 103동 */}
              <div>
                <h4 className="text-lg font-bold text-center mb-4 text-navy">103동</h4>
                <table className="unit-table text-sm mx-auto">
                  <thead>
                    <tr>
                      <th className="floor-label !bg-navy !text-white">층</th>
                      <th>1호</th>
                      <th>2호</th>
                      <th>3호</th>
                      <th>4호</th>
                    </tr>
                  </thead>
                  <tbody>
                    {building103Floors.map((row) => (
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
                <div className="mt-3 text-center">
                  <div className="flex justify-center gap-4 text-xs text-gray-500">
                    <span>라인: <b className="text-gray-700">1호, 2호, 3호, 4호</b></span>
                    <span>향: <b className="text-gray-700">남향</b></span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">세대수: <b className="text-gray-700">18</b> × 4 = 72세대</p>
                </div>
              </div>
            </div>

            {/* 안내 문구 */}
            <p className="text-xs text-gray-400 text-center mt-10 leading-relaxed">
              ※ 위 이미지 및 내용, 문구 등은 소비자의 이해를 돕기 위해 제작, 표기된 것으로 실제와 차이가 있습니다.<br />
              ※ 위 개발내용은 사업주체 및 관계기관의 사정에 따라 변경될 수 있습니다.
            </p>
          </div>
        )}

        {activeSubTab === "community" && (
          <div>
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
