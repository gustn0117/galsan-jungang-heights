"use client";

import { useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder";

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
      {/* Section Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 flex items-center justify-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          사 업 안 내
        </h2>
        <p className="absolute bottom-8 text-white/70 text-sm text-center w-full">
          갈산역 중앙하이츠의 사업 정보를 확인하세요.
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
        {activeSubTab === "overview" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">사업개요</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ImagePlaceholder
                number={4}
                gradient="gradient-location"
                height="h-[400px]"
                label="사업개요 이미지"
                dark
                className="rounded-lg"
              />
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "사업명", value: "갈산역 중앙하이츠" },
                    { label: "위치", value: "추후 업데이트 예정" },
                    { label: "대지면적", value: "추후 업데이트 예정" },
                    { label: "건축면적", value: "추후 업데이트 예정" },
                    { label: "건폐율", value: "추후 업데이트 예정" },
                    { label: "용적률", value: "추후 업데이트 예정" },
                    { label: "규모", value: "추후 업데이트 예정" },
                    { label: "세대수", value: "추후 업데이트 예정" },
                    { label: "주차대수", value: "추후 업데이트 예정" },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-gray-100 pb-3">
                      <span className="text-xs text-gray-400 font-medium">{item.label}</span>
                      <p className="text-sm text-gray-800 font-medium mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "brand" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">브랜드 소개</h3>
            <ImagePlaceholder
              number={5}
              gradient="gradient-silver"
              height="h-[500px]"
              label="브랜드 소개 이미지"
              dark
              className="rounded-lg"
            />
          </div>
        )}

        {activeSubTab === "directions" && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">오시는길</h3>
            <ImagePlaceholder
              number={6}
              gradient="gradient-location"
              height="h-[500px]"
              label="오시는길 지도"
              dark
              className="rounded-lg"
            />
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <span className="font-bold text-navy">주소:</span> 추후 업데이트 예정
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-bold text-navy">전화:</span> 1688-0458
              </p>
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
