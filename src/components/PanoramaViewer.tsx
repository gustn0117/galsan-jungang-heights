"use client";

import { useEffect, useRef, useState } from "react";

interface PanoramaViewerProps {
  src: string;
  className?: string;
}

declare global {
  interface Window {
    pannellum: {
      viewer: (
        container: string | HTMLElement,
        config: Record<string, unknown>
      ) => {
        destroy: () => void;
        getYaw: () => number;
        getPitch: () => number;
        getHfov: () => number;
        toggleFullscreen: () => void;
      };
    };
  }
}

let pannellumLoaded = false;
let pannellumLoading = false;
const loadCallbacks: (() => void)[] = [];

function loadPannellum(): Promise<void> {
  if (pannellumLoaded) return Promise.resolve();

  return new Promise((resolve) => {
    if (pannellumLoading) {
      loadCallbacks.push(resolve);
      return;
    }
    pannellumLoading = true;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
    script.onload = () => {
      pannellumLoaded = true;
      pannellumLoading = false;
      resolve();
      loadCallbacks.forEach((cb) => cb());
      loadCallbacks.length = 0;
    };
    document.head.appendChild(script);
  });
}

export default function PanoramaViewer({ src, className = "" }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<ReturnType<typeof window.pannellum.viewer> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let destroyed = false;

    loadPannellum().then(() => {
      if (destroyed || !containerRef.current) return;

      if (viewerRef.current) {
        viewerRef.current.destroy();
      }

      viewerRef.current = window.pannellum.viewer(containerRef.current, {
        type: "equirectangular",
        panorama: src,
        autoLoad: true,
        autoRotate: -1.5,
        compass: false,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        mouseZoom: true,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        friction: 0.15,
        yaw: 0,
        pitch: 0,
        hotSpotDebug: false,
        sceneFadeDuration: 500,
      });

      setLoading(false);
    });

    return () => {
      destroyed = true;
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [src]);

  const handleFullscreen = () => {
    if (viewerRef.current) {
      viewerRef.current.toggleFullscreen();
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div ref={containerRef} className="w-full h-full" />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy/90">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            <p className="text-white/50 text-[13px]">파노라마 로딩중...</p>
          </div>
        </div>
      )}
      <button
        onClick={handleFullscreen}
        className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100"
        title="전체화면"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      </button>
    </div>
  );
}
