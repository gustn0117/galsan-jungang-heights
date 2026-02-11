"use client";

import ImagePlaceholder from "../ImagePlaceholder";

export default function HomeSection() {
  return (
    <section className="relative">
      {/* Hero Area */}
      <div className="relative h-[100vh] min-h-[700px] overflow-hidden">
        <ImagePlaceholder
          number={1}
          gradient="gradient-hero"
          height="h-full"
          label="메인 히어로 배경 (아파트 조감도)"
        />

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <div className="max-w-[600px] ml-auto mr-[5%] text-white">
              <h1 className="text-[48px] lg:text-[56px] font-bold leading-tight mb-6">
                프리미엄
                <br />
                주거의 기준
              </h1>
              <p className="text-[16px] lg:text-[18px] leading-relaxed opacity-90 mb-8">
                갈산역 중앙하이츠가 선사하는
                <br />
                새로운 라이프스타일을 경험하세요.
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 border border-white/60 text-sm tracking-wider">
                  갈산역
                </span>
                <span className="text-[28px] font-bold tracking-tight">
                  중앙하이츠
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom right mini map placeholder */}
        <div className="absolute bottom-8 right-8 w-[200px] h-[200px] bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden hidden lg:block">
          <ImagePlaceholder
            number={2}
            gradient="bg-gradient-to-br from-gray-700/50 to-gray-900/50"
            height="h-full"
            label="노선도 미니맵"
          />
        </div>
      </div>

      {/* Location Overview (Aerial View) */}
      <div className="relative h-[80vh] min-h-[600px]">
        <ImagePlaceholder
          number={3}
          gradient="gradient-aerial"
          height="h-full"
          label="항공뷰 / 주변환경"
        />

        {/* Location Labels Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-white/80 text-lg font-medium tracking-wide">
              주변 환경 정보 업데이트 예정
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
