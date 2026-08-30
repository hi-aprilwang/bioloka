"use client"

import React from "react"
import { SpotlightCard } from "@/components/react-bits/SpotlightCard"
import { CountUp } from "@/components/react-bits/CountUp"
import { EnvironmentalImpact } from "@/lib/types"
import { MathFormula } from "@/components/MathFormula"
import { Leaf, Flame, Droplets, Coins, TrendingUp } from "lucide-react"

interface ImpactScorecardProps {
  impact: EnvironmentalImpact
}

export function ImpactScorecard({ impact }: ImpactScorecardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {/* Metric 1: Total Organic Waste Diverted */}
      <SpotlightCard
        className="p-6 sm:p-7 border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 shadow-sm"
        spotlightColor="rgba(16, 185, 129, 0.15)"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Limbah TPA Dialihkan
          </span>
          <div className="rounded-lg bg-emerald-50 dark:bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Leaf className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            <CountUp to={impact.divertedWeightKg} decimals={0} duration={1.2} />
          </span>
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">kg</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>Dari 5 sentra Semarang</span>
        </div>
      </SpotlightCard>

      {/* Metric 2: Methane Avoided */}
      <SpotlightCard
        className="p-6 sm:p-7 border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 shadow-sm"
        spotlightColor="rgba(245, 158, 11, 0.15)"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Metana (<MathFormula math="\mathrm{CH_4}" />) Dihindari
          </span>
          <div className="rounded-lg bg-amber-50 dark:bg-amber-500/10 p-2 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Flame className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            <CountUp to={impact.methaneAvoidedKg} decimals={1} duration={1.2} />
          </span>
          <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
            kg <MathFormula math="\mathrm{CH_4}" />
          </span>
        </div>
        <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          Setara{" "}
          <span className="text-zinc-800 dark:text-zinc-200 font-medium">
            <CountUp to={impact.co2eAvoidedKg} decimals={0} /> kg <MathFormula math="\mathrm{CO_2e}" />
          </span>
        </div>
      </SpotlightCard>

      {/* Metric 3: Toxic Leachate Prevented */}
      <SpotlightCard
        className="p-6 sm:p-7 border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 shadow-sm"
        spotlightColor="rgba(59, 130, 246, 0.15)"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Air Lindi Dicegah
          </span>
          <div className="rounded-lg bg-blue-50 dark:bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Droplets className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            <CountUp
              to={impact.leachatePreventedLiters}
              decimals={1}
              duration={1.2}
            />
          </span>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Liter</span>
        </div>
        <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          Perlindungan akuifer pesisir rob
        </div>
      </SpotlightCard>

      {/* Metric 4: Circular Economic Value */}
      <SpotlightCard
        className="p-6 sm:p-7 border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 shadow-sm"
        spotlightColor="rgba(168, 85, 247, 0.15)"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Valuasi Bioproduk BSF
          </span>
          <div className="rounded-lg bg-purple-50 dark:bg-purple-500/10 p-2 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <Coins className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Rp{" "}
            <CountUp
              to={impact.economicOutputIdr}
              separator="."
              decimals={0}
              duration={1.2}
            />
          </span>
        </div>
        <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
          {impact.maggotProducedKg.toFixed(0)} kg pakan + {impact.fertilizerProducedKg.toFixed(0)} kg pupuk
        </div>
      </SpotlightCard>
    </div>
  )
}
