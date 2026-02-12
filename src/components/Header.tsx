"use client";

import { useState, useEffect, useRef } from "react";

interface MenuItem {
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
}

const menuItems: MenuItem[] = [
  {
    id: "business",
    label: "사업안내",
    subItems: [
      { id: "overview", label: "사업개요" },
      { id: "brand", label: "브랜드 소개" },
      { id: "directions", label: "오시는길" },
    ],
  },
  {
    id: "premium",
    label: "프리미엄",
    subItems: [
      { id: "location", label: "입지환경" },
      { id: "premium4", label: "프리미엄 4" },
    ],
  },
  {
    id: "complex",
    label: "단지안내",
    subItems: [
      { id: "siteplan", label: "단지배치도" },
      { id: "unitplan", label: "동·호수 배치도" },
      { id: "community", label: "커뮤니티" },
    ],
  },
  {
    id: "unit",
    label: "세대안내",
    subItems: [
      { id: "floorplan", label: "평면안내" },
      { id: "vr", label: "VR영상" },
    ],
  },
  {
    id: "sales",
    label: "분양안내",
    subItems: [
      { id: "schedule", label: "분양일정" },
      { id: "recruitment", label: "입주자 모집공고" },
    ],
  },
  {
    id: "pr",
    label: "홍보센터",
    subItems: [
      { id: "news", label: "언론보도" },
      { id: "video", label: "홍보영상" },
    ],
  },
  {
    id: "register",
    label: "관심고객등록",
  },
];

interface HeaderProps {
  activeTab: string;
  onTabChange: (tabId: string, subTabId?: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsHome(activeTab === "home");
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMegaEnter = (hasSub: boolean) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (hasSub) setMegaOpen(true);
    else setMegaOpen(false);
  };

  const handleHeaderLeave = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const isDark = isHome && !scrolled && !megaOpen;
  const isMegaDark = megaOpen; // 메가 메뉴 열릴 때도 다크 스타일

  const headerBg = isDark
    ? "bg-transparent"
    : isMegaDark
      ? "bg-navy/[0.97] backdrop-blur-xl"
      : "bg-white/97 shadow-sm backdrop-blur-md";

  const textMuted = isDark || isMegaDark ? "text-white/80" : "text-gray-700";
  const textColor = isDark || isMegaDark ? "text-white" : "text-gray-900";
  const logoText = isDark || isMegaDark ? "text-white" : "text-gray-900";
  const logoBorder = isDark || isMegaDark ? "border-white/60 text-white/90" : "border-navy text-navy";
  const activeColor = isDark || isMegaDark ? "text-gold font-bold" : "text-navy font-bold";
  const activeBar = isDark || isMegaDark ? "bg-gold" : "bg-navy";

