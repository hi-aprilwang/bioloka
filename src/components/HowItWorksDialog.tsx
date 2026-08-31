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
      title: "1. Kumpulkan & Catat Sisa Dapur Anda",
      actor: "Warung, Kafe, Katering & Dapur Rumah",
      icon: Building2,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      description:
        "Pisahkan sisa sayur, buah, nasi, atau ampas kopi dari plastik dan tisu sebelum membusuk, lalu catat perkiraan beratnya di aplikasi.",
      bulletPoints: [
        "Pilih kategori: Sayur & Buah Pasar, Makanan Matang Dapur, atau Ampas Kopi.",
        "Tentukan estimasi berat (misal 20 kg atau 150 kg) dan jam siap jemput.",
        "Alamat warung/kafe Anda otomatis terhubung dengan rute penjemputan terdekat.",
      ],
      tip: "Tekan tombol '+ Salurkan Sisa Makanan Hari Ini' di dashboard untuk mencoba mencatatkan kiriman baru.",
    },
    {
      step: 2,
      title: "2. Dijemput Peternak Terdekat (< 15 km)",
      actor: "Peternak Maggot & Biogas di Sekitar Anda",
      icon: MapPin,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      description:
        "Peternak maggot dan pengelola biogas lokal di Semarang menerima kabar dan segera datang menjemput dengan motor roda-tiga atau pickup.",
      bulletPoints: [
        "Jarak penjemputan optimal dalam kota (radius ≤ 15 km) agar cepat sampai.",
        "Sisa makanan dijemput segar dalam kurun waktu < 24 jam sebelum menimbulkan bau.",
        "Peternak menekan tombol 'Saya Siap Jemput' untuk menjadwalkan pengambilan.",
      ],
      tip: "Pilih salah satu kiriman berstatus 'Siap Dijemput' di daftar feed lalu klik 'Saya Siap Jemput'.",
    },
    {
      step: 3,
      title: "3. Disulap Jadi Pakan Maggot & Pupuk Kasgot",
      actor: "Mitra Peternak Tembalang, Gunungpati & Mijen",
      icon: Bug,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      description:
        "Larva Black Soldier Fly (BSF) melahap habis sisa makanan dalam hitungan jam, mengubahnya jadi larva pakan lele/unggas dan pupuk organik kaya nutrisi.",
      bulletPoints: [
        "Setiap 5 kg sisa makanan menghasilkan 1 kg larva maggot segar berprotein tinggi (40-45%).",
        "Menghasilkan 30% pupuk organik kasgot (bekas maggot) untuk menyuburkan kebun warga.",
        "100% tuntas tanpa menyisakan sampah yang membusuk di TPA Jatibarang.",
      ],
      tip: "Buka tab 'Peternak Maggot' untuk melihat sentra peternakan di Tembalang dan Gunungpati.",
    },
    {
      step: 4,
      title: "4. Pantau Kebaikan Lingkungan & Raih Lencana",
      actor: "Kalkulator Kebaikan (Standar Sains IPCC)",
      icon: Activity,
      color: "text-emerald-600 dark:text-teal-400",
      bgColor: "bg-teal-500/10 border-teal-500/20",
      description:
        "Setiap kilogram makanan yang Anda selamatkan langsung dihitung dampaknya bagi kesehatan warga Semarang dan penurunan risiko kebakaran TPA.",
      bulletPoints: [
        "Cegah Gas Metana: 0,040 kg gas metana murni dicegah per kg sisa makanan.",
        "Lindungi Air Sumur: Mencegah 390 Liter air lindi busuk merembes ke air tanah pesisir Semarang.",
        "Lencana Warung Hijau: Bukti nyata kepedulian lingkungan yang bisa dipajang di tempat usaha Anda.",
      ],
      tip: "Gunakan tab 'Cek Dampak Lingkungan' untuk menggeser slider volume sampah dan melihat perhitungannya secara langsung.",
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
              Panduan Warga & Pelaku Usaha
            </Badge>
            <span className="text-sm text-zinc-500 font-medium">Langkah Sederhana</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
            Bagaimana Gerakan BioLoka Bekerja?
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-600 dark:text-zinc-400">
            Cara mudah menyelamatkan sisa makanan dapur untuk membantu peternak maggot dan menjaga kelestarian lingkungan Kota Semarang.
          </DialogDescription>
        </DialogHeader>

        {/* Stepper Navigation Pills */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {steps.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeStep === idx
                  ? "border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold shadow-xs"
                  : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <span className="text-sm font-semibold">Langkah {item.step}</span>
              <span className="text-sm truncate max-w-full hidden sm:inline">
                {idx === 0 ? "Kumpulkan" : idx === 1 ? "Dijemput" : idx === 2 ? "Olahan" : "Manfaat"}
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
              Yang Perlu Anda Ketahui:
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
              <strong>Petunjuk:</strong> {current.tip}
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
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm gap-1 cursor-pointer"
            >
              <span>Langkah Berikutnya</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={() => setActiveStep(0)}
              className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm gap-1 cursor-pointer"
            >
              <span>Ulangi Panduan</span>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
