"use client";

import { useState, useEffect, useCallback } from "react";
import type { Registration, RegistrationStats } from "@/lib/types";

/* ─── Constants ─── */
const NAVY = "#1a2744";
const GOLD = "#c9a96e";

const STATUS_MAP: Record<
  string,
  { label: string; color: string; bg: string; dot: string }
> = {
  new: {
    label: "신규",
    color: "text-[#1a2744]",
    bg: "bg-[#1a2744]/5 border-[#1a2744]/15",
    dot: "bg-[#1a2744]",
  },
  contacted: {
    label: "상담완료",
    color: "text-[#c9a96e]",
    bg: "bg-[#c9a96e]/5 border-[#c9a96e]/20",
    dot: "bg-[#c9a96e]",
  },
  completed: {
    label: "계약완료",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
    dot: "bg-emerald-500",
  },
};

/* ─── Date formatter ─── */
function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${y}.${m}.${dd} ${h}:${min}`;
}

function formatDateShort(dateStr: string) {
  const d = new Date(dateStr);
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${m}.${dd} ${h}:${min}`;
}

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
      if (res.ok) onLogin();
      else setError("비밀번호가 올바르지 않습니다.");
    } catch {
      setError("서버 연결에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1520]">
      <div className="w-full max-w-[380px] px-6">
        {/* Logo */}
        <div className="text-center mb-10">
          <p
            className="text-white/90 text-[22px] tracking-[0.2em] font-light"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            중앙하이츠
          </p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="w-6 h-px bg-white/10" />
            <span className="text-white/20 text-[10px] tracking-[0.4em]">
              ADMIN
            </span>
            <span className="w-6 h-px bg-white/10" />
          </div>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 bg-white/[0.04] border border-white/[0.06] rounded-xl text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-white/15 transition-colors"
            placeholder="비밀번호를 입력하세요"
            autoFocus
          />
          {error && (
            <p className="text-red-400/80 text-[12px] mt-2.5 pl-1">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-4 bg-white text-[#0f1520] rounded-xl text-[13px] font-semibold hover:bg-white/90 transition-colors disabled:opacity-40"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Stats Row
   ═══════════════════════════════════════════ */
function StatsRow({ stats }: { stats: RegistrationStats }) {
  const items = [
    { label: "전체", value: stats.total, highlight: true },
    { label: "신규", value: stats.new },
    { label: "상담완료", value: stats.contacted },
    { label: "계약완료", value: stats.completed },
    { label: "오늘", value: stats.todayCount },
    { label: "이번주", value: stats.weekCount },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <div
            key={i}
            className={`px-5 py-5 text-center ${i < items.length - 1 ? "border-r border-gray-50" : ""} ${i >= 3 ? "border-t border-gray-50 lg:border-t-0" : ""}`}
          >
            <p
              className={`text-[28px] font-bold leading-none ${item.highlight ? `text-[${NAVY}]` : "text-gray-800"}`}
              style={{
                fontFamily: "'Noto Serif KR', serif",
                color: item.highlight ? NAVY : undefined,
              }}
            >
              {item.value}
            </p>
            <p className="text-[11px] text-gray-400 mt-2 font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Detail Drawer (Modal)
   ═══════════════════════════════════════════ */
function DetailDrawer({
  reg,
  onClose,
  onStatusChange,
  onDelete,
}: {
  reg: Registration;
  onClose: () => void;
  onStatusChange: (id: number, status: string) => void;
  onDelete: (id: number) => void;
}) {
  const st = STATUS_MAP[reg.status] || STATUS_MAP.new;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white w-full sm:w-[440px] sm:rounded-2xl rounded-t-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-bold"
              style={{ backgroundColor: NAVY }}
            >
              {reg.name.charAt(0)}
            </div>
            <div>
              <p className="text-[15px] font-bold text-gray-900">{reg.name}</p>
              <p className="text-[11px] text-gray-400">#{reg.id}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-300 hover:text-gray-500 transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* Info Grid */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-gray-400">연락처</span>
              <a href={`tel:${reg.phone}`} className="text-[14px] font-mono text-gray-800 hover:text-[#c9a96e] transition-colors">
                {reg.phone}
              </a>
            </div>
            <div className="h-px bg-gray-50" />
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-gray-400">관심평형</span>
              <span className="text-[13px] text-gray-700">{reg.interest_type}</span>
            </div>
            <div className="h-px bg-gray-50" />
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-gray-400">등록일</span>
              <span className="text-[13px] text-gray-500">{formatDate(reg.created_at)}</span>
            </div>
          </div>

          {/* Message */}
          {reg.message && (
            <div>
              <p className="text-[12px] text-gray-400 mb-2">문의사항</p>
              <p className="text-[13px] text-gray-600 bg-gray-50 rounded-xl p-4 leading-relaxed">
                {reg.message}
              </p>
            </div>
          )}

          {/* Status */}
          <div>
            <p className="text-[12px] text-gray-400 mb-2.5">상태</p>
            <div className="flex gap-2">
              {Object.entries(STATUS_MAP).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => onStatusChange(reg.id, key)}
                  className={`flex-1 py-2.5 rounded-xl text-[12px] font-semibold border transition-all ${
                    reg.status === key
                      ? `${val.bg} ${val.color}`
                      : "border-gray-100 text-gray-300 hover:border-gray-200 hover:text-gray-400"
                  }`}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-50 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => { onDelete(reg.id); onClose(); }}
            className="text-[12px] text-gray-300 hover:text-red-400 transition-colors"
          >
            삭제
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg text-[12px] font-medium text-white transition-colors"
            style={{ backgroundColor: NAVY }}
          >
            닫기
          </button>
        </div>
      </div>
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
  const [selectedReg, setSelectedReg] = useState<Registration | null>(null);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

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
  }, [page, searchDebounced, statusFilter, dateFrom, dateTo, sortBy, sortOrder]);

  useEffect(() => {
    (async () => {
      const ok = await fetchStats();
      if (ok) setIsLoggedIn(true);
      setIsLoading(false);
    })();
  }, [fetchStats]);

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
      if (selectedReg && selectedReg.id === id) {
        setSelectedReg((prev) =>
          prev ? { ...prev, status: newStatus as Registration["status"] } : null,
        );
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/admin/registrations/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchRegistrations();
      fetchStats();
    }
  };

  const handleSort = (col: string) => {
    if (sortBy === col) setSortOrder((p) => (p === "asc" ? "desc" : "asc"));
    else { setSortBy(col); setSortOrder("desc"); }
    setPage(1);
  };

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("");
    setDateFrom("");
    setDateTo("");
    setPage(1);
  };

  const hasFilters = search || statusFilter || dateFrom || dateTo;

  /* ─── Loading ─── */
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1520]">
        <div className="w-5 h-5 border-2 border-white/10 border-t-white/50 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isLoggedIn) return <LoginForm onLogin={handleLogin} />;

  /* ─── Dashboard ─── */
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-[1360px] mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <p
              className="text-[15px] tracking-[0.08em] font-light"
              style={{ fontFamily: "'Noto Serif KR', serif", color: NAVY }}
            >
              중앙하이츠
            </p>
            <span className="text-[10px] text-gray-300 tracking-[0.15em] font-medium">
              ADMIN
            </span>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => { fetchRegistrations(); fetchStats(); }}
              className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors hidden sm:block"
            >
              새로고침
            </button>
            <button onClick={handleLogout} className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1360px] mx-auto px-5 py-6 space-y-4">
        {/* Stats */}
        {stats && <StatsRow stats={stats} />}

        {/* Toolbar */}
        <div className="bg-white rounded-2xl border border-gray-100 px-5 py-4">
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border-0 rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder-gray-300 transition-all"
                placeholder="이름 또는 연락처 검색"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Status chips */}
              <div className="flex items-center bg-gray-50 rounded-lg p-0.5">
                {[
                  { v: "", l: "전체" },
                  { v: "new", l: "신규" },
                  { v: "contacted", l: "상담" },
                  { v: "completed", l: "계약" },
                ].map((o) => (
                  <button
                    key={o.v}
                    onClick={() => { setStatusFilter(o.v); setPage(1); }}
                    className={`px-3 py-1.5 rounded-md text-[11px] font-medium transition-all ${
                      statusFilter === o.v
                        ? "bg-white text-gray-800 shadow-sm"
                        : "text-gray-400 hover:text-gray-500"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>

              {/* Dates */}
              <div className="flex items-center gap-1.5">
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => { setDateFrom(e.target.value); setPage(1); }}
                  className="px-2.5 py-1.5 bg-gray-50 border-0 rounded-lg text-[11px] text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
                />
                <span className="text-gray-200 text-[10px]">–</span>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => { setDateTo(e.target.value); setPage(1); }}
                  className="px-2.5 py-1.5 bg-gray-50 border-0 rounded-lg text-[11px] text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
                />
              </div>

              {hasFilters && (
                <button onClick={resetFilters} className="text-[11px] text-gray-300 hover:text-gray-500 transition-colors px-1">
                  초기화
                </button>
              )}

              {/* Export */}
              <button
                onClick={() => window.open("/api/admin/export", "_blank")}
                className="ml-auto px-3.5 py-1.5 rounded-lg text-[11px] font-medium text-white transition-colors"
                style={{ backgroundColor: NAVY }}
              >
                CSV 내보내기
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {/* Count bar */}
          <div className="px-5 py-3.5 border-b border-gray-50 flex items-center justify-between">
            <p className="text-[13px] text-gray-400">
              <span className="font-bold text-gray-800">{total}</span>건
            </p>
            {totalPages > 1 && (
              <p className="text-[11px] text-gray-300">{page} / {totalPages}</p>
            )}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50">
                  {[
                    { key: "id", label: "#", w: "w-14" },
                    { key: "name", label: "이름", w: "w-24" },
                    { key: "phone", label: "연락처", w: "w-36" },
                    { key: "", label: "문의사항", w: "" },
                    { key: "status", label: "상태", w: "w-28" },
                    { key: "created_at", label: "등록일", w: "w-36" },
                    { key: "", label: "", w: "w-10" },
                  ].map((col, i) => (
                    <th
                      key={i}
                      className={`px-4 py-3 text-left text-[11px] font-medium text-gray-300 ${col.w} ${col.key ? "cursor-pointer hover:text-gray-500 select-none transition-colors" : ""}`}
                      onClick={() => col.key && handleSort(col.key)}
                    >
                      <span className="flex items-center gap-1">
                        {col.label}
                        {col.key && sortBy === col.key && (
                          <span className={`transition-transform inline-block ${sortOrder === "asc" ? "rotate-180" : ""}`} style={{ color: GOLD }}>
                            ▾
                          </span>
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-20 text-center">
                      <p className="text-gray-300 text-[13px]">등록된 관심고객이 없습니다</p>
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => {
                    const st = STATUS_MAP[reg.status] || STATUS_MAP.new;
                    return (
                      <tr
                        key={reg.id}
                        className="border-b border-gray-50 last:border-0 group hover:bg-gray-50/50 transition-colors cursor-pointer"
                        onClick={() => setSelectedReg(reg)}
                      >
                        <td className="px-4 py-3 text-[12px] text-gray-300 font-mono">{reg.id}</td>
                        <td className="px-4 py-3 text-[13px] font-semibold text-gray-800">{reg.name}</td>
                        <td className="px-4 py-3 text-[13px] text-gray-500 font-mono">{reg.phone}</td>
                        <td className="px-4 py-3 text-[13px] text-gray-400 truncate max-w-[240px]">
                          {reg.message || <span className="text-gray-200">–</span>}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${st.bg} ${st.color}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                            {st.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-[12px] text-gray-300">{formatDate(reg.created_at)}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={(e) => { e.stopPropagation(); handleDelete(reg.id); }}
                            className="opacity-0 group-hover:opacity-100 text-gray-200 hover:text-red-400 transition-all"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden">
            {registrations.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-gray-300 text-[13px]">등록된 관심고객이 없습니다</p>
              </div>
            ) : (
              registrations.map((reg) => {
                const st = STATUS_MAP[reg.status] || STATUS_MAP.new;
                return (
                  <div
                    key={reg.id}
                    className="px-5 py-4 border-b border-gray-50 last:border-0 active:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedReg(reg)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                          style={{ backgroundColor: NAVY }}
                        >
                          {reg.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-gray-800 leading-none">{reg.name}</p>
                          <p className="text-[11px] text-gray-400 mt-0.5 font-mono">{reg.phone}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center gap-1 text-[10px] font-semibold ${st.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                        {st.label}
                      </span>
                    </div>
                    {reg.message && (
                      <p className="text-[12px] text-gray-400 line-clamp-1 ml-[42px]">{reg.message}</p>
                    )}
                    <p className="text-[10px] text-gray-300 mt-1.5 ml-[42px]">{formatDateShort(reg.created_at)}</p>
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-5 py-3.5 border-t border-gray-50 flex items-center justify-center gap-0.5">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-20 transition-colors flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                .reduce<(number | string)[]>((acc, p, i, arr) => {
                  if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("...");
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  typeof p === "string" ? (
                    <span key={`d${i}`} className="w-8 h-8 flex items-center justify-center text-gray-200 text-[11px]">
                      ···
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-8 h-8 rounded-lg text-[12px] font-medium transition-all ${
                        page === p ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-50"
                      }`}
                    >
                      {p}
                    </button>
                  ),
                )}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-20 transition-colors flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedReg && (
        <DetailDrawer
          reg={selectedReg}
          onClose={() => setSelectedReg(null)}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
