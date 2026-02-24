"use client";

import { useState, useEffect, useCallback } from "react";
import type { Registration, RegistrationStats } from "@/lib/types";

/* ─── Status helpers ─── */
const STATUS_MAP: Record<string, { label: string; color: string; bg: string }> =
  {
    new: {
      label: "신규",
      color: "text-blue-700",
      bg: "bg-blue-50 border-blue-200",
    },
    contacted: {
      label: "상담완료",
      color: "text-amber-700",
      bg: "bg-amber-50 border-amber-200",
    },
    completed: {
      label: "계약완료",
      color: "text-green-700",
      bg: "bg-green-50 border-green-200",
    },
  };

/* ═══════════════════════════════════════════
   Login Form
   ═══════════════════════════════════════════ */
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        onLogin();
      } else {
        setError("비밀번호가 올바르지 않습니다.");
      }
    } catch {
      setError("서버 연결에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-[400px]">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#1a2744] px-8 py-8 text-center">
            <h1
              className="text-white text-[20px] font-light tracking-[0.15em]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              중앙하이츠
            </h1>
            <p className="text-white/40 text-[11px] tracking-[0.3em] mt-1">
              ADMIN
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744]"
              placeholder="관리자 비밀번호를 입력하세요"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3 bg-[#1a2744] text-white rounded-lg font-medium text-sm hover:bg-[#2a3a5c] transition-colors disabled:opacity-50"
            >
              {loading ? "로그인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Stats Cards
   ═══════════════════════════════════════════ */
function StatsCards({ stats }: { stats: RegistrationStats }) {
  const cards = [
    {
      label: "총 등록",
      value: stats.total,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      accent: "border-[#1a2744]",
    },
    {
      label: "신규 미처리",
      value: stats.new,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      accent: "border-blue-500",
    },
    {
      label: "상담완료",
      value: stats.contacted,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      accent: "border-amber-500",
    },
    {
      label: "계약완료",
      value: stats.completed,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      accent: "border-green-500",
    },
    {
      label: "오늘 등록",
      value: stats.todayCount,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      accent: "border-[#c9a96e]",
    },
    {
      label: "이번주 등록",
      value: stats.weekCount,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      accent: "border-[#c9a96e]",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`bg-white rounded-xl p-5 border-l-4 ${card.accent} shadow-sm`}
        >
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            {card.icon}
            <span className="text-[11px] font-medium">{card.label}</span>
          </div>
          <p
            className="text-[28px] font-bold text-[#1a2744]"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Admin Page
   ═══════════════════════════════════════════ */
export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<RegistrationStats | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Filters
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [interestFilter, setInterestFilter] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Debounced search
  const [searchDebounced, setSearchDebounced] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setSearchDebounced(search), 300);
    return () => clearTimeout(t);
  }, [search]);

  const fetchStats = useCallback(async () => {
    const res = await fetch("/api/admin/stats");
    if (res.status === 401) {
      setIsLoggedIn(false);
      setIsLoading(false);
      return false;
    }
    setStats(await res.json());
    return true;
  }, []);

  const fetchRegistrations = useCallback(async () => {
    const params = new URLSearchParams({
      page: String(page),
      limit: "20",
      search: searchDebounced,
      status: statusFilter,
      interest_type: interestFilter,
      date_from: dateFrom,
      date_to: dateTo,
      sort_by: sortBy,
      sort_order: sortOrder,
    });

    const res = await fetch(`/api/admin/registrations?${params}`);
    if (res.ok) {
      const data = await res.json();
      setRegistrations(data.data);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    }
  }, [page, searchDebounced, statusFilter, interestFilter, dateFrom, dateTo, sortBy, sortOrder]);

  // Initial auth check
  useEffect(() => {
    (async () => {
      const ok = await fetchStats();
      if (ok) {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    })();
  }, [fetchStats]);

  // Refetch on filter change
  useEffect(() => {
    if (isLoggedIn) fetchRegistrations();
  }, [isLoggedIn, fetchRegistrations]);

  const handleLogin = async () => {
    setIsLoading(true);
    await fetchStats();
    setIsLoggedIn(true);
    await fetchRegistrations();
    setIsLoading(false);
  };

  const handleLogout = () => {
    document.cookie = "admin_session=; path=/; max-age=0";
    setIsLoggedIn(false);
  };

  const handleStatusChange = async (id: number, newStatus: string) => {
    const res = await fetch(`/api/admin/registrations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    if (res.ok) {
      fetchRegistrations();
      fetchStats();
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/admin/registrations/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchRegistrations();
      fetchStats();
    }
  };

  const handleSort = (col: string) => {
    if (sortBy === col) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(col);
      setSortOrder("desc");
    }
    setPage(1);
  };

  const handleExport = () => {
    window.open("/api/admin/export", "_blank");
  };

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("");
    setInterestFilter("");
    setDateFrom("");
    setDateTo("");
    setPage(1);
  };

  /* ─── Loading / Login ─── */
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-8 h-8 border-2 border-[#1a2744] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  /* ─── Dashboard ─── */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a2744] shadow-lg">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1
              className="text-white text-[18px] font-light tracking-[0.1em]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              중앙하이츠
            </h1>
            <span className="text-[#c9a96e]/60 text-[10px] tracking-[0.2em] font-medium border border-[#c9a96e]/20 px-2 py-0.5 rounded">
              ADMIN
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="text-white/50 text-[12px] hover:text-white/80 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Stats */}
        {stats && <StatsCards stats={stats} />}

        {/* Filter Bar */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-5">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/15 focus:border-[#1a2744]"
                placeholder="이름 또는 연락처 검색..."
              />
            </div>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2744]/15"
            >
              <option value="">상태 전체</option>
              <option value="new">신규</option>
              <option value="contacted">상담완료</option>
              <option value="completed">계약완료</option>
            </select>

            {/* Interest Type */}
            <select
              value={interestFilter}
              onChange={(e) => {
                setInterestFilter(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2744]/15"
            >
              <option value="">평형 전체</option>
              <option value="59㎡">59㎡</option>
              <option value="전체">전체</option>
            </select>

            {/* Date From */}
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => {
                setDateFrom(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/15"
            />

            {/* Date To */}
            <input
              type="date"
              value={dateTo}
              onChange={(e) => {
                setDateTo(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/15"
            />

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={resetFilters}
                className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                초기화
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2.5 bg-[#c9a96e] text-white rounded-lg text-sm font-medium hover:bg-[#d4b87a] transition-colors whitespace-nowrap flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CSV
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Table Header Info */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              총 <span className="font-bold text-[#1a2744]">{total}</span>건
            </p>
            <p className="text-xs text-gray-400">
              {page} / {totalPages} 페이지
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/80">
                  {[
                    { key: "id", label: "번호", w: "w-[70px]" },
                    { key: "name", label: "이름", w: "w-[100px]" },
                    { key: "phone", label: "연락처", w: "w-[140px]" },
                    { key: "interest_type", label: "관심평형", w: "w-[140px]" },
                    { key: "", label: "문의사항", w: "" },
                    { key: "status", label: "상태", w: "w-[120px]" },
                    { key: "created_at", label: "등록일", w: "w-[160px]" },
                    { key: "", label: "관리", w: "w-[80px]" },
                  ].map((col, i) => (
                    <th
                      key={i}
                      className={`px-4 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider ${col.w} ${col.key ? "cursor-pointer hover:text-[#1a2744] select-none" : ""}`}
                      onClick={() => col.key && handleSort(col.key)}
                    >
                      <span className="flex items-center gap-1">
                        {col.label}
                        {col.key && sortBy === col.key && (
                          <svg
                            className={`w-3 h-3 transition-transform ${sortOrder === "asc" ? "rotate-180" : ""}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-16 text-center text-gray-400 text-sm">
                      등록된 관심고객이 없습니다.
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => {
                    const st = STATUS_MAP[reg.status] || STATUS_MAP.new;
                    return (
                      <tr
                        key={reg.id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-4 py-3.5 text-sm text-gray-400">
                          {reg.id}
                        </td>
                        <td className="px-4 py-3.5 text-sm font-medium text-gray-900">
                          {reg.name}
                        </td>
                        <td className="px-4 py-3.5 text-sm text-gray-600">
                          {reg.phone}
                        </td>
                        <td className="px-4 py-3.5 text-sm text-gray-600">
                          {reg.interest_type}
                        </td>
                        <td className="px-4 py-3.5 text-sm text-gray-500 max-w-[200px] truncate">
                          {reg.message || "-"}
                        </td>
                        <td className="px-4 py-3.5">
                          <select
                            value={reg.status}
                            onChange={(e) =>
                              handleStatusChange(reg.id, e.target.value)
                            }
                            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${st.bg} ${st.color} cursor-pointer focus:outline-none`}
                          >
                            <option value="new">신규</option>
                            <option value="contacted">상담완료</option>
                            <option value="completed">계약완료</option>
                          </select>
                        </td>
                        <td className="px-4 py-3.5 text-xs text-gray-400">
                          {reg.created_at}
                        </td>
                        <td className="px-4 py-3.5">
                          <button
                            onClick={() => handleDelete(reg.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors"
                            title="삭제"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-100">
            {registrations.length === 0 ? (
              <div className="px-6 py-16 text-center text-gray-400 text-sm">
                등록된 관심고객이 없습니다.
              </div>
            ) : (
              registrations.map((reg) => {
                const st = STATUS_MAP[reg.status] || STATUS_MAP.new;
                return (
                  <div key={reg.id} className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-sm font-bold text-gray-900">
                          {reg.name}
                        </span>
                        <span className="text-xs text-gray-400 ml-2">
                          #{reg.id}
                        </span>
                      </div>
                      <select
                        value={reg.status}
                        onChange={(e) =>
                          handleStatusChange(reg.id, e.target.value)
                        }
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${st.bg} ${st.color} cursor-pointer focus:outline-none`}
                      >
                        <option value="new">신규</option>
                        <option value="contacted">상담완료</option>
                        <option value="completed">계약완료</option>
                      </select>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">
                        <span className="text-gray-400 mr-2">연락처</span>
                        {reg.phone}
                      </p>
                      <p className="text-gray-600">
                        <span className="text-gray-400 mr-2">관심평형</span>
                        {reg.interest_type}
                      </p>
                      {reg.message && (
                        <p className="text-gray-500 text-xs mt-2 bg-gray-50 rounded p-2">
                          {reg.message}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                      <span className="text-xs text-gray-400">
                        {reg.created_at}
                      </span>
                      <button
                        onClick={() => handleDelete(reg.id)}
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                이전
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (p) =>
                    p === 1 ||
                    p === totalPages ||
                    Math.abs(p - page) <= 2,
                )
                .reduce<(number | string)[]>((acc, p, i, arr) => {
                  if (i > 0 && p - (arr[i - 1] as number) > 1) {
                    acc.push("...");
                  }
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  typeof p === "string" ? (
                    <span key={`dot-${i}`} className="px-2 text-gray-300 text-sm">
                      ...
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                        page === p
                          ? "bg-[#1a2744] text-white"
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {p}
                    </button>
                  ),
                )}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                다음
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
