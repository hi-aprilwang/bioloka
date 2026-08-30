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
        return <Bug className="h-4 w-4 text-emerald-400" />
      case "Biogas Digester":
        return <Flame className="h-4 w-4 text-amber-400" />
      case "Organic Composting":
        return <Sprout className="h-4 w-4 text-blue-400" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-white tracking-tight">
            Sentra Biokonversi & Valorizer Terverifikasi (Kota Semarang)
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Fasilitas desentral yang siap menyerap dan mengolah limbah organik komersial
          </p>
        </div>
        <Badge
          variant="outline"
          className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm flex items-center gap-1.5 px-3 py-1 self-start sm:self-auto"
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
              className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-6 sm:p-7 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-zinc-800 p-2.5 border border-zinc-700">
                      {getIcon(facility.type)}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {facility.name}
                      </h3>
                      <span className="text-sm text-zinc-400 font-medium">
                        {facility.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-amber-400 font-semibold bg-zinc-800/90 px-2.5 py-1 rounded-md">
                    <Star className="h-3.5 w-3.5 fill-amber-400" />
                    <span>{facility.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin className="h-4 w-4 text-zinc-500" />
                  <span>
                    {facility.locationName}, {facility.district}
                  </span>
                </div>

                {/* Capacity Progress Meter */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Kapasitas Serap Hari Ini</span>
                    <span className="font-semibold text-zinc-200">
                      {facility.currentIntakeKg} / {facility.dailyCapacityKg} kg
                    </span>
                  </div>
                  <Progress value={usagePercent} className="h-2.5 bg-zinc-800" />
                  <div className="flex justify-between text-sm text-zinc-500">
                    <span>Terisi {usagePercent}%</span>
                    <span>Sisa kuota: {facility.dailyCapacityKg - facility.currentIntakeKg} kg</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/70 text-sm text-zinc-400 flex items-center justify-between">
                <span>Radius: s.d {facility.operatingRadiusKm} km</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
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
