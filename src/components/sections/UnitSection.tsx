"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionBanner from "../SectionBanner";

const PanoramaViewer = dynamic(() => import("../PanoramaViewer"), { ssr: false });

const interiorSpaces = [
  {
    id: "living",
    label: "거실",
    images: [
      { src: "/images/interior/거실1.png", alt: "거실 인테리어 1" },
      { src: "/images/interior/거실2.png", alt: "거실 인테리어 2" },
      { src: "/images/interior/거실3.png", alt: "거실 인테리어 3" },
    ],
  },
  {
    id: "kitchen",
    label: "주방",
    images: [
      { src: "/images/interior/주방1.png", alt: "주방 인테리어 1" },
      { src: "/images/interior/주방2.png", alt: "주방 인테리어 2" },
      { src: "/images/interior/주방3.png", alt: "주방 인테리어 3" },
      { src: "/images/interior/주방4.png", alt: "주방 인테리어 4" },
    ],
  },
  {
    id: "master",
    label: "안방",
    images: [
      { src: "/images/interior/안방.png", alt: "안방 인테리어 1" },
      { src: "/images/interior/안방2.png", alt: "안방 인테리어 2" },
    ],
  },
  {
    id: "bedroom",
    label: "침실",
    images: [
      { src: "/images/interior/침실2.png", alt: "침실2 인테리어" },
      { src: "/images/interior/침실3.png", alt: "침실3 인테리어" },
    ],
  },
  {
    id: "bathroom",
    label: "욕실",
    images: [
      { src: "/images/interior/공용욕실.png", alt: "공용욕실 인테리어" },
      { src: "/images/interior/안방욕실.png", alt: "안방욕실 인테리어" },
    ],
  },
];

const vrRooms = [
  { id: "living", label: "거실", src: "/images/vr/거실.jpg" },
  { id: "kitchen", label: "주방", src: "/images/vr/주방.jpg" },
  { id: "bedroom1", label: "침실1", src: "/images/vr/침실1.jpg" },
  { id: "bedroom2", label: "침실2", src: "/images/vr/침실2.jpg" },
  { id: "bedroom3", label: "침실3", src: "/images/vr/침실3.jpg" },
  { id: "bathroom-common", label: "공용욕실", src: "/images/vr/공용욕실.jpg" },
  { id: "bathroom-master", label: "부부욕실", src: "/images/vr/부부욕실.jpg" },
  { id: "hallway1", label: "복도1", src: "/images/vr/복도1.jpg" },
  { id: "hallway2", label: "복도2", src: "/images/vr/복도2.jpg" },
  { id: "entrance", label: "현관", src: "/images/vr/현관.jpg" },
];

const subTabs = [
  { id: "floorplan", label: "평면안내" },
  { id: "interior", label: "세대 인테리어" },
  { id: "vr", label: "VR영상" },
];

const exhibitData = [
  { id: "living1", room: "거실", label: "거실 VIEW A", src: "/images/exhibit/exhibit-8.jpg" },
  { id: "living2", room: "거실", label: "거실 VIEW B", src: "/images/exhibit/exhibit-9.jpg" },
  { id: "living3", room: "거실", label: "거실 VIEW C", src: "/images/exhibit/exhibit-10.jpg" },
  { id: "master1", room: "안방", label: "안방 VIEW A", src: "/images/exhibit/exhibit-12.jpg" },
  { id: "master2", room: "안방", label: "안방 VIEW B", src: "/images/exhibit/exhibit-13.jpg" },
  { id: "kitchen1", room: "주방", label: "주방·다이닝", src: "/images/exhibit/exhibit-15.jpg" },
  { id: "kitchen2", room: "주방", label: "주방 상세", src: "/images/exhibit/exhibit-16.jpg" },
  { id: "kitchen3", room: "주방", label: "주방·거실 파노라마", src: "/images/exhibit/exhibit-17.jpg" },
  { id: "kitchen4", room: "주방", label: "주방·세탁실", src: "/images/exhibit/exhibit-18.jpg" },
  { id: "child", room: "아이방", label: "아이방·서재", src: "/images/exhibit/exhibit-19.jpg" },
  { id: "baby", room: "아이방", label: "유아방", src: "/images/exhibit/exhibit-20.jpg" },
  { id: "bath1", room: "욕실", label: "욕실 (욕조형)", src: "/images/exhibit/exhibit-11.jpg" },
  { id: "bath2", room: "욕실", label: "욕실 (샤워부스형)", src: "/images/exhibit/exhibit-14.jpg" },
];

