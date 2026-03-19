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


export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [landingFading, setLandingFading] = useState(false);
  const [mainRevealing, setMainRevealing] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [activeSubTab, setActiveSubTab] = useState<string | undefined>();

  const handleEnter = () => {
    setLandingFading(true);
    // 랜딩 페이드아웃 완료 후 → 메인 페이지 등장
    setTimeout(() => {
      setShowLanding(false);
      setMainRevealing(true);
      // 메인 등장 애니메이션 완료 후 상태 정리
      setTimeout(() => setMainRevealing(false), 800);
    }, 700);
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
        className={`landing-page fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden ${
          landingFading ? "fade-out" : ""
        }`}
      >
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-rendering.jpg"
            alt="중앙하이츠 갈산역 센트럴"
            fill
            className="object-cover scale-110 landing-bg-zoom"
            priority
          />
        </div>

        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* 코너 프레임 장식 */}
        <div className="landing-corner absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 md:w-24 md:h-24 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/50 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
        <div className="landing-corner absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 md:w-24 md:h-24 pointer-events-none z-10">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold/50 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
        <div className="landing-corner absolute bottom-8 left-8 md:bottom-12 md:left-12 w-16 h-16 md:w-24 md:h-24 pointer-events-none z-10">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold/50 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-gold/50 to-transparent" />
        </div>
        <div className="landing-corner absolute bottom-8 right-8 md:bottom-12 md:right-12 w-16 h-16 md:w-24 md:h-24 pointer-events-none z-10">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/50 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold/50 to-transparent" />
        </div>

        {/* 중앙 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">

          {/* 영문 레이블 */}
          <div className="landing-en-heading flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-10 md:w-16 h-px bg-gold/40" />
            <p className="text-gold/70 text-[10px] md:text-[12px] tracking-[0.5em] font-medium uppercase">
              PREMIUM RESIDENCE
            </p>
            <div className="w-10 md:w-16 h-px bg-gold/40" />
          </div>

          {/* 로고 */}
          <div className="landing-logo mb-6 md:mb-8">
            <Image
              src="/images/logo-bi.png"
              alt="중앙하이츠 갈산역 센트럴"
              width={400}
              height={90}
              className="h-[60px] md:h-[80px] lg:h-[100px] w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </div>

          {/* 골드 장식선 */}
          <div className="landing-diamond flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-12 md:w-20 h-px bg-gold/30" />
            <div className="w-2 h-2 rotate-45 border border-gold/50" />
            <div className="w-12 md:w-20 h-px bg-gold/30" />
          </div>

          {/* 캐치 카피 */}
          <h1 className="landing-title text-white text-[24px] md:text-[36px] lg:text-[44px] font-light tracking-[0.15em] leading-relaxed" style={{ fontFamily: "'NanumSquare', sans-serif", textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            갈산역 &lsquo;0분&rsquo;의 가치,
            <br />
            중앙하이츠에서 누리다
          </h1>

          {/* 서브 정보 */}
          <p className="landing-desc text-white/50 text-[12px] md:text-[14px] tracking-[0.1em] mt-6 md:mt-8">
            갈산역 초역세권 &nbsp;·&nbsp; 수변공원 초공세권 &nbsp;·&nbsp; 총 126세대 &nbsp;·&nbsp; 59type 단일
          </p>

          {/* ENTER 버튼 */}
          <div className="landing-enter mt-10 md:mt-14">
            <button
              onClick={handleEnter}
              className="group relative"
            >
              <div className="w-[240px] md:w-[300px] py-4 md:py-5 rounded-full border border-white/20 text-white/60 text-[12px] md:text-[14px] tracking-[0.4em] font-medium transition-all duration-500 hover:border-gold hover:text-gold hover:bg-gold/5 backdrop-blur-sm flex items-center justify-center gap-3">
                <span>ENTER</span>
                <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* 좌하단 전화번호 */}
        <a
          href="tel:1800-5636"
          className="landing-phone absolute bottom-8 md:bottom-12 left-8 md:left-14 z-10 flex items-center gap-2.5 text-white/30 hover:text-gold transition-colors duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[11px] tracking-[0.15em] font-medium">1800-5636</span>
        </a>

        {/* 우하단 저작권 */}
        <p className="landing-copyright absolute bottom-8 md:bottom-12 right-8 md:right-14 z-10 text-white/15 text-[9px] tracking-[0.15em]">
          &copy; 2025 JUNGANG HEIGHTS
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${mainRevealing ? "main-reveal" : ""}`}>
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
