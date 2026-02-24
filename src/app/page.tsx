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
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/landing-perspective.jpg"
            alt="중앙하이츠 갈산역 센트럴 투시도"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/95 via-[#0a0f1a]/50 to-[#0a0f1a]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/30 via-transparent to-[#0a0f1a]/30" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none landing-circle">
          <div className="w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-white/[0.06]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-gold/[0.08]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          {/* Logo */}
          <div className="landing-logo mb-8 md:mb-12">
            <Image
              src="/images/logo-bi.png"
              alt="중앙하이츠 갈산역 센트럴"
              width={240}
              height={60}
              className="h-[40px] md:h-[52px] w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </div>

          {/* Main Slogan */}
          <div className="landing-title">
            <p
              className="text-white/50 text-[13px] md:text-[15px] tracking-[0.3em] font-light mb-4 md:mb-6"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              갈산역 &ldquo;0분&rdquo;의 가치
            </p>
            <h1
              className="text-white text-[28px] md:text-[42px] lg:text-[50px] font-bold tracking-[0.08em] leading-[1.3]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              걸어서 누리는
              <br />
              완성된 <span className="text-gold">프리미엄</span>
            </h1>
          </div>

          {/* Divider */}
          <div className="landing-sub flex items-center gap-4 mt-8 md:mt-10">
            <span className="w-10 md:w-16 h-px bg-gold/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <span className="w-10 md:w-16 h-px bg-gold/40" />
          </div>

          {/* Sub Description */}
          <p className="landing-desc text-white/40 text-[12px] md:text-[14px] tracking-[0.2em] mt-6 md:mt-8 leading-relaxed">
            내집앞 갈산역 초역세권 · 내집앞 수변공원 초공세권
          </p>
          <p className="landing-desc text-white/25 text-[11px] md:text-[12px] tracking-[0.15em] mt-2">
            총 126세대 · 일반분양 50세대 · 59TYPE 단일
          </p>

          {/* ENTER Button */}
          <button
            onClick={handleEnter}
            className="landing-enter landing-enter-btn group mt-12 md:mt-16 px-16 md:px-20 py-4 md:py-5 rounded-full border border-white/20 text-white/70 text-[13px] md:text-[14px] tracking-[0.35em] font-medium transition-all duration-500 hover:border-gold hover:text-gold hover:bg-gold/[0.05] backdrop-blur-sm"
          >
            <span className="flex items-center gap-3">
              ENTER
              <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          {/* Phone */}
          <a
            href="tel:1800-5636"
            className="landing-enter flex items-center gap-2 mt-6 text-white/25 hover:text-gold/70 transition-colors duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[12px] tracking-[0.2em]">1800-5636</span>
          </a>
        </div>

        {/* Bottom Keywords */}
        <div className="landing-footer relative z-10 pb-8 md:pb-12 flex items-center justify-center gap-3 md:gap-5 px-4 flex-wrap">
          {landingKeywords.map((kw, i) => (
            <span key={i} className="flex items-center gap-3 md:gap-5">
              <span className="text-white/20 text-[10px] md:text-[11px] tracking-[0.2em] font-medium">
                {kw}
              </span>
              {i < landingKeywords.length - 1 && (
                <span className="w-[3px] h-[3px] rounded-full bg-gold/30" />
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
