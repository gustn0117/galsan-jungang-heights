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
      { id: "agreement", label: "상호협의결과서" },
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
      { id: "materials", label: "마감재 리스트" },
    ],
  },
  {
    id: "sales",
    label: "분양안내",
    subItems: [
      { id: "schedule", label: "분양일정" },
      { id: "recruitment", label: "입주자 모집공고" },
      { id: "policy", label: "주택시장 안정화 대책" },
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
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
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

  const handleMegaEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const isDark = isHome && !scrolled && !megaOpen;
  const headerBg = isDark
    ? "bg-transparent"
    : "bg-white/95 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl";

  const textMuted = isDark ? "text-white/70" : "text-gray-500";
  const textColor = isDark ? "text-white" : "text-gray-800";
  const logoText = isDark ? "text-white" : "text-gray-900";
  const logoBorder = isDark ? "border-white/60 text-white/90" : "border-navy text-navy";
  const activeColor = isDark ? "text-gold font-bold" : "text-navy font-bold";
  const activeBar = isDark ? "bg-gold" : "bg-navy";

  const menuWithSubs = menuItems.filter((m) => m.subItems);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      onMouseLeave={handleMegaLeave}
    >
      {/* 홈 투명 상태일 때 글자 가독성을 위한 상단 그라데이션 */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none" />
      )}

      {/* 상단 미니바 - 스크롤 전에만 표시 */}
      {isDark && (
        <div className="relative border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-end h-[32px]">
            <div className="flex items-center gap-4 text-[11px] text-white/50">
              <span>관심고객등록</span>
              <span className="w-px h-3 bg-white/20" />
              <span>오시는길</span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-gold/80 font-medium">1800-5636</span>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={() => { onTabChange("home"); setMegaOpen(false); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <span className={`inline-block px-3 py-1.5 border text-[10px] font-semibold tracking-[3px] transition-all duration-300 ${logoBorder} group-hover:bg-gold group-hover:border-gold group-hover:text-white`}>
            갈산역
          </span>
          <div className="flex flex-col items-start leading-none">
            <span className={`text-[18px] font-bold tracking-tight transition-colors duration-300 ${logoText}`}>
              중앙하이츠센트럴
            </span>
            <span className={`text-[9px] tracking-[2px] font-light mt-0.5 transition-colors duration-300 ${isDark ? "text-white/40" : "text-gray-400"}`}>
              JUNGANG HEIGHTS CENTRAL
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onTabChange(item.id); setMegaOpen(false); }}
              onMouseEnter={() => {
                setHoveredMenu(item.id);
                item.subItems ? handleMegaEnter() : setMegaOpen(false);
              }}
              onMouseLeave={() => setHoveredMenu(null)}
              className={`relative px-5 py-2.5 text-[14px] font-medium transition-all duration-300 group
                ${activeTab === item.id
                  ? activeColor
                  : `${textMuted} hover:${textColor}`
                }`}
            >
              {item.label}
              {/* Active 인디케이터 */}
              {activeTab === item.id && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] ${activeBar} transition-all`} />
              )}
              {/* Hover 밑줄 애니메이션 */}
              {activeTab !== item.id && (
                <span className={`absolute bottom-0 left-1/2 h-[2px] bg-gold transition-all duration-300 ${
                  hoveredMenu === item.id ? "w-5 -translate-x-1/2" : "w-0 -translate-x-1/2"
                }`} />
              )}
            </button>
          ))}
        </nav>

        {/* CTA 전화번호 */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:18005636"
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300 ${
              isDark
                ? "bg-white/10 text-white border border-white/20 hover:bg-gold hover:border-gold hover:text-white"
                : "bg-navy text-white hover:bg-gold"
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1800-5636
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-800"} ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-800"} ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] rounded-full transition-all duration-300 ${isDark ? "bg-white" : "bg-gray-800"} ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* 메가 메뉴 */}
      <div
        className={`hidden lg:block overflow-hidden transition-all duration-300 ease-in-out ${
          megaOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        onMouseEnter={handleMegaEnter}
        onMouseLeave={handleMegaLeave}
      >
        <div className="border-t border-gray-100 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-2">
            <div className="grid grid-cols-6 gap-0">
              {menuWithSubs.map((item) => (
                <div key={item.id} className="border-r border-gray-100/60 last:border-r-0">
                  {/* 카테고리 헤더 */}
                  <div className="px-5 pt-5 pb-3">
                    <button
                      onClick={() => { onTabChange(item.id); setMegaOpen(false); }}
                      className="text-[13px] font-bold text-navy tracking-wide hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {item.label}
                    </button>
                  </div>
                  {/* 서브 메뉴 */}
                  <div className="px-3 pb-5">
                    {item.subItems!.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => { onTabChange(item.id, sub.id); setMegaOpen(false); }}
                        className="group/sub flex items-center gap-2 w-full text-left px-3 py-2.5 rounded-lg text-[13px] text-gray-400 hover:text-navy hover:bg-gray-50/80 transition-all duration-200"
                      >
                        <span className="w-0 group-hover/sub:w-2 h-px bg-gold transition-all duration-200" />
                        <span>{sub.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* 하단 골드 라인 */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
        mobileOpen ? "max-h-[calc(100vh-72px)] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-white border-t border-gray-100 shadow-2xl">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            {menuItems.map((item, idx) => (
              <div key={item.id} className={`${idx > 0 ? "border-t border-gray-50" : ""}`}>
                <button
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center justify-between w-full py-4 text-[15px] font-medium transition-colors
                    ${activeTab === item.id ? "text-navy" : "text-gray-600"}`}
                >
                  <div className="flex items-center gap-2">
                    {activeTab === item.id && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                    {item.label}
                  </div>
                  {item.subItems && (
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.subItems && (
                  <div className="pl-6 pb-3 space-y-0.5">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onTabChange(item.id, sub.id);
                          setMobileOpen(false);
                        }}
                        className="flex items-center gap-2 w-full text-left py-2 text-[13px] text-gray-400 hover:text-navy transition-colors"
                      >
                        <span className="w-1 h-px bg-gray-300" />
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* 모바일 하단 CTA */}
            <div className="pt-5 mt-3 border-t border-gray-100">
              <a
                href="tel:18005636"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-navy text-white text-[14px] font-bold tracking-wider hover:bg-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화상담 1800-5636
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
