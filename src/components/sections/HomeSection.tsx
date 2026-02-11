"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function HomeSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const sec1 = useInView();
  const sec2 = useInView();
  const sec3 = useInView();
  const sec4 = useInView();
  const sec5 = useInView();
  const sec6 = useInView();

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      {/* ===== Hero Section ===== */}
      <div className="relative h-[100vh] min-h-[700px] overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.15}px)` }}
        >
          <Image
            src="/images/hero-rendering.jpg"
            alt="중앙하이츠 갈산역 센트럴 조감도"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/85 via-[#0a1628]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-[#0a1628]/30" />

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <div
              className={`max-w-[700px] transition-all duration-[1200ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-12 h-[1px] bg-gold" />
                <span className="text-gold text-[13px] tracking-[4px] font-medium uppercase">
                  Premium Residence
                </span>
              </div>

              {/* Main Quote */}
              <div className="mb-6">
                <p className="text-white/60 text-[16px] lg:text-[18px] font-light tracking-wide mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  &ldquo; 갈산역 &lsquo;0분&rsquo;의 가치, 중앙하이츠에서 누린다 &rdquo;
                </p>
                <h1 className="text-white">
                  <span className="block text-[38px] lg:text-[52px] xl:text-[60px] font-extralight leading-[1.15] tracking-tight">
                    걸어서 누리는
                  </span>
                  <span className="block text-[38px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.15] tracking-tight mt-1">
                    완성된 <span className="text-gold">프리미엄</span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                className={`text-white/60 text-[14px] lg:text-[16px] leading-[1.8] mb-10 max-w-[520px] transition-all duration-[1200ms] delay-300 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                내집앞 갈산역 초역세권, 내집앞 수변공원 초공세권
                <br />
                총 126세대 / 일반분양 50세대 / 59type 단일
              </p>

              {/* Brand Name */}
              <div
                className={`flex items-center gap-4 transition-all duration-[1200ms] delay-500 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="inline-block px-4 py-1.5 pl-[calc(1rem+3px)] border border-gold/60 text-gold text-[12px] font-medium tracking-[3px]">
                  갈산역
                </span>
                <span className="text-white text-[28px] lg:text-[32px] font-bold tracking-tight">
                  중앙하이츠센트럴
                </span>
              </div>

              {/* CTA Buttons */}
              <div
                className={`mt-12 flex flex-wrap items-center gap-4 transition-all duration-[1200ms] delay-700 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button className="group flex items-center gap-3 px-8 py-4 bg-gold/90 hover:bg-gold text-white text-[14px] font-semibold tracking-wider transition-all duration-300 hover:gap-5">
                  관심고객 사전등록
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a
                  href="tel:1800-5636"
                  className="flex items-center gap-2 px-6 py-4 border border-white/30 text-white/80 hover:border-white hover:text-white text-[14px] font-medium tracking-wider transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1800-5636
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white/40 text-[11px] tracking-[3px] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent scroll-indicator" />
        </div>

        {/* Side Info Bar */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-white/20" />
          <span className="text-white/40 text-[11px] tracking-[2px] writing-vertical">1800-5636</span>
          <div className="w-[1px] h-16 bg-white/20" />
        </div>
      </div>

      {/* ===== Key Info Strip ===== */}
      <div className="relative bg-navy text-white overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,169,110,0.3) 35px, rgba(201,169,110,0.3) 36px)`
        }} />
        <div className="relative max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "위치", value: "인천 부평구 부평대로 258", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
            { label: "총 세대수", value: "126세대 (일반 50세대)", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { label: "타입", value: "59type 단일", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { label: "분양문의", value: "1800-5636", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 px-8 py-7 border-r border-white/10 last:border-r-0 border-b lg:border-b-0 hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-[11px] tracking-wider font-medium uppercase">{item.label}</p>
                <p className="text-white text-[15px] font-semibold mt-1 group-hover:text-gold transition-colors">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== About Section - 브랜드 ===== */}
      <div ref={sec5.ref} className="relative py-28 lg:py-36 bg-[#f8f7f4] overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-navy/[0.02] rounded-full blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className={`transition-all duration-[800ms] ${sec5.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <span className="text-gold text-[13px] tracking-[4px] font-medium">ABOUT</span>
              <h2 className="text-[32px] lg:text-[44px] font-bold text-gray-900 mt-4 mb-6 leading-tight">
                삶의 중심이
                <br />
                <span className="text-navy">된다.</span>
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-[2px] bg-gold" />
                <div className="w-2 h-2 rounded-full bg-gold/40" />
              </div>
              <p className="text-gray-500 text-[15px] leading-[1.9] mb-4">
                중앙하이츠 갈산역 센트럴은 갈산역 도보 1분의 초역세권에 위치하여
                인천1호선은 물론 서울7호선 직결운행으로 서울 주요 업무지구까지 한 번에 연결됩니다.
              </p>
              <p className="text-gray-500 text-[15px] leading-[1.9] mb-10">
                갈산천수변공원을 품은 자연친화적 주거환경과 롯데마트, 부평중앙시장 등
                풍부한 생활 인프라가 걸어서 누리는 완성된 프리미엄을 선사합니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "126", unit: "세대", desc: "총 세대수" },
                  { num: "50", unit: "세대", desc: "일반분양" },
                  { num: "59", unit: "type", desc: "단일 평면" },
                  { num: "0", unit: "분", desc: "갈산역 초역세권" },
                ].map((stat, i) => (
                  <div key={i} className="py-5 border-l-2 border-gold/30 pl-5 hover:border-gold transition-colors duration-300">
                    <p className="text-navy text-[32px] font-bold leading-none">
                      {stat.num}
                      <span className="text-gold text-[14px] font-medium ml-1">{stat.unit}</span>
                    </p>
                    <p className="text-gray-400 text-[12px] mt-2 tracking-wide">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className={`relative transition-all duration-[800ms] delay-300 ${sec5.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-rendering.jpg"
                  alt="중앙하이츠 갈산역 센트럴"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-navy text-white p-7 lg:p-9 shadow-2xl max-w-[280px]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-[1px] bg-gold" />
                  <p className="text-gold text-[11px] tracking-[3px] font-semibold">LOCATION</p>
                </div>
                <p className="text-[18px] font-bold leading-snug">
                  갈산역 초역세권
                  <br />
                  수변공원 초공세권
                </p>
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-gold/15 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== 0분의 가치 - 초역세권 · 초공세권 ===== */}
      <div ref={sec1.ref} className="relative py-28 lg:py-36 bg-white overflow-hidden">
        {/* 배경 대형 텍스트 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="text-[180px] lg:text-[280px] font-black text-gray-100/50 tracking-tight leading-none">0</span>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* 섹션 타이틀 */}
          <div className={`text-center mb-20 transition-all duration-[800ms] ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-gold text-[13px] tracking-[4px] font-medium">VALUE OF ZERO</span>
            <h2 className="text-[30px] lg:text-[42px] font-bold text-gray-900 mt-4 leading-tight">
              갈산역 <span className="text-navy">「0분」</span>의 가치,
              <br />
              중앙하이츠에서 누린다
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="w-12 h-[1px] bg-gold/40" />
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="w-12 h-[1px] bg-gold/40" />
            </div>
          </div>

          {/* 초역세권 / 초공세권 양쪽 카드 */}
          <div className={`grid md:grid-cols-2 gap-0 mb-20 transition-all duration-[800ms] delay-200 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* 초역세권 */}
            <div className="group relative bg-navy p-10 lg:p-14 overflow-hidden">
              {/* 배경 장식 원 */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/[0.03] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/[0.03] rounded-full" />
              {/* 대형 배경 숫자 */}
              <span className="absolute top-6 right-8 text-[120px] font-black text-white/[0.03] leading-none">0</span>
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[11px] tracking-[3px] font-semibold rounded-sm">STATION</span>
                <p className="text-white/50 text-[14px] mt-5 mb-1">내집앞 갈산역</p>
                <h3 className="text-white text-[36px] lg:text-[42px] font-bold leading-tight">
                  초역세권
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-gold/0 mt-6 mb-7" />
                <p className="text-white/55 text-[14px] leading-[2]">
                  단지 바로 앞에서 이용가능한 지하철,
                  <br />
                  인천1호선 갈산역 도보 1분!
                  <br />
                  서울7호선 직결운행으로 서울 주요 업무지구까지 한 번에
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gold/60 text-gold text-[24px] font-bold group-hover:bg-gold/10 transition-all duration-500">
                    0
                  </span>
                  <div>
                    <span className="text-white/70 text-[15px] font-semibold">분</span>
                    <p className="text-white/35 text-[12px] mt-0.5">거리의 역세권</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 초공세권 */}
            <div className="group relative bg-[#eef3ee] p-10 lg:p-14 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-600/[0.04] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-600/[0.04] rounded-full" />
              <span className="absolute top-6 right-8 text-[120px] font-black text-green-800/[0.04] leading-none">1</span>
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-green-700/10 text-green-700 text-[11px] tracking-[3px] font-semibold rounded-sm">NATURE</span>
                <p className="text-gray-500 text-[14px] mt-5 mb-1">내집앞 수변공원</p>
                <h3 className="text-gray-900 text-[36px] lg:text-[42px] font-bold leading-tight">
                  초공세권
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-green-600 to-green-600/0 mt-6 mb-7" />
                <p className="text-gray-500 text-[14px] leading-[2]">
                  걸어서 누리는 수변공원과 생태하천을 통한
                  <br />
                  쾌적한 자연환경,
                  <br />
                  단지에서 나오면 바로 펼쳐지는 갈산천수변공원
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-green-600/60 text-green-700 text-[24px] font-bold group-hover:bg-green-600/10 transition-all duration-500">
                    1
                  </span>
                  <div>
                    <span className="text-gray-700 text-[15px] font-semibold">분</span>
                    <p className="text-gray-400 text-[12px] mt-0.5">거리의 공세권</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className={`text-center max-w-[700px] mx-auto transition-all duration-[800ms] delay-400 ${sec1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-gray-400 text-[15px] leading-[2.2] tracking-wide">
              단지 바로 앞에서 이용가능한 지하철,
              <br />
              걸어서 누리는 수변공원과 생태하천을 통한 쾌적한 자연환경,
              <br />
              앞마당에 펼쳐진 중심상업지구를 통한 완벽한 생활인프라
            </p>
          </div>
        </div>
      </div>

      {/* ===== PREMIUM 4 Highlights ===== */}
      <div ref={sec2.ref} className="bg-[#0c1a2e] py-28 lg:py-36 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`text-center mb-20 transition-all duration-[800ms] ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-gold text-[12px] tracking-[5px] font-medium">PREMIUM 4</span>
            <h2 className="text-[30px] lg:text-[40px] font-bold text-white mt-5 leading-tight">
              걸어서 누리는 완성된 프리미엄
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="w-12 h-[1px] bg-gold/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="w-12 h-[1px] bg-gold/30" />
            </div>
          </div>

          {/* 4개 카드 그리드 */}
          <div className={`grid md:grid-cols-2 gap-4 transition-all duration-[800ms] delay-200 ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              {
                num: "01",
                badge: "도보 0분",
                tag: "TRANSPORTATION",
                title: "교통중심",
                desc: "갈산역 도보 1분! 인천1호선 운행 시 7호선 직결운행으로 서울 4대 중심 업무지구까지 한 번에",
                image: "/images/premium-transport.jpg",
                pixel: "680 x 340",
              },
              {
                num: "02",
                badge: "도보 1분",
                tag: "NATURE",
                title: "자연중심",
                desc: "갈산천수변공원까지 1분! 단지에서 나오면 바로 수변공원이 펼쳐지는 자연친화적 주거환경",
                image: "/images/premium-nature.jpg",
                pixel: "680 x 340",
              },
              {
                num: "03",
                badge: "도보 2분",
                tag: "LIVING",
                title: "생활중심",
                desc: "롯데마트, 부평문화의거리, 부평역지하상가, 부평중앙시장 등 풍부한 생활 인프라",
                image: "/images/premium-living.jpg",
                pixel: "680 x 340",
              },
              {
                num: "04",
                badge: "도보 10분",
                tag: "EDUCATION",
                title: "교육중심",
                desc: "갈산초, 부평동중, 부평여고 등 우수한 교육 환경과 학원가가 가까이",
                image: "/images/premium-edu.jpg",
                pixel: "680 x 340",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative h-[340px] overflow-hidden cursor-default ${sec2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: sec2.visible ? `${200 + i * 100}ms` : "0ms", transitionDuration: "800ms" }}
              >
                <div className="absolute inset-0 bg-[#0f2238]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  {/* 이미지 미설정 안내 */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-50">
                    <div className="w-12 h-12 rounded-xl border-2 border-dashed border-white/15 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
                      <p className="text-white/60 text-[11px] font-mono">{item.image}</p>
                      <p className="text-white/35 text-[10px] font-mono text-center">{item.pixel} px</p>
                    </div>
                  </div>
                </div>
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                {/* 넘버링 */}
                <span className="absolute top-5 right-7 text-[80px] font-black text-white/[0.04] leading-none select-none">{item.num}</span>
                {/* 컨텐츠 */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-gold/70 text-[10px] tracking-[4px] font-medium">{item.tag}</span>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-gold/90 text-white text-[10px] font-bold tracking-[1px] rounded-sm mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-white text-[26px] lg:text-[30px] font-bold mb-2">{item.title}</h3>
                    <p className="text-white/55 text-[13px] leading-[1.8] max-w-[400px]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 교통 인프라 ===== */}
      <div ref={sec3.ref} className="relative bg-[#0f1a2e] overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* 상단: 타이틀 + 대형 노선도 이미지 */}
        <div className="relative pt-28 lg:pt-36 pb-16">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className={`text-center mb-16 transition-all duration-[800ms] ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <span className="text-gold/80 text-[11px] tracking-[6px] font-light uppercase">Transportation</span>
              <h2 className="text-[28px] lg:text-[38px] font-light text-white mt-5 tracking-tight">
                더 넓은 세상을 잇는 <span className="font-bold">교통인프라</span>
              </h2>
              <p className="text-white/30 text-[14px] mt-4">인천1호선 · 서울7호선 · GTX-B 트리플 노선 수혜</p>
              <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
            </div>

            {/* 대형 노선도/교통 이미지 */}
            <div className={`relative h-[400px] lg:h-[480px] overflow-hidden transition-all duration-[1000ms] delay-200 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Image
                src="/images/transport-map.jpg"
                alt="교통 노선도"
                fill
                className="object-cover"
                sizes="100vw"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              {/* 이미지 미설정 플레이스홀더 */}
              <div className="absolute inset-0 bg-[#0a1220] flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                  <p className="text-white/50 text-[11px] font-mono">/images/transport-map.jpg</p>
                  <p className="text-white/30 text-[10px] font-mono text-center">1200 x 480 px</p>
                </div>
              </div>
              {/* 이미지 위 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e] via-transparent to-[#0f1a2e]/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a2e]/60 via-transparent to-[#0f1a2e]/60" />
              {/* 이미지 위 핵심 카피 */}
              <div className="absolute bottom-8 left-8 lg:left-12">
                <p className="text-gold text-[11px] tracking-[3px] font-medium mb-2">TRIPLE LINE BENEFIT</p>
                <p className="text-white text-[22px] lg:text-[28px] font-bold leading-snug">
                  갈산역 도보 1분,<br />서울까지 한 번에
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단: 3개 역 카드 + Quick Access */}
        <div className="relative pb-28 lg:pb-36">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            {/* 3개 역 카드 - 이미지 포함 */}
            <div className="grid md:grid-cols-3 gap-5 -mt-2">
              {[
                {
                  num: "01",
                  station: "갈산역",
                  line: "인천1호선",
                  lineColor: "bg-blue-500",
                  title: "갈산역 도보 1분",
                  desc: "사당역까지 바로 갈산역 이용",
                  image: "/images/transport-01.jpg",
                },
                {
                  num: "02",
                  station: "부평구청역",
                  line: "서울7호선",
                  lineColor: "bg-green-500",
                  title: "서울7호선 환승",
                  desc: "1정거장, 약 도보 5분이면 서울7호선 부평구청역 이용",
                  image: "/images/transport-02.jpg",
                },
                {
                  num: "03",
                  station: "부평역",
                  line: "GTX-B",
                  lineColor: "bg-gold",
                  title: "GTX-B 노선 수혜",
                  desc: "3정거장이면 서해라인 GTX-B(시행예정) 부평역 이용",
                  image: "/images/transport-03.jpg",
                },
              ].map((item, i) => (
                <div
                  key={item.num}
                  className={`group relative bg-white/[0.03] border border-white/[0.06] hover:border-gold/20 overflow-hidden transition-all duration-700 hover:bg-white/[0.05] ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: sec3.visible ? `${400 + i * 150}ms` : "0ms" }}
                >
                  {/* 카드 상단 이미지 */}
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.station}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    {/* 이미지 미설정 플레이스홀더 */}
                    <div className="absolute inset-0 bg-[#0a1220] flex flex-col items-center justify-center gap-1.5">
                      <div className="w-10 h-10 rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="bg-white/5 rounded px-2 py-1 border border-white/5">
                        <p className="text-white/40 text-[9px] font-mono">{item.image}</p>
                        <p className="text-white/25 text-[8px] font-mono text-center">400 x 180 px</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e] via-transparent to-transparent" />
                    {/* 넘버링 */}
                    <span className="absolute top-4 right-5 text-[56px] font-black text-white/[0.06] leading-none select-none">{item.num}</span>
                    {/* 노선 태그 */}
                    <div className="absolute bottom-4 left-5 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.lineColor} shadow-lg`} />
                      <span className="text-white/70 text-[11px] tracking-[1px] font-semibold">{item.line}</span>
                    </div>
                  </div>

                  {/* 카드 하단 텍스트 */}
                  <div className="p-7">
                    <h3 className="text-white text-[22px] font-bold mb-1.5 tracking-tight group-hover:text-gold transition-colors duration-500">{item.station}</h3>
                    <p className="text-gold/60 text-[12px] font-medium mb-3 tracking-wide">{item.title}</p>
                    <p className="text-white/30 text-[13px] leading-relaxed">{item.desc}</p>
                    <div className="mt-5 w-8 h-[1px] bg-gold/20 group-hover:w-14 group-hover:bg-gold/50 transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>

            {/* 구분선 */}
            <div className="my-12 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            {/* Quick Access Points */}
            <div className={`flex items-center justify-center gap-0 transition-all duration-[800ms] delay-700 ${sec3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              {[
                { label: "경인고속도로", value: "IC 부평" },
                { label: "수도권제1순환", value: "중동IC" },
                { label: "인천1호선", value: "갈산역" },
                { label: "서울7호선", value: "부평구청역" },
              ].map((item, i) => (
                <div key={i} className="group flex-1 text-center py-5 relative">
                  {i > 0 && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-white/[0.06]" />}
                  <p className="text-white/25 text-[10px] tracking-[2px] uppercase font-light">{item.label}</p>
                  <p className="text-white/80 text-[15px] font-semibold mt-1.5 group-hover:text-gold transition-colors duration-500">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      {/* ===== 생활 인프라 ===== */}
      <div ref={sec4.ref} className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className={`text-center mb-16 transition-all duration-[800ms] ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-gold text-[13px] tracking-[4px] font-medium">LIVING INFRA</span>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-gray-900 mt-4">
              앞마당에 펼쳐진 완벽한 생활인프라
            </h2>
            <p className="text-gray-400 text-[14px] mt-3">
              중심상업지구를 통한 풍부한 생활편의시설
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "쇼핑",
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                color: "bg-gold",
                lightBg: "bg-[#fdf8f0]",
                items: ["롯데마트 부평점", "부평역지하상가", "부평중앙시장", "부평문화의거리"],
              },
              {
                category: "교육",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                color: "bg-navy",
                lightBg: "bg-[#f0f2f7]",
                items: ["갈산초등학교", "부평동중학교", "부평여자고등학교", "인천부평고등학교"],
              },
              {
                category: "편의/의료",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5",
                color: "bg-green-600",
                lightBg: "bg-[#f0f5f0]",
                items: ["부평구청", "부평경찰서", "인천의료원", "부평세림병원"],
              },
            ].map((group, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl ${group.lightBg} hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${sec4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: sec4.visible ? `${200 + i * 150}ms` : "0ms" }}
              >
                <div className={`h-1 ${group.color}`} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl ${group.color} flex items-center justify-center`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={group.icon} />
                      </svg>
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-900">{group.category}</h3>
                  </div>
                  <ul className="space-y-3.5">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-[14px] text-gray-600 group-hover:text-gray-700 transition-colors">
                        <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div ref={sec6.ref} className="relative py-24 lg:py-32 bg-gradient-to-br from-[#1a2744] via-[#1e3050] to-[#2a4470] overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-rendering.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,110,0.5) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className={`relative max-w-[800px] mx-auto px-6 text-center transition-all duration-[800ms] ${sec6.visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-gold/50" />
            <p className="text-gold text-[13px] tracking-[4px] font-medium">CONTACT</p>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-white text-[34px] lg:text-[46px] font-bold mb-4">분양문의</h2>
          <p className="text-white/50 text-[15px] mb-10 leading-relaxed">
            중앙하이츠 갈산역 센트럴에 대한
            <br className="sm:hidden" /> 자세한 상담을 받아보세요.
          </p>
          <a
            href="tel:1800-5636"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-gold hover:bg-gold-light text-white text-[22px] font-bold tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 hover:scale-[1.02]"
          >
            <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1800-5636
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-white/30 text-[13px]">
            <span>시행 | 배조아파트소규모재건축사업조합</span>
            <span>시공/분양 | 중앙건설산업(주)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