const viewModes = [
  { id: "iso", label: "3D 입체도", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  )},
  { id: "top", label: "평면도", icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
    </svg>
  )},
];

const isoImages = [
  { src: "/images/floorplan-iso-1.png", label: "VIEW A" },
  { src: "/images/floorplan-iso-2.png", label: "VIEW B" },
];

interface UnitSectionProps {
  initialSubTab?: string;
}

export default function UnitSection({ initialSubTab }: UnitSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "floorplan");
  const [viewMode, setViewMode] = useState("iso");

  useEffect(() => {
    if (initialSubTab) setActiveSubTab(initialSubTab);
  }, [initialSubTab]);
  const [isoIndex, setIsoIndex] = useState(0);
  const [exhibitFilter, setExhibitFilter] = useState("all");
  const [vrRoom, setVrRoom] = useState("living");
  const [interiorSpace, setInteriorSpace] = useState("living");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="세 대 안 내"
        subtitle="중앙하이츠 갈산역 센트럴의 세대 정보를 확인하세요."
        bgImage="/images/banner.jpg"
        fallbackGradient="bg-gradient-to-r from-stone-700 via-stone-600 to-stone-500"
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
      <div className="max-w-[1600px] mx-auto px-6 py-16">
        {activeSubTab === "floorplan" && (
          <div className="tab-content">

            {/* ── View Mode Toggle ── */}
            <div className="flex items-center justify-center gap-2 mb-10">
              {viewModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-medium transition-all duration-300 border
                    ${viewMode === mode.id
                      ? "bg-navy text-gold border-navy shadow-lg"
                      : "bg-white text-gray-400 border-gray-200 hover:border-gold/40 hover:text-gray-600"
                    }
                  `}
                >
                  {mode.icon}
                  {mode.label}
                </button>
              ))}
            </div>

            {/* ── Two-Column Layout: Floor Plan + Spec Sidebar ── */}
            <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">

              {/* Left: Floor Plan Image */}
              <div className="flex-[2] relative bg-white p-2">

                {/* Isometric View */}
                {viewMode === "iso" && (
                  <div className="relative">
                    <Image
                      key={isoImages[isoIndex].src}
                      src={isoImages[isoIndex].src}
                      alt={`59타입 3D 입체도 ${isoImages[isoIndex].label}`}
                      width={1200}
                      height={900}
                      className="w-full h-auto transition-opacity duration-500"
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      priority
                    />
                    {/* Iso View Switcher */}
                    <div className="flex items-center justify-center gap-3 mt-4 mb-2">
                      {isoImages.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setIsoIndex(i)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-medium transition-all duration-300
                            ${isoIndex === i
                              ? "bg-navy/5 text-navy border border-navy/15"
                              : "text-gray-300 hover:text-gray-500 border border-transparent"
                            }
                          `}
                        >
                          <span className={`w-2 h-2 rounded-full transition-colors ${isoIndex === i ? "bg-gold" : "bg-gray-200"}`} />
                          {img.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Top View */}
                {viewMode === "top" && (
                  <Image
                    src="/images/floorplan-topview.png"
                    alt="59타입 평면도"
                    width={1200}
                    height={900}
                    className="w-full h-auto transition-opacity duration-500"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    priority
                  />
                )}
              </div>

              {/* Right: Spec Sidebar */}
              <div className="w-full lg:w-[340px] xl:w-[380px] bg-gradient-to-b from-[#0e1525] to-navy flex-shrink-0">
                {/* Type Header */}
                <div className="px-8 pt-10 pb-8 border-b border-white/[0.06]">
                  <p className="text-gold/50 text-[10px] tracking-[4px] font-medium uppercase mb-3">TYPE</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white text-[42px] font-bold leading-none" style={{ fontFamily: "'NanumSquare', sans-serif" }}>59</span>
                    <span className="text-white/30 text-[16px]">㎡</span>
                  </div>
                  <p className="text-white/25 text-[12px] mt-3 tracking-wide">전용면적 기준 단일 타입</p>
                </div>

                {/* Key Areas */}
                <div className="grid grid-cols-2 border-b border-white/[0.06]">
                  <div className="px-8 py-7 border-r border-white/[0.06]">
                    <p className="text-gold/40 text-[9px] tracking-[2px] uppercase font-medium mb-2">공급면적</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white text-[24px] font-bold leading-none" style={{ fontFamily: "'NanumSquare', sans-serif" }}>86.81</span>
                      <span className="text-white/20 text-[11px]">㎡</span>
                    </div>
                  </div>
                  <div className="px-8 py-7">
                    <p className="text-gold/40 text-[9px] tracking-[2px] uppercase font-medium mb-2">전용면적</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-gold text-[24px] font-bold leading-none" style={{ fontFamily: "'NanumSquare', sans-serif" }}>59.79</span>
                      <span className="text-gold/30 text-[11px]">㎡</span>
                    </div>
                  </div>
                </div>

                {/* Detail Specs - Vertical List */}
                <div className="divide-y divide-white/[0.06]">
                  {[
                    { label: "주거공용면적", value: "27.02㎡" },
                    { label: "기타공용면적", value: "78.65㎡" },
                    { label: "대지지분", value: "24.72㎡" },
                    { label: "전용률", value: "68.9%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-8 py-4">
                      <span className="text-white/30 text-[12px]">{item.label}</span>
                      <span className="text-white/70 text-[13px] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Room Composition */}
                <div className="px-8 pt-7 pb-8 border-t border-white/[0.06] mt-auto">
                  <p className="text-gold/40 text-[9px] tracking-[3px] uppercase font-medium mb-5">ROOM</p>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { num: "3", label: "방" },
                      { num: "2", label: "욕실" },
                      { num: "1", label: "거실" },
                      { num: "1", label: "주방" },
                    ].map((room, i) => (
                      <div key={i} className="text-center">
                        <span className="text-white text-[22px] font-bold leading-none block" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{room.num}</span>
                        <span className="text-white/30 text-[11px] block mt-1.5">{room.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Space Features - Full Width Bar ── */}
            <div className="mt-14 relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-gold/50 text-[10px] tracking-[4px] font-medium uppercase">SPACE DESIGN</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {[
                  { num: "01", title: "남향 위주 배치", copy: "채광과 통풍을 극대화한 남향 중심 단지 설계로 사계절 쾌적한 주거 환경" },
                  { num: "02", title: "3BAY 광폭 설계", copy: "개방감 있는 거실과 분리된 침실 공간, 모든 방에 자연 채광 확보" },
                  { num: "03", title: "알파 수납 공간", copy: "드레스룸, 팬트리 등 풍부한 수납 설계로 깔끔한 생활 공간 실현" },
                ].map((item, i) => (
                  <div key={i} className={`group relative p-8 md:p-10 ${i < 2 ? "md:border-r border-gray-100" : ""} hover:bg-[#faf9f7] transition-colors duration-300`}>
                    <span className="text-gold/25 text-[11px] tracking-[2px] font-medium">{item.num}</span>
                    <h5 className="text-navy text-[16px] font-bold mt-3 mb-3 group-hover:text-gold transition-colors duration-300" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{item.title}</h5>
                    <p className="text-gray-400 text-[13px] leading-[1.9]">{item.copy}</p>
                    <div className="w-6 h-px bg-gold/20 mt-5 group-hover:w-10 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeSubTab === "interior" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">INTERIOR</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>세대 인테리어</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
              <p className="text-gray-400 text-[14px]">공간별 인테리어 디자인을 확인하세요</p>
            </div>

            {/* Space Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {interiorSpaces.map((space) => (
                <button
                  key={space.id}
                  onClick={() => setInteriorSpace(space.id)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 border
                    ${interiorSpace === space.id
                      ? "bg-navy text-gold border-navy shadow-lg"
                      : "bg-white text-gray-400 border-gray-200 hover:border-gold/40 hover:text-gray-600"
                    }
                  `}
                >
                  {space.label}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            {(() => {
              const currentSpace = interiorSpaces.find((s) => s.id === interiorSpace);
              if (!currentSpace) return null;
              const images = currentSpace.images;
              return (
                <div className={`grid gap-3 ${
                  images.length === 1 ? "grid-cols-1 max-w-[700px] mx-auto" :
                  images.length === 2 ? "grid-cols-1 md:grid-cols-2" :
                  images.length === 3 ? "grid-cols-1 md:grid-cols-3" :
                  "grid-cols-1 md:grid-cols-2"
                }`}>
                  {images.map((img, i) => (
                    <button
                      key={img.src}
                      onClick={() => setLightbox(img.src)}
                      className={`group relative overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                        images.length === 3 && i === 0 ? "md:col-span-2 md:row-span-1" :
                        images.length === 4 && i === 0 ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className={`relative w-full ${
                        (images.length === 3 && i === 0) || (images.length === 4 && i === 0)
                          ? "aspect-[16/9]"
                          : "aspect-[4/3]"
                      }`}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                          <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              );
            })()}

            {/* ===== 전시품목표기 ===== */}
            <div className="mt-20 pt-16 border-t border-gray-100">
              <div className="text-center mb-10">
                <span className="text-gold text-[11px] tracking-[4px] font-medium uppercase">EXHIBIT ITEMS</span>
                <h3 className="text-[24px] md:text-[30px] font-bold text-gray-900 mt-3" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                  전시품목표기
                </h3>
                <p className="text-gray-400 text-[13px] mt-3">
                  모델하우스에 전시된 품목을 확인하세요
                </p>
              </div>

              {/* 공간별 필터 */}
              {(() => {
                const rooms = Array.from(new Set(exhibitData.map(e => e.room)));
                return (
                  <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
                    <button
                      onClick={() => setExhibitFilter("all")}
                      className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 border ${
                        exhibitFilter === "all"
                          ? "bg-navy text-gold border-navy"
                          : "bg-white text-gray-400 border-gray-200 hover:border-gold/40"
                      }`}
                    >전체</button>
                    {rooms.map(room => (
                      <button
                        key={room}
                        onClick={() => setExhibitFilter(room)}
                        className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 border ${
                          exhibitFilter === room
                            ? "bg-navy text-gold border-navy"
                            : "bg-white text-gray-400 border-gray-200 hover:border-gold/40"
                        }`}
                      >{room}</button>
                    ))}
                  </div>
                );
              })()}

              {/* 이미지 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {exhibitData
                  .filter(e => exhibitFilter === "all" || e.room === exhibitFilter)
                  .map((item) => (
                  <div key={item.id} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                    onClick={() => setLightbox(item.src)}
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-gold/80 text-white text-[9px] font-bold rounded">{item.room}</span>
                        <span className="text-white text-[13px] font-medium">{item.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 안내 문구 */}
              <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-gray-400 text-[12px] leading-[1.8]">
                  ※ 상기 이미지는 모델하우스를 촬영한 것으로, 실제 시공 시 차이가 있을 수 있습니다.<br />
                  ※ 전시품목으로 표기된 물품은 분양가에 포함되지 않으며 견본주택 전시 목적으로만 설치된 것입니다.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === "vr" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">VIRTUAL REALITY</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>VR 투어</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
              <p className="text-gray-400 text-[14px]">360° 파노라마로 미리 만나보는 중앙하이츠 갈산역 센트럴</p>
            </div>

            <div className="max-w-[1000px] mx-auto">
              {/* Room Selector */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                {vrRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setVrRoom(room.id)}
                    className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border
                      ${vrRoom === room.id
                        ? "bg-navy text-gold border-navy shadow-lg"
                        : "bg-white text-gray-400 border-gray-200 hover:border-gold/40 hover:text-gray-600"
                      }
                    `}
                  >
                    {room.label}
                  </button>
                ))}
              </div>

              {/* Panorama Viewer */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <PanoramaViewer
                  key={vrRoom}
                  src={vrRooms.find((r) => r.id === vrRoom)!.src}
                  className="w-full aspect-[16/9] md:aspect-[2/1]"
                />
                {/* Room Label Overlay */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-white text-[13px] font-medium">
                    {vrRooms.find((r) => r.id === vrRoom)!.label}
                  </span>
                </div>
              </div>

              {/* Drag Hint */}
              <p className="text-center text-gray-300 text-[12px] mt-4 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                드래그하여 360° 둘러보기 · 스크롤로 확대/축소
              </p>

              {/* VR Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-lg overflow-hidden mt-8 stagger-children">
                {[
                  { num: "360°", title: "파노라마 뷰", desc: "실제 모델하우스를 360도로 둘러볼 수 있습니다" },
                  { num: String(vrRooms.length), title: "공간 투어", desc: "거실부터 현관까지 모든 공간을 체험하세요" },
                  { num: "VR", title: "실감형 체험", desc: "마우스 드래그로 자유롭게 둘러보세요" },
                ].map((item, i) => (
                  <div key={i} className={`group bg-white p-6 text-center hover:bg-navy/[0.02] transition-colors duration-300 ${i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
                    <span className="text-gold/60 text-[11px] tracking-[3px] font-medium">{item.num}</span>
                    <h4 className="text-navy text-[15px] font-bold mt-2 mb-1.5 group-hover:text-gold transition-colors duration-300" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{item.title}</h4>
                    <p className="text-gray-400 text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-[1200px] max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="인테리어 확대"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
