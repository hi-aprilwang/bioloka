"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WasteBatch, WasteCategory } from "@/lib/types"
import { calculateEnvironmentalImpact, formatRupiah } from "@/lib/circuloop-data"
import {
  MapPin,
  Clock,
  CheckCircle2,
  Truck,
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
        return <Building2 className="h-3.5 w-3.5" />
      case "Restoran":
        return <Utensils className="h-3.5 w-3.5" />
      case "Pasar Tradisional":
        return <Store className="h-3.5 w-3.5" />
      case "Rumah Sakit":
        return <Hospital className="h-3.5 w-3.5" />
      default:
        return <Building2 className="h-3.5 w-3.5" />
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
    <div className="space-y-3">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          <button
            onClick={() => setFilterCategory("all")}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              filterCategory === "all"
                ? "bg-zinc-800 text-emerald-400 border border-emerald-500/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Semua Aliran ({batches.length})
          </button>
          <button
            onClick={() => setFilterCategory("raw_produce")}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              filterCategory === "raw_produce"
                ? "bg-zinc-800 text-emerald-400 border border-emerald-500/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Sayur & Buah Pasar
          </button>
          <button
            onClick={() => setFilterCategory("cooked_food")}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              filterCategory === "cooked_food"
                ? "bg-zinc-800 text-emerald-400 border border-emerald-500/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Makanan Dapur Hotel/Resto
          </button>
          <button
            onClick={() => setFilterCategory("bakery_grain")}
            className={`px-2.5 py-1 rounded-md transition-all font-medium ${
              filterCategory === "bakery_grain"
                ? "bg-zinc-800 text-emerald-400 border border-emerald-500/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Ampas Kedelai/Roti
          </button>
        </div>

        <span className="text-[11px] text-zinc-500 hidden sm:block">
          Terverifikasi bebas kontaminan non-organik
        </span>
      </div>

      {/* Grid of Batch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredBatches.map((batch) => {
          const impact = calculateEnvironmentalImpact(batch.weightKg)

          return (
            <div
              key={batch.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-zinc-400">
                        {getOrgIcon(batch.organizationType)}
                      </span>
                      <h3 className="text-sm font-semibold text-white tracking-tight">
                        {batch.producerName}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5 text-xs text-zinc-400">
                      <MapPin className="h-3 w-3 text-zinc-500" />
                      <span>
                        {batch.locationName}, {batch.district}
                      </span>
                    </div>
                  </div>

                  {batch.status === "available" && (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-[11px] hover:bg-emerald-500/20">
                      Siap Diambil
                    </Badge>
                  )}
                  {batch.status === "matched" && (
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30 text-[11px] hover:bg-blue-500/20">
                      Terklaim
                    </Badge>
                  )}
                  {batch.status === "in_transit" && (
                    <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 text-[11px] hover:bg-amber-500/20">
                      Dalam Pengiriman
                    </Badge>
                  )}
                </div>

                {/* Batch Specs & Notes */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs font-semibold text-emerald-400 border border-zinc-700">
                    {batch.weightKg} kg
                  </span>
                  <span className="text-xs text-zinc-300 font-medium">
                    {getCategoryLabel(batch.category)}
                  </span>
                </div>

                {batch.notes && (
                  <p className="mt-2 text-xs text-zinc-400 line-clamp-1 italic">
                    &ldquo;{batch.notes}&rdquo;
                  </p>
                )}

                {/* Eco-Health Metrics Pill */}
                <div className="mt-3 rounded-lg bg-zinc-950/60 p-2 border border-zinc-800/80 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Flame className="h-3 w-3" />
                    <span>-{impact.methaneAvoidedKg.toFixed(1)} kg CH₄</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-400">
                    <Droplets className="h-3 w-3" />
                    <span>-{impact.leachatePreventedLiters.toFixed(1)} L Lindi</span>
                  </div>
                  <div className="text-emerald-400 font-medium">
                    +{impact.maggotProducedKg.toFixed(0)} kg BSF
                  </div>
                </div>
              </div>

              {/* Footer / Action */}
              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                  <Clock className="h-3 w-3" />
                  <span>Ambil sebelum {batch.expiryHours} jam lagi</span>
                </div>

                {batch.status === "available" ? (
                  <Button
                    size="sm"
                    onClick={() => onClaimBatch(batch.id)}
                    className="h-7 bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3"
                  >
                    Klaim Aliran
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                ) : (
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
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
