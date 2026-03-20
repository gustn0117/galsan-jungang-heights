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
        className={`landing-page fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-white ${
          landingFading ? "fade-out" : ""
        }`}
      >
        {/* 중앙 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[1000px]">

          {/* 상단 캐치카피 — 글자별 순차 등장 */}
          <div className="landing-en-heading mb-12 md:mb-16 overflow-hidden">
            <p className="text-navy/60 text-[16px] md:text-[22px] lg:text-[26px] tracking-[0.12em] font-medium" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
              <span className="landing-char" style={{ animationDelay: '0.3s' }}>&ldquo;</span>
              <span className="landing-char" style={{ animationDelay: '0.35s' }}> </span>
              {['갈','산','역'].map((c, i) => <span key={i} className="landing-char" style={{ animationDelay: `${0.4 + i * 0.05}s` }}>{c}</span>)}
              <span className="landing-char" style={{ animationDelay: '0.55s' }}> </span>
              <span className="landing-char" style={{ animationDelay: '0.6s' }}>「</span>
              <span className="landing-char-highlight text-navy font-black text-[20px] md:text-[28px] lg:text-[34px]" style={{ animationDelay: '0.7s' }}>0</span>
              <span className="landing-char-highlight text-navy font-black text-[20px] md:text-[28px] lg:text-[34px]" style={{ animationDelay: '0.8s' }}>분</span>
              <span className="landing-char" style={{ animationDelay: '0.9s' }}>」</span>
              <span className="landing-char" style={{ animationDelay: '0.95s' }}>의</span>
              <span className="landing-char" style={{ animationDelay: '1.0s' }}> </span>
              {['가','치',',',' ','걸','어','서',' ','누','리','는',' ','완','성','된',' ','프','리','미','엄'].map((c, i) => (
                <span key={i} className="landing-char" style={{ animationDelay: `${1.05 + i * 0.04}s` }}>{c}</span>
              ))}
              <span className="landing-char" style={{ animationDelay: '1.9s' }}> </span>
              <span className="landing-char" style={{ animationDelay: '1.95s' }}>&rdquo;</span>
            </p>
          </div>

          {/* 로고 BI */}
          <div className="landing-logo mb-10 md:mb-14">
            <Image
              src="/images/logo-bi.png"
              alt="중앙하이츠 갈산역 센트럴"
              width={500}
              height={110}
              className="h-[55px] md:h-[75px] lg:h-[90px] w-auto"
              priority
            />
          </div>

          {/* 수변공원 + 열차 일러스트 + 양쪽 텍스트 */}
          <div className="landing-title relative w-full flex items-center justify-center mb-8 md:mb-12">
            {/* 좌측 — 초역세권 */}
            <div className="landing-slide-left flex-1 text-right pr-4 md:pr-8">
              <p className="text-navy/40 text-[12px] md:text-[15px] lg:text-[17px] tracking-[0.08em] mb-1" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                내집앞 갈산역
              </p>
              <p className="text-navy text-[24px] md:text-[36px] lg:text-[44px] font-black tracking-tight leading-tight landing-text-glow" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                초역세권
              </p>
            </div>

            {/* 중앙 — 수변공원 일러스트 + 열차 */}
            <div className="relative w-[200px] md:w-[320px] lg:w-[420px] flex-shrink-0">
              {/* 좌측 열차 — 왼쪽에서 달려옴 */}
              <div className="absolute right-[85%] md:right-[90%] top-[28%] w-[140px] md:w-[220px] lg:w-[280px] landing-train-left">
                <Image
                  src="/images/train-left.png"
                  alt="지하철"
                  width={1000}
                  height={172}
                  className="w-full h-auto opacity-25"
                />
              </div>
              {/* 우측 열차 — 오른쪽에서 달려옴 */}
              <div className="absolute left-[85%] md:left-[90%] top-[28%] w-[140px] md:w-[220px] lg:w-[280px] landing-train-right">
                <Image
                  src="/images/train-right.png"
                  alt="지하철"
                  width={1025}
                  height={172}
                  className="w-full h-auto opacity-25"
                />
              </div>
              <Image
                src="/images/landing-trees.png"
                alt="수변공원"
                width={500}
                height={140}
                className="relative z-[1] w-full h-auto"
                style={{ opacity: 0.35, filter: 'saturate(0)' }}
              />
            </div>

            {/* 우측 — 초공세권 */}
            <div className="landing-slide-right flex-1 text-left pl-4 md:pl-8">
              <p className="text-navy/40 text-[12px] md:text-[15px] lg:text-[17px] tracking-[0.08em] mb-1" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                내집앞 수변공원
              </p>
              <p className="text-navy text-[24px] md:text-[36px] lg:text-[44px] font-black tracking-tight leading-tight landing-text-glow" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                초공세권
              </p>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className="landing-desc space-y-1 mb-12 md:mb-16">
            <p className="text-navy/40 text-[12px] md:text-[14px] tracking-[0.05em] leading-[2]" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
              단지 바로 앞에서 이용가능한 지하철,
            </p>
            <p className="text-navy/40 text-[12px] md:text-[14px] tracking-[0.05em] leading-[2]" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
              걸어서 누리는 수변공원과 생태하천을 통한 쾌적한 자연환경,
            </p>
            <p className="text-navy/40 text-[12px] md:text-[14px] tracking-[0.05em] leading-[2]" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
              앞마당에 펼쳐진 중심상업지구를 통한 완벽한 생활인프라
            </p>
          </div>

          {/* ENTER 버튼 */}
          <div className="landing-enter">
            <button onClick={handleEnter} className="group relative">
              <div className="w-[220px] md:w-[280px] py-4 md:py-5 rounded-full border-2 border-navy/15 text-navy/40 text-[12px] md:text-[14px] tracking-[0.5em] font-bold transition-all duration-500 hover:border-navy/40 hover:text-navy hover:shadow-lg flex items-center justify-center gap-3">
                <span>ENTER</span>
                <svg className="w-4 h-4 opacity-40 group-hover:opacity-80 transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* 좌하단 전화번호 */}
        <a href="tel:1800-5636"
          className="landing-phone absolute bottom-6 md:bottom-10 left-6 md:left-12 z-10 flex items-center gap-2 text-navy/25 hover:text-navy/60 transition-colors duration-300"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[11px] tracking-[0.1em] font-medium">1800-5636</span>
        </a>

        {/* 우하단 저작권 */}
        <p className="landing-copyright absolute bottom-6 md:bottom-10 right-6 md:right-12 z-10 text-navy/15 text-[8px] tracking-[0.15em]">
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