  const menuWithSubs = menuItems.filter((m) => m.subItems);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      onMouseLeave={handleHeaderLeave}
    >
      {/* 홈 투명 상태일 때 글자 가독성을 위한 상단 그라데이션 */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none" />
      )}

      {/* 헤더 하단 골드 악센트 라인 (일반 스크롤 시에만) */}
      {!isDark && !megaOpen && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      )}

      {/* 메가 메뉴 열릴 때 상단 그라데이션 (홈에서 투명 상태일 때와 유사) */}
      {megaOpen && isHome && !scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      )}

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <button
          onClick={() => { onTabChange("home"); setMegaOpen(false); }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <span className={`inline-block px-2.5 py-1 pl-[calc(0.625rem+2px)] border text-[11px] font-medium tracking-[2px] transition-all duration-300 ${logoBorder} group-hover:bg-gold group-hover:border-gold group-hover:text-white`}>
            갈산역
          </span>
          <span className={`text-[20px] font-bold tracking-tight transition-colors duration-300 ${logoText}`}>
            중앙하이츠센트럴
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onTabChange(item.id); setMegaOpen(false); }}
              onMouseEnter={() => handleMegaEnter(!!item.subItems)}
              className={`px-4 py-2.5 text-[14px] font-medium transition-all duration-300 relative
                ${activeTab === item.id
                  ? activeColor
                  : `${textMuted} hover:${textColor}`
                }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] ${activeBar} transition-all`} />
              )}
            </button>
          ))}
        </nav>

        {/* Phone Number */}
        <a
          href="tel:18005636"
          className={`hidden lg:flex items-center gap-2 transition-colors duration-300 ${textColor} hover:text-gold`}
        >
          <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[15px] font-bold tracking-wider">1800-5636</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 메가 메뉴 */}
      <div
        className={`hidden lg:block overflow-hidden transition-all duration-300 ease-in-out ${
          megaOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
        onMouseLeave={handleHeaderLeave}
      >
        <div className="bg-navy/[0.97] backdrop-blur-xl">
          {/* 상단 골드 악센트 라인 */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="max-w-[1100px] mx-auto px-10 py-8">
            <div className="grid grid-cols-6 gap-0">
              {menuWithSubs.map((item, idx) => (
                <div key={item.id} className="relative">
                  {/* 컬럼 구분선 */}
                  {idx > 0 && (
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06]" />
                  )}
                  <div className="px-5">
                    {/* 카테고리 헤더 */}
                    <button
                      onClick={() => { onTabChange(item.id); setMegaOpen(false); }}
                      className="group/cat flex items-center gap-2 mb-4"
                    >
                      <span className="w-1 h-4 bg-gold/60 rounded-full group-hover/cat:h-5 transition-all duration-300" />
                      <span className="text-[13px] font-bold text-white tracking-wider group-hover/cat:text-gold transition-colors duration-300">
                        {item.label}
                      </span>
                    </button>
                    {/* 서브 메뉴 */}
                    <div className="space-y-0.5 pl-3">
                      {item.subItems!.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => { onTabChange(item.id, sub.id); setMegaOpen(false); }}
                          className="group/sub flex items-center gap-2.5 w-full text-left py-2 text-[13px] text-white/40 hover:text-gold transition-all duration-200"
                        >
                          <span className="w-0 group-hover/sub:w-3 h-px bg-gold transition-all duration-300" />
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 하단 정보 바 */}
          <div className="border-t border-white/[0.04]">
            <div className="max-w-[1100px] mx-auto px-10 py-3 flex items-center justify-between">
              <p className="text-white/20 text-[11px] tracking-wide">갈산역 중앙하이츠센트럴 · 총 126세대 · 59TYPE 단일</p>
              <a href="tel:18005636" className="flex items-center gap-1.5 text-gold/60 hover:text-gold text-[12px] font-medium tracking-wider transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800-5636
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/[0.98] backdrop-blur-xl border-t border-white/[0.06] shadow-2xl max-h-[calc(100vh-76px)] overflow-y-auto">
          <div className="px-6 py-5">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-white/[0.06] last:border-0">
                <button
                  onClick={() => {
                    if (!item.subItems) {
                      onTabChange(item.id);
                      setMobileOpen(false);
                    } else {
                      onTabChange(item.id);
                      setMobileOpen(false);
                    }
                  }}
                  className={`flex items-center justify-between w-full text-left py-4 text-[16px] font-semibold transition-colors
                    ${activeTab === item.id ? "text-gold" : "text-white/90"}`}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                </button>
                {item.subItems && (
                  <div className="pb-4 -mt-1">
                    <div className="bg-white/[0.04] rounded-lg overflow-hidden">
                      {item.subItems.map((sub, si) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onTabChange(item.id, sub.id);
                            setMobileOpen(false);
                          }}
                          className={`flex items-center gap-3 w-full text-left px-5 py-3.5 text-[15px] transition-colors active:bg-white/[0.04] ${si > 0 ? "border-t border-white/[0.04]" : ""} text-white/50 hover:text-gold`}
                        >
                          <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-5 mt-1">
              <a href="tel:18005636" className="flex items-center justify-center gap-3 py-4 bg-gold/90 rounded-lg text-white hover:bg-gold transition-colors">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[17px] font-bold tracking-wider">1800-5636</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
