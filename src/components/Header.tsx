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
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
            <Leaf className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white block leading-tight">
              Bio<span className="text-emerald-600 dark:text-emerald-400">Loka</span>
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium block leading-none mt-0.5">
              Kota Semarang
            </span>
          </div>
        </Link>

        {/* Navigation Tabs - Clean & Spacious */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900/80 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all ${
              activeTab === "overview"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Ikhtisar
          </button>
          <button
            onClick={() => setActiveTab("producers")}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "producers"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            Penyetor
          </button>
          <button
            onClick={() => setActiveTab("valorizers")}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "valorizers"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Bug className="h-3.5 w-3.5" />
            Peternak BSF
          </button>
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === "calculator"
                ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Activity className="h-3.5 w-3.5" />
            Kalkulator
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
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
