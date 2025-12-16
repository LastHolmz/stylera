"use client";

import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [inView, setInView] = useState(true);
  const [shouldRun, setShouldRun] = useState(true);

  const colors = useMemo(
    () => ["#1e1d56", "#473367", "#7c3f98", "#46469d", "#3057a7"],
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const saveData = (navigator as any).connection?.saveData === true;

    setShouldRun(!(reduced || coarse || saveData));
  }, []);

  useEffect(() => {
    if (!shouldRun) return;

    const run = () => setMounted(true);

    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(run, { timeout: 1500 });
      return () => (window as any).cancelIdleCallback(id);
    }

    // ✅ use global setTimeout/clearTimeout (fixes your TS error)
    const t = setTimeout(run, 800);
    return () => clearTimeout(t);
  }, [shouldRun]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const speed = mounted && shouldRun && inView ? (isActive ? 0.12 : 0.04) : 0;

  return (
    <div
      ref={containerRef}
      className="bg-[#1e1d56] relative overflow-hidden min-h-[90vh] sm:min-h-80"
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
    >
      {mounted && shouldRun && (
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={colors}
          speed={speed}
        />
      )}

      {children}
    </div>
  );
}
