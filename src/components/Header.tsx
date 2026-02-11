"use client";

import { useState, useEffect } from "react";

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
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);

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

  const headerBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-white/97 shadow-sm backdrop-blur-md";

  const textColor = isHome && !scrolled ? "text-white" : "text-gray-800";
  const textMuted = isHome && !scrolled ? "text-white/70" : "text-gray-500";
  const logoText = isHome && !scrolled ? "text-white" : "text-gray-900";
  const logoBorder = isHome && !scrolled ? "border-white/60 text-white/90" : "border-navy text-navy";
  const activeColor = isHome && !scrolled ? "text-gold font-bold" : "text-navy font-bold";
  const activeBar = isHome && !scrolled ? "bg-gold" : "bg-navy";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <button
          onClick={() => onTabChange("home")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <span className={`inline-block px-2.5 py-1 border text-[11px] font-medium tracking-[2px] transition-all duration-300 ${logoBorder} group-hover:bg-gold group-hover:border-gold group-hover:text-white`}>
            중앙하이츠
          </span>
          <span className={`text-[20px] font-bold tracking-tight transition-colors duration-300 ${logoText}`}>
            갈산역 센트럴
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.id)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                onClick={() => onTabChange(item.id)}
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

              {/* Dropdown */}
              {item.subItems && hoveredMenu === item.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-white rounded-lg shadow-2xl border border-gray-100/80 py-2.5 min-w-[180px] backdrop-blur-xl">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100/80 rotate-45" />
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onTabChange(item.id, sub.id);
                          setHoveredMenu(null);
                        }}
                        className="block w-full text-left px-5 py-2.5 text-[13px] text-gray-500 hover:text-navy hover:bg-gray-50/80 transition-all duration-200 hover:pl-6"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone Number */}
        <div className={`hidden lg:flex items-center gap-2.5 transition-colors duration-300 ${textColor}`}>
          <div className="w-8 h-8 rounded-full border border-current/20 flex items-center justify-center">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-[16px] font-bold tracking-wider">1800-5636</span>
        </div>

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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-2xl">
          <div className="max-w-[1400px] mx-auto px-6 py-6">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-gray-50 last:border-0">
                <button
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileOpen(false);
                  }}
                  className={`block w-full text-left py-3.5 text-[15px] font-medium transition-colors
                    ${activeTab === item.id ? "text-navy" : "text-gray-600"}`}
                >
                  {item.label}
                </button>
                {item.subItems && (
                  <div className="pl-4 pb-3">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onTabChange(item.id, sub.id);
                          setMobileOpen(false);
                        }}
                        className="block w-full text-left py-2 text-[13px] text-gray-400 hover:text-navy transition-colors"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 mt-2 border-t border-gray-100 flex items-center gap-2.5 text-gray-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg font-bold tracking-wider">1800-5636</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
