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
                더블시티
                <br />
                프리미엄 라이프!
              </h1>
              <p className="text-[16px] lg:text-[18px] leading-relaxed opacity-90 mb-8">
                더 가까워진 KTX광명역세권 생활, 더 빨라진 쾌속교통,
                <br />
                더 높아진 개발비전으로 초프리미엄을 누린다.
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 border border-white/60 text-sm tracking-wider">
                  만안역
                </span>
                <span className="text-[28px] font-bold tracking-tight">
                  중앙하이츠 포레
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
          label="항공뷰 / 주변환경 (석수도서관, 충훈공원 등)"
        />

        {/* Location Labels Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="max-w-[1400px] mx-auto px-6 h-full relative">
            {/* Example label positions - these will be adjusted with real images */}
            {[
              { name: "충훈고교", top: "15%", left: "8%" },
              { name: "안양중교", top: "35%", left: "3%" },
              { name: "석수도서관", top: "40%", left: "25%" },
              { name: "화장초교", top: "38%", left: "38%" },
              { name: "충훈공원", top: "48%", left: "18%" },
              { name: "서해고속", top: "22%", left: "35%" },
              { name: "석수체육공원", top: "18%", left: "72%" },
              { name: "석수IC", top: "18%", left: "85%" },
              { name: "석수시장", top: "72%", left: "55%" },
              { name: "석수2동행정복지센터", top: "68%", left: "72%" },
              { name: "다목적체육관", top: "78%", left: "78%" },
            ].map((loc, i) => (
              <div
                key={i}
                className="absolute bg-blue-600/90 text-white text-xs px-2.5 py-1 rounded-sm font-medium shadow-md"
                style={{ top: loc.top, left: loc.left }}
              >
                {loc.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
