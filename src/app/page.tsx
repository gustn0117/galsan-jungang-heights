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
        className={`landing-page fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#ffffff] ${
          landingFading ? "fade-out" : ""
        }`}
      >
        {/* 배경 — 중앙 비네트 그라디언트 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(26,39,68,0.02) 60%, rgba(26,39,68,0.05) 100%)'
        }} />

        {/* 배경 — 중앙 골드 글로우 (브레스 효과) */}
        <div className="landing-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 60%)'
        }} />

        {/* 배경 패턴 — 크로스 그리드 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(26,39,68,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,39,68,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        {/* 배경 패턴 — 골드 도트 (그리드 교차점) */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(201,169,110,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '40px 40px'
        }} />

        {/* 플로팅 골드 파티클들 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="landing-particle landing-particle-1 absolute w-[3px] h-[3px] rounded-full bg-gold/15" style={{ left: '15%', bottom: '-5%' }} />
          <div className="landing-particle landing-particle-2 absolute w-[2px] h-[2px] rounded-full bg-gold/20" style={{ left: '30%', bottom: '-8%' }} />
          <div className="landing-particle landing-particle-3 absolute w-[3px] h-[3px] rounded-full bg-gold/12" style={{ left: '55%', bottom: '-3%' }} />
          <div className="landing-particle landing-particle-4 absolute w-[2px] h-[2px] rounded-full bg-gold/18" style={{ left: '72%', bottom: '-6%' }} />
          <div className="landing-particle landing-particle-5 absolute w-[3px] h-[3px] rounded-full bg-gold/10" style={{ left: '88%', bottom: '-4%' }} />
          <div className="landing-particle landing-particle-6 absolute w-[2px] h-[2px] rounded-full bg-gold/15" style={{ left: '42%', bottom: '-7%' }} />
        </div>

        {/* 코너 프레임 장식 — 좌상 (더블 프레임) */}
        <div className="landing-corner absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/30 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold/30 to-transparent" />
          <div className="absolute top-2 left-2 w-3 h-3 md:w-4 md:h-4">
            <div className="absolute top-0 left-0 w-full h-px bg-gold/15" />
            <div className="absolute top-0 left-0 h-full w-px bg-gold/15" />
          </div>
        </div>
        {/* 코너 프레임 장식 — 우상 */}
        <div className="landing-corner absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-10">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold/30 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gold/30 to-transparent" />
          <div className="absolute top-2 right-2 w-3 h-3 md:w-4 md:h-4">
            <div className="absolute top-0 right-0 w-full h-px bg-gold/15" />
            <div className="absolute top-0 right-0 h-full w-px bg-gold/15" />
          </div>
        </div>
        {/* 코너 프레임 장식 — 좌하 */}
        <div className="landing-corner absolute bottom-16 left-8 md:bottom-20 md:left-12 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-10">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold/30 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-gold/30 to-transparent" />
          <div className="absolute bottom-2 left-2 w-3 h-3 md:w-4 md:h-4">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gold/15" />
            <div className="absolute bottom-0 left-0 h-full w-px bg-gold/15" />
          </div>
        </div>
        {/* 코너 프레임 장식 — 우하 */}
        <div className="landing-corner absolute bottom-16 right-8 md:bottom-20 md:right-12 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-10">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/30 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold/30 to-transparent" />
          <div className="absolute bottom-2 right-2 w-3 h-3 md:w-4 md:h-4">
            <div className="absolute bottom-0 right-0 w-full h-px bg-gold/15" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-gold/15" />
          </div>
        </div>

        {/* 사이드 세로 텍스트 — 좌측 */}
        <div className="landing-side-text hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <p className="text-navy/[0.07] text-[9px] tracking-[0.4em] font-medium uppercase" style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}>
            PREMIUM RESIDENCE
          </p>
        </div>
        {/* 사이드 세로 텍스트 — 우측 */}
        <div className="landing-side-text hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <p className="text-navy/[0.07] text-[9px] tracking-[0.4em] font-medium uppercase" style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)'
          }}>
            GALSAN CENTRAL
          </p>
        </div>

        {/* 배경 원 — 가장 바깥 (느린 회전) */}
        <div className="landing-circle-outer absolute top-1/2 left-1/2 w-[520px] h-[520px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full pointer-events-none" style={{
          border: '1px solid rgba(26,39,68,0.03)'
        }}>
          {/* 대각선 위치 장식 점 (45도 간격) */}
          <div className="absolute top-[14.6%] right-[14.6%] w-[4px] h-[4px] rounded-full bg-gold/20" />
          <div className="absolute bottom-[14.6%] right-[14.6%] w-[4px] h-[4px] rounded-full bg-gold/20" />
          <div className="absolute bottom-[14.6%] left-[14.6%] w-[4px] h-[4px] rounded-full bg-gold/20" />
          <div className="absolute top-[14.6%] left-[14.6%] w-[4px] h-[4px] rounded-full bg-gold/20" />
          {/* 상하좌우 틱 마크 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-gradient-to-b from-gold/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-gradient-to-t from-gold/20 to-transparent" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-3 bg-gradient-to-r from-gold/20 to-transparent" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-3 bg-gradient-to-l from-gold/20 to-transparent" />
        </div>

        {/* 배경 원 — 바깥 */}
        <div className="landing-circle absolute top-1/2 left-1/2 w-[440px] h-[440px] md:w-[580px] md:h-[580px] lg:w-[660px] lg:h-[660px] rounded-full border border-navy/[0.06] pointer-events-none">
          {/* 원 위의 장식 점 (상하좌우 + 대각선 8방향) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-gold/30 landing-dot-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[6px] h-[6px] rounded-full bg-gold/30 landing-dot-pulse" />
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-gold/30 landing-dot-pulse" />
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-gold/30 landing-dot-pulse" />
          {/* 대각선 점 */}
          <div className="absolute top-[14.6%] right-[14.6%] w-[4px] h-[4px] rounded-full bg-gold/20" />
          <div className="absolute bottom-[14.6%] right-[14.6%] w-[4px] h-[4px] rounded-full bg-gold/20" />
          <div className="absolute bottom-[14.6%] left-[14.6%] w-[4px] h-[4px] rounded-full bg-gold/20" />
          <div className="absolute top-[14.6%] left-[14.6%] w-[4px] h-[4px] rounded-full bg-gold/20" />
        </div>
        {/* 배경 원 — 안쪽 (점선) */}
        <div className="landing-circle-inner absolute top-1/2 left-1/2 w-[400px] h-[400px] md:w-[530px] md:h-[530px] lg:w-[610px] lg:h-[610px] rounded-full border border-dashed border-navy/[0.04] pointer-events-none" />

        {/* 대각선 액센트 라인 (45도) */}
        <div className="landing-diagonal absolute top-1/2 left-1/2 pointer-events-none" style={{
          width: '140%', height: '1px', transform: 'translate(-50%, -50%) rotate(45deg)',
          background: 'linear-gradient(90deg, transparent 20%, rgba(201,169,110,0.04) 40%, rgba(201,169,110,0.04) 60%, transparent 80%)'
        }} />
        <div className="landing-diagonal absolute top-1/2 left-1/2 pointer-events-none" style={{
          width: '140%', height: '1px', transform: 'translate(-50%, -50%) rotate(-45deg)',
          background: 'linear-gradient(90deg, transparent 20%, rgba(201,169,110,0.04) 40%, rgba(201,169,110,0.04) 60%, transparent 80%)'
        }} />

        {/* 십자 라인 장식 (원 중심에서 확장) */}
        <div className="landing-crossline absolute top-1/2 left-0 right-0 h-px pointer-events-none" style={{
          background: 'linear-gradient(90deg, transparent 5%, rgba(201,169,110,0.06) 30%, rgba(201,169,110,0.06) 70%, transparent 95%)'
        }} />
        <div className="landing-crossline absolute left-1/2 top-0 bottom-0 w-px pointer-events-none" style={{
          background: 'linear-gradient(180deg, transparent 5%, rgba(201,169,110,0.06) 30%, rgba(201,169,110,0.06) 70%, transparent 95%)'
        }} />

        {/* 중앙 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">

          {/* 나무 일러스트 */}
          <div className="landing-logo pointer-events-none mb-5 md:mb-7">
            <Image
              src="/images/landing-trees.png"
              alt="수변공원"
              width={500}
              height={140}
              className="w-[180px] md:w-[260px] h-auto"
              style={{ opacity: 0.18, filter: 'saturate(0.5)' }}
              priority
            />
          </div>

          {/* 영문 헤딩 — 작은 레이블 (라인 장식 포함) */}
          <div className="landing-en-heading flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
            <div className="w-6 md:w-10 h-px bg-navy/[0.08]" />
            <p className="text-navy/15 text-[8px] md:text-[10px] tracking-[0.5em] font-medium uppercase">
              JUNGANG HEIGHTS
            </p>
            <div className="w-6 md:w-10 h-px bg-navy/[0.08]" />
          </div>

          {/* 메인 타이틀 — 큰 세리프 + 넓은 자간 */}
          <h1 className="landing-title text-navy text-[32px] md:text-[48px] lg:text-[58px] font-light" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            중 앙 하 이 츠
          </h1>

          {/* 골드 다이아몬드 장식 (트리플) */}
          <div className="landing-diamond flex items-center gap-2 md:gap-3 mt-4 md:mt-5">
            <div className="w-6 md:w-12 h-px bg-gold/20" />
            <div className="w-[4px] h-[4px] rotate-45 bg-gold/20" />
            <div className="w-3 md:w-5 h-px bg-gold/25" />
            <div className="w-[7px] h-[7px] rotate-45 border border-gold/35 landing-diamond-center" />
            <div className="w-3 md:w-5 h-px bg-gold/25" />
            <div className="w-[4px] h-[4px] rotate-45 bg-gold/20" />
            <div className="w-6 md:w-12 h-px bg-gold/20" />
          </div>

          {/* 구분선 + 서브타이틀 */}
          <div className="landing-subtitle flex items-center gap-4 md:gap-6 mt-4 md:mt-5">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-gold/20" />
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-gold/10 via-gold/25 to-gold/35" />
            </div>
            <p className="text-navy/45 text-[13px] md:text-[16px] tracking-[0.35em]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              갈산역 센트럴
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-16 md:w-24 h-px bg-gradient-to-l from-gold/10 via-gold/25 to-gold/35" />
              <div className="w-1 h-1 rounded-full bg-gold/20" />
            </div>
          </div>

          {/* 한글 설명 */}
          <p className="landing-desc text-navy/30 text-[12px] md:text-[14px] tracking-[0.08em] mt-8 md:mt-10" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            갈산역 초역세권 · 수변공원 초공세권 · 총 126세대
          </p>

          {/* 영문 설명 */}
          <p className="landing-desc-en text-navy/15 text-[8px] md:text-[10px] tracking-[0.3em] font-medium mt-2 uppercase">
            Galsan Station 0 min · Waterfront Park · 59 Type
          </p>

          {/* ENTER 버튼 (더블 링) */}
          <div className="landing-enter mt-10 md:mt-14 relative">
            {/* 외곽 링 */}
            <div className="landing-enter-outer-ring absolute -inset-2 md:-inset-2.5 rounded-[60px] border border-navy/[0.04] pointer-events-none" />
            <button
              onClick={handleEnter}
              className="group relative"
            >
              <div className="landing-enter-btn w-[260px] md:w-[340px] py-5 md:py-6 rounded-[50px] border border-navy/10 text-navy/35 text-[12px] md:text-[14px] tracking-[0.45em] font-medium transition-all duration-500 hover:border-gold/40 hover:text-gold flex items-center justify-center gap-3">
                <span>ENTER</span>
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* 좌하단 전화번호 */}
        <a
          href="tel:1800-5636"
          className="landing-phone absolute bottom-16 md:bottom-20 left-8 md:left-14 z-10 flex items-center gap-2.5 text-navy/20 hover:text-gold transition-colors duration-300"
        >
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-current/30 flex items-center justify-center">
            <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-[10px] md:text-[11px] tracking-[0.15em] font-medium">1800-5636</span>
        </a>

        {/* 우하단 저작권 */}
        <p className="landing-copyright absolute bottom-16 md:bottom-20 right-8 md:right-14 z-10 text-navy/10 text-[8px] md:text-[9px] tracking-[0.15em]">
          &copy; 2025 JUNGANG HEIGHTS
        </p>

        {/* 하단 스크롤 힌트 */}
        <div className="landing-scroll-hint absolute bottom-[72px] md:bottom-[88px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none">
          <svg className="w-4 h-4 text-navy/15 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* 하단 구분선 + 키워드 */}
        <div className="landing-footer absolute bottom-0 left-0 right-0 z-10">
          {/* 더블 라인 장식 */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-navy/[0.08] to-transparent" />
          <div className="w-full h-px mt-px bg-gradient-to-r from-transparent via-navy/[0.04] to-transparent" />
          <div className="py-4 md:py-5 flex items-center justify-center gap-4 md:gap-6 px-4">
            {landingKeywords.map((kw, i) => (
              <span key={i} className="flex items-center gap-4 md:gap-6">
                <span className="text-navy/25 text-[9px] md:text-[10px] tracking-[0.2em] font-medium hover:text-gold/60 transition-colors duration-300 cursor-default">
                  {kw}
                </span>
                {i < landingKeywords.length - 1 && (
                  <span className="w-px h-2.5 bg-navy/10" />
                )}
              </span>
            ))}
          </div>
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
