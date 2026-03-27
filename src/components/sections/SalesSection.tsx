"use client";

import { useState, useEffect } from "react";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "schedule", label: "분양일정" },
  { id: "supply", label: "공급안내" },
  { id: "notice", label: "모집공고" },
  { id: "documents", label: "서류안내" },
  { id: "reserve", label: "예비당첨자 명단" },
];

// ── 분양 일정 캘린더 데이터 ──
interface CalendarEvent {
  date: number;
  label: string;
  color: "green" | "purple" | "teal" | "pink";
  sub?: string;
}

interface CalendarMonth {
  year: number;
  month: number; // 1-based
  events: CalendarEvent[];
  notes?: { date: number; text: string }[];
}

const calendarData: CalendarMonth[] = [
  {
    year: 2026,
    month: 3,
    events: [
      { date: 27, label: "입주자 모집공고 일", color: "green" },
    ],
  },
  {
    year: 2026,
    month: 4,
    events: [
      { date: 6, label: "특별공급", color: "purple" },
      { date: 7, label: "1순위 청약", color: "purple" },
      { date: 8, label: "2순위 청약", color: "purple" },
      { date: 15, label: "당첨자 발표", color: "teal" },
      { date: 26, label: "정당계약 1일차", color: "pink" },
      { date: 27, label: "정당계약 2일차", color: "pink" },
      { date: 28, label: "정당계약 3일차", color: "pink" },
    ],
    notes: [
      { date: 16, text: "당첨자 서류접수 (4/15~4/24, 9일간)" },
    ],
  },
];

function getCalendarGrid(year: number, month: number) {
  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month, 0).getDate();
  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);

  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

const eventColors = {
  green: "bg-green-50 border-green-300 text-green-800",
  purple: "bg-purple-50 border-purple-300 text-purple-800",
  teal: "bg-teal-50 border-teal-400 text-teal-800",
  pink: "bg-pink-50 border-pink-300 text-pink-800",
};

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface SalesSectionProps {
  initialSubTab?: string;
}

