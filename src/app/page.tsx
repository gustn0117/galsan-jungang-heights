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
        className={`landing-page fixed inset-0 z-[100] flex flex-col overflow-hidden bg-[#fafaf8] ${
          landingFading ? "fade-out" : ""
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,110,0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">

          {/* Main Slogan */}
          <h1 className="landing-title">
            <span
              className="block text-navy text-[22px] md:text-[32px] lg:text-[38px] font-bold tracking-[0.05em] leading-[1.6]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              &ldquo; 갈산역 <span className="text-gold">&lsquo;0분&rsquo;</span>의 가치, 중앙하이츠에서 누린다 &rdquo;
            </span>
          </h1>

          {/* Illustration Area */}
          <div className="landing-sub relative w-full max-w-[700px] mt-10 md:mt-14 mb-6 md:mb-8">
            {/* Labels */}
            <div className="flex items-start justify-between mb-4 md:mb-6 px-2">
              <div className="text-left">
                <p className="text-gray-400 text-[11px] md:text-[13px] tracking-[0.1em]">내집앞 갈산역</p>
                <p className="text-navy text-[20px] md:text-[26px] font-bold mt-1" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  초역세권
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-[11px] md:text-[13px] tracking-[0.1em]">내집앞 수변공원</p>
                <p className="text-navy text-[20px] md:text-[26px] font-bold mt-1" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  초공세권
                </p>
              </div>
            </div>

            {/* Trees (center) */}
            <div className="relative mx-auto w-[280px] md:w-[420px] pointer-events-none">
              <Image
                src="/images/landing-trees.png"
                alt="수변공원"
                width={760}
                height={200}
                className="w-full h-auto opacity-50"
                priority
              />
            </div>
          </div>

          {/* Description */}
          <div className="landing-desc max-w-[500px]">
            <p className="text-gray-400 text-[11px] md:text-[13px] leading-[2] tracking-[0.05em]">
              단지 바로 앞에서 이용가능한 지하철,
              <br />
              걸어서 누리는 수변공원과 생태하천을 통한 쾌적한 자연환경,
              <br />
              앞마당에 펼쳐진 중심상업지구를 통한 완벽한 생활인프라
            </p>
          </div>

          {/* Logo */}
          <div className="landing-enter mt-8 md:mt-12">
            <Image
              src="/images/logo-bi.png"
              alt="중앙하이츠 갈산역 센트럴"
              width={200}
              height={50}
              className="h-[28px] md:h-[36px] w-auto"
              priority
            />
          </div>

          {/* ENTER Button */}
          <button
            onClick={handleEnter}
            className="landing-enter landing-enter-btn group mt-10 md:mt-14 px-16 md:px-20 py-4 md:py-5 rounded-full border border-gray-300 text-gray-500 text-[13px] md:text-[14px] tracking-[0.35em] font-medium transition-all duration-500 hover:border-gold hover:text-gold hover:bg-gold/[0.03]"
          >
            <span className="flex items-center gap-3">
              ENTER
              <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Bottom: Phone + Keywords */}
        <div className="landing-footer relative z-10 pb-6 md:pb-10 flex flex-col items-center gap-4">
          <a
            href="tel:1800-5636"
            className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[12px] tracking-[0.2em]">1800-5636</span>
          </a>
          <div className="flex items-center justify-center gap-3 md:gap-5 px-4 flex-wrap">
            {landingKeywords.map((kw, i) => (
              <span key={i} className="flex items-center gap-3 md:gap-5">
                <span className="text-gray-300 text-[9px] md:text-[10px] tracking-[0.2em] font-medium">
                  {kw}
                </span>
                {i < landingKeywords.length - 1 && (
                  <span className="w-[3px] h-[3px] rounded-full bg-gold/30" />
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
