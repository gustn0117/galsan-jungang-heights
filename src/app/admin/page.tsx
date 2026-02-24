"use client";

import { useState, useEffect, useCallback } from "react";
import type { Registration, RegistrationStats } from "@/lib/types";

/* ─── Status helpers ─── */
const STATUS_MAP: Record<
  string,
  { label: string; color: string; bg: string; dot: string }
> = {
  new: {
    label: "신규",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
    dot: "bg-blue-500",
  },
  contacted: {
    label: "상담완료",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
    dot: "bg-amber-500",
  },
  completed: {
    label: "계약완료",
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-200",
    dot: "bg-emerald-500",
  },
};

/* ─── Date formatter ─── */
function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hour = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${year}.${month}.${day} ${hour}:${min}`;
}

function formatDateShort(dateStr: string) {
  const d = new Date(dateStr);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hour = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${month}.${day} ${hour}:${min}`;
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
    <div className="min-h-screen flex items-center justify-center bg-[#0e1525] px-4">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-[420px]">
        <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.06] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-10 pt-12 pb-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a96e] to-[#a88b52] mb-6 shadow-lg shadow-[#c9a96e]/20">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1
              className="text-white text-[22px] font-light tracking-[0.15em]"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              중앙하이츠
            </h1>
            <p className="text-[#c9a96e]/60 text-[11px] tracking-[0.3em] mt-1.5 font-medium">
              MANAGEMENT SYSTEM
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-10 pb-10">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white/[0.06] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/30 focus:border-[#c9a96e]/40 transition-all"
                placeholder="관리자 비밀번호"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-400 text-xs mt-3 pl-1">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-5 py-3.5 bg-gradient-to-r from-[#c9a96e] to-[#b89a5e] text-white rounded-xl font-medium text-sm hover:from-[#d4b87a] hover:to-[#c9a96e] transition-all disabled:opacity-50 shadow-lg shadow-[#c9a96e]/20"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  로그인 중...
                </span>
              ) : (
                "로그인"
              )}
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
      gradient: "from-[#1a2744] to-[#2a3a5c]",
      iconBg: "bg-white/10",
      textColor: "text-white",
      labelColor: "text-white/60",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
    },
    {
      label: "신규 미처리",
      value: stats.new,
      gradient: "from-blue-500 to-blue-600",
      iconBg: "bg-white/15",
      textColor: "text-white",
      labelColor: "text-white/60",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      ),
    },
    {
      label: "상담완료",
      value: stats.contacted,
      gradient: "from-amber-500 to-amber-600",
      iconBg: "bg-white/15",
      textColor: "text-white",
      labelColor: "text-white/60",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
    },
    {
      label: "계약완료",
      value: stats.completed,
      gradient: "from-emerald-500 to-emerald-600",
      iconBg: "bg-white/15",
      textColor: "text-white",
      labelColor: "text-white/60",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      label: "오늘 등록",
      value: stats.todayCount,
      gradient: "from-[#c9a96e] to-[#b89a5e]",
      iconBg: "bg-white/15",
      textColor: "text-white",
      labelColor: "text-white/60",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
    {
      label: "이번주",
      value: stats.weekCount,
      gradient: "from-violet-500 to-violet-600",
      iconBg: "bg-white/15",
      textColor: "text-white",
      labelColor: "text-white/60",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-4 shadow-lg relative overflow-hidden`}
        >
          {/* Background decorative circle */}
          <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-white/[0.06]" />
          <div className="absolute -right-1 -top-1 w-8 h-8 rounded-full bg-white/[0.04]" />

          <div
            className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${card.iconBg} mb-3`}
          >
            <svg
              className="w-4 h-4 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {card.icon}
            </svg>
          </div>
          <p
            className={`text-[26px] font-bold ${card.textColor} leading-none`}
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {card.value}
          </p>
          <p className={`text-[11px] ${card.labelColor} mt-1.5 font-medium`}>
            {card.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Detail Modal
   ═══════════════════════════════════════════ */
function DetailModal({
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[480px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1a2744] to-[#2a3a5c] px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="text-white text-lg font-bold">{reg.name}</h3>
            <p className="text-white/40 text-xs mt-0.5">
              #{reg.id} &middot; {formatDate(reg.created_at)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-1">
                연락처
              </p>
              <a
                href={`tel:${reg.phone}`}
                className="text-sm font-medium text-[#1a2744] hover:text-[#c9a96e] transition-colors"
              >
                {reg.phone}
              </a>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-1">
                관심평형
              </p>
              <p className="text-sm text-gray-700">{reg.interest_type}</p>
            </div>
          </div>

          {reg.message && (
            <div>
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-1">
                문의사항
              </p>
              <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-4 leading-relaxed">
                {reg.message}
              </p>
            </div>
          )}

          <div>
            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-2">
              상태 변경
            </p>
            <div className="flex gap-2">
              {Object.entries(STATUS_MAP).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => onStatusChange(reg.id, key)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border-2 transition-all ${
                    reg.status === key
                      ? `${val.bg} ${val.color} border-current shadow-sm`
                      : "border-gray-100 text-gray-400 hover:border-gray-200 hover:text-gray-500"
                  }`}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
          <button
            onClick={() => {
              onDelete(reg.id);
              onClose();
            }}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            삭제
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1a2744] text-white rounded-lg text-xs font-medium hover:bg-[#2a3a5c] transition-colors"
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

  // Filters
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
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
      if (selectedReg && selectedReg.id === id) {
        setSelectedReg((prev) =>
          prev
            ? {
                ...prev,
                status: newStatus as Registration["status"],
              }
            : null,
        );
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."))
      return;
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
    setDateFrom("");
    setDateTo("");
    setPage(1);
  };

  const hasActiveFilters =
    search || statusFilter || dateFrom || dateTo;

  /* ─── Loading ─── */
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0e1525]">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border-2 border-[#c9a96e]/20" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#c9a96e] animate-spin" />
          </div>
          <p className="text-white/30 text-xs tracking-widest">LOADING</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  /* ─── Dashboard ─── */
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1a2744] via-[#1e2e4d] to-[#1a2744] shadow-xl relative overflow-hidden">
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a96e] to-[#a88b52] flex items-center justify-center shadow-lg shadow-[#c9a96e]/20">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h1
                className="text-white text-[16px] font-light tracking-[0.1em] leading-none"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                중앙하이츠
              </h1>
              <p className="text-[#c9a96e]/50 text-[9px] tracking-[0.2em] mt-0.5">
                MANAGEMENT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                fetchRegistrations();
                fetchStats();
              }}
              className="hidden sm:flex items-center gap-1.5 text-white/30 text-[11px] hover:text-white/60 transition-colors"
              title="새로고침"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              새로고침
            </button>
            <button
              onClick={handleLogout}
              className="text-white/30 text-[11px] hover:text-white/60 transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        {/* Stats */}
        {stats && <StatsCards stats={stats} />}

        {/* Filter Bar */}
        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/10 focus:border-[#1a2744]/20 focus:bg-white transition-all placeholder-gray-300"
                placeholder="이름 또는 연락처 검색..."
              />
            </div>

            {/* Status Filter - Chip Style */}
            <div className="flex items-center gap-1.5">
              {[
                { value: "", label: "전체" },
                { value: "new", label: "신규" },
                { value: "contacted", label: "상담" },
                { value: "completed", label: "계약" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setStatusFilter(opt.value);
                    setPage(1);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                    statusFilter === opt.value
                      ? "bg-[#1a2744] text-white shadow-sm"
                      : "bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Date Range */}
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => {
                  setDateFrom(e.target.value);
                  setPage(1);
                }}
                className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2744]/10"
              />
              <span className="text-gray-300 text-xs">~</span>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => {
                  setDateTo(e.target.value);
                  setPage(1);
                }}
                className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2744]/10"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="px-3.5 py-2 rounded-lg text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-1"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  초기화
                </button>
              )}
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-gradient-to-r from-[#c9a96e] to-[#b89a5e] text-white rounded-lg text-xs font-medium hover:from-[#d4b87a] hover:to-[#c9a96e] transition-all shadow-sm shadow-[#c9a96e]/20 flex items-center gap-1.5"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                CSV 내보내기
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Table Header Info */}
          <div className="px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-400">
                총{" "}
                <span className="font-bold text-[#1a2744] text-base">
                  {total}
                </span>
                <span className="text-gray-300 ml-0.5">건</span>
              </p>
              {hasActiveFilters && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#c9a96e]/10 text-[#c9a96e] text-[10px] font-medium">
                  필터 적용됨
                </span>
              )}
            </div>
            <p className="text-[11px] text-gray-300">
              {page} / {totalPages} 페이지
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-y border-gray-50">
                  {[
                    { key: "id", label: "#", w: "w-[60px]" },
                    { key: "name", label: "이름", w: "w-[100px]" },
                    { key: "phone", label: "연락처", w: "w-[140px]" },
                    { key: "", label: "문의사항", w: "" },
                    { key: "status", label: "상태", w: "w-[130px]" },
                    { key: "created_at", label: "등록일", w: "w-[140px]" },
                    { key: "", label: "", w: "w-[50px]" },
                  ].map((col, i) => (
                    <th
                      key={i}
                      className={`px-4 py-3 text-left text-[11px] font-semibold text-gray-400 tracking-wider ${col.w} ${col.key ? "cursor-pointer hover:text-[#1a2744] select-none transition-colors" : ""}`}
                      onClick={() => col.key && handleSort(col.key)}
                    >
                      <span className="flex items-center gap-1">
                        {col.label}
                        {col.key && sortBy === col.key && (
                          <svg
                            className={`w-3 h-3 text-[#c9a96e] transition-transform ${sortOrder === "asc" ? "rotate-180" : ""}`}
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
              <tbody>
                {registrations.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-20 text-center"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-gray-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-sm">
                          등록된 관심고객이 없습니다
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg, idx) => {
                    const st = STATUS_MAP[reg.status] || STATUS_MAP.new;
                    return (
                      <tr
                        key={reg.id}
                        className={`group hover:bg-[#f8f9fb] transition-colors cursor-pointer ${idx !== registrations.length - 1 ? "border-b border-gray-50" : ""}`}
                        onClick={() => setSelectedReg(reg)}
                      >
                        <td className="px-4 py-3.5 text-xs text-gray-300 font-mono">
                          {reg.id}
                        </td>
                        <td className="px-4 py-3.5">
                          <span className="text-sm font-semibold text-[#1a2744]">
                            {reg.name}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-sm text-gray-500 font-mono">
                          {reg.phone}
                        </td>
                        <td className="px-4 py-3.5 text-sm text-gray-400 max-w-[250px] truncate">
                          {reg.message || (
                            <span className="text-gray-200">-</span>
                          )}
                        </td>
                        <td className="px-4 py-3.5">
                          <select
                            value={reg.status}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleStatusChange(reg.id, e.target.value);
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className={`text-[11px] font-semibold pl-5 pr-6 py-1.5 rounded-full border appearance-none cursor-pointer focus:outline-none ${st.bg} ${st.color}`}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 20 20'%3E%3Cpath fill='%239ca3af' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 8px center",
                            }}
                          >
                            <option value="new">신규</option>
                            <option value="contacted">상담완료</option>
                            <option value="completed">계약완료</option>
                          </select>
                        </td>
                        <td className="px-4 py-3.5 text-xs text-gray-300">
                          {formatDate(reg.created_at)}
                        </td>
                        <td className="px-4 py-3.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(reg.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 text-gray-200 hover:text-red-400 transition-all"
                            title="삭제"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
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
              <div className="px-6 py-16 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">
                    등록된 관심고객이 없습니다
                  </p>
                </div>
              </div>
            ) : (
              registrations.map((reg, idx) => {
                const st = STATUS_MAP[reg.status] || STATUS_MAP.new;
                return (
                  <div
                    key={reg.id}
                    className={`p-4 active:bg-gray-50 transition-colors cursor-pointer ${idx !== registrations.length - 1 ? "border-b border-gray-50" : ""}`}
                    onClick={() => setSelectedReg(reg)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a2744] to-[#2a3a5c] flex items-center justify-center text-white text-[11px] font-bold">
                          {reg.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#1a2744] leading-none">
                            {reg.name}
                          </p>
                          <p className="text-[11px] text-gray-300 mt-0.5 font-mono">
                            {reg.phone}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${st.dot}`}
                        />
                        <span
                          className={`text-[11px] font-semibold ${st.color}`}
                        >
                          {st.label}
                        </span>
                      </div>
                    </div>
                    {reg.message && (
                      <p className="text-xs text-gray-400 bg-gray-50 rounded-lg px-3 py-2 mb-2 line-clamp-2">
                        {reg.message}
                      </p>
                    )}
                    <p className="text-[10px] text-gray-300">
                      {formatDateShort(reg.created_at)}
                    </p>
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-5 py-4 border-t border-gray-50 flex items-center justify-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-20 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
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
                    <span
                      key={`dot-${i}`}
                      className="w-8 h-8 flex items-center justify-center text-gray-200 text-xs"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                        page === p
                          ? "bg-[#1a2744] text-white shadow-sm"
                          : "text-gray-400 hover:bg-gray-50"
                      }`}
                    >
                      {p}
                    </button>
                  ),
                )}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-20 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedReg && (
        <DetailModal
          reg={selectedReg}
          onClose={() => setSelectedReg(null)}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
