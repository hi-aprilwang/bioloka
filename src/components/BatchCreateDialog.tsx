"use client"

import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { WasteBatch, WasteCategory } from "@/lib/types"
import { calculateEnvironmentalImpact } from "@/lib/circuloop-data"
import { MathFormula } from "@/components/MathFormula"
import { Plus, Sparkles, Scale } from "lucide-react"

interface BatchCreateDialogProps {
  onAddBatch: (batch: WasteBatch) => void
}

export function BatchCreateDialog({ onAddBatch }: BatchCreateDialogProps) {
  const [open, setOpen] = useState(false)
  const [producerName, setProducerName] = useState("Restoran Kampung Laut Semarang")
  const [orgType, setOrgType] = useState<WasteBatch["organizationType"]>("Restoran")
  const [district, setDistrict] = useState("Semarang Barat")
  const [locationName, setLocationName] = useState("Kawasan Puri Anjasmoro")
  const [category, setCategory] = useState<WasteCategory>("cooked_food")
  const [weightKg, setWeightKg] = useState(150)
  const [notes, setNotes] = useState("Sisa olahan seafood, sayuran, dan nasi buffet.")

  const previewImpact = calculateEnvironmentalImpact(weightKg)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newBatch: WasteBatch = {
      id: `batch-${Date.now().toString().slice(-4)}`,
      producerName,
      organizationType: orgType,
      locationName,
      district,
      lat: -6.965,
      lng: 110.388,
      category,
      weightKg,
      readyTime: "Hari ini, 17:00 WIB",
      expiryHours: 12,
      status: "available",
      notes,
    }

    onAddBatch(newBatch)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-500 transition-colors cursor-pointer">
        <Plus className="h-4 w-4" />
        Daftarkan Batch Limbah Baru
      </DialogTrigger>
      <DialogContent className="sm:max-w-[540px] bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Scale className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            Posting Batch Sampah Organik
          </DialogTitle>
          <DialogDescription className="text-zinc-500 dark:text-zinc-400 text-sm">
            Hubungkan surplus limbah organik usaha Anda dengan biokonversi maggot BSF & biogas Semarang.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-sm text-zinc-700 dark:text-zinc-300">Nama Produsen / Usaha</Label>
              <Input
                value={producerName}
                onChange={(e) => setProducerName(e.target.value)}
                required
                className="bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 text-sm h-10 text-zinc-900 dark:text-zinc-200"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm text-zinc-700 dark:text-zinc-300">Tipe Organisasi</Label>
              <select
                value={orgType}
                onChange={(e) => setOrgType(e.target.value as WasteBatch["organizationType"])}
                className="w-full h-10 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 text-sm text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Restoran">Restoran / Rumah Makan</option>
                <option value="Hotel">Hotel & Hospitality</option>
                <option value="Pasar Tradisional">Pasar Tradisional</option>
                <option value="Rumah Sakit">Dapur Gizi RS</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-sm text-zinc-700 dark:text-zinc-300">Lokasi / Alamat</Label>
              <Input
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                required
                className="bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 text-sm h-10 text-zinc-900 dark:text-zinc-200"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm text-zinc-700 dark:text-zinc-300">Kecamatan (Semarang)</Label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full h-10 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 text-sm text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Semarang Tengah">Semarang Tengah (Johar)</option>
                <option value="Semarang Barat">Semarang Barat (Puri/Bandara)</option>
                <option value="Semarang Selatan">Semarang Selatan (Simpang Lima)</option>
                <option value="Semarang Timur">Semarang Timur</option>
                <option value="Tembalang">Tembalang (Sentra BSF)</option>
                <option value="Gunungpati">Gunungpati (Biogas)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-sm text-zinc-700 dark:text-zinc-300">Jenis Limbah</Label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as WasteCategory)}
                className="w-full h-10 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 text-sm text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="cooked_food">Sisa Makanan Matang (Buffet/Dapur)</option>
                <option value="raw_produce">Sayur & Buah Mentah (Sortiran Pasar)</option>
                <option value="bakery_grain">Ampas Kedelai / Tahu / Roti</option>
                <option value="spent_coffee">Ampas Kopi Kafe</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm text-zinc-700 dark:text-zinc-300">Estimasi Bobot (kg)</Label>
              <Input
                type="number"
                min="10"
                max="5000"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                required
                className="bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 text-sm h-10 text-emerald-700 dark:text-emerald-400 font-semibold"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm text-zinc-700 dark:text-zinc-300">Catatan Kondisi Bahan</Label>
            <Input
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 text-sm h-10 text-zinc-900 dark:text-zinc-200"
            />
          </div>

          {/* Real-time Environmental Calculation Preview */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 p-3.5">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
              <Sparkles className="h-4 w-4" />
              Proyeksi Dampak Batch ({weightKg} kg):
            </div>
            <div className="grid grid-cols-3 gap-2.5 text-center text-sm">
              <div className="bg-white dark:bg-zinc-900/80 p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <span className="block text-zinc-500 dark:text-zinc-400 text-sm">
                  Avoided <MathFormula math="\mathrm{CH_4}" />
                </span>
                <span className="font-bold text-amber-600 dark:text-amber-400 text-sm">{previewImpact.methaneAvoidedKg.toFixed(1)} kg</span>
              </div>
              <div className="bg-white dark:bg-zinc-900/80 p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <span className="block text-zinc-500 dark:text-zinc-400 text-sm">Cegah Lindi</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">{previewImpact.leachatePreventedLiters.toFixed(1)} L</span>
              </div>
              <div className="bg-white dark:bg-zinc-900/80 p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-xs">
                <span className="block text-zinc-500 dark:text-zinc-400 text-sm">Maggot BSF</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{previewImpact.maggotProducedKg.toFixed(0)} kg</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2.5 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm h-9"
            >
              Batal
            </Button>
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm h-9"
            >
              Publikasikan Batch
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
