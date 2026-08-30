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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-white tracking-tight">
            Sentra Biokonversi & Valorizer Terverifikasi (Kota Semarang)
          </h2>
          <p className="text-xs text-zinc-400">
            Fasilitas desentral yang siap menyerap dan mengolah limbah organik komersial
          </p>
        </div>
        <Badge
          variant="outline"
          className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs flex items-center gap-1"
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          Tersertifikasi DLH
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {INITIAL_VALORIZERS.map((facility) => {
          const usagePercent = Math.round(
            (facility.currentIntakeKg / facility.dailyCapacityKg) * 100
          )

          return (
            <div
              key={facility.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-zinc-800 p-2 border border-zinc-700">
                      {getIcon(facility.type)}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {facility.name}
                      </h3>
                      <span className="text-xs text-zinc-400 font-medium">
                        {facility.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold bg-zinc-800 px-2 py-0.5 rounded">
                    <Star className="h-3 w-3 fill-amber-400" />
                    <span>{facility.rating}</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-400">
                  <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                  <span>
                    {facility.locationName}, {facility.district}
                  </span>
                </div>

                {/* Capacity Progress Meter */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">Kapasitas Serap Hari Ini</span>
                    <span className="font-semibold text-zinc-200">
                      {facility.currentIntakeKg} / {facility.dailyCapacityKg} kg
                    </span>
                  </div>
                  <Progress value={usagePercent} className="h-1.5 bg-zinc-800" />
                  <div className="flex justify-between text-[11px] text-zinc-500">
                    <span>Terisi {usagePercent}%</span>
                    <span>Sisa kuota: {facility.dailyCapacityKg - facility.currentIntakeKg} kg</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Radius Jemput: s.d {facility.operatingRadiusKm} km</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" /> Siap Terima Batch
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
