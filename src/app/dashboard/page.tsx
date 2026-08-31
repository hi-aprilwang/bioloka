"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/Header"
import { GridPattern } from "@/components/react-bits/GridPattern"
import { ShinyText } from "@/components/react-bits/ShinyText"
import { ImpactScorecard } from "@/components/ImpactScorecard"
import { BatchList } from "@/components/BatchList"
import { BatchCreateDialog } from "@/components/BatchCreateDialog"
import { EcoHealthCalculator } from "@/components/EcoHealthCalculator"
import { ValorizerHubs } from "@/components/ValorizerHubs"
import { HowItWorksDialog } from "@/components/HowItWorksDialog"
import { INITIAL_BATCHES, calculateEnvironmentalImpact } from "@/lib/circuloop-data"
import { WasteBatch } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Bug,
  Activity,
  ArrowLeft,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [batches, setBatches] = useState<WasteBatch[]>(INITIAL_BATCHES)
  const [simulationAlert, setSimulationAlert] = useState<string | null>(null)

  // Aggregate impact of all batches in system
  const totalDivertedKg = batches.reduce((sum, b) => sum + b.weightKg, 0)
  const aggregateImpact = calculateEnvironmentalImpact(totalDivertedKg)

  const handleAddBatch = (newBatch: WasteBatch) => {
    setBatches([newBatch, ...batches])
    setSimulationAlert(
      `Batch baru dari ${newBatch.producerName} (${newBatch.weightKg} kg) berhasil ditambahkan! Metrik emisi TPA otomatis terbarui.`
    )
    setTimeout(() => setSimulationAlert(null), 5000)
  }

  const handleClaimBatch = (batchId: string) => {
    setBatches((prev) =>
      prev.map((b) =>
        b.id === batchId
          ? {
              ...b,
              status: "matched",
              claimedBy: "BioBSF Diponegoro Urban Farm",
            }
          : b
      )
    )
    setSimulationAlert(
      `Batch telah berhasil diklaim oleh BioBSF Tembalang! Rute penjemputan < 24 jam telah dijadwalkan.`
    )
    setTimeout(() => setSimulationAlert(null), 5000)
  }

  // Quick preset for judging demonstration
  const handleQuickDemo = () => {
    const demoBatch: WasteBatch = {
      id: `judge-${Date.now().toString().slice(-3)}`,
      producerName: "Hotel Grand Candi Semarang",
      organizationType: "Hotel",
      locationName: "Jl. Sisingamangaraja No. 16",
      district: "Candisari",
      lat: -7.012,
      lng: 110.421,
      category: "cooked_food",
      weightKg: 240,
      readyTime: "Hari ini, 15:00 WIB",
      expiryHours: 6,
      status: "available",
      notes: "Simulasi Uji Langsung Dewan Juri ANFORCOM 2026.",
    }
    handleAddBatch(demoBatch)
  }

  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500/20 font-sans transition-colors duration-200">
      {/* React Bits Subtle Grid Pattern Background */}
      <GridPattern
        width={40}
        height={40}
        className="stroke-zinc-300/60 dark:stroke-zinc-800/40 fill-zinc-200/20 dark:fill-zinc-900/10 opacity-70"
      />

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onQuickDemo={handleQuickDemo}
      />

      {/* Breadcrumb & Navigation Back */}
      <div className="mx-auto max-w-7xl px-6 pt-6 sm:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Beranda Utama</span>
        </Link>
      </div>

      {/* Main Container with Generous Breathing Room */}
      <div className="relative mx-auto max-w-7xl px-6 py-6 sm:px-10 sm:py-10 space-y-12 sm:space-y-16">
        {/* Simulation Feedback Alert */}
        {simulationAlert && (
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/70 p-4.5 text-sm text-emerald-900 dark:text-emerald-200 flex items-center justify-between shadow-xl animate-in fade-in slide-in-from-top-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{simulationAlert}</span>
            </div>
            <button
              onClick={() => setSimulationAlert(null)}
              className="text-emerald-600 dark:text-emerald-400 hover:opacity-80 font-bold ml-3 text-sm px-2 py-1"
            >
              ✕
            </button>
          </div>
        )}

        {/* Platform Control Banner */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-zinc-950/80 p-8 sm:p-12 lg:p-14 backdrop-blur-md relative overflow-hidden shadow-sm">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge
                  variant="outline"
                  className="border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm px-3.5 py-1"
                >
                  Subtema: Smart Waste & Eco-Health
                </Badge>
                <Badge
                  variant="outline"
                  className="border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm px-3.5 py-1"
                >
                  Wilayah: Kota Semarang
                </Badge>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Mitigasi TPA Jatibarang Aktif</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Penyelamatan Makanan &{" "}
                <ShinyText
                  text="Perlindungan Lingkungan Semarang"
                  speed={4}
                  className="from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-200 dark:to-emerald-400"
                />
              </h1>

              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                Salurkan sisa bahan makanan dari warung, kafe, pasar Johar, dan rumah makan Anda langsung
                ke peternak maggot BSF & biogas lokal. Bersama cegah asap kebakaran TPA Jatibarang dan
                selamatkan air tanah pesisir Semarang dari rembesan air lindi busuk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3.5 shrink-0">
              <BatchCreateDialog onAddBatch={handleAddBatch} />
              <HowItWorksDialog className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm h-11 px-5 shadow-sm cursor-pointer transition-colors">
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Cara Kerja Gerakan
              </HowItWorksDialog>
              <Button
                variant="outline"
                onClick={() => setActiveTab("calculator")}
                className="border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm h-11 px-5 shadow-sm"
              >
                <Activity className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Hitung Manfaat Lingkungan
              </Button>
            </div>
          </div>
        </div>

        {/* Global Impact Scorecards */}
        <ImpactScorecard impact={aggregateImpact} />

        {/* Tab 1: Dashboard Overview */}
        {activeTab === "overview" && (
          <div className="space-y-10 sm:space-y-14">
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/40 p-8 sm:p-10 space-y-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    Kiriman Sisa Makanan yang Siap Dijemput (Semarang Hari Ini)
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Daftar sisa dapur bersih yang dapat langsung diambil oleh peternak maggot & instalasi biogas
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm font-mono px-3.5 py-1.5 self-start sm:self-auto"
                >
                  {batches.filter((b) => b.status === "available").length} Siap Dijemput
                </Badge>
              </div>

              <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
            </div>

            <ValorizerHubs />
          </div>
        )}

        {/* Tab 2: Producer Portal (Hotel/Pasar/Warung) */}
        {activeTab === "producers" && (
          <div className="space-y-10 sm:space-y-14">
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-8 sm:p-10 space-y-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    Penyetor Sisa Makanan (Warung, Kafe, Katering & Pasar)
                  </h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Salurkan sisa dapur bersih dan unduh Lencana Usaha Hijau Kota Semarang
                  </p>
                </div>
                <BatchCreateDialog onAddBatch={handleAddBatch} />
              </div>

              {/* ESG Badge Demo Card */}
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-emerald-500/10 p-3.5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <ShieldCheck className="h-9 w-9" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-base font-bold text-zinc-900 dark:text-white">
                        Lencana Usaha Ramah Lingkungan Kota Semarang
                      </span>
                      <Badge className="bg-emerald-600 text-white dark:bg-emerald-500 dark:text-zinc-950 text-sm font-bold px-3 py-0.5">
                        WARUNG HIJAU
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                      Telah menyelamatkan {aggregateImpact.divertedWeightKg} kg makanan dari pembusukan di TPA Jatibarang.
                    </p>
                  </div>
                </div>
                <Button
                  size="default"
                  variant="outline"
                  onClick={() => alert("Lencana digital 'Warung Hijau Semarang' siap diunduh dan dipajang di tempat usaha Anda.")}
                  className="border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 text-sm h-10 px-5 shrink-0 self-start lg:self-auto"
                >
                  Unduh Lencana Usaha
                </Button>
              </div>

              <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
            </div>
          </div>
        )}

        {/* Tab 3: Valorizer Facility Portal */}
        {activeTab === "valorizers" && (
          <div className="space-y-10 sm:space-y-14">
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-8 sm:p-10 space-y-8 shadow-sm">
              <div className="pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
                  <Bug className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  Peternak Maggot BSF & Pengolah Biogas Semarang
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Temukan pasokan sisa makanan segar terdekat untuk pakan maggot berprotein tinggi dan biogas
                </p>
              </div>

              <ValorizerHubs />

              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80">
                <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
                  Daftar Kiriman yang Siap Dijemput Hari Ini:
                </h3>
                <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Eco-Health Calculator */}
        {activeTab === "calculator" && <EcoHealthCalculator />}
      </div>

      {/* Footer with Generous Breathing Room */}
      <footer className="mt-24 sm:mt-32 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12 sm:py-16 text-center text-sm text-zinc-500 space-y-2">
        <p>
          CircuLoop Semarang — Dikembangkan untuk Diponegoro Software Development Competition (DSDC) ANFORCOM 2026.
        </p>
        <p className="text-sm text-zinc-500">
          HMIF Universitas Diponegoro • Tema: Circular Economy for Eco-Health Cities
        </p>
      </footer>
    </main>
  )
}
