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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* 골드 그리드 패턴 */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

        {/* 빛나는 원형 글로우 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 60%)'
        }} />

        {/* 골드 원형 장식 */}
        <div className="landing-circle-outer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-gold/[0.08] pointer-events-none" />
        <div className="landing-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[600px] md:h-[600px] rounded-full border border-gold/[0.05] pointer-events-none" />

        {/* 플로팅 골드 파티클 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="landing-particle landing-particle-1 absolute w-[3px] h-[3px] rounded-full bg-gold/30" style={{ left: '12%', bottom: '-5%' }} />
          <div className="landing-particle landing-particle-2 absolute w-[2px] h-[2px] rounded-full bg-gold/40" style={{ left: '28%', bottom: '-8%' }} />
          <div className="landing-particle landing-particle-3 absolute w-[3px] h-[3px] rounded-full bg-gold/25" style={{ left: '52%', bottom: '-3%' }} />
          <div className="landing-particle landing-particle-4 absolute w-[2px] h-[2px] rounded-full bg-gold/35" style={{ left: '75%', bottom: '-6%' }} />
          <div className="landing-particle landing-particle-5 absolute w-[3px] h-[3px] rounded-full bg-gold/20" style={{ left: '90%', bottom: '-4%' }} />
          <div className="landing-particle landing-particle-6 absolute w-[2px] h-[2px] rounded-full bg-gold/30" style={{ left: '40%', bottom: '-7%' }} />
        </div>

        {/* 코너 프레임 — 더블 라인 */}
        <div className="landing-corner absolute top-6 left-6 md:top-10 md:left-10 w-20 h-20 md:w-28 md:h-28 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/60 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold/60 to-transparent" />
          <div className="absolute top-2 left-2 w-8 h-px bg-gradient-to-r from-gold/25 to-transparent" />
          <div className="absolute top-2 left-2 h-8 w-px bg-gradient-to-b from-gold/25 to-transparent" />
        </div>
        <div className="landing-corner absolute top-6 right-6 md:top-10 md:right-10 w-20 h-20 md:w-28 md:h-28 pointer-events-none z-10">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold/60 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gold/60 to-transparent" />
          <div className="absolute top-2 right-2 w-8 h-px bg-gradient-to-l from-gold/25 to-transparent" />
          <div className="absolute top-2 right-2 h-8 w-px bg-gradient-to-b from-gold/25 to-transparent" />
        </div>
        <div className="landing-corner absolute bottom-6 left-6 md:bottom-10 md:left-10 w-20 h-20 md:w-28 md:h-28 pointer-events-none z-10">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold/60 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-gold/60 to-transparent" />
          <div className="absolute bottom-2 left-2 w-8 h-px bg-gradient-to-r from-gold/25 to-transparent" />
          <div className="absolute bottom-2 left-2 h-8 w-px bg-gradient-to-t from-gold/25 to-transparent" />
        </div>
        <div className="landing-corner absolute bottom-6 right-6 md:bottom-10 md:right-10 w-20 h-20 md:w-28 md:h-28 pointer-events-none z-10">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/60 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold/60 to-transparent" />
          <div className="absolute bottom-2 right-2 w-8 h-px bg-gradient-to-l from-gold/25 to-transparent" />
          <div className="absolute bottom-2 right-2 h-8 w-px bg-gradient-to-t from-gold/25 to-transparent" />
        </div>

        {/* 가로 골드 라인 */}
        <div className="absolute top-1/2 left-0 right-0 h-px pointer-events-none" style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.12) 20%, rgba(201,169,110,0.12) 80%, transparent 100%)'
        }} />

        {/* 중앙 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">

          {/* 영문 레이블 */}
          <div className="landing-en-heading flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-10 md:w-20 h-px bg-gold/50" />
            <p className="text-gold text-[10px] md:text-[13px] tracking-[0.6em] font-semibold uppercase" style={{ textShadow: '0 0 20px rgba(201,169,110,0.3)' }}>
              PREMIUM RESIDENCE
            </p>
            <div className="w-10 md:w-20 h-px bg-gold/50" />
          </div>

          {/* 로고 */}
          <div className="landing-logo mb-6 md:mb-8">
            <Image
              src="/images/logo-bi.png"
              alt="중앙하이츠 갈산역 센트럴"
              width={500}
              height={110}
              className="h-[70px] md:h-[90px] lg:h-[110px] w-auto drop-shadow-2xl"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </div>

          {/* 골드 장식선 — 트리플 다이아몬드 */}
          <div className="landing-diamond flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-[5px] h-[5px] rotate-45 bg-gold/30" />
            <div className="w-4 md:w-8 h-px bg-gold/50" />
            <div className="w-[8px] h-[8px] rotate-45 border-2 border-gold/60 landing-diamond-center" />
            <div className="w-4 md:w-8 h-px bg-gold/50" />
            <div className="w-[5px] h-[5px] rotate-45 bg-gold/30" />
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* 캐치 카피 */}
          <h1 className="landing-title text-white text-[26px] md:text-[40px] lg:text-[52px] font-bold tracking-[0.12em] leading-[1.5]" style={{ fontFamily: "'NanumSquare', sans-serif", textShadow: '0 2px 30px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.3)' }}>
            갈산역 &lsquo;<span className="text-gold">0분</span>&rsquo;의 가치,
            <br />
            <span className="font-light">중앙하이츠에서 누리다</span>
          </h1>

          {/* 서브 정보 */}
          <div className="landing-desc flex items-center gap-3 md:gap-5 mt-6 md:mt-10">
            {["갈산역 초역세권", "수변공원 초공세권", "총 126세대", "59type 단일"].map((text, i) => (
              <span key={i} className="flex items-center gap-3 md:gap-5">
                <span className="text-white/60 text-[11px] md:text-[13px] tracking-[0.08em] font-medium" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>{text}</span>
                {i < 3 && <span className="w-px h-3 bg-gold/30" />}
              </span>
            ))}
          </div>

          {/* ENTER 버튼 */}
          <div className="landing-enter mt-10 md:mt-14 relative">
            {/* 외곽 글로우 링 */}
            <div className="absolute -inset-3 md:-inset-4 rounded-full border border-gold/10 landing-enter-outer-ring pointer-events-none" />
            <button
              onClick={handleEnter}
              className="group relative"
            >
              <div className="w-[260px] md:w-[320px] py-4 md:py-5 rounded-full border-2 border-gold/30 text-gold/80 text-[12px] md:text-[14px] tracking-[0.45em] font-semibold transition-all duration-500 hover:border-gold hover:text-gold hover:shadow-[0_0_30px_rgba(201,169,110,0.2)] backdrop-blur-md bg-white/[0.03] flex items-center justify-center gap-3">
                <span>ENTER</span>
                <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* 좌하단 전화번호 */}
        <a
          href="tel:1800-5636"
          className="landing-phone absolute bottom-8 md:bottom-12 left-8 md:left-14 z-10 flex items-center gap-3 text-white/40 hover:text-gold transition-colors duration-300"
        >
          <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center backdrop-blur-sm">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-[12px] tracking-[0.15em] font-bold">1800-5636</span>
        </a>

        {/* 우하단 저작권 */}
        <p className="landing-copyright absolute bottom-8 md:bottom-12 right-8 md:right-14 z-10 text-white/20 text-[9px] tracking-[0.2em]">
          &copy; 2025 JUNGANG HEIGHTS · GALSAN CENTRAL
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
