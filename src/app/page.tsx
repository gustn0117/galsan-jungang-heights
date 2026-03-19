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
            className="object-cover landing-bg-zoom"
            priority
          />
        </div>

        {/* 시네마틱 오버레이 — 3중 레이어 */}
        <div className="absolute inset-0 bg-[#0a0e18]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e18]/70 via-transparent to-[#0a0e18]/80" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(10,14,24,0.5) 100%)'
        }} />

        {/* 골드 비네트 글로우 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full pointer-events-none landing-bg-glow" style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, rgba(201,169,110,0.02) 40%, transparent 65%)'
        }} />

        {/* 미세 그리드 패턴 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        {/* 대각선 장식 라인 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.03) 50%, transparent 60%)'
          }} />
          <div className="absolute top-0 left-0 w-full h-full" style={{
            background: 'linear-gradient(-135deg, transparent 40%, rgba(201,169,110,0.03) 50%, transparent 60%)'
          }} />
        </div>

        {/* 플로팅 파티클 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { cls: 'landing-particle-1', size: 3, op: 30, x: '10%' },
            { cls: 'landing-particle-2', size: 2, op: 45, x: '25%' },
            { cls: 'landing-particle-3', size: 3, op: 20, x: '48%' },
            { cls: 'landing-particle-4', size: 2, op: 35, x: '68%' },
            { cls: 'landing-particle-5', size: 3, op: 25, x: '85%' },
            { cls: 'landing-particle-6', size: 2, op: 40, x: '38%' },
          ].map((p, i) => (
            <div key={i} className={`landing-particle ${p.cls} absolute rounded-full`}
              style={{ width: p.size, height: p.size, left: p.x, bottom: '-5%', backgroundColor: `rgba(201,169,110,${p.op / 100})` }} />
          ))}
        </div>

        {/* 코너 프레임 — L형 + 도트 */}
        {[
          { pos: 'top-6 left-6 md:top-10 md:left-10', dir: ['to-r', 'to-b'], origin: ['top-0 left-0', 'top-0 left-0'], dot: 'top-0 left-0' },
          { pos: 'top-6 right-6 md:top-10 md:right-10', dir: ['to-l', 'to-b'], origin: ['top-0 right-0', 'top-0 right-0'], dot: 'top-0 right-0' },
          { pos: 'bottom-6 left-6 md:bottom-10 md:left-10', dir: ['to-r', 'to-t'], origin: ['bottom-0 left-0', 'bottom-0 left-0'], dot: 'bottom-0 left-0' },
          { pos: 'bottom-6 right-6 md:bottom-10 md:right-10', dir: ['to-l', 'to-t'], origin: ['bottom-0 right-0', 'bottom-0 right-0'], dot: 'bottom-0 right-0' },
        ].map((c, i) => (
          <div key={i} className={`landing-corner absolute ${c.pos} w-16 h-16 md:w-24 md:h-24 pointer-events-none z-10`}>
            <div className={`absolute ${c.origin[0]} w-full h-px bg-gradient-${c.dir[0]} from-gold/50 to-transparent`} />
            <div className={`absolute ${c.origin[1]} h-full w-px bg-gradient-${c.dir[1]} from-gold/50 to-transparent`} />
            <div className={`absolute ${c.dot} w-1.5 h-1.5 rounded-full bg-gold/40`} />
          </div>
        ))}

        {/* 사이드 세로 텍스트 */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <p className="text-white/[0.06] text-[9px] tracking-[0.5em] font-medium uppercase" style={{ writingMode: 'vertical-rl' }}>
            GALSAN STATION · CENTRAL
          </p>
        </div>
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <p className="text-white/[0.06] text-[9px] tracking-[0.5em] font-medium uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            PREMIUM RESIDENCE · 2025
          </p>
        </div>

        {/* ===== 중앙 콘텐츠 ===== */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[800px]">

          {/* 상단 영문 레이블 — 시머 애니메이션 */}
          <div className="landing-en-heading flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
            <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/40 landing-dot-pulse" />
            <p className="text-gold/80 text-[9px] md:text-[11px] tracking-[0.7em] font-semibold uppercase landing-shimmer">
              PREMIUM RESIDENCE
            </p>
            <div className="w-1.5 h-1.5 rounded-full bg-gold/40 landing-dot-pulse" />
            <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* 로고 — 글로우 효과 */}
          <div className="landing-logo mb-8 md:mb-10 relative">
            <div className="absolute inset-0 blur-2xl opacity-20 bg-gold/30 scale-150 rounded-full" />
            <Image
              src="/images/logo-bi.png"
              alt="중앙하이츠 갈산역 센트럴"
              width={500}
              height={110}
              className="relative h-[65px] md:h-[85px] lg:h-[105px] w-auto"
              style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 30px rgba(201,169,110,0.15))" }}
              priority
            />
          </div>

          {/* 골드 장식 — 5겹 라인 + 다이아몬드 */}
          <div className="landing-diamond flex items-center gap-1.5 md:gap-2 mb-8 md:mb-10">
            <div className="w-6 md:w-12 h-px bg-gradient-to-r from-transparent via-gold/20 to-gold/40" />
            <div className="w-1 h-1 rotate-45 bg-gold/25" />
            <div className="w-3 md:w-6 h-px bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/35" />
            <div className="w-2 md:w-4 h-px bg-gold/50" />
            <div className="w-2.5 h-2.5 rotate-45 border border-gold/60 relative landing-diamond-center">
              <div className="absolute inset-[2px] rotate-45 bg-gold/20" />
            </div>
            <div className="w-2 md:w-4 h-px bg-gold/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/35" />
            <div className="w-3 md:w-6 h-px bg-gold/40" />
            <div className="w-1 h-1 rotate-45 bg-gold/25" />
            <div className="w-6 md:w-12 h-px bg-gradient-to-l from-transparent via-gold/20 to-gold/40" />
          </div>

          {/* 캐치프레이즈 — 한글 큰 타이포 */}
          <div className="landing-title mb-3">
            <p className="text-white/40 text-[13px] md:text-[16px] tracking-[0.2em] mb-4 md:mb-6" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
              &ldquo; 갈산역 &lsquo;0분&rsquo;의 가치, 중앙하이츠에서 누리다 &rdquo;
            </p>
            <h1 className="text-white text-[30px] md:text-[46px] lg:text-[58px] font-bold tracking-[0.06em] leading-[1.3]" style={{ fontFamily: "'NanumSquare', sans-serif", textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}>
              걸어서 누리는
              <br />
              완성된 <span className="text-gold" style={{ textShadow: '0 0 40px rgba(201,169,110,0.3)' }}>프리미엄</span>
            </h1>
          </div>

          {/* 서브 텍스트 */}
          <p className="landing-subtitle text-white/30 text-[11px] md:text-[13px] tracking-[0.15em] mt-4 md:mt-6">
            내집앞 갈산역 초역세권 · 내집앞 수변공원 초공세권
          </p>

          {/* 핵심 스펙 — 카드형 */}
          <div className="landing-desc flex items-center gap-2 md:gap-4 mt-6 md:mt-8">
            {[
              { label: "총 세대", value: "126세대" },
              { label: "일반분양", value: "50세대" },
              { label: "타입", value: "59㎡ 단일" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-4">
                <div className="px-3 md:px-5 py-2 md:py-2.5 border border-white/[0.08] rounded bg-white/[0.02] backdrop-blur-sm">
                  <span className="text-gold/60 text-[8px] md:text-[9px] tracking-[0.2em] uppercase block mb-0.5">{item.label}</span>
                  <span className="text-white/80 text-[13px] md:text-[15px] font-bold tracking-wider">{item.value}</span>
                </div>
                {i < 2 && <span className="w-px h-6 bg-gold/15" />}
              </div>
            ))}
          </div>

          {/* ENTER 버튼 — 골드 글로우 */}
          <div className="landing-enter mt-10 md:mt-14 relative">
            <div className="absolute -inset-4 md:-inset-5 rounded-full border border-gold/[0.06] pointer-events-none landing-enter-outer-ring" />
            <div className="absolute -inset-1 rounded-full pointer-events-none" style={{
              background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)'
            }} />
            <button onClick={handleEnter} className="group relative">
              <div className="w-[240px] md:w-[300px] py-4 md:py-5 rounded-full border border-gold/40 text-gold text-[11px] md:text-[13px] tracking-[0.5em] font-bold transition-all duration-700 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_40px_rgba(201,169,110,0.15),0_0_80px_rgba(201,169,110,0.05)] backdrop-blur-md flex items-center justify-center gap-3">
                <span>ENTER</span>
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* 좌하단 전화번호 */}
        <a href="tel:1800-5636"
          className="landing-phone absolute bottom-7 md:bottom-10 left-7 md:left-12 z-10 flex items-center gap-3 text-white/30 hover:text-gold transition-all duration-500 group"
        >
          <div className="w-9 h-9 rounded-full border border-gold/15 flex items-center justify-center backdrop-blur-sm group-hover:border-gold/40 transition-all duration-500">
            <svg className="w-3.5 h-3.5 text-gold/50 group-hover:text-gold transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <span className="block text-[8px] text-white/20 tracking-[0.2em] uppercase">Contact</span>
            <span className="block text-[13px] tracking-[0.1em] font-bold">1800-5636</span>
          </div>
        </a>

        {/* 우하단 저작권 */}
        <p className="landing-copyright absolute bottom-7 md:bottom-10 right-7 md:right-12 z-10 text-white/10 text-[8px] tracking-[0.2em] uppercase">
          &copy; 2025 Jungang Heights · Galsan Central
        </p>

        {/* 하단 스크롤 힌트 */}
        <div className="absolute bottom-7 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none landing-scroll-hint">
          <span className="text-white/15 text-[8px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-gold/30 to-transparent scroll-indicator" />
        </div>
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
