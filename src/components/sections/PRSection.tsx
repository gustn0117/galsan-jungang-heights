"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";

const subTabs = [
  { id: "news", label: "언론보도" },
  { id: "video", label: "홍보영상" },
];

interface PRSectionProps {
  initialSubTab?: string;
}

export default function PRSection({ initialSubTab }: PRSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "news");

  return (
    <section className="pt-[72px]">
      {/* Section Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 flex items-center justify-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          홍 보 센 터
        </h2>
        <p className="absolute bottom-8 text-white/70 text-sm text-center w-full">
          갈산역 중앙하이츠의 최신 소식을 만나보세요.
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
        {activeSubTab === "news" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">언론보도</h3>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <ImagePlaceholder
                    number={36 + i}
                    gradient="gradient-silver"
                    height="h-[120px]"
                    label=""
                    dark
                    className="rounded-md w-[180px] flex-shrink-0"
                  />
                  <div className="flex-1">
                    <span className="text-xs text-blue-600 font-medium">언론보도</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-1">
                      기사 제목 영역 {i}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      기사 요약 내용이 들어갈 영역입니다. 실제 기사 내용으로 교체해 주세요.
                    </p>
                    <span className="text-xs text-gray-400 mt-3 block">2025.00.00</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === "video" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">홍보영상</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[42, 43].map((num, i) => (
                <div key={num}>
                  <div className="relative">
                    <ImagePlaceholder
                      number={num}
                      gradient="gradient-night"
                      height="h-[300px]"
                      label={`홍보영상 ${i + 1}`}
                      className="rounded-lg"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mt-4">홍보영상 {i + 1}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
