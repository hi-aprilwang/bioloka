"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShinyText } from "@/components/react-bits/ShinyText"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Leaf, Activity, Sparkles, Building2, Bug } from "lucide-react"
import { HowItWorksDialog } from "@/components/HowItWorksDialog"

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  onQuickDemo: () => void
}

export function Header({ activeTab, setActiveTab, onQuickDemo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:px-10">
        {/* Brand & Identity - Rich with Badges and Live Indicators */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Circu<span className="text-emerald-600 dark:text-emerald-400">Loop</span>
              </span>
              <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                Semarang Hub
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 hidden sm:block">
              Semarang Urban Organic Circularity & Eco-Health Platform
            </p>
          </div>
        </Link>

        {/* Navigation Tabs - Concise and Spacious */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900/80 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all ${
              activeTab === "overview"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Pusat Aliran
          </button>
          <button
            onClick={() => setActiveTab("producers")}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "producers"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Building2 className="h-4 w-4" />
            Warung & Penyetor
          </button>
          <button
            onClick={() => setActiveTab("valorizers")}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "valorizers"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Bug className="h-4 w-4" />
            Peternak Maggot
          </button>
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "calculator"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Activity className="h-4 w-4" />
            Cek Dampak Lingkungan
          </button>
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>TPA Jatibarang Live</span>
          </div>

          <HowItWorksDialog />

          <Button
            size="default"
            onClick={onQuickDemo}
            className="h-9 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-sm gap-1.5 font-medium transition-all shadow-xs"
          >
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <ShinyText text="Simulasi Cepat" speed={4} />
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
