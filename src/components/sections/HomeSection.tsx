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
                  &ldquo; 갈산역 &lsquo;0분&rsquo;의 가치, 중앙하이츠에서 누리다 &rdquo;
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
                className={`transition-all duration-[1200ms] delay-500 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <Image
                  src="/images/logo-bi.png"
                  alt="중앙하이츠 갈산역 센트럴"
                  width={360}
                  height={80}
                  className="h-[48px] lg:h-[56px] w-auto"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
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
            { label: "위치", value: "인천 부평구 부평대로 258" },
            { label: "총 세대수", value: "126세대 (일반 50세대)" },
            { label: "타입", value: "59type 단일" },
            { label: "분양문의", value: "1800-5636" },
          ].map((item, i) => (
            <div
              key={i}
              className="group px-8 py-7 border-r border-b lg:border-b-0 border-white/[0.06] last:border-r-0 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
            >
              <p className="text-gold/50 text-[10px] tracking-[3px] font-medium uppercase">{item.label}</p>
              <p className="text-white text-[15px] font-semibold mt-2.5 group-hover:text-gold transition-colors duration-300">{item.value}</p>
              <div className="w-4 h-px bg-gold/20 mt-3 group-hover:w-8 transition-all duration-300" />
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
              <h2 className="text-[32px] lg:text-[44px] font-bold text-gray-900 mt-4 mb-6 leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                삶의 중심이 <span className="text-navy">되다.</span>
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
            <h2 className="text-[30px] lg:text-[42px] font-bold text-gray-900 mt-4 leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              갈산역 <span className="text-navy">「0분」</span>의 가치,
              <br />
              중앙하이츠에서 누리다
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
                <h3 className="text-white text-[36px] lg:text-[42px] font-bold leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
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
                <h3 className="text-gray-900 text-[36px] lg:text-[42px] font-bold leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
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
            <h2 className="text-[30px] lg:text-[40px] font-bold text-white mt-5 leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
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
              },
              {
                num: "02",
                badge: "도보 1분",
                tag: "NATURE",
                title: "자연중심",
                desc: "갈산천수변공원까지 1분! 단지에서 나오면 바로 수변공원이 펼쳐지는 자연친화적 주거환경",
                image: "/images/premium-nature.jpg",
              },
              {
                num: "03",
                badge: "도보 2분",
                tag: "LIVING",
                title: "생활중심",
                desc: "롯데마트, 부평문화의거리, 부평역지하상가, 부평중앙시장 등 풍부한 생활 인프라",
                image: "/images/premium-life.jpg",
              },
              {
                num: "04",
                badge: "도보 10분",
                tag: "EDUCATION",
                title: "교육중심",
                desc: "갈산초, 부평동중, 부평여고 등 우수한 교육 환경과 학원가가 가까이",
                image: "/images/premium-edu.jpg",
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
                  />
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
          <h2 className="text-white text-[34px] lg:text-[46px] font-bold mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>분양문의</h2>
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