export default function SalesSection({ initialSubTab }: SalesSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState(initialSubTab || "schedule");

  useEffect(() => {
    if (initialSubTab) setActiveSubTab(initialSubTab);
  }, [initialSubTab]);

  return (
    <section className="pt-[72px]">
      <SectionBanner
        title="분 양 안 내"
        subtitle="중앙하이츠 갈산역 센트럴의 분양 정보를 확인하세요."
        bgImage="/images/banner.jpg"
        fallbackGradient="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700"
      />

      {/* Sub Navigation */}
      <div className="relative">
        <div className="bg-[#0c1320]">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center overflow-x-auto">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`relative px-6 md:px-10 py-5 text-[13px] tracking-[0.5px] font-medium transition-all duration-300 whitespace-nowrap
                  ${activeSubTab === tab.id
                    ? "text-gold"
                    : "text-white/30 hover:text-white/55"
                  }
                `}
              >
                {tab.label}
                {activeSubTab === tab.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">

        {/* ── 분양일정 ── */}
        {activeSubTab === "schedule" && (
          <div className="tab-content">
            <div className="text-center mb-12">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">SCHEDULE</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>분양일정</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
              <p className="text-gray-400 text-[14px]">중앙하이츠 갈산역 센트럴 분양 주요 일정입니다</p>
            </div>

            {/* Calendar */}
            <div className="space-y-12 max-w-[1100px] mx-auto">
              {calendarData.map((cal) => {
                const weeks = getCalendarGrid(cal.year, cal.month);
                return (
                  <div key={`${cal.year}-${cal.month}`} className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                    {/* Month Header */}
                    <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-6 flex items-baseline gap-3">
                      <span className="text-white text-[32px] font-bold" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                        {cal.month}월
                      </span>
                      <span className="text-white/40 text-[16px]">{cal.year}</span>
                    </div>

                    {/* Day Headers */}
                    <div className="grid grid-cols-7 border-b border-gray-100">
                      {dayNames.map((d, i) => (
                        <div
                          key={d}
                          className={`py-4 text-center text-[13px] font-bold tracking-wider ${
                            i === 0 ? "text-red-400" : i === 6 ? "text-blue-400" : "text-gray-400"
                          }`}
                        >
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Weeks */}
                    {weeks.map((week, wi) => (
                      <div key={wi} className="grid grid-cols-7 border-b border-gray-50 last:border-0">
                        {week.map((day, di) => {
                          const event = day ? cal.events.find((e) => e.date === day) : null;
                          const note = day ? cal.notes?.find((n) => n.date === day) : null;
                          const isSun = di === 0;
                          const isSat = di === 6;

                          return (
                            <div
                              key={di}
                              className={`relative min-h-[110px] md:min-h-[120px] p-2 md:p-3 border-r border-gray-50 last:border-0 transition-colors ${
                                event ? "bg-gray-50/50" : ""
                              } ${!day ? "bg-gray-50/30" : ""}`}
                            >
                              {day && (
                                <>
                                  <span className={`text-[15px] font-medium ${
                                    isSun ? "text-red-400" : isSat ? "text-blue-400" : "text-gray-500"
                                  }`}>
                                    {day}
                                  </span>
                                  {event && (
                                    <div className={`mt-2 px-2 py-1.5 rounded-md border text-center ${eventColors[event.color]}`}>
                                      <p className="text-[12px] md:text-[13px] font-bold leading-tight">{cal.month}.{event.date}</p>
                                      <div className="w-4 h-px bg-current opacity-30 mx-auto my-1" />
                                      <p className="text-[11px] md:text-[12px] font-medium leading-tight">{event.label}</p>
                                    </div>
                                  )}
                                  {note && (
                                    <div className="mt-1.5">
                                      <p className="text-[10px] text-gray-400 leading-snug">- {note.text}</p>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Schedule Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-[1100px] mx-auto">
              {[
                { date: "3.27", label: "입주자 모집공고", color: "border-green-300 bg-green-50/50" },
                { date: "4.6 ~ 4.8", label: "청약 접수", color: "border-purple-300 bg-purple-50/50" },
                { date: "4.26 ~ 4.28", label: "정당계약", color: "border-pink-300 bg-pink-50/50" },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl border-2 p-6 text-center ${item.color}`}>
                  <p className="text-[22px] font-bold text-gray-800" style={{ fontFamily: "'NanumSquare', sans-serif" }}>{item.date}</p>
                  <div className="w-8 h-px bg-gray-300 mx-auto my-3" />
                  <p className="text-[14px] font-medium text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 공급안내 ── */}
        {activeSubTab === "supply" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">SUPPLY INFO</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>공급안내</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
            </div>
            <div className="max-w-[1100px] mx-auto space-y-1">
              {[1, 2, 3, 4].map((n) => (
                <img key={n} src={`/images/sales/supply-${n}.jpg`} alt={`공급안내 ${n}페이지`} className="w-full h-auto" loading="lazy" />
              ))}
            </div>
          </div>
        )}

        {/* ── 모집공고 ── */}
        {activeSubTab === "notice" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">RECRUITMENT NOTICE</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>모집공고</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
              <p className="text-gray-400 text-[14px]">중앙하이츠 갈산역 센트럴 입주자 모집공고 주요 내용</p>
            </div>

            <div className="max-w-[1100px] mx-auto space-y-10">
              {/* PDF 다운로드 */}
              <div className="bg-gradient-to-r from-navy to-[#1e3358] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-white text-[20px] font-bold mb-2">입주자 모집공고문 전문</h4>
                  <p className="text-white/50 text-[14px]">중앙하이츠 갈산역 센트럴 입주자 모집공고문 PDF를 다운로드하여 확인하실 수 있습니다.</p>
                </div>
                <a
                  href="/docs/모집공고문.pdf"
                  download
                  className="flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-white text-[15px] font-bold rounded-lg transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF 다운로드
                </a>
              </div>

              {/* 청약 일정 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
                  <h4 className="text-white text-[20px] font-bold">청약 및 계약 주요일정</h4>
                </div>
                <div className="p-6 md:p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[14px] border-collapse">
                      <thead>
                        <tr className="bg-navy/5">
                          <th className="px-4 py-3 text-center font-bold text-navy">구분</th>
                          <th className="px-4 py-3 text-center font-bold text-navy">일정</th>
                          <th className="px-4 py-3 text-center font-bold text-navy">방법</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50/50"><td className="px-4 py-3 text-center font-medium text-gray-700">특별공급</td><td className="px-4 py-3 text-center text-gray-600">2026.04.06 (월)</td><td className="px-4 py-3 text-center text-gray-500 text-[13px]">PC/모바일 청약홈 (09:00~17:30)<br/>현장접수: 사업주체 홍보관</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-4 py-3 text-center font-medium text-gray-700">일반공급 1순위</td><td className="px-4 py-3 text-center text-gray-600">2026.04.07 (화)</td><td className="px-4 py-3 text-center text-gray-500 text-[13px]">PC/모바일 청약홈 (09:00~17:30)<br/>현장접수: 청약통장 가입���행</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-4 py-3 text-center font-medium text-gray-700">일반공급 2순위</td><td className="px-4 py-3 text-center text-gray-600">2026.04.08 (수)</td><td className="px-4 py-3 text-center text-gray-500 text-[13px]">PC/모바일 청약홈</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-4 py-3 text-center font-medium text-gray-700">당첨자 발표</td><td className="px-4 py-3 text-center text-gray-600">2026.04.15 (수)</td><td className="px-4 py-3 text-center text-gray-500 text-[13px]">-</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-4 py-3 text-center font-medium text-gray-700">서류접수</td><td className="px-4 py-3 text-center text-gray-600">2026.04.16 (목) ~ 04.25 (토)</td><td className="px-4 py-3 text-center text-gray-500 text-[13px]">사업주체 홍보관</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-4 py-3 text-center font-medium text-gray-700">정당계약</td><td className="px-4 py-3 text-center text-gray-600">2026.04.26 (일) ~ 04.28 (화)</td><td className="px-4 py-3 text-center text-gray-500 text-[13px]">인천광역시 부평구 부평대로 258, 1층</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 1순위 청약 체크 포인트 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
                  <h4 className="text-white text-[20px] font-bold">1순위 청약 체크 포인트</h4>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { num: "01", title: "만 19세 이상 누구나", desc: "세대주 및 세대원 청약 가능, 세대 구성원 중복청약 가능" },
                      { num: "02", title: "수도권 전 지역 거주자", desc: "입주자 모집공고일 현재 경기, 서울, 인천 거주자 청약 가능" },
                      { num: "03", title: "유주택자 청약 가능", desc: "주택수와 상관없이 청약 가능 (일반공급 해당)" },
                      { num: "04", title: "재당첨 제한 없음", desc: "기존 당첨 사실이 있어도 청약 가능 (2년 내 가점제 당첨 시 가점제 불가, 추첨제 가능)" },
                      { num: "05", title: "청약통장 12개월", desc: "청약통장 가입기간 및 지역별·면적별 예치금 충족 시" },
                      { num: "06", title: "청약 예치금 기준", desc: "전용 85㎡ 이하: 인천 250만원, 서울 300만원, 경기도 200만원" },
                    ].map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-7 h-7 rounded-full bg-navy flex items-center justify-center text-white text-[11px] font-bold">{item.num}</span>
                          <span className="text-navy text-[16px] font-bold">{item.title}</span>
                        </div>
                        <p className="text-gray-500 text-[14px] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 1순위 가점제/추첨제 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
                  <h4 className="text-white text-[20px] font-bold">1순위 가점제·추첨제 적용 비율</h4>
                </div>
                <div className="p-6 md:p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[14px] border-collapse">
                      <thead>
                        <tr className="bg-navy/5">
                          <th className="px-4 py-3 text-center font-bold text-navy">구분</th>
                          <th className="px-4 py-3 text-center font-bold text-navy">가점제</th>
                          <th className="px-4 py-3 text-center font-bold text-navy">추첨제</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 text-center font-medium text-gray-700">전용면적 60㎡ 이하</td>
                          <td className="px-4 py-3 text-center text-gray-600 font-bold">40%</td>
                          <td className="px-4 py-3 text-center text-gray-600 font-bold">60%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 유형별 청약 기본자격 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
                  <h4 className="text-white text-[20px] font-bold">유형별 청약 기본자격 요건</h4>
                </div>
                <div className="p-6 md:p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[14px] border-collapse">
                      <thead>
                        <tr className="bg-navy/5">
                          <th className="px-3 py-3 text-center font-bold text-navy" colSpan={2}>구분</th>
                          <th className="px-3 py-3 text-left font-bold text-navy">기본자격</th>
                          <th className="px-3 py-3 text-center font-bold text-navy">요건</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50/50"><td className="px-3 py-3 text-center text-gray-500" rowSpan={5}>특별공급</td><td className="px-3 py-3 text-center font-medium text-gray-700">기관추천</td><td className="px-3 py-3 text-gray-500">해당 기관의 추천 및 인정서류를 받으신 분</td><td className="px-3 py-3 text-center text-gray-400 text-[13px]">청약통장 가입 후 6개월</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-3 py-3 text-center font-medium text-gray-700">다자녀</td><td className="px-3 py-3 text-gray-500">만 19세 미만의 자녀 2명 이상(태아 및 입양자녀 포함)</td><td className="px-3 py-3 text-center text-gray-400 text-[13px]">청약통장 가입 후 6개월</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-3 py-3 text-center font-medium text-gray-700">신혼부부</td><td className="px-3 py-3 text-gray-500">혼인기간 7년 이내, 혼인신고일부터 최초 입주자모집공고일 현재까지 계속 무주택자인 분</td><td className="px-3 py-3 text-center text-gray-400 text-[13px]">청약통장 가입 후 6개월</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-3 py-3 text-center font-medium text-gray-700">생애최초</td><td className="px-3 py-3 text-gray-500">생애최초로 주택을 구입하는 분, 현재 근로자 또는 자영업자로서 5년 이상 소득세 납부</td><td className="px-3 py-3 text-center text-gray-400 text-[13px]">청약통장 가입 후 12개월</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-3 py-3 text-center font-medium text-gray-700">노부모부양</td><td className="px-3 py-3 text-gray-500">만 65세 이상의 직계존속을 3년 이상 계속하여 부양하고 있는 분</td><td className="px-3 py-3 text-center text-gray-400 text-[13px]">무주택 세대주</td></tr>
                        <tr className="hover:bg-gray-50/50"><td className="px-3 py-3 text-center text-gray-500">일반공급</td><td className="px-3 py-3 text-center font-medium text-gray-700">1순위</td><td className="px-3 py-3 text-gray-500">청약통장 가입기간 12개월 경과, 지역별·면적별 예치금액 이상인 자 (세대주 및 세대원 모두 가능)</td><td className="px-3 py-3 text-center text-gray-400 text-[13px]">만 19세 이상</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 청약 자격조건 상세 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
                  <h4 className="text-white text-[20px] font-bold">청약 자격조건 (추첨제)</h4>
                </div>
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <h5 className="text-navy text-[16px] font-bold mb-3">대상자</h5>
                    <div className="p-4 bg-gray-50 rounded-lg text-[14px] text-gray-600 leading-[1.9]">
                      <p>입주자모집공고일(26.03.27) 현재 인천광역시 및 수도권(서울특별시, 경기도) 거주하는 만 19세 이상인 자 또는 세대주인 미성년자(자녀양육, 형제자매 부양)</p>
                      <p>순위별 청약통장 자격요건을 만족한 자</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-navy text-[16px] font-bold mb-3">당첨자 선정 순서</h5>
                    <div className="p-4 bg-gray-50 rounded-lg text-[14px] text-gray-600 leading-[1.9]">
                      <p><strong>1순위 가점제:</strong> ①지역 → ②가점 → ③청약통장 가입기간 → ④추첨</p>
                      <p><strong>1순위 후 추첨제:</strong> ①지역 → ②무주택 우선공급 → ③추첨</p>
                      <p><strong>2순위:</strong> ①지역 → ②추첨</p>
                      <p className="mt-2 text-gray-500 text-[13px]">①지역: 해당지역 거주자(인천광역시) → 기타지역 거주자(서울특별시, 경기도)</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-navy text-[16px] font-bold mb-3">유의사항</h5>
                    <div className="p-4 bg-gray-50 rounded-lg text-[14px] text-gray-600 leading-[1.9]">
                      <p>1순위 가점제 청약 시 유의사항: 입주자모집공고일(26.03.27) 기준 과거 2년 이내 가점제로 당첨된 본 및 그 세대원은 가점제 청약이 불가하며, 가점제로 청약하여 당첨 시 부적격 처리됩니다.</p>
                      <p className="mt-1">1순위 가점제 당첨시 가점제 당첨 제한자로 관리되며, 당첨자 및 그 세대원은 당첨자발표일로부터 2년간 다른 민영주택의 1순위 가점제 청약이 불가합니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 청약신청 일정 상세 */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5">
                  <h4 className="text-white text-[20px] font-bold">청약신청 일정</h4>
                </div>
                <div className="p-6 md:p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[14px] border-collapse">
                      <thead>
                        <tr className="bg-navy/5">
                          <th className="px-3 py-3 text-center font-bold text-navy">구분</th>
                          <th className="px-3 py-3 text-center font-bold text-navy">1순위</th>
                          <th className="px-3 py-3 text-center font-bold text-navy">2순위</th>
                          <th className="px-3 py-3 text-left font-bold text-navy">접수장소 및 시간</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50/50">
                          <td className="px-3 py-3 text-center font-medium text-gray-700">일반공급</td>
                          <td className="px-3 py-3 text-center text-gray-600">2026.4.6(화)</td>
                          <td className="px-3 py-3 text-center text-gray-600">2026.4.7(수)</td>
                          <td className="px-3 py-3 text-gray-500 text-[13px]">
                            <p>청약Home 인터넷/모바일 09:00~17:30</p>
                            <p>청약통장 가입은행 창구 방문 09:00~16:00</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50/50 rounded-lg text-[13px] text-gray-500 leading-[1.8]">
                    <p>- 한국부동산원 청약홈 홈페이지(http://www.applyhome.co.kr) 또는 청약홈 모바일 앱에서 신청</p>
                    <p>- 인터넷 청약이 원칙이며, 정보취약계층(만 65세 이상 고령자, 장애인 등)에 한하여 청약통장 가입은행 본·지점(09:00~16:00)에서 청약 가능</p>
                    <p>- 은행 점업점별 업무시간이 상이할 수 있으므로 반드시 사전에 확인하시기 바랍니다.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-gray-400 text-[14px] leading-[1.8]">
                  ※ 청약관련 사항은 관련 법령의 개정, 인허가 과정, 입주자모집공고 승인 시점에 따라 변경될 수 있습니다.<br />
                  ※ 반드시 입주자모집공고문을 통해 청약자격, 유의사항 등을 숙지하시어 청약하시기 바랍니다.<br />
                  ※ 청약자격 미숙지, 착오 등에 대해서는 청약자 본인에게 책임이 있으므로 불이익을 당하는 일이 없도록 유의하시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── 서류안내 ── */}
        {activeSubTab === "documents" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">DOCUMENTS</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>서류안내</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
            </div>
            <div className="max-w-[1100px] mx-auto space-y-1">
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <img key={n} src={`/images/sales/documents-${n}.jpg`} alt={`서류안내 ${n}페이지`} className="w-full h-auto" loading="lazy" />
              ))}
            </div>
          </div>
        )}

        {/* ── 예비당첨자 명단 ── */}
        {activeSubTab === "reserve" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">RESERVE LIST</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>예비당첨자 명단</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
            </div>
            <div className="max-w-[800px] mx-auto bg-navy/[0.03] rounded-2xl p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <p className="text-gray-400 text-[15px]">당첨자 발표 후 예비당첨자 명단이 공개됩니다.</p>
            </div>
          </div>
        )}


      </div>
    </section>
  );
}
