"use client"

import React, { useState } from "react"
import { Header } from "@/components/Header"
import { GridPattern } from "@/components/react-bits/GridPattern"
import { ShinyText } from "@/components/react-bits/ShinyText"
import { ImpactScorecard } from "@/components/ImpactScorecard"
import { BatchList } from "@/components/BatchList"
import { BatchCreateDialog } from "@/components/BatchCreateDialog"
import { EcoHealthCalculator } from "@/components/EcoHealthCalculator"
import { ValorizerHubs } from "@/components/ValorizerHubs"
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
} from "lucide-react"

export default function Home() {
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
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20">
      {/* React Bits Subtle Grid Pattern Background */}
      <GridPattern
        width={36}
        height={36}
        className="stroke-zinc-800/40 fill-zinc-900/10 opacity-70"
      />

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onQuickDemo={handleQuickDemo}
      />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-6">
        {/* Simulation Feedback Alert */}
        {simulationAlert && (
          <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/60 p-3.5 text-sm text-emerald-200 flex items-center justify-between shadow-lg animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>{simulationAlert}</span>
            </div>
            <button
              onClick={() => setSimulationAlert(null)}
              className="text-emerald-400 hover:text-emerald-200 font-bold ml-2 text-sm"
            >
              ✕
            </button>
          </div>
        )}

        {/* Hero Banner Section */}
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950/80 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-sm px-3 py-1"
                >
                  Subtema: Smart Waste & Eco-Health
                </Badge>
                <Badge
                  variant="outline"
                  className="border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm px-3 py-1"
                >
                  Pilot Area: Kota Semarang
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Simbiosis Sirkular Organik &{" "}
                <ShinyText
                  text="Pencegahan Bencana Eko-Kesehatan"
                  speed={4}
                  className="from-emerald-400 via-teal-200 to-emerald-400"
                />
              </h1>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Menghubungkan limbah organik komersial (hotel, restoran, pasar Johar) dengan
                pusat biokonversi Maggot BSF & biogas lokal. Mencegah timbunan gas metana
                di TPA Jatibarang dan rembesan air lindi beracun ke air tanah warga pesisir.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <BatchCreateDialog onAddBatch={handleAddBatch} />
              <Button
                variant="outline"
                onClick={() => setActiveTab("calculator")}
                className="border-zinc-700 bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 text-sm h-10 px-4"
              >
                <Activity className="mr-2 h-4 w-4 text-emerald-400" />
                Uji Model Matematika
              </Button>
            </div>
          </div>
        </div>

        {/* Global Impact Scorecards */}
        <ImpactScorecard impact={aggregateImpact} />

        {/* Tab 1: Dashboard Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-white tracking-tight">
                    Bursa Sirkular Limbah Organik Semarang (Live Feed)
                  </h2>
                  <p className="text-sm text-zinc-400">
                    Aliran limbah terverifikasi yang siap diserap fasilitas biokonversi lokal
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-mono px-3 py-1"
                >
                  {batches.filter((b) => b.status === "available").length} Batch Tersedia
                </Badge>
              </div>

              <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
            </div>

            <ValorizerHubs />
          </div>
        )}

        {/* Tab 2: Producer Portal (Hotel/Pasar) */}
        {activeTab === "producers" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-emerald-400" />
                    Portal Mitra Penghasil Limbah (Hotel / Resto / Pasar)
                  </h2>
                  <p className="text-sm text-zinc-400">
                    Kelola pengalihan limbah dapur dan unduh Sertifikat Pengalihan Karbon (ESG Badge)
                  </p>
                </div>
                <BatchCreateDialog onAddBatch={handleAddBatch} />
              </div>

              {/* ESG Badge Demo Card */}
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="rounded-xl bg-emerald-500/10 p-3 border border-emerald-500/30 text-emerald-400">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-white">
                        Sertifikat Kepatuhan Sirkular Kota Semarang
                      </span>
                      <Badge className="bg-emerald-500 text-zinc-950 text-sm font-bold px-2.5 py-0.5">
                        VERIFIED ESG
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400 mt-1">
                      Telah mengalihkan {aggregateImpact.divertedWeightKg} kg limbah organik dari TPA Jatibarang.
                    </p>
                  </div>
                </div>
                <Button
                  size="default"
                  variant="outline"
                  onClick={() => alert("Sertifikat digital ISO 14001 / ESG siap diunduh dalam format PDF.")}
                  className="border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/40 text-sm shrink-0"
                >
                  Unduh Sertifikat PDF
                </Button>
              </div>

              <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
            </div>
          </div>
        )}

        {/* Tab 3: Valorizer Facility Portal */}
        {activeTab === "valorizers" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Bug className="h-5 w-5 text-emerald-400" />
                    Portal Fasilitas Biokonversi Maggot BSF & Biogas
                  </h2>
                  <p className="text-sm text-zinc-400">
                    Cari batch limbah organik segar terdekat di Semarang untuk pakan larva dan reaktor biogas
                  </p>
                </div>
              </div>

              <ValorizerHubs />

              <div className="pt-5 border-t border-zinc-800">
                <h3 className="text-base font-semibold text-zinc-200 mb-3">
                  Daftar Batch yang Siap Diklaim untuk Wilayah Operasional Anda:
                </h3>
                <BatchList batches={batches} onClaimBatch={handleClaimBatch} />
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Eco-Health Calculator */}
        {activeTab === "calculator" && <EcoHealthCalculator />}
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-zinc-800 bg-zinc-950 py-6 text-center text-sm text-zinc-500">
        <p>
          CircuLoop Semarang — Dikembangkan untuk Diponegoro Software Development Competition (DSDC) ANFORCOM 2026.
        </p>
        <p className="mt-1 text-sm text-zinc-600">
          HMIF Universitas Diponegoro • Tema: Circular Economy for Eco-Health Cities
        </p>
      </footer>
    </main>
  )
}
