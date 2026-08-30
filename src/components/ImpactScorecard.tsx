"use client"

import React from "react"
import { SpotlightCard } from "@/components/react-bits/SpotlightCard"
import { CountUp } from "@/components/react-bits/CountUp"
import { EnvironmentalImpact } from "@/lib/types"
import { Leaf, Flame, Droplets, Coins, TrendingUp } from "lucide-react"

interface ImpactScorecardProps {
  impact: EnvironmentalImpact
}

export function ImpactScorecard({ impact }: ImpactScorecardProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {/* Metric 1: Total Organic Waste Diverted */}
      <SpotlightCard
        className="p-5 border-zinc-800 bg-zinc-900/60"
        spotlightColor="rgba(16, 185, 129, 0.15)"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-400">
            Limbah TPA Dialihkan
          </span>
          <div className="rounded-md bg-emerald-500/10 p-1.5 text-emerald-400 border border-emerald-500/20">
            <Leaf className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="text-2xl font-bold tracking-tight text-white">
            <CountUp to={impact.divertedWeightKg} decimals={0} duration={1.2} />
          </span>
          <span className="text-sm font-semibold text-emerald-400">kg</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-zinc-400">
          <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
          <span>Dari 5 sentra Semarang</span>
        </div>
      </SpotlightCard>

      {/* Metric 2: Methane Avoided */}
      <SpotlightCard
        className="p-5 border-zinc-800 bg-zinc-900/60"
        spotlightColor="rgba(245, 158, 11, 0.15)"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-400">
            Metana ($CH_4$) Dihindari
          </span>
          <div className="rounded-md bg-amber-500/10 p-1.5 text-amber-400 border border-amber-500/20">
            <Flame className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="text-2xl font-bold tracking-tight text-white">
            <CountUp to={impact.methaneAvoidedKg} decimals={1} duration={1.2} />
          </span>
          <span className="text-sm font-semibold text-amber-400">kg CH₄</span>
        </div>
        <div className="mt-2 text-sm text-zinc-400">
          Setara{" "}
          <span className="text-zinc-200 font-medium">
            <CountUp to={impact.co2eAvoidedKg} decimals={0} /> kg CO₂e
          </span>
        </div>
      </SpotlightCard>

      {/* Metric 3: Toxic Leachate Prevented */}
      <SpotlightCard
        className="p-5 border-zinc-800 bg-zinc-900/60"
        spotlightColor="rgba(59, 130, 246, 0.15)"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-400">
            Air Lindi Dicegah
          </span>
          <div className="rounded-md bg-blue-500/10 p-1.5 text-blue-400 border border-blue-500/20">
            <Droplets className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="text-2xl font-bold tracking-tight text-white">
            <CountUp
              to={impact.leachatePreventedLiters}
              decimals={1}
              duration={1.2}
            />
          </span>
          <span className="text-sm font-semibold text-blue-400">Liter</span>
        </div>
        <div className="mt-2 text-sm text-zinc-400">
          Perlindungan akuifer pesisir rob
        </div>
      </SpotlightCard>

      {/* Metric 4: Circular Economic Value */}
      <SpotlightCard
        className="p-5 border-zinc-800 bg-zinc-900/60"
        spotlightColor="rgba(168, 85, 247, 0.15)"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-400">
            Valuasi Bioproduk BSF
          </span>
          <div className="rounded-md bg-purple-500/10 p-1.5 text-purple-400 border border-purple-500/20">
            <Coins className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="text-xl font-bold tracking-tight text-white">
            Rp{" "}
            <CountUp
              to={impact.economicOutputIdr}
              separator="."
              decimals={0}
              duration={1.2}
            />
          </span>
        </div>
        <div className="mt-2 text-sm text-zinc-400">
          {impact.maggotProducedKg.toFixed(0)} kg pakan + {impact.fertilizerProducedKg.toFixed(0)} kg pupuk
        </div>
      </SpotlightCard>
    </div>
  )
}
