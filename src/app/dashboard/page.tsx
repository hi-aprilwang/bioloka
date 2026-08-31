"use client"

import React, { useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
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
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Bug,
  ArrowLeft,
} from "lucide-react"

function DashboardContent() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")
  const initialTab =
    tabParam && ["overview", "producers", "valorizers", "calculator"].includes(tabParam)
      ? tabParam
      : "overview"

  const [selectedTab, setSelectedTab] = useState<string | null>(null)
  const activeTab = selectedTab ?? initialTab
  const setActiveTab = (tab: string) => setSelectedTab(tab)

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
      notes: "Sisa buffet sarapan hotel siap jemput (nasi, sayur, lauk pauk matang terpilah).",
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

        {/* Tab 1: Dashboard Overview (Dinas Lingkungan & Pemantau Kota) */}
        {activeTab === "overview" && (
          <div className="space-y-10 sm:space-y-14">
            {/* Platform Control Banner */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-zinc-950/80 p-8 sm:p-10 lg:p-12 backdrop-blur-md relative overflow-hidden shadow-sm">
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="space-y-3.5 max-w-3xl">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight pb-1">
                    Pusat Sirkularitas Sisa Makanan &{" "}
                    <ShinyText
                      text="Perlindungan Eko-Kesehatan"
                      speed={4}
                      className="from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-200 dark:to-emerald-400"
                    />
                  </h1>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Pemantauan tonnase limbah TPA Jatibarang yang dialihkan, reduksi emisi metana standar IPCC, dan valuasi ekonomi sirkular Kota Semarang.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 shrink-0">
                  <BatchCreateDialog onAddBatch={handleAddBatch} />
                  <HowItWorksDialog className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm h-10 px-4 shadow-xs cursor-pointer transition-colors">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Cara Kerja Gerakan
                  </HowItWorksDialog>
                </div>
              </div>
            </div>

            {/* Global Impact Scorecards for DLH & City Overview */}
            <ImpactScorecard impact={aggregateImpact} />

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
                  className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm font-semibold px-3.5 py-1.5 self-start sm:self-auto"
                >
                  {batches.filter((b) => b.status === "available").length} Siap Dijemput
                </Badge>
              </div>

              <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
            </div>

            <ValorizerHubs />
          </div>
        )}

        {/* Tab 2: Producer Portal (Warung, Resto, Pasar) - Direct & Need-Focused */}
        {activeTab === "producers" && (
          <div className="space-y-8 sm:space-y-10">
            {/* Action-Oriented Header Strip for Warung/Resto */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/80 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-xl bg-emerald-500/10 p-2.5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                    Penyetor Sisa Dapur & Makanan
                  </h1>
                </div>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Catat sisa makanan dari warung, kafe, atau katering Anda. Peternak terdekat akan datang menjemput secara gratis sebelum sisa makanan basi.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <BatchCreateDialog onAddBatch={handleAddBatch} />
              </div>
            </div>

            {/* Quick Practical Stats for Producers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 space-y-1 shadow-xs">
                <span className="text-sm font-medium text-zinc-500 block">Biaya Penjemputan</span>
                <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block">Rp 0 (Gratis)</span>
                <span className="text-sm text-zinc-400 block">Langsung ke lokasi Anda</span>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 space-y-1 shadow-xs">
                <span className="text-sm font-medium text-zinc-500 block">Respon Penjemputan</span>
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-white block">&lt; 3 Jam</span>
                <span className="text-sm text-zinc-400 block">Sebelum sisa basi & bau</span>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 space-y-1 shadow-xs">
                <span className="text-sm font-medium text-zinc-500 block">Sisa Makanan Tersalurkan</span>
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-white block">{totalDivertedKg} kg</span>
                <span className="text-sm text-zinc-400 block">Bermanfaat jadi pakan ternak</span>
              </div>
            </div>

            {/* Live Batch List */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    Kiriman Aktif di Sekitar Semarang
                  </h2>
                  <p className="text-sm text-zinc-500 mt-0.5">
                    Pantau status penjemputan kiriman sisa dapur Anda dan tempat usaha lainnya
                  </p>
                </div>
              </div>

              <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
            </div>
          </div>
        )}

        {/* Tab 3: Valorizer Facility Portal (Peternak Maggot & Biogas) - Direct & Need-Focused */}
        {activeTab === "valorizers" && (
          <div className="space-y-8 sm:space-y-10">
            {/* Action-Oriented Header Strip for Peternak */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/80 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-xl bg-amber-500/10 p-2.5 border border-amber-500/30 text-amber-600 dark:text-amber-400">
                    <Bug className="h-6 w-6" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                    Bursa Pasokan Pakan Maggot & Biogas
                  </h1>
                </div>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Dapatkan pasokan pakan organik gratis dan segar dari warung, restoran, serta pasar di Semarang. Klaim batch terdekat untuk menekan biaya pakan hingga 60%.
                </p>
              </div>

              <div className="shrink-0">
                <Badge className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4 py-2 font-bold shadow-xs">
                  {batches.filter((b) => b.status === "available").length} Batch Siap Jemput
                </Badge>
              </div>
            </div>

            {/* Quick Practical Stats for Peternak */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 space-y-1 shadow-xs">
                <span className="text-sm font-medium text-zinc-500 block">Total Pasokan Tersedia</span>
                <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 block">
                  {batches.filter((b) => b.status === "available").reduce((s, b) => s + b.weightKg, 0)} kg
                </span>
                <span className="text-sm text-zinc-400 block">Pakan organik segar hari ini</span>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 space-y-1 shadow-xs">
                <span className="text-sm font-medium text-zinc-500 block">Penghematan Biaya Pakan</span>
                <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 block">Hingga 60%</span>
                <span className="text-sm text-zinc-400 block">Substitusi pelet & konsentrat</span>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 space-y-1 shadow-xs">
                <span className="text-sm font-medium text-zinc-500 block">Estimasi Hasil Maggot</span>
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-white block">
                  {(totalDivertedKg * 0.2).toFixed(0)} kg
                </span>
                <span className="text-sm text-zinc-400 block">Protein segar (FCR 5:1)</span>
              </div>
            </div>

            {/* Available Batches to Claim */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-8 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    Pilih & Klaim Pasokan Pakan Terdekat
                  </h2>
                  <p className="text-sm text-zinc-500 mt-0.5">
                    Klik &ldquo;Saya Siap Jemput&rdquo; pada kiriman yang sesuai dengan kapasitas peternakan Anda
                  </p>
                </div>
              </div>

              <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
            </div>

            {/* Verified Sentra Maggot Hubs */}
            <ValorizerHubs />
          </div>
        )}

        {/* Tab 4: Eco-Health Calculator */}
        {activeTab === "calculator" && <EcoHealthCalculator />}
      </div>

      {/* Footer with Generous Breathing Room */}
      <footer className="mt-24 sm:mt-32 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>BioLoka Semarang — Platform Sirkularitas Sisa Makanan & Eko-Kesehatan Perkotaan.</span>
          <span className="font-mono text-emerald-600 dark:text-emerald-400">Node Status: Online (Semarang Area)</span>
        </div>
      </footer>
    </main>
  )
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center text-sm text-zinc-500">
          Memuat Dashboard BioLoka Semarang...
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  )
}
