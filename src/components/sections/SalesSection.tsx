"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";

const subTabs = [
  { id: "schedule", label: "분양일정" },
  { id: "recruitment", label: "입주자 모집공고" },
  { id: "policy", label: "주택시장 안정화 대책" },
];

interface SalesSectionProps {
  initialSubTab?: string;
}

export default function SalesSection({ initialSubTab }: SalesSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "schedule");

  return (
    <section className="pt-[72px]">
      {/* Section Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          분 양 안 내
        </h2>
        <p className="absolute bottom-8 text-white/70 text-sm text-center w-full">
          갈산역 중앙하이츠의 분양 일정을 확인하세요.
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
        {activeSubTab === "schedule" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">분양일정</h3>

            {/* Timeline */}
            <div className="relative max-w-[800px] mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
              {[
                { step: "모델하우스 오픈", date: "일정 미정", status: "upcoming" },
                { step: "특별공급", date: "일정 미정", status: "upcoming" },
                { step: "1순위", date: "일정 미정", status: "upcoming" },
                { step: "2순위", date: "일정 미정", status: "upcoming" },
                { step: "당첨자 발표", date: "일정 미정", status: "upcoming" },
                { step: "계약", date: "일정 미정", status: "upcoming" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-center mb-8 ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <h4 className="text-lg font-bold text-gray-900">{item.step}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-navy border-4 border-white shadow" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === "recruitment" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">입주자 모집공고</h3>
            <ImagePlaceholder
              number={35}
              gradient="gradient-silver"
              height="h-[700px]"
              label="입주자 모집공고 문서"
              dark
              className="rounded-lg"
            />
          </div>
        )}

        {activeSubTab === "policy" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">주택시장 안정화 대책</h3>
            <ImagePlaceholder
              number={36}
              gradient="gradient-silver"
              height="h-[600px]"
              label="주택시장 안정화 대책 문서"
              dark
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
