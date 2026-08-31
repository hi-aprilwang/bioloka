"use client"

import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  HelpCircle,
  Building2,
  MapPin,
  Bug,
  Activity,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

interface HowItWorksDialogProps {
  className?: string
  children?: React.ReactNode
}

export function HowItWorksDialog({ className, children }: HowItWorksDialogProps) {
  const [open, setOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      step: 1,
      title: "1. Pencatatan Batch Organik (Produsen)",
      actor: "Hotel, Restoran & Pasar Tradisional",
      icon: Building2,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      description:
        "Produsen limbah komersial mencatatkan volume dan kategori limbah makanan basah melalui formulir terverifikasi sebelum proses pembusukan berbau dimulai.",
      bulletPoints: [
        "Pencatatan kategori limbah: Sisa Masak Dapur, Sayur/Buah Mentah, atau Ampas Kopi.",
        "Penetapan estimasi berat (kg) dan batas waktu kesegaran (Expiry Window < 24 jam).",
        "Geolokasi presisi (GPS) di wilayah Kota Semarang untuk penjemputan armada logistik.",
      ],
      tip: "Cobalah klik tombol 'Catat Limbah' di dashboard untuk menambahkan batch baru dari restoran Anda.",
    },
    {
      step: 2,
      title: "2. Geo-Matching & Logistik Terjadwal",
      actor: "Mesin Algoritma Geospasial CircuLoop",
      icon: MapPin,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      description:
        "Platform secara otomatis memetakan titik limbah dengan fasilitas biokonversi terdekat di Semarang untuk meminimalkan jejak karbon transportasi.",
      bulletPoints: [
        "Radius optimal penjemputan dibatasi maksimal ≤ 15 km dari titik produsen.",
        "Fasilitas pengolah dapat melihat batch berstatus 'Tersedia' dan menekan tombol 'Klaim Aliran'.",
        "Penjadwalan armada pickup atau motor roda-tiga sebelum limbah melewati masa kedaluwarsa.",
      ],
      tip: "Pilih salah satu kartu batch limbah berstatus 'Tersedia' lalu klik 'Klaim Aliran' untuk melihat transisi status.",
    },
    {
      step: 3,
      title: "3. Biokonversi Nilai Tinggi (Valorizer)",
      actor: "BioBSF Diponegoro & Instalasi Biogas",
      icon: Bug,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      description:
        "Limbah organik basah dialihkan 100% dari TPA Jatibarang menuju bioreaktor larva Black Soldier Fly (BSF) atau biodigester anaerobik terkontrol.",
      bulletPoints: [
        "Feed Conversion Ratio (FCR) 5:1: Setiap 5 kg sampah organik menghasilkan 1 kg larva maggot basah berprotein tinggi (40-45%).",
        "Menghasilkan 30% pupuk organik bio-kasgot siap pakai untuk pertanian perkotaan.",
        "Pemberian pakan terkontrol tanpa bau busuk liar dan tanpa menghasilkan air lindi bebas ke tanah.",
      ],
      tip: "Kunjungi tab 'Fasilitas Olah' di bilah navigasi untuk melihat profil mitra biokonversi di Tembalang dan Gunungpati.",
    },
    {
      step: 4,
      title: "4. Audit Dampak Eko-Kesehatan & ESG",
      actor: "Scientific Engine (Standar IPCC Tier 1)",
      icon: Activity,
      color: "text-emerald-600 dark:text-teal-400",
      bgColor: "bg-teal-500/10 border-teal-500/20",
      description:
        "Setiap kilogram sampah organik yang dialihkan langsung dikalkulasikan secara ilmiah menjadi reduksi metana dan perlindungan air tanah Semarang.",
      bulletPoints: [
        "Metana (CH4): Mengurangi 0,040 kg CH4 murni per kg sampah (setara 1,192 kg CO2e).",
        "Air Lindi (Leachate): Mencegah 390 Liter cairan lindi pekat masuk ke sumur air warga pesisir per ton sampah.",
        "Sertifikasi Hijau: Menerbitkan ESG badge digital untuk audit keberlanjutan hotel/restoran mitra.",
      ],
      tip: "Uji coba slider pada tab 'Kalkulator Dampak' untuk mensimulasikan dampak hingga 10.000 kg sampah secara reaktif.",
    },
  ]

  const current = steps[activeStep]
  const IconComponent = current.icon

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={
          className ||
          "inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-xs cursor-pointer"
        }
      >
        {children || (
          <>
            <HelpCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">Panduan</span> Cara Kerja
          </>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7 shadow-2xl rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm px-2.5 py-0.5 font-medium"
            >
              Panduan Interaktif Juri & Mitra
            </Badge>
            <span className="text-sm text-zinc-500 font-medium">Simbiosis B2B 4-Tahap</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
            Bagaimana Platform CircuLoop Bekerja?
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-600 dark:text-zinc-400">
            Arsitektur software circular economy yang menghubungkan penghasil limbah komersial dengan pengolah biokonversi di Kota Semarang.
          </DialogDescription>
        </DialogHeader>

        {/* Stepper Navigation Pills */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {steps.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl border text-center transition-all ${
                activeStep === idx
                  ? "border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold shadow-xs"
                  : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <span className="text-sm font-semibold">Langkah {item.step}</span>
              <span className="text-sm truncate max-w-full hidden sm:inline">
                {idx === 0 ? "Catat" : idx === 1 ? "Dispatch" : idx === 2 ? "Konversi" : "Audit"}
              </span>
            </button>
          ))}
        </div>

        {/* Step Card Content */}
        <div className="mt-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/50 p-5 space-y-4">
          <div className="flex items-start gap-3.5">
            <div className={`p-2.5 rounded-xl border ${current.bgColor} ${current.color} shrink-0`}>
              <IconComponent className="h-6 w-6" />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                {current.actor}
              </span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">
                {current.title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {current.description}
          </p>

          <div className="space-y-2 pt-1 border-t border-zinc-200/80 dark:border-zinc-800">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 block">
              Mekanisme Teknis & Validasi:
            </span>
            <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              {current.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Pro Tip */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-50/60 dark:bg-amber-950/30 p-3 flex items-center gap-2.5 text-sm text-amber-800 dark:text-amber-300">
            <Sparkles className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
            <span>
              <strong>Tips Uji Coba:</strong> {current.tip}
            </span>
          </div>
        </div>

        {/* Modal Bottom Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800 mt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="text-sm text-zinc-600 dark:text-zinc-400"
          >
            Sebelumnya
          </Button>

          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  activeStep === i ? "w-6 bg-emerald-500" : "w-1.5 bg-zinc-300 dark:bg-zinc-700"
                }`}
              />
            ))}
          </div>

          {activeStep < steps.length - 1 ? (
            <Button
              size="sm"
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm gap-1"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={() => setActiveStep(0)}
              className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm gap-1"
            >
              <span>Ulangi Tur</span>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
