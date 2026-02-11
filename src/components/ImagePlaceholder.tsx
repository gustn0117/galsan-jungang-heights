"use client";

interface ImagePlaceholderProps {
  number: number;
  gradient?: string;
  height?: string;
  className?: string;
  label?: string;
  dark?: boolean;
}

export default function ImagePlaceholder({
  number,
  gradient = "gradient-hero",
  height = "h-[500px]",
  className = "",
  label,
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${gradient} ${height} flex flex-col items-center justify-center gap-3 relative ${className}`}
    >
      <div
        className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${
          dark
            ? "border-black/20 text-black/40"
            : "border-white/30 text-white/60"
        }`}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <span
        className={`text-base font-semibold tracking-wide ${
          dark ? "text-black/50" : "text-white/80"
        }`}
      >
        이미지 {number}번
      </span>
      {label && (
        <span
          className={`text-xs tracking-widest ${
            dark ? "text-black/30" : "text-white/50"
          }`}
        >
          {label}
        </span>
      )}
      <span
        className={`text-[11px] tracking-[3px] ${
          dark ? "text-black/25" : "text-white/40"
        }`}
      >
        이미지 예정
      </span>
    </div>
  );
}
