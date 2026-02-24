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
        {/* 배경 패턴 — 크로스 그리드 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(26,39,68,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,39,68,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        {/* 배경 패턴 — 세밀한 도트 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(201,169,110,0.12) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '40px 40px'
        }} />

        {/* 배경 큰 원 — 바깥 */}
        <div className="landing-circle absolute top-1/2 left-1/2 w-[440px] h-[440px] md:w-[580px] md:h-[580px] lg:w-[660px] lg:h-[660px] rounded-full border border-navy/[0.06] pointer-events-none">
          {/* 원 위의 작은 장식 점 (상하좌우) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-gold/30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[5px] h-[5px] rounded-full bg-gold/30" />
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-gold/30" />
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-gold/30" />
        </div>
        {/* 배경 큰 원 — 안쪽 (점선) */}
        <div className="landing-circle-inner absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[530px] md:h-[530px] lg:w-[610px] lg:h-[610px] rounded-full border border-dashed border-navy/[0.04] pointer-events-none" />

        {/* 중앙 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">

          {/* 나무 일러스트 */}
          <div className="landing-logo pointer-events-none mb-8 md:mb-10">
            <Image
              src="/images/landing-trees.png"
              alt="수변공원"
              width={500}
              height={140}
              className="w-[200px] md:w-[280px] h-auto"
              style={{ opacity: 0.22, filter: 'saturate(0.6)' }}
              priority
            />
          </div>

          {/* 메인 타이틀 — 큰 세리프 + 넓은 자간 */}
          <h1 className="landing-title text-navy text-[30px] md:text-[44px] lg:text-[54px] font-light" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            중 앙 하 이 츠
          </h1>

          {/* 구분선 + 서브타이틀 */}
          <div className="landing-subtitle flex items-center gap-4 md:gap-6 mt-5 md:mt-6">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <p className="text-navy/45 text-[13px] md:text-[16px] tracking-[0.35em]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              갈산역 센트럴
            </p>
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          {/* 한글 설명 */}
          <p className="landing-desc text-navy/30 text-[13px] md:text-[15px] tracking-[0.05em] mt-9 md:mt-12" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            갈산역 초역세권 · 수변공원 초공세권 · 총 126세대
          </p>

          {/* 영문 설명 */}
          <p className="landing-desc-en text-navy/15 text-[9px] md:text-[10px] tracking-[0.3em] font-medium mt-2.5 uppercase">
            Galsan Station 0 min · Waterfront Park · 59 Type
          </p>

          {/* ENTER 버튼 — Tegu Island 스타일 크게 */}
          <button
            onClick={handleEnter}
            className="landing-enter group mt-12 md:mt-16"
          >
            <div className="landing-enter-btn w-[240px] md:w-[320px] py-5 md:py-6 rounded-[50px] border border-navy/10 text-navy/35 text-[12px] md:text-[14px] tracking-[0.45em] font-medium transition-all duration-500 hover:border-gold/40 hover:text-gold">
              ENTER
            </div>
          </button>
        </div>

        {/* 좌하단 전화번호 */}
        <a
          href="tel:1800-5636"
          className="landing-phone absolute bottom-16 md:bottom-20 left-8 md:left-14 z-10 flex items-center gap-2 text-navy/20 hover:text-gold transition-colors duration-300"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] md:text-[11px] tracking-[0.15em]">1800-5636</span>
        </a>

        {/* 하단 구분선 + 키워드 */}
        <div className="landing-footer absolute bottom-0 left-0 right-0 z-10">
          <div className="w-full h-px bg-navy/[0.06]" />
          <div className="py-5 md:py-6 flex items-center justify-center gap-3 md:gap-5 px-4">
            {landingKeywords.map((kw, i) => (
              <span key={i} className="flex items-center gap-3 md:gap-5">
                <span className="text-navy/20 text-[9px] md:text-[10px] tracking-[0.2em] font-medium">
                  {kw}
                </span>
                {i < landingKeywords.length - 1 && (
                  <span className="w-[3px] h-[3px] rounded-full bg-gold/25" />
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
