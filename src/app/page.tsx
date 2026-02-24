"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSection from "@/components/sections/HomeSection";
import BusinessSection from "@/components/sections/BusinessSection";
import PremiumSection from "@/components/sections/PremiumSection";
import ComplexSection from "@/components/sections/ComplexSection";
import UnitSection from "@/components/sections/UnitSection";
import SalesSection from "@/components/sections/SalesSection";
import PRSection from "@/components/sections/PRSection";
import RegisterSection from "@/components/sections/RegisterSection";

const landingKeywords = ["사업안내", "프리미엄", "단지안내", "세대안내", "분양안내", "홍보센터"];

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [landingFading, setLandingFading] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [activeSubTab, setActiveSubTab] = useState<string | undefined>();

  const handleEnter = () => {
    setLandingFading(true);
    setTimeout(() => {
      setShowLanding(false);
    }, 600);
  };

  const handleTabChange = (tabId: string, subTabId?: string) => {
    setActiveTab(tabId);
    setActiveSubTab(subTabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Floating CTA button
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  useEffect(() => {
    if (showLanding) return;
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showLanding]);

  /* ===== Landing Page ===== */
  if (showLanding) {
    return (
      <div
        className={`landing-page fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#fafaf8] ${
          landingFading ? "fade-out" : ""
        }`}
      >
        {/* 배경 큰 원 (Tegu Island 스타일) */}
        <div className="landing-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[560px] md:h-[560px] lg:w-[640px] lg:h-[640px] rounded-full border border-navy/[0.06] pointer-events-none" />
        <div className="landing-circle-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[510px] md:h-[510px] lg:w-[590px] lg:h-[590px] rounded-full border border-dashed border-navy/[0.04] pointer-events-none" />

        {/* 중앙 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">

          {/* 나무 일러스트 (로고 위치처럼 상단에) */}
          <div className="landing-logo pointer-events-none mb-6 md:mb-8">
            <Image
              src="/images/landing-trees.png"
              alt="수변공원"
              width={400}
              height={120}
              className="w-[180px] md:w-[240px] h-auto opacity-30"
              priority
            />
          </div>

          {/* 영문 타이틀 — 크고 넓은 자간 */}
          <h1 className="landing-title text-navy text-[28px] md:text-[40px] lg:text-[50px] font-light tracking-[0.25em] md:tracking-[0.3em]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            중앙하이츠
          </h1>

          {/* 구분선 + 한글 서브타이틀 */}
          <div className="landing-subtitle flex items-center gap-4 md:gap-6 mt-4 md:mt-5">
            <div className="w-10 md:w-16 h-px bg-navy/15" />
            <p className="text-navy/50 text-[13px] md:text-[15px] tracking-[0.4em] font-light" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              갈 산 역  센 트 럴
            </p>
            <div className="w-10 md:w-16 h-px bg-navy/15" />
          </div>

          {/* 설명 */}
          <p className="landing-desc text-navy/35 text-[13px] md:text-[15px] tracking-[0.08em] mt-8 md:mt-10" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            갈산역 초역세권 · 수변공원 초공세권 · 총 126세대
          </p>

          {/* 영문 설명 */}
          <p className="landing-desc-en text-navy/20 text-[10px] md:text-[11px] tracking-[0.25em] font-medium mt-3">
            GALSAN STATION 0 MIN · WATERFRONT PARK · 59 TYPE
          </p>

          {/* ENTER 버튼 — 라운드 보더 */}
          <button
            onClick={handleEnter}
            className="landing-enter group mt-12 md:mt-16"
          >
            <div className="px-16 md:px-24 py-4 md:py-5 rounded-[40px] border border-navy/15 text-navy/40 text-[12px] md:text-[13px] tracking-[0.4em] font-medium transition-all duration-500 hover:border-navy/40 hover:text-navy/70 hover:bg-navy/[0.02]">
              ENTER
            </div>
          </button>
        </div>

        {/* 하단 구분선 + 키워드 */}
        <div className="landing-footer absolute bottom-0 left-0 right-0 z-10">
          <div className="w-full h-px bg-navy/[0.06]" />
          <div className="py-5 md:py-6 flex items-center justify-center gap-3 md:gap-5 px-4">
            {landingKeywords.map((kw, i) => (
              <span key={i} className="flex items-center gap-3 md:gap-5">
                <span className="text-navy/25 text-[9px] md:text-[10px] tracking-[0.2em] font-medium">
                  {kw}
                </span>
                {i < landingKeywords.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-navy/10" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-1">
        {activeTab === "home" && <HomeSection />}
        {activeTab === "business" && <BusinessSection initialSubTab={activeSubTab} />}
        {activeTab === "premium" && <PremiumSection initialSubTab={activeSubTab} />}
        {activeTab === "complex" && <ComplexSection initialSubTab={activeSubTab} />}
        {activeTab === "unit" && <UnitSection initialSubTab={activeSubTab} />}
        {activeTab === "sales" && <SalesSection initialSubTab={activeSubTab} />}
        {activeTab === "pr" && <PRSection initialSubTab={activeSubTab} />}
        {activeTab === "register" && <RegisterSection />}
      </main>

      <Footer onTabChange={handleTabChange} />

      {/* Floating Register Button */}
      <div
        className={`fixed bottom-8 right-8 z-40 flex flex-col items-center gap-3 transition-all duration-500 ${
          showFloatingBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-white text-gray-600 rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
          title="맨 위로"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Register CTA */}
        <button
          onClick={() => handleTabChange("register")}
          className="w-14 h-14 bg-gold text-white rounded-full shadow-xl flex items-center justify-center hover:bg-gold-light transition-all duration-300 hover:scale-110 floating-btn"
          title="관심고객등록"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
      </div>

      {/* Phone Floating Button (Mobile) */}
      <a
        href="tel:1800-5636"
        className={`fixed bottom-8 left-6 z-40 lg:hidden flex items-center gap-2 px-5 py-3 bg-navy text-white rounded-full shadow-xl transition-all duration-500 ${
          showFloatingBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-[13px] font-bold tracking-wider">전화상담</span>
      </a>
    </div>
  );
}
