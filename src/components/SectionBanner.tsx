"use client";

import Image from "next/image";

interface SectionBannerProps {
  title: string;
  subtitle: string;
  bgImage?: string;        // /images/banner-xxx.jpg
  fallbackGradient: string; // tailwind gradient class
}

export default function SectionBanner({
  title,
  subtitle,
  bgImage,
  fallbackGradient,
}: SectionBannerProps) {
  return (
    <div className={`relative h-[300px] overflow-hidden flex items-center justify-center ${!bgImage ? fallbackGradient : "bg-gray-900"}`}>
      {bgImage && (
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
      )}
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
      {/* 하단 그라데이션 - 탭바와의 분리감 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0c1320]/90 to-transparent z-[1]" />
      <div className="relative z-10 text-center">
        <h2 className="banner-title-animate text-white text-[42px] font-light tracking-[20px]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          {title}
        </h2>
      </div>
      <p className="banner-sub-animate absolute bottom-8 text-white/60 text-[13px] text-center w-full z-10 tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>
        {subtitle}
      </p>

    </div>
  );
}
