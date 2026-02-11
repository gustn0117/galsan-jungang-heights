"use client";

export default function RegisterSection() {
  return (
    <section className="pt-[72px]">
      {/* Section Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 flex items-center justify-center">
        <h2 className="text-white text-[42px] font-light tracking-[20px]">
          관심고객등록
        </h2>
        <p className="absolute bottom-8 text-white/70 text-sm text-center w-full">
          중앙하이츠 갈산역 센트럴에 관심을 가져주셔서 감사합니다.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-[700px] mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          관심고객 등록
        </h3>
        <p className="text-sm text-gray-500 text-center mb-10">
          아래 정보를 입력해 주시면 분양 관련 소식을 빠르게 안내드리겠습니다.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
              placeholder="이름을 입력해 주세요"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              연락처 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
              placeholder="연락처를 입력해 주세요 (예: 010-1234-5678)"
            />
          </div>

          {/* Interest Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              관심 평형 <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {["59㎡ (전용 59.79㎡)", "전체"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-navy/50 transition-colors"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-navy focus:ring-navy/30 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              문의사항
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy resize-none"
              placeholder="문의사항을 입력해 주세요"
            />
          </div>

          {/* Privacy Agreement */}
          <div className="bg-gray-50 rounded-lg p-5">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 text-navy focus:ring-navy/30 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">[필수]</span> 개인정보 수집 및 이용에
                동의합니다. 수집 항목: 이름, 연락처. 수집 목적: 분양 관련 정보 제공. 보유 기간:
                분양 완료 후 1년.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-navy text-white font-bold text-base rounded-lg hover:bg-navy-light transition-colors"
          >
            등록하기
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            전화 문의:{" "}
            <a href="tel:1800-5636" className="text-navy font-bold text-lg">
              1800-5636
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
