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
      tip: "Tekan tombol 'Salurkan Sisa Makanan Hari Ini' di dashboard untuk mencoba mencatatkan kiriman baru.",
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
      title: "4. Pantau Dampak Bersih & Reduksi Sampah",
      actor: "Kalkulator Sains Standar IPCC",
      icon: Activity,
      color: "text-emerald-600 dark:text-teal-400",
      bgColor: "bg-teal-500/10 border-teal-500/20",
      description:
        "Setiap kilogram makanan yang Anda selamatkan langsung dihitung dampaknya bagi kebersihan lingkungan Kota Semarang dan penurunan beban TPA Jatibarang.",
      bulletPoints: [
        "Pencegahan Gas Metana: 0,040 kg gas metana dicegah per kg sisa makanan.",
        "Perlindungan Air Tanah: Mencegah cairan busuk merembes ke air sumur pesisir Semarang.",
        "Transparansi Data: Laporan dampak otomatis tercatat dan dapat dipantau bersama.",
      ],
      tip: "Gunakan tab 'Kalkulator' untuk menggeser slider volume sampah dan melihat perhitungannya secara langsung.",
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

      <DialogContent className="sm:max-w-3xl lg:max-w-4xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 md:p-10 shadow-2xl rounded-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm px-3 py-0.5 font-semibold"
            >
              Panduan Warga & Pelaku Usaha
            </Badge>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Kota Semarang</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Bagaimana Gerakan BioLoka Bekerja?
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Cara mudah menyelamatkan sisa makanan dapur untuk membantu peternak maggot dan menjaga kebersihan Kota Semarang dalam 4 langkah terpadu.
          </DialogDescription>
        </DialogHeader>

        {/* Stepper Navigation Tabs - Wide & Spacious */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6">
          {steps.map((item, idx) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                activeStep === idx
                  ? "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-bold shadow-sm ring-1 ring-emerald-500/30"
                  : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-400"
              }`}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Langkah 0{item.step}</span>
              <span className="text-sm font-semibold mt-0.5 truncate max-w-full">
                {idx === 0 ? "1. Pisahkan Sisa" : idx === 1 ? "2. Dijemput Cepat" : idx === 2 ? "3. Jadi Pakan" : "4. Pantau Dampak"}
              </span>
            </button>
          ))}
        </div>

        {/* Step Card Content - Spacious & Well-Padded */}
        <div className="mt-6 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/50 p-6 sm:p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className={`p-3.5 rounded-2xl border ${current.bgColor} ${current.color} shrink-0`}>
              <IconComponent className="h-7 w-7" />
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                {current.actor}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                {current.title}
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {current.description}
          </p>

          <div className="space-y-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800">
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 block">
              Poin Penting yang Perlu Anda Ketahui:
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {current.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Pro Tip */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-50/80 dark:bg-amber-950/40 p-4 flex items-center gap-3 text-sm text-amber-900 dark:text-amber-200">
            <Sparkles className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <span>
              <strong>Petunjuk Cepat:</strong> {current.tip}
            </span>
          </div>
        </div>

        {/* Modal Bottom Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-4">
          <Button
            variant="ghost"
            size="default"
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="text-sm text-zinc-600 dark:text-zinc-400 font-medium cursor-pointer"
          >
            ← Langkah Sebelumnya
          </Button>

          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeStep === i ? "w-8 bg-emerald-600 dark:bg-emerald-400" : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
                }`}
                aria-label={`Buka langkah ${i + 1}`}
              />
            ))}
          </div>

          {activeStep < steps.length - 1 ? (
            <Button
              size="default"
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold gap-1.5 px-5 cursor-pointer shadow-sm"
            >
              <span>Langkah Berikutnya</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              size="default"
              onClick={() => setActiveStep(0)}
              className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-sm font-bold gap-1.5 px-5 cursor-pointer shadow-sm"
            >
              <span>Ulangi Panduan</span>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
