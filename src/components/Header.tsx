"use client";

import { useState } from "react";

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
      { id: "premium7", label: "프리미엄 7" },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={() => onTabChange("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="inline-block px-2 py-0.5 border border-gray-800 text-[11px] font-medium tracking-wider text-gray-800 group-hover:bg-gray-800 group-hover:text-white transition-colors">
            만안역
          </span>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            중앙하이츠 포레
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.id)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                onClick={() => onTabChange(item.id)}
                className={`px-4 py-2 text-[15px] font-medium transition-colors relative
                  ${activeTab === item.id
                    ? "text-navy font-bold"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-navy" />
                )}
              </button>

              {/* Dropdown */}
              {item.subItems && hoveredMenu === item.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[160px]">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onTabChange(item.id, sub.id);
                          setHoveredMenu(null);
                        }}
                        className="block w-full text-left px-5 py-2.5 text-sm text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors"
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
        <div className="hidden lg:flex items-center gap-2 text-gray-800">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-lg font-bold tracking-wider">1688-0458</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-gray-50 last:border-0">
                <button
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileOpen(false);
                  }}
                  className={`block w-full text-left py-3 text-[15px] font-medium
                    ${activeTab === item.id ? "text-navy" : "text-gray-600"}`}
                >
                  {item.label}
                </button>
                {item.subItems && (
                  <div className="pl-4 pb-2">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onTabChange(item.id, sub.id);
                          setMobileOpen(false);
                        }}
                        className="block w-full text-left py-2 text-sm text-gray-500 hover:text-navy"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex items-center gap-2 text-gray-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg font-bold tracking-wider">1688-0458</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
