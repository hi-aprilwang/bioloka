"use client"

import React, { useState } from "react"
import { SpotlightCard } from "@/components/react-bits/SpotlightCard"
import { CountUp } from "@/components/react-bits/CountUp"
import { calculateEnvironmentalImpact } from "@/lib/circuloop-data"
import {
  Calculator,
  Flame,
  Droplets,
  Coins,
  Info,
  Scale,
} from "lucide-react"

export function EcoHealthCalculator() {
  const [dailyWasteKg, setDailyWasteKg] = useState<number>(500)
  const [timeframe, setTimeframe] = useState<"day" | "month" | "year">("month")

  const multiplier = timeframe === "day" ? 1 : timeframe === "month" ? 30 : 365
  const totalKg = dailyWasteKg * multiplier
  const impact = calculateEnvironmentalImpact(totalKg)

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header & Introduction */}
      <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-8 sm:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3.5">
              <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400 border border-emerald-500/20">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Kalkulator Simulasi Dampak Eko-Kesehatan & Sirkularitas
                </h2>
                <p className="text-sm text-zinc-400 mt-1">
                  Didasarkan pada standar IPCC Tier 1 Waste Model & Hidrologi Air Lindi Tropis
                </p>
              </div>
            </div>
          </div>

          {/* Timeframe Selector */}
          <div className="flex items-center gap-1.5 bg-zinc-950 p-2 rounded-xl border border-zinc-800 text-sm self-start md:self-auto">
            <button
              onClick={() => setTimeframe("day")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                timeframe === "day"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Harian (1 Hari)
            </button>
            <button
              onClick={() => setTimeframe("month")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                timeframe === "month"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Bulanan (30 Hari)
            </button>
            <button
              onClick={() => setTimeframe("year")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                timeframe === "year"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Tahunan (365 Hari)
            </button>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 space-y-5">
          <div className="flex items-center justify-between">
            <label className="text-base font-semibold text-zinc-200 flex items-center gap-2.5">
              <Scale className="h-5 w-5 text-emerald-400" />
              Volume Sampah Organik yang Dialihkan per Hari:
            </label>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-emerald-400">
                {dailyWasteKg.toLocaleString()}
              </span>
              <span className="text-base font-medium text-zinc-400">kg / hari</span>
            </div>
          </div>

          <input
            type="range"
            min="50"
            max="10000"
            step="50"
            value={dailyWasteKg}
            onChange={(e) => setDailyWasteKg(Number(e.target.value))}
            className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 my-2"
          />

          <div className="flex justify-between text-sm text-zinc-400 font-mono pt-1">
            <span>50 kg (1 Cafe Kecil)</span>
            <span>500 kg (1 Hotel Bintang 4)</span>
            <span>2.500 kg (1 Blok Pasar Johar)</span>
            <span>10.000 kg (Kolektif Wilayah)</span>
          </div>
        </div>
      </div>

      {/* Calculated Results Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Methane Mitigation */}
        <SpotlightCard
          className="p-7 sm:p-8 border-zinc-800/90 bg-zinc-900/60 shadow-sm flex flex-col justify-between"
          spotlightColor="rgba(245, 158, 11, 0.15)"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-400">
                Mitigasi Gas Rumah Kaca
              </span>
              <div className="rounded-lg bg-amber-500/10 p-2 text-amber-400 border border-amber-500/20">
                <Flame className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp to={impact.methaneAvoidedKg} decimals={1} duration={0.8} />
              </span>
              <span className="ml-2.5 text-sm font-bold text-amber-400">kg CH₄</span>
            </div>
            <div className="mt-2 text-sm text-zinc-400">
              Setara dengan{" "}
              <span className="text-amber-300 font-semibold">
                {impact.co2eAvoidedKg.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}{" "}
                kg CO₂e
              </span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-800 text-sm text-zinc-400 leading-relaxed">
            <span className="text-zinc-300 font-semibold block mb-1">
              Efek Eko-Kesehatan:
            </span>
            Menurunkan saturasi gas metana eksplosif di zona aktif TPA Jatibarang
            Semarang dan polusi bau hidrogen sulfida.
          </div>
        </SpotlightCard>

        {/* Card 2: Groundwater Leachate Protection */}
        <SpotlightCard
          className="p-7 sm:p-8 border-zinc-800/90 bg-zinc-900/60 shadow-sm flex flex-col justify-between"
          spotlightColor="rgba(59, 130, 246, 0.15)"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-400">
                Proteksi Sanitasi Air Tanah
              </span>
              <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400 border border-blue-500/20">
                <Droplets className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp
                  to={impact.leachatePreventedLiters}
                  decimals={0}
                  duration={0.8}
                />
              </span>
              <span className="ml-2.5 text-sm font-bold text-blue-400">Liter Air Lindi</span>
            </div>
            <div className="mt-2 text-sm text-zinc-400">
              Mencegah rembesan BOD/COD beracun ke sumur
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-800 text-sm text-zinc-400 leading-relaxed">
            <span className="text-zinc-300 font-semibold block mb-1">
              Efek Eko-Kesehatan:
            </span>
            Melindungi akuifer dangkal pemukiman pesisir Semarang Utara dari
            pencemaran air lindi saat banjir rob.
          </div>
        </SpotlightCard>

        {/* Card 3: Circular Economy Valorization */}
        <SpotlightCard
          className="p-7 sm:p-8 border-zinc-800/90 bg-zinc-900/60 shadow-sm flex flex-col justify-between"
          spotlightColor="rgba(168, 85, 247, 0.15)"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-400">
                Valuasi Ekonomi Baru (BSF)
              </span>
              <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400 border border-purple-500/20">
                <Coins className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                Rp{" "}
                <CountUp
                  to={impact.economicOutputIdr}
                  separator="."
                  decimals={0}
                  duration={0.8}
                />
              </span>
            </div>
            <div className="mt-2 text-sm text-zinc-400">
              {impact.maggotProducedKg.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}{" "}
              kg larva maggot +{" "}
              {impact.fertilizerProducedKg.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}{" "}
              kg kasgot
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-800 text-sm text-zinc-400 leading-relaxed">
            <span className="text-zinc-300 font-semibold block mb-1">
              Sirkularitas Sumber Daya:
            </span>
            Substitusi pakan protein impor untuk peternak lele/unggas lokal Jawa
            Tengah dan pupuk organik perkotaan.
          </div>
        </SpotlightCard>
      </div>

      {/* Scientific Transparency Box (Impresses University Judges) */}
      <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950 p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-zinc-900 p-3 text-zinc-400 border border-zinc-800 shrink-0">
            <Info className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold text-zinc-200">
              Transparansi Metodologi Matematika (Bebas Overclaim)
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Perhitungan di atas menggunakan model resmi IPCC Tier 1 untuk sampah organik kota:{" "}
              <code className="text-emerald-300 bg-zinc-900 px-2 py-0.5 rounded font-mono text-sm border border-zinc-800">
                CH₄ = W × DOC(0.15) × DOCf(0.50) × F(0.50) × (16/12) × MCF(0.8) = 0.040 kg/kg
              </code>
              . Kadar air perkolasi lindi diasumsikan 65% dengan faktor kompaksi 0.60. Data ini
              dapat diuji validitasnya secara terbuka.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
