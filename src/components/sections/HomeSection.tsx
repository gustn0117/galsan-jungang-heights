"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomeSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
                  &ldquo; 갈산역 &lsquo;0분&rsquo;의 가치 &rdquo;
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
                <span className="inline-block px-4 py-1.5 border border-gold/60 text-gold text-[12px] font-medium tracking-[3px]">
                  중앙하이츠
                </span>
                <span className="text-white text-[28px] lg:text-[32px] font-bold tracking-tight">
                  갈산역 센트럴
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
      <div className="relative bg-navy text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { label: "위치", value: "인천 부평구 부평대로 258", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
            { label: "총 세대수", value: "126세대 (일반 50세대)", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { label: "타입", value: "59type 단일", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { label: "분양문의", value: "1800-5636", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 py-6 border-r border-white/10 last:border-r-0 border-b lg:border-b-0 hover:bg-white/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-[11px] tracking-wider font-medium">{item.label}</p>
                <p className="text-white text-[15px] font-semibold mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== About Section ===== */}
      <div className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1a2744 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div>
              <span className="text-gold text-[13px] tracking-[4px] font-medium">ABOUT</span>
              <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 mt-4 mb-6 leading-tight">
                삶의 중심이
                <br />
                <span className="text-navy">된다.</span>
              </h2>
              <div className="w-16 h-[2px] bg-gold mb-8" />
              <p className="text-gray-500 text-[15px] leading-[1.9] mb-4">
                중앙하이츠 갈산역 센트럴은 갈산역 도보 1분의 초역세권에 위치하여
                인천1호선은 물론 서울7호선 직결운행으로 서울 주요 업무지구까지 한 번에 연결됩니다.
              </p>
              <p className="text-gray-500 text-[15px] leading-[1.9] mb-8">
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
                  <div key={i} className="py-4 border-l-2 border-gold/30 pl-5">
                    <p className="text-navy text-[28px] font-bold">
                      {stat.num}
                      <span className="text-gold text-[14px] font-medium ml-1">{stat.unit}</span>
                    </p>
                    <p className="text-gray-400 text-[12px] mt-1">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero-rendering.jpg"
                  alt="중앙하이츠 갈산역 센트럴"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-navy text-white p-6 lg:p-8 shadow-2xl max-w-[280px]">
                <p className="text-gold text-[12px] tracking-[3px] font-medium mb-2">LOCATION</p>
                <p className="text-[18px] font-bold leading-snug">
                  갈산역 초역세권
                  <br />
                  수변공원 초공세권
                </p>
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/20 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== PREMIUM 4 Highlights ===== */}
      <div className="bg-[#f8f7f4] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-[13px] tracking-[4px] font-medium">PREMIUM 4</span>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-gray-900 mt-4">
              걸어서 누리는 완성된 프리미엄
            </h2>
            <p className="text-gray-400 text-[14px] mt-3">
              중앙하이츠 갈산역 센트럴, 삶의 중심이 된다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
                badge: "0분",
                badgeColor: "bg-blue-500",
                title: "교통중심",
                desc: "갈산역 도보 1분! 인천1호선 운행 시 7호선 직결운행으로 서울 4대 중심 업무지구까지 한 번에"
              },
              {
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                badge: "1분",
                badgeColor: "bg-green-500",
                title: "자연중심",
                desc: "갈산천수변공원까지 1분! 단지에서 나오면 바로 수변공원이 펼쳐지는 자연친화적 주거환경"
              },
              {
                icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                badge: "2분",
                badgeColor: "bg-orange-500",
                title: "생활중심",
                desc: "롯데마트, 부평문화의거리, 부평역지하상가, 부평중앙시장 등 풍부한 생활 인프라"
              },
              {
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                badge: "10분",
                badgeColor: "bg-purple-500",
                title: "교육중심",
                desc: "고려대교육관, 인천대공학관 등 우수한 교육 환경이 가까이"
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gold/20 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <span className={`${feature.badgeColor} text-white text-[12px] font-bold px-3 py-1 rounded-full`}>
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.8]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Transportation Highlights ===== */}
      <div className="bg-navy py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="text-gold text-[13px] tracking-[4px] font-medium">TRANSPORTATION</span>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-white mt-4">
              더 넓은 세상을 잇는 교통인프라
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "갈산역 이용",
                desc: "사당역까지 바로 갈산역 이용",
                sub: "인천1호선 갈산역 도보 1분"
              },
              {
                num: "02",
                title: "부평구청역 이용",
                desc: "1정거장, 약 도보 5분이면 서울7호선 부평구청역 이용",
                sub: "서울7호선 환승"
              },
              {
                num: "03",
                title: "부평역 이용",
                desc: "3정거장이면 서해라인 GTX-B(시행예정) 부평역 이용",
                sub: "GTX-B 노선 수혜"
              },
            ].map((item) => (
              <div key={item.num} className="relative p-8 border border-white/10 hover:border-gold/30 transition-all duration-300 group">
                <span className="text-gold/30 text-[48px] font-bold absolute top-4 right-6 group-hover:text-gold/50 transition-colors">{item.num}</span>
                <h3 className="text-white text-[18px] font-bold mb-3 mt-2">{item.title}</h3>
                <p className="text-white/70 text-[14px] leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-block px-3 py-1 bg-white/5 text-gold text-[12px] rounded-full">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Access Points */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "경인고속도로", value: "IC 부평" },
              { label: "수도권제1순환", value: "중동IC" },
              { label: "인천1호선", value: "갈산역" },
              { label: "서울7호선", value: "부평구청역" },
            ].map((item, i) => (
              <div key={i} className="text-center py-5 bg-white/5 rounded-lg">
                <p className="text-white/40 text-[11px] tracking-wider">{item.label}</p>
                <p className="text-white text-[15px] font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="relative py-20 lg:py-24 bg-gradient-to-r from-[#1a2744] to-[#2a4470] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-rendering.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <p className="text-gold text-[14px] tracking-[3px] mb-4">CONTACT</p>
          <h2 className="text-white text-[32px] lg:text-[42px] font-bold mb-4">분양문의</h2>
          <p className="text-white/60 text-[15px] mb-8">
            중앙하이츠 갈산역 센트럴에 대한 자세한 상담을 받아보세요.
          </p>
          <a
            href="tel:1800-5636"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-white text-[20px] font-bold tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            1800-5636
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/40 text-[13px]">
            <span>시행 | 배조아파트소규모재건축사업조합</span>
            <span>시공/분양 | 중앙건설산업(주)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
