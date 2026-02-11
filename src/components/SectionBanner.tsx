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
      <div className="relative z-10 text-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          {title}
        </h2>
      </div>
      <p className="absolute bottom-8 text-white/70 text-sm text-center w-full z-10">
        {subtitle}
      </p>

      {/* 배경 이미지 없을 때 파일 안내 */}
      {!bgImage && (
        <div className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
          <p className="text-white/60 text-[10px] font-mono">배경 이미지 미설정</p>
        </div>
      )}
    </div>
  );
}
