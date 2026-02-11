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

  const floorPlanTypes = [
    { id: "typeA", label: "타입 A", area: "84㎡" },
    { id: "typeB", label: "타입 B", area: "84㎡" },
    { id: "typeC", label: "타입 C", area: "59㎡" },
  ];

  const [selectedType, setSelectedType] = useState("typeA");

  return (
    <section className="pt-[72px]">
      {/* Section Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-stone-700 via-stone-600 to-stone-500 flex items-center justify-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          세 대 안 내
        </h2>
        <p className="absolute bottom-8 text-white/70 text-sm text-center w-full">
          갈산역 중앙하이츠의 세대 정보를 확인하세요.
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
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {activeSubTab === "floorplan" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">평면안내</h3>

            {/* Type Selector */}
            <div className="flex gap-3 mb-10 justify-center">
              {floorPlanTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                    ${selectedType === type.id
                      ? "bg-navy text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {type.label} ({type.area})
                </button>
              ))}
            </div>

            {/* Floor Plan Image */}
            <ImagePlaceholder
              number={selectedType === "typeA" ? 28 : selectedType === "typeB" ? 29 : 30}
              gradient="gradient-silver"
              height="h-[600px]"
              label={`평면도 - ${floorPlanTypes.find(t => t.id === selectedType)?.label}`}
              dark
              className="rounded-lg max-w-[800px] mx-auto"
            />

            {/* Room info */}
            <div className="mt-10 max-w-[800px] mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["방 3개", "욕실 2개", "거실", "주방"].map((room, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                    <span className="text-sm font-medium text-gray-700">{room}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "materials" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">마감재 리스트</h3>
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
