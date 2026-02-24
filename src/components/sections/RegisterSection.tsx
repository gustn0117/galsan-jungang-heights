"use client";

import { useState } from "react";
import SectionBanner from "../SectionBanner";

export default function RegisterSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interestTypes, setInterestTypes] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"success" | "error" | null>(null);

  const handleCheckbox = (type: string, checked: boolean) => {
    setInterestTypes((prev) =>
      checked ? [...prev, type] : prev.filter((t) => t !== type),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || interestTypes.length === 0) {
      alert("필수 항목을 모두 입력해 주세요.");
      return;
    }
    if (!privacyConsent) {
      alert("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          interest_type: interestTypes.join(", "),
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setSubmitResult("success");
        setName("");
        setPhone("");
        setInterestTypes([]);
        setMessage("");
        setPrivacyConsent(false);
      } else {
        const data = await res.json();
        alert(data.error || "등록에 실패했습니다.");
        setSubmitResult("error");
      }
    } catch {
      alert("서버 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="관심고객등록"
        subtitle="중앙하이츠 갈산역 센트럴에 관심을 가져주셔서 감사합니다."
        bgImage="/images/banner.jpg"
        fallbackGradient="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700"
      />

      {/* Form */}
      <div data-animate className="max-w-[700px] mx-auto px-6 py-16">
        {submitResult === "success" ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">등록이 완료되었습니다</h3>
            <p className="text-gray-500 mb-8">빠른 시일 내에 연락드리겠습니다.<br />감사합니다.</p>
            <button
              onClick={() => setSubmitResult(null)}
              className="px-8 py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors text-sm font-medium"
            >
              추가 등록하기
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              관심고객 등록
            </h3>
            <p className="text-sm text-gray-500 text-center mb-10">
              아래 정보를 입력해 주시면 분양 관련 소식을 빠르게 안내드리겠습니다.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  placeholder="이름을 입력해 주세요"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  placeholder="연락처를 입력해 주세요 (예: 010-1234-5678)"
                  required
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
                      className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg cursor-pointer transition-colors ${
                        interestTypes.includes(type)
                          ? "border-navy bg-navy/5"
                          : "border-gray-200 hover:border-navy/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={interestTypes.includes(type)}
                        onChange={(e) => handleCheckbox(type, e.target.checked)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy resize-none"
                  placeholder="문의사항을 입력해 주세요"
                />
              </div>

              {/* Privacy Agreement */}
              <div className="bg-gray-50 rounded-lg p-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
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
                disabled={isSubmitting}
                className="w-full py-4 bg-navy text-white font-bold text-base rounded-lg hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "등록 중..." : "등록하기"}
              </button>
            </form>
          </>
        )}

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
