"use client";

import Image from "next/image";

interface FooterProps {
  onTabChange?: (tabId: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const handleNav = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#111318] text-gray-400">
      {/* Gold accent line */}
      <div className="h-px gold-line-shimmer" />

      {/* Top CTA Bar */}
      <div className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white text-[20px] font-bold">관심고객 사전등록</p>
            <p className="text-white/50 text-[14px] mt-1">빠른 상담을 위해 지금 바로 등록하세요</p>
          </div>
          <button
            onClick={() => handleNav("register")}
            className="group flex items-center gap-3 px-8 py-3.5 border border-gold text-gold hover:bg-gold hover:text-white text-[14px] font-medium tracking-wider transition-all duration-300"
          >
            등록하기
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-[360px]">
            <div className="mb-5">
              <Image
                src="/images/logo-bi.png"
                alt="중앙하이츠 갈산역 센트럴"
                width={180}
                height={40}
                className="h-[32px] w-auto brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-[13px] leading-[1.8] text-gray-500">
              갈산역 &lsquo;0분&rsquo;의 가치,
              <br />
              걸어서 누리는 완성된 프리미엄
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-[18px] font-bold text-white tracking-wider">1800-5636</span>
            </div>
            <div className="mt-6 space-y-1.5 text-[12px] text-gray-600">
              <p><span className="text-gray-500">시행</span> 배조아파트소규모재건축사업조합</p>
              <p><span className="text-gray-500">시공/분양</span> 중앙건설산업(주)</p>
              <p><span className="text-gray-500">시행</span> CA이엔씨(주)</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-[13px] font-semibold text-gold tracking-wider mb-5">바로가기</h4>
              <ul className="space-y-3">
                {[
                  { id: "business", label: "사업안내" },
                  { id: "premium", label: "프리미엄" },
                  { id: "complex", label: "단지안내" },
                  { id: "unit", label: "세대안내" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className="text-[13px] text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-gold tracking-wider mb-5">고객센터</h4>
              <ul className="space-y-3">
                {[
                  { id: "sales", label: "분양안내" },
                  { id: "pr", label: "홍보센터" },
                  { id: "register", label: "관심고객등록" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className="text-[13px] text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-600">
            &copy; 2025 중앙하이츠 갈산역 센트럴. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-700 max-w-[600px] text-center md:text-right leading-relaxed">
            본 제작물에 사용된 이미지 및 내용, 문구 등은 소비자의 이해를 돕기 위해 제작 또는 표기된 것으로
            실제와 차이가 있으며, 본 제작물상의 설계 내용은 향후 인허가 과정에서 변동될 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
