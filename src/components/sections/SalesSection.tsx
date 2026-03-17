"use client";

import { useState } from "react";
import SectionBanner from "../SectionBanner";

const subTabs = [
  { id: "schedule", label: "분양일정" },
  { id: "supply", label: "공급안내" },
  { id: "notice", label: "모집공고" },
  { id: "documents", label: "서류안내" },
  { id: "reserve", label: "예비당첨자 명단" },
  { id: "contract", label: "계약안내" },
  { id: "stamp", label: "인지세 납부 안내" },
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
      { date: 25, label: "정당계약 1일차", color: "pink" },
      { date: 26, label: "정당계약 2일차", color: "pink" },
      { date: 27, label: "정당계약 3일차", color: "pink" },
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
            <div className="space-y-12 max-w-[900px] mx-auto">
              {calendarData.map((cal) => {
                const weeks = getCalendarGrid(cal.year, cal.month);
                return (
                  <div key={`${cal.year}-${cal.month}`} className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                    {/* Month Header */}
                    <div className="bg-gradient-to-r from-navy to-[#1e3358] px-8 py-5 flex items-baseline gap-3">
                      <span className="text-white text-[28px] font-bold" style={{ fontFamily: "'NanumSquare', sans-serif" }}>
                        {cal.month}월
                      </span>
                      <span className="text-white/40 text-[14px]">{cal.year}</span>
                    </div>

                    {/* Day Headers */}
                    <div className="grid grid-cols-7 border-b border-gray-100">
                      {dayNames.map((d, i) => (
                        <div
                          key={d}
                          className={`py-3 text-center text-[12px] font-bold tracking-wider ${
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
                              className={`relative min-h-[90px] md:min-h-[100px] p-2 md:p-3 border-r border-gray-50 last:border-0 transition-colors ${
                                event ? "bg-gray-50/50" : ""
                              } ${!day ? "bg-gray-50/30" : ""}`}
                            >
                              {day && (
                                <>
                                  <span className={`text-[13px] font-medium ${
                                    isSun ? "text-red-400" : isSat ? "text-blue-400" : "text-gray-500"
                                  }`}>
                                    {day}
                                  </span>
                                  {event && (
                                    <div className={`mt-2 px-2 py-1.5 rounded-md border text-center ${eventColors[event.color]}`}>
                                      <p className="text-[11px] md:text-[12px] font-bold leading-tight">{cal.month}.{event.date}</p>
                                      <div className="w-4 h-px bg-current opacity-30 mx-auto my-1" />
                                      <p className="text-[10px] md:text-[11px] font-medium leading-tight">{event.label}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-[900px] mx-auto">
              {[
                { date: "3.27", label: "입주자 모집공고", color: "border-green-300 bg-green-50/50" },
                { date: "4.6 ~ 4.8", label: "청약 접수", color: "border-purple-300 bg-purple-50/50" },
                { date: "4.25 ~ 4.27", label: "정당계약", color: "border-pink-300 bg-pink-50/50" },
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
            <div className="max-w-[800px] mx-auto bg-navy/[0.03] rounded-2xl p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <p className="text-gray-400 text-[15px]">공급안내 자료가 준비되면 업로드됩니다.</p>
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
            <div className="max-w-[800px] mx-auto bg-navy/[0.03] rounded-2xl p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                </svg>
              </div>
              <p className="text-gray-400 text-[15px]">모집공고문이 준비되면 업로드됩니다.</p>
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
            <div className="max-w-[800px] mx-auto bg-navy/[0.03] rounded-2xl p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                </svg>
              </div>
              <p className="text-gray-400 text-[15px]">서류안내 자료가 준비되면 업로드됩니다.</p>
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

        {/* ── 계약안내 ── */}
        {activeSubTab === "contract" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">CONTRACT</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>계약안내</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
            </div>
            <div className="max-w-[800px] mx-auto bg-navy/[0.03] rounded-2xl p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <p className="text-gray-400 text-[15px]">계약안내 자료가 준비되면 업로드됩니다.</p>
            </div>
          </div>
        )}

        {/* ── 인지세 납부 안내 ── */}
        {activeSubTab === "stamp" && (
          <div className="tab-content">
            <div className="text-center mb-10">
              <p className="text-gold/60 text-[11px] tracking-[4px] font-medium uppercase mb-4">STAMP TAX</p>
              <h3 className="text-[32px] md:text-[38px] font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'NanumSquare', sans-serif" }}>인지세 납부 안내</h3>
              <div className="w-12 h-px bg-gold/40 mx-auto mt-5 mb-5" />
            </div>
            <div className="max-w-[800px] mx-auto bg-navy/[0.03] rounded-2xl p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <p className="text-gray-400 text-[15px]">인지세 납부 안내가 준비되면 업로드됩니다.</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
