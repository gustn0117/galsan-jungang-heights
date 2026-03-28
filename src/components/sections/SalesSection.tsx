"use client";

import { useState, useEffect } from "react";
import SectionBanner from "../SectionBanner";
import SupplyContent from "./SupplyContent";
import DocumentsContent from "./DocumentsContent";

function PdfViewer({ src, title }: { src: string; title: string }) {
  return (
    <>
      {/* 데스크톱: iframe */}
      <div className="hidden md:block rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
        <iframe
          src={src}
          className="w-full border-0"
          style={{ height: "calc(100vh - 200px)", minHeight: "800px" }}
          title={title}
        />
      </div>
      {/* 모바일: 바로보기 + 다운로드 */}
      <div className="md:hidden space-y-3">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 bg-navy text-white text-[15px] font-bold rounded-xl shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          PDF 바로보기
        </a>
        <a
          href={src}
          download
          className="flex items-center justify-center gap-2 w-full py-4 border-2 border-navy text-navy text-[15px] font-bold rounded-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          PDF 다운로드
        </a>
      </div>
      {/* 데스크톱 다운로드 버튼 */}
      <div className="hidden md:block mt-4 text-center">
        <a
          href={src}
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy hover:bg-navy-light text-white text-[14px] font-medium rounded-lg transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          PDF 다운로드
        </a>
      </div>
    </>
  );
}

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
            <div className="max-w-[1100px] mx-auto">
              <PdfViewer src="/docs/공급안내.pdf" title="공급안내 PDF" />
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
            </div>

            <div className="max-w-[1100px] mx-auto space-y-10">
              {/* 조감도 이미지 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/hero-rendering.jpg"
                  alt="중앙하이츠 갈산역 센트럴"
                  className="w-full h-auto"
                />
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <img src="/images/logo-bi.png" alt="중앙하이츠" className="h-[36px] w-auto" style={{ filter: "brightness(0) invert(1)" }} />
                  <span className="text-white/80 text-[14px] font-medium ml-2">갈산역 센트럴</span>
                </div>
                <p className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-[11px] px-4">
                  ※ 본 홍보물에 사용된 CG 이미지는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있으며, 향후 개발계획 및 인허가 과정이나 설계변경 등의 이유로 실제 시공과 상이할 수 있습니다.
                </p>
              </div>

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

            </div>
          </div>
        )}

        {/* ── 모집공고 상세 내용은 PDF로 대체 ── */}
        {/* ── 서류안내 ── */}
        {activeSubTab === "documents" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">DOCUMENTS</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>서류안내</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
            </div>
            <div className="max-w-[1100px] mx-auto">
              <PdfViewer src="/docs/서류안내.pdf" title="서류안내 PDF" />
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
