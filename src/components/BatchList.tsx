"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WasteBatch, WasteCategory } from "@/lib/types"
import { calculateEnvironmentalImpact } from "@/lib/circuloop-data"
import { MathFormula } from "@/components/MathFormula"
import {
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Flame,
  Droplets,
  Building2,
  Utensils,
  Store,
  Hospital,
} from "lucide-react"

interface BatchListProps {
  batches: WasteBatch[]
  onClaimBatch: (batchId: string) => void
}

export function BatchList({ batches, onClaimBatch }: BatchListProps) {
  const [filterCategory, setFilterCategory] = useState<string>("all")

  const filteredBatches = batches.filter((b) => {
    if (filterCategory === "all") return true
    return b.category === filterCategory
  })

  const getOrgIcon = (type: WasteBatch["organizationType"]) => {
    switch (type) {
      case "Hotel":
        return <Building2 className="h-4 w-4" />
      case "Restoran":
        return <Utensils className="h-4 w-4" />
      case "Pasar Tradisional":
        return <Store className="h-4 w-4" />
      case "Rumah Sakit":
        return <Hospital className="h-4 w-4" />
      default:
        return <Building2 className="h-4 w-4" />
    }
  }

  const getCategoryLabel = (cat: WasteCategory) => {
    switch (cat) {
      case "raw_produce":
        return "Sayur & Buah Mentah"
      case "cooked_food":
        return "Sisa Makanan Matang"
      case "bakery_grain":
        return "Ampas Roti / Kedelai"
      case "spent_coffee":
        return "Ampas Kopi"
      default:
        return cat
    }
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
        <div className="flex items-center gap-2.5 overflow-x-auto text-sm">
          <button
            onClick={() => setFilterCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg transition-all font-medium ${
              filterCategory === "all"
                ? "bg-white dark:bg-zinc-800 text-emerald-700 dark:text-emerald-400 border border-zinc-300 dark:border-emerald-500/30 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Semua Aliran ({batches.length})
          </button>
          <button
            onClick={() => setFilterCategory("raw_produce")}
            className={`px-3.5 py-1.5 rounded-lg transition-all font-medium ${
              filterCategory === "raw_produce"
                ? "bg-white dark:bg-zinc-800 text-emerald-700 dark:text-emerald-400 border border-zinc-300 dark:border-emerald-500/30 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Sayur & Buah Pasar
          </button>
          <button
            onClick={() => setFilterCategory("cooked_food")}
            className={`px-3.5 py-1.5 rounded-lg transition-all font-medium ${
              filterCategory === "cooked_food"
                ? "bg-white dark:bg-zinc-800 text-emerald-700 dark:text-emerald-400 border border-zinc-300 dark:border-emerald-500/30 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Makanan Dapur Hotel/Resto
          </button>
          <button
            onClick={() => setFilterCategory("bakery_grain")}
            className={`px-3.5 py-1.5 rounded-lg transition-all font-medium ${
              filterCategory === "bakery_grain"
                ? "bg-white dark:bg-zinc-800 text-emerald-700 dark:text-emerald-400 border border-zinc-300 dark:border-emerald-500/30 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Ampas Kedelai/Roti
          </button>
        </div>

        <span className="text-sm text-zinc-500 hidden sm:block">
          Terverifikasi bebas kontaminan non-organik
        </span>
      </div>

      {/* Grid of Batch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBatches.map((batch) => {
          const impact = calculateEnvironmentalImpact(batch.weightKg)

          return (
            <div
              key={batch.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-6 sm:p-7 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-zinc-500 dark:text-zinc-400">
                        {getOrgIcon(batch.organizationType)}
                      </span>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white tracking-tight">
                        {batch.producerName}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                      <MapPin className="h-4 w-4 text-zinc-400" />
                      <span>
                        {batch.locationName}, {batch.district}
                      </span>
                    </div>
                  </div>

                  {batch.status === "available" && (
                    <Badge className="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 text-sm px-3 py-1 hover:bg-emerald-100 dark:hover:bg-emerald-500/20">
                      Siap Diambil
                    </Badge>
                  )}
                  {batch.status === "matched" && (
                    <Badge className="bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30 text-sm px-3 py-1 hover:bg-blue-100 dark:hover:bg-blue-500/20">
                      Terklaim
                    </Badge>
                  )}
                  {batch.status === "in_transit" && (
                    <Badge className="bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30 text-sm px-3 py-1 hover:bg-amber-100 dark:hover:bg-amber-500/20">
                      Dalam Pengiriman
                    </Badge>
                  )}
                </div>

                {/* Batch Specs & Notes */}
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400 border border-zinc-200 dark:border-zinc-700">
                    {batch.weightKg} kg
                  </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                    {getCategoryLabel(batch.category)}
                  </span>
                </div>

                {batch.notes && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                    &ldquo;{batch.notes}&rdquo;
                  </p>
                )}

                {/* Eco-Health Metrics Pill */}
                <div className="rounded-xl bg-zinc-50 dark:bg-zinc-950/70 p-3.5 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                    <Flame className="h-4 w-4" />
                    <span>-{impact.methaneAvoidedKg.toFixed(1)} kg <MathFormula math="\mathrm{CH_4}" /></span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <Droplets className="h-4 w-4" />
                    <span>-{impact.leachatePreventedLiters.toFixed(1)} L Lindi</span>
                  </div>
                  <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                    +{impact.maggotProducedKg.toFixed(0)} kg BSF
                  </div>
                </div>
              </div>

              {/* Footer / Action */}
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/70 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Clock className="h-4 w-4" />
                  <span>Ambil sebelum {batch.expiryHours} jam lagi</span>
                </div>

                {batch.status === "available" ? (
                  <Button
                    size="default"
                    onClick={() => onClaimBatch(batch.id)}
                    className="h-9 bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4"
                  >
                    Klaim Aliran
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                ) : (
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Mitra: {batch.claimedBy || "BioBSF Tembalang"}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
