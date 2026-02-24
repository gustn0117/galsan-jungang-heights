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
        className={`landing-page fixed inset-0 z-[100] flex flex-col overflow-hidden ${
          landingFading ? "fade-out" : ""
        }`}
        style={{ background: 'linear-gradient(180deg, #f7f5f0 0%, #f0ede6 100%)' }}
      >
        {/* 상단 영역 */}
        <div className="landing-header relative z-10 flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10">
          <Image
            src="/images/logo-bi.png"
            alt="중앙하이츠 갈산역 센트럴"
            width={160}
            height={40}
            className="h-[24px] md:h-[30px] w-auto"
            priority
          />
          <a
            href="tel:1800-5636"
            className="flex items-center gap-2 text-navy/40 hover:text-gold transition-colors duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[11px] md:text-[12px] tracking-[0.15em] font-medium">1800-5636</span>
          </a>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">

          {/* 핵심 카피 */}
          <div className="landing-title">
            <p className="text-gold/70 text-[11px] md:text-[12px] tracking-[0.3em] font-medium mb-4 md:mb-5">
              GALSAN STATION 0 MIN
            </p>
            <h1
              className="text-navy text-[28px] md:text-[42px] lg:text-[52px] font-bold leading-[1.4] md:leading-[1.35]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              갈산역 0분의 가치<br />
              <span className="text-gold">중앙하이츠</span>에서 누린다
            </h1>
          </div>

          {/* 나무 일러스트 — 크고 대담하게 */}
          <div className="landing-trees relative w-full max-w-[600px] md:max-w-[800px] mt-8 md:mt-12 pointer-events-none">
            <Image
              src="/images/landing-trees.png"
              alt="수변공원"
              width={1200}
              height={300}
              className="w-full h-auto"
              style={{ opacity: 0.25 }}
              priority
            />
            {/* 좌우 페이드 */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-32" style={{ background: 'linear-gradient(to right, #f7f5f0, transparent)' }} />
            <div className="absolute inset-y-0 right-0 w-24 md:w-32" style={{ background: 'linear-gradient(to left, #f3f0e9, transparent)' }} />
            {/* 하단 페이드 */}
            <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: 'linear-gradient(to top, #f2efe8, transparent)' }} />
          </div>

          {/* 핵심 키워드 3개 */}
          <div className="landing-keywords flex items-center gap-6 md:gap-10 mt-6 md:mt-8">
            <div className="text-center">
              <p className="text-navy/30 text-[9px] md:text-[10px] tracking-[0.2em] mb-1">내집앞 갈산역</p>
              <p className="text-navy text-[15px] md:text-[18px] font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>초역세권</p>
            </div>
            <div className="w-px h-8 bg-gold/20" />
            <div className="text-center">
              <p className="text-navy/30 text-[9px] md:text-[10px] tracking-[0.2em] mb-1">내집앞 수변공원</p>
              <p className="text-navy text-[15px] md:text-[18px] font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>초공세권</p>
            </div>
            <div className="w-px h-8 bg-gold/20" />
            <div className="text-center">
              <p className="text-navy/30 text-[9px] md:text-[10px] tracking-[0.2em] mb-1">총 126세대</p>
              <p className="text-navy text-[15px] md:text-[18px] font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>59 TYPE</p>
            </div>
          </div>

          {/* ENTER */}
          <button
            onClick={handleEnter}
            className="landing-enter group mt-10 md:mt-14"
          >
            <div className="relative px-12 md:px-16 py-3.5 md:py-4 bg-navy text-white text-[11px] md:text-[12px] tracking-[0.35em] font-medium transition-all duration-500 hover:bg-gold overflow-hidden">
              <span className="relative z-10">ENTER</span>
            </div>
          </button>
        </div>

        {/* 하단 키워드 */}
        <div className="landing-footer relative z-10 pb-6 md:pb-8 flex items-center justify-center gap-4 md:gap-6 px-4">
          {landingKeywords.map((kw, i) => (
            <span key={i} className="flex items-center gap-4 md:gap-6">
              <span className="text-navy/25 text-[9px] md:text-[10px] tracking-[0.15em]">
                {kw}
              </span>
              {i < landingKeywords.length - 1 && (
                <span className="w-px h-2.5 bg-gold/20" />
              )}
            </span>
          ))}
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
