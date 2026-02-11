"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";

const subTabs = [
  { id: "siteplan", label: "단지배치도" },
  { id: "unitplan", label: "동·호수 배치도" },
  { id: "community", label: "커뮤니티" },
];

interface ComplexSectionProps {
  initialSubTab?: string;
}

// Unit table data for Building 101
const building101Floors = [
  { floor: "21F", units: [null, null, "2103", "2104"] },
  { floor: "20F", units: ["2001", "2002", "2003", "2004"] },
  { floor: "19F", units: ["1901", "1902", "1903", "1904"] },
  { floor: "18F", units: ["1801", "1802", "1803", "1804"] },
  { floor: "17F", units: ["1701", "1702", "1703", "1704"] },
  { floor: "16F", units: ["1601", "1602", "1603", "1604"] },
  { floor: "15F", units: ["1501", "1502", "1503", "1504"] },
  { floor: "14F", units: ["1401", "1402", "1403", "1404"] },
  { floor: "13F", units: ["1301", "1302", "1303", "1304"] },
  { floor: "12F", units: ["1201", "1202", "1203", "1204"] },
  { floor: "11F", units: ["1101", "1102", "1103", "1104"] },
  { floor: "10F", units: ["1001", "1002", "1003", "1004"] },
  { floor: "9F", units: ["901", "902", "903", "904"] },
  { floor: "8F", units: ["801", "802", "803", "804"] },
  { floor: "7F", units: ["701", "702", "703", "704"] },
  { floor: "6F", units: ["601", "602", "603", "604"] },
  { floor: "5F", units: ["501", "502", "503", "504"] },
  { floor: "4F", units: ["401", "402", "403", "404"] },
  { floor: "3F", units: ["301", "302", "303", "304"] },
  { floor: "2F", units: ["201", "202", "203", "204"] },
];

// Building 102 data
const building102Floors = [
  { floor: "20F", units: ["2001", "2002"] },
  { floor: "19F", units: ["1901", "1902"] },
  { floor: "18F", units: ["1801", "1802"] },
  { floor: "17F", units: ["1701", "1702"] },
  { floor: "16F", units: ["1601", "1602"] },
  { floor: "15F", units: ["1501", "1502"] },
  { floor: "14F", units: ["1401", "1402"] },
  { floor: "13F", units: ["1301", "1302"] },
  { floor: "12F", units: ["1201", "1202"] },
  { floor: "11F", units: ["1101", "1102"] },
  { floor: "10F", units: ["1001", "1002"] },
  { floor: "9F", units: ["901", "902"] },
  { floor: "8F", units: ["801", "802"] },
  { floor: "7F", units: ["701", "702"] },
  { floor: "6F", units: ["601", "602"] },
  { floor: "5F", units: ["501", "502"] },
  { floor: "4F", units: ["401", "402"] },
  { floor: "3F", units: ["301", "302"] },
  { floor: "2F", units: ["201", "202"] },
];

function getUnitStyle(unit: string | null, buildingIndex: number): string {
  if (!unit) return "bg-white";
  const floorNum = parseInt(unit.substring(0, unit.length - 2));
  const unitSuffix = parseInt(unit.substring(unit.length - 2));

  if (buildingIndex === 0) {
    // Building 101: columns 3,4 (03, 04) in certain floors are highlighted
    if ((unitSuffix === 3 || unitSuffix === 4) && floorNum >= 15 && floorNum <= 19 && floorNum % 2 !== 0) {
      return "bg-yellow-200";
    }
    if ((unitSuffix === 3 || unitSuffix === 4) && floorNum >= 15 && floorNum <= 19 && floorNum % 2 === 0) {
      return "bg-yellow-200";
    }
  }
  if (buildingIndex === 1) {
    // Building 102: some floors highlighted
    if (floorNum >= 15 && floorNum <= 19 && floorNum % 2 !== 0) {
      return "bg-pink-200";
    }
    if (floorNum >= 15 && floorNum <= 19 && floorNum % 2 === 0) {
      return "bg-pink-200";
    }
  }
  return "bg-white";
}

export default function ComplexSection({ initialSubTab }: ComplexSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "siteplan");

  return (
    <section className="pt-[72px]">
      {/* Section Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 flex items-center justify-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          단 지 안 내
        </h2>
        <p className="absolute bottom-8 text-white/70 text-sm text-center w-full">
          중앙하이츠 갈산역 센트럴의 단지 정보를 확인하세요.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8">동·호수 배치도</h3>

            {/* Legend */}
            <div className="flex gap-6 mb-8 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-yellow-200 border border-gray-300 rounded-sm" />
                <span className="text-sm text-gray-600">타입 A</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-pink-200 border border-gray-300 rounded-sm" />
                <span className="text-sm text-gray-600">타입 B</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-200 border border-gray-300 rounded-sm" />
                <span className="text-sm text-gray-600">타입 C</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-white border border-gray-300 rounded-sm" />
                <span className="text-sm text-gray-600">일반</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 justify-center">
              {/* Building 101 */}
              <div>
                <h4 className="text-lg font-bold text-center mb-4 text-gray-800">101동</h4>
                <table className="unit-table text-sm mx-auto">
                  <thead>
                    <tr>
                      <th className="floor-label">층</th>
                      <th className="bg-gray-100 font-semibold">01호</th>
                      <th className="bg-gray-100 font-semibold">02호</th>
                      <th className="bg-gray-100 font-semibold">03호</th>
                      <th className="bg-gray-100 font-semibold">04호</th>
                    </tr>
                  </thead>
                  <tbody>
                    {building101Floors.map((row) => (
                      <tr key={row.floor}>
                        <td className="floor-label">{row.floor}</td>
                        {row.units.map((unit, colIdx) => (
                          <td
                            key={colIdx}
                            className={unit ? getUnitStyle(unit, 0) : "bg-gray-50"}
                          >
                            {unit || ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Building 102 */}
              <div>
                <h4 className="text-lg font-bold text-center mb-4 text-gray-800">102동</h4>
                <table className="unit-table text-sm mx-auto">
                  <thead>
                    <tr>
                      <th className="floor-label">층</th>
                      <th className="bg-gray-100 font-semibold">01호</th>
                      <th className="bg-gray-100 font-semibold">02호</th>
                    </tr>
                  </thead>
                  <tbody>
                    {building102Floors.map((row) => (
                      <tr key={row.floor}>
                        <td className="floor-label">{row.floor}</td>
                        {row.units.map((unit, colIdx) => (
                          <td
                            key={colIdx}
                            className={getUnitStyle(unit, 1)}
                          >
                            {unit}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
