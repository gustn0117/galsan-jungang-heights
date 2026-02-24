"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "schedule", label: "분양일정" },
];

interface SalesSectionProps {
  initialSubTab?: string;
}

export default function SalesSection({ initialSubTab }: SalesSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "schedule");

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="분 양 안 내"
        subtitle="중앙하이츠 갈산역 센트럴의 분양 일정을 확인하세요."
        bgImage="/images/banner.jpg"
        fallbackGradient="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700"
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
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {activeSubTab === "schedule" && (
          <div className="tab-content">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">분양일정</h3>

            {/* Timeline */}
            <div className="relative max-w-[800px] mx-auto" data-animate>
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


      </div>
    </section>
  );
}
