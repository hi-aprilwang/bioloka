"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShinyText } from "@/components/react-bits/ShinyText"
import { Leaf, Activity, Sparkles, Building2, Bug } from "lucide-react"

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  onQuickDemo: () => void
}

export function Header({ activeTab, setActiveTab, onQuickDemo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-emerald-400">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white">
                Circu<span className="text-emerald-400">Loop</span>
              </span>
              <Badge
                variant="outline"
                className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm px-2.5 py-0.5 font-medium tracking-wide"
              >
                DSDC ANFORCOM 2026
              </Badge>
            </div>
            <p className="text-sm text-zinc-400 hidden sm:block">
              Semarang Urban Organic Circularity & Eco-Health Platform
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 p-1 rounded-lg border border-zinc-800">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
              activeTab === "overview"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("producers")}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "producers"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Building2 className="h-4 w-4" />
            Produsen (Hotel/Pasar)
          </button>
          <button
            onClick={() => setActiveTab("valorizers")}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "valorizers"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Bug className="h-4 w-4" />
            Biokonversi (BSF/Biogas)
          </button>
          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "calculator"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Activity className="h-4 w-4" />
            Kalkulator Eko-Kesehatan
          </button>
        </nav>

        {/* Quick Action & Judge Mode */}
        <div className="flex items-center gap-2.5">
          <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-1 text-sm text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>TPA Jatibarang Mitigation</span>
          </div>

          <Button
            size="default"
            onClick={onQuickDemo}
            className="h-8 bg-zinc-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/50 hover:text-emerald-200 text-sm gap-1.5 font-medium transition-all shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <ShinyText text="Simulasi Juri" speed={4} />
          </Button>
        </div>
      </div>
    </header>
  )
}
