"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ValorizerFacility } from "@/lib/types"
import { INITIAL_VALORIZERS } from "@/lib/circuloop-data"
import { Bug, Flame, Sprout, MapPin, CheckCircle, ShieldCheck, Star } from "lucide-react"

export function ValorizerHubs() {
  const getIcon = (type: ValorizerFacility["type"]) => {
    switch (type) {
      case "Maggot BSF":
        return <Bug className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      case "Biogas Digester":
        return <Flame className="h-4 w-4 text-amber-600 dark:text-amber-400" />
      case "Organic Composting":
        return <Sprout className="h-4 w-4 text-blue-600 dark:text-blue-400" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
            Sentra Biokonversi & Valorizer Terverifikasi (Kota Semarang)
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Fasilitas desentral yang siap menyerap dan mengolah limbah organik komersial
          </p>
        </div>
        <Badge
          variant="outline"
          className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-1.5 px-3 py-1 self-start sm:self-auto"
        >
          <ShieldCheck className="h-4 w-4" />
          Tersertifikasi DLH
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INITIAL_VALORIZERS.map((facility) => {
          const usagePercent = Math.round(
            (facility.currentIntakeKg / facility.dailyCapacityKg) * 100
          )

          return (
            <div
              key={facility.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-6 sm:p-7 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-zinc-100 dark:bg-zinc-800 p-2.5 border border-zinc-200 dark:border-zinc-700">
                      {getIcon(facility.type)}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                        {facility.name}
                      </h3>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                        {facility.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-amber-700 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-zinc-800/90 px-2.5 py-1 rounded-md border border-amber-200 dark:border-transparent">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <span>{facility.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <MapPin className="h-4 w-4 text-zinc-400" />
                  <span>
                    {facility.locationName}, {facility.district}
                  </span>
                </div>

                {/* Capacity Progress Meter */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">Kapasitas Serap Hari Ini</span>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {facility.currentIntakeKg} / {facility.dailyCapacityKg} kg
                    </span>
                  </div>
                  <Progress value={usagePercent} className="h-2.5 bg-zinc-100 dark:bg-zinc-800" />
                  <div className="flex justify-between text-sm text-zinc-500">
                    <span>Terisi {usagePercent}%</span>
                    <span>Sisa kuota: {facility.dailyCapacityKg - facility.currentIntakeKg} kg</span>
                  </div>
                </div>

                {/* Bioproduct Output Estimation Pill */}
                <div className="rounded-xl bg-zinc-50 dark:bg-zinc-950/70 p-3 border border-zinc-200 dark:border-zinc-800 text-sm space-y-1">
                  <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider block">
                    Estimasi Panen Bioproduk:
                  </span>
                  {facility.type === "Maggot BSF" && (
                    <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                      +{(facility.currentIntakeKg / 5).toFixed(0)} kg Larva Protein (FCR 5:1) & +{(facility.currentIntakeKg * 0.3).toFixed(0)} kg Kasgot
                    </div>
                  )}
                  {facility.type === "Biogas Digester" && (
                    <div className="text-blue-700 dark:text-blue-400 font-medium">
                      +{(facility.currentIntakeKg * 0.25).toFixed(0)} m³ Biogas Energi Bersih
                    </div>
                  )}
                  {facility.type === "Organic Composting" && (
                    <div className="text-amber-700 dark:text-amber-400 font-medium">
                      +{(facility.currentIntakeKg * 0.4).toFixed(0)} kg Kompos Organik Terverifikasi
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/70 text-sm text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
                <span>Radius: s.d {facility.operatingRadiusKm} km</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4" /> Siap Terima Batch
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
