"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";

const subTabs = [
  { id: "floorplan", label: "평면안내" },
  { id: "materials", label: "마감재 리스트" },
];

interface UnitSectionProps {
  initialSubTab?: string;
}

export default function UnitSection({ initialSubTab }: UnitSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "floorplan");

  return (
    <section className="pt-[72px]">
      {/* Section Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-stone-700 via-stone-600 to-stone-500 flex items-center justify-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          세 대 안 내
        </h2>
        <p className="absolute bottom-8 text-white/70 text-sm text-center w-full">
          중앙하이츠 갈산역 센트럴의 세대 정보를 확인하세요.
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
        {activeSubTab === "floorplan" && (
          <div>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-navy text-white text-[13px] font-bold rounded-full mb-4">
                59 TYPE
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">평면안내</h3>
              <p className="text-gray-400 text-sm">59type 단일 평면으로 효율적인 공간 활용을 제공합니다.</p>
            </div>

            {/* Floor Plan Image */}
            <ImagePlaceholder
              number={28}
              gradient="gradient-silver"
              height="h-[600px]"
              label="59type 평면도"
              dark
              className="rounded-lg max-w-[800px] mx-auto"
            />

            {/* Area Info */}
            <div className="mt-12 max-w-[900px] mx-auto">
              <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">면적 정보</h4>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="py-4 px-6 text-[13px] font-semibold text-center">타입</th>
                      <th className="py-4 px-6 text-[13px] font-semibold text-center">공급면적</th>
                      <th className="py-4 px-6 text-[13px] font-semibold text-center">주거전용면적</th>
                      <th className="py-4 px-6 text-[13px] font-semibold text-center hidden md:table-cell">주거공용면적</th>
                      <th className="py-4 px-6 text-[13px] font-semibold text-center hidden md:table-cell">기타공용면적</th>
                      <th className="py-4 px-6 text-[13px] font-semibold text-center hidden lg:table-cell">대지지분</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 text-center">
                        <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-bold text-[13px] rounded">59type</span>
                      </td>
                      <td className="py-4 px-6 text-center text-[14px] font-semibold text-gray-800">86.81㎡</td>
                      <td className="py-4 px-6 text-center text-[14px] font-semibold text-navy">59.79㎡</td>
                      <td className="py-4 px-6 text-center text-[14px] text-gray-600 hidden md:table-cell">27.02㎡</td>
                      <td className="py-4 px-6 text-center text-[14px] text-gray-600 hidden md:table-cell">78.65㎡</td>
                      <td className="py-4 px-6 text-center text-[14px] text-gray-600 hidden lg:table-cell">24.72㎡</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Area Details */}
              <div className="grid grid-cols-2 gap-3 mt-6 md:hidden">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-[11px] text-gray-400">주거공용면적</span>
                  <p className="text-[14px] font-semibold text-gray-700 mt-1">27.02㎡</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-[11px] text-gray-400">기타공용면적</span>
                  <p className="text-[14px] font-semibold text-gray-700 mt-1">78.65㎡</p>
                </div>
              </div>

              {/* Room Layout */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "방 3개", desc: "넉넉한 공간" },
                  { icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", label: "욕실 2개", desc: "쾌적한 위생" },
                  { icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", label: "거실", desc: "개방감 설계" },
                  { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", label: "주방", desc: "효율적 동선" },
                ].map((room, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 mx-auto bg-navy/5 rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={room.icon} />
                      </svg>
                    </div>
                    <span className="text-[15px] font-bold text-gray-800 block">{room.label}</span>
                    <span className="text-[12px] text-gray-400 mt-1 block">{room.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "materials" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">마감재 리스트</h3>
            <p className="text-gray-400 text-sm mb-10">프리미엄 마감재로 완성되는 품격 있는 공간</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[31, 32, 33, 34].map((num, i) => (
                <div key={num}>
                  <ImagePlaceholder
                    number={num}
                    gradient={i % 2 === 0 ? "gradient-community" : "gradient-silver"}
                    height="h-[300px]"
                    label={`마감재 ${i + 1}`}
                    dark
                    className="rounded-lg"
                  />
                  <h4 className="text-base font-bold text-gray-900 mt-4">마감재 항목 {i + 1}</h4>
                  <p className="text-sm text-gray-500 mt-1">마감재 설명 영역</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
