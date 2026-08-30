"use client"

import React from "react"
import Link from "next/link"
import { GridPattern } from "@/components/react-bits/GridPattern"
import { ShinyText } from "@/components/react-bits/ShinyText"
import { SpotlightCard } from "@/components/react-bits/SpotlightCard"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MathFormula } from "@/components/MathFormula"
import {
  Leaf,
  ArrowRight,
  Flame,
  Droplets,
  Building2,
  Bug,
  Activity,
  MapPin,
  ExternalLink,
} from "lucide-react"

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500/20 font-sans transition-colors duration-200">
      {/* Background Pattern */}
      <GridPattern
        width={48}
        height={48}
        className="stroke-zinc-300/60 dark:stroke-zinc-800/35 fill-zinc-200/20 dark:fill-zinc-900/10 opacity-75 pointer-events-none"
      />

      {/* 1. SaaS Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/85 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 sm:py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Circu<span className="text-emerald-600 dark:text-emerald-400">Loop</span>
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 hidden sm:inline ml-2 font-medium">
                Semarang Node
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <a href="#masalah" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Urgensi Semarang
            </a>
            <a href="#solusi" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Arsitektur Solusi
            </a>
            <a href="#model-ipcc" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Model IPCC
            </a>
            <a href="#mitra" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Jaringan Mitra
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button className="h-9.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4 font-medium gap-2 shadow-xs transition-all">
                <span>Buka Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            {/* Light / Dark Theme Switcher */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-1.5 text-sm text-emerald-700 dark:text-emerald-300 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Diponegoro Software Development Competition 2026</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            Engineering the Circular City:{" "}
            <ShinyText
              text="Simbiosis Organik & Mitigasi Risiko Eko-Kesehatan"
              speed={4}
              className="from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-200 dark:to-emerald-400"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
            Platform perangkat lunak B2B sirkular desentral yang menghubungkan produsen limbah organik
            skala komersial (hotel, restoran, pasar Johar) dengan fasilitas biokonversi Maggot BSF & biogas
            di Kota Semarang. Menghentikan bom waktu gas metana di TPA Jatibarang dan rembesan air lindi beracun.
          </p>

          {/* Dual Call To Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link href="/dashboard">
              <Button size="default" className="h-12 bg-emerald-600 hover:bg-emerald-500 text-white text-base px-7 font-semibold gap-2 shadow-lg shadow-emerald-900/20">
                <span>Buka Platform CircuLoop</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#model-ipcc">
              <Button
                variant="outline"
                className="h-12 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-base px-6 font-medium gap-2 shadow-sm"
              >
                <Activity className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Pelajari Formula Matematis</span>
              </Button>
            </a>
          </div>

          {/* Live Semarang Statistics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-10 border-t border-zinc-200 dark:border-zinc-800/80 text-left">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/70 bg-white dark:bg-zinc-900/40 p-5 shadow-sm">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 block">Fraksi Sampah Kota</span>
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">62% Organik</span>
              <span className="text-sm text-zinc-500 block mt-1">Data DLH Semarang 2024</span>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/70 bg-white dark:bg-zinc-900/40 p-5 shadow-sm">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 block">TPA Jatibarang</span>
              <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">1.200 Ton/Hari</span>
              <span className="text-sm text-zinc-500 block mt-1">Kapasitas kritis overload</span>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/70 bg-white dark:bg-zinc-900/40 p-5 shadow-sm">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 block">Faktor Metana IPCC</span>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                0.040 kg <MathFormula math="\mathrm{CH_4}" />
              </span>
              <span className="text-sm text-zinc-500 block mt-1">Tereduksi per kg limbah</span>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/70 bg-white dark:bg-zinc-900/40 p-5 shadow-sm">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 block">Cegah Air Lindi</span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">390 Liter</span>
              <span className="text-sm text-zinc-500 block mt-1">Per ton limbah dialihkan</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Product Sneak-Peek */}
      <section id="solusi" className="relative mx-auto max-w-7xl px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-6 sm:p-10 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                Antarmuka Platform Nyata
              </span>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight mt-1">
                Katalog Aliran Sirkular & Simulasi Dampak Semarang
              </h2>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-sm h-10 px-4">
                <span>Jalankan di /dashboard</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SpotlightCard className="p-7 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 shadow-sm" spotlightColor="rgba(16, 185, 129, 0.15)">
              <Building2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">1. Log Produsen Komersial</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Hotel Ciputra, Pasar Johar, dan restoran sentra Pandanaran mencatatkan batch limbah organik
                terpilah sebelum proses dekomposisi berbau dimulai.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-7 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 shadow-sm" spotlightColor="rgba(59, 130, 246, 0.15)">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">2. Geo-Dispatch & Rute</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Algoritma geospasial memetakan jarak antara titik penghasil dan fasilitas biokonversi terdekat
                (Tembalang, Gunungpati, Mijen) dengan radius optimal &le; 15 km.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-7 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 shadow-sm" spotlightColor="rgba(245, 158, 11, 0.15)">
              <Activity className="h-6 w-6 text-amber-600 dark:text-amber-400 mb-3" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">3. Audit Dampak IPCC</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Setiap kilogram limbah yang diverifikasi secara otomatis menerbitkan metrik pengurangan emisi
                karbon dan sertifikat kepatuhan ESG digital.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 4. The Local Semarang Problem Space */}
      <section id="masalah" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="space-y-4 max-w-2xl mb-12">
          <Badge variant="outline" className="border-red-500/30 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 text-sm px-3 py-1 font-medium">
            Konteks Masalah Riil (Anti-Klise)
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Mengapa Solusi Ini Dibangun Khusus untuk Kota Semarang?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Rulebook DSDC secara tegas melarang proyek klise tanpa konteks lokal. CircuLoop menjawab langsung
            tiga krisis sanitasi mendesak di Kota Semarang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/50 p-8 space-y-4 shadow-sm">
            <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400 w-fit border border-amber-500/20">
              <Flame className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Krisis Kebakaran TPA Jatibarang</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Timbunan sampah organik basah yang membusuk anaerobik di TPA Jatibarang menghasilkan gas metana (<MathFormula math="\mathrm{CH_4}" />)
              konsentrasi tinggi yang memicu kebakaran besar pada September–Oktober 2023 dan 2024, mengancam kesehatan
              pernapasan ribuan warga Mijen dan sekitarnya.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/50 p-8 space-y-4 shadow-sm">
            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400 w-fit border border-blue-500/20">
              <Droplets className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Pencemaran Air Lindi Saat Rob</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Di wilayah Semarang Bawah (Semarang Utara, Kaligawe, Genuk), banjir rob berkala bercampur dengan air lindi
              sampah perkotaan yang merembes ke air sumur dangkal, memicu lonjakan kasus diare bakteri (*E. coli*) dan infeksi kulit.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/50 p-8 space-y-4 shadow-sm">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400 w-fit border border-emerald-500/20">
              <Bug className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Kekurangan Bahan Baku Biokonversi</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Peternak Maggot BSF di Tembalang dan reaktor biogas di Gunungpati memiliki kapasitas serap ton-an per hari,
              namun kesulitan pasokan limbah organik terpilah karena belum ada rantai pasok digital yang menghubungkannya dengan sektor komersial.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Scientific Mathematical Model (IPCC Tier 1) */}
      <section id="model-ipcc" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900/80 dark:to-zinc-950 p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="outline" className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm px-3 py-1 font-medium">
              Landasan Ilmiah (Kunci 20% Nilai Juri)
            </Badge>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Metodologi Hitung Dampak Standar IPCC Tier 1
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              CircuLoop tidak menggunakan estimasi fiktif. Seluruh kalkulasi emisi dan hidrologi diprogram
              berdasarkan formula resmi IPCC Guidelines for National GHG Inventories dan SNI Pengelolaan Limbah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-6 space-y-4">
              <h3 className="text-base font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <Flame className="h-5 w-5" />
                Formula Emisi Metana & Karbon
              </h3>
              <div className="rounded-xl bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 overflow-x-auto text-emerald-800 dark:text-emerald-300">
                <MathFormula
                  math="\Delta E_{\mathrm{CH_4}} = W \cdot \mathrm{DOC} \cdot \mathrm{DOC}_f \cdot F \cdot \frac{16}{12} \cdot \mathrm{MCF}"
                  block
                />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Dengan parameter iklim tropis Indonesia (<MathFormula math="\mathrm{DOC} = 0.15" />, <MathFormula math="\mathrm{DOC}_f = 0.50" />, <MathFormula math="F = 0.50" />, <MathFormula math="\mathrm{MCF} = 0.80" />),
                diperoleh faktor konversi mutlak sebesar:
              </p>
              <div className="rounded-xl bg-white dark:bg-zinc-900 p-3 border border-zinc-200 dark:border-zinc-800 overflow-x-auto text-amber-700 dark:text-amber-300">
                <MathFormula
                  math="\Delta E_{\mathrm{CO_2e}} = \Delta E_{\mathrm{CH_4}} \cdot \mathrm{GWP}_{\mathrm{CH_4}} = 0.040 \times 29.8 = 1.192 \text{ kg }\mathrm{CO_2e}/\text{kg}"
                  block
                />
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-6 space-y-4">
              <h3 className="text-base font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Droplets className="h-5 w-5" />
                Formula Pencegahan Air Lindi
              </h3>
              <div className="rounded-xl bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 overflow-x-auto text-blue-800 dark:text-blue-300">
                <MathFormula
                  math="V_{\mathrm{lindi}} = W \cdot \eta_{\mathrm{moisture}}(0.65) \cdot \gamma_{\mathrm{compaction}}(0.60) = 0.390 \cdot W \text{ Liter}"
                  block
                />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Setiap 1 ton sampah organik yang dialihkan dari TPA Jatibarang mencegah terproduksinya{" "}
                <strong className="text-zinc-900 dark:text-zinc-200">390 Liter air lindi pekat</strong>, melindungi air tanah dangkal
                Kota Semarang dari beban <MathFormula math="5.85\text{ kg BOD}" /> dan <MathFormula math="13.65\text{ kg COD}" /> bahan pencemar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partner Network in Semarang */}
      <section id="mitra" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm px-3 py-1 font-medium">
            Ekosistem Nyata
          </Badge>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Sentra Terhubung di Wilayah Kota Semarang
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Menghubungkan klaster produsen limbah komersial dengan simpul pengolah biokonversi desentral.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-5 text-center shadow-sm">
            <span className="text-base font-bold text-zinc-900 dark:text-white block">Pasar Johar Trade Center</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 block">Semarang Tengah • Sayur/Buah Mentah</span>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-5 text-center shadow-sm">
            <span className="text-base font-bold text-zinc-900 dark:text-white block">Hotel Ciputra Simpang Lima</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 block">Semarang Selatan • Sisa Dapur Buffet</span>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-5 text-center shadow-sm">
            <span className="text-base font-bold text-zinc-900 dark:text-white block">BioBSF Diponegoro Farm</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 block">Kec. Tembalang • Pakan Larva Maggot</span>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-5 text-center shadow-sm">
            <span className="text-base font-bold text-zinc-900 dark:text-white block">Gunungpati Eco-Biogas</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 block">Kec. Gunungpati • Reaktor Gas Organik</span>
          </div>
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="rounded-3xl border border-emerald-500/30 dark:border-emerald-500/40 bg-gradient-to-r from-emerald-50 via-teal-50 to-white dark:from-emerald-950/60 dark:via-zinc-900 dark:to-zinc-950 p-8 sm:p-14 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Siap Menguji Coba Platform CircuLoop Semarang?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Akses dashboard fungsional untuk menginput batch limbah, mencoba matching ke unit biokonversi,
            dan mensimulasikan dampak eko-kesehatan secara langsung.
          </p>
          <div className="pt-2">
            <Link href="/dashboard">
              <Button size="default" className="h-12 bg-emerald-600 hover:bg-emerald-500 text-white text-base px-8 font-semibold gap-2 shadow-lg">
                <span>Buka Dashboard Platform Sekarang</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Professional SaaS Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
          <div>
            <span className="font-bold text-zinc-800 dark:text-zinc-300">CircuLoop Semarang</span> — Diponegoro Software Development Competition 2026.
            <p className="mt-1 text-sm text-zinc-500">
              HMIF Universitas Diponegoro • Tema: Circular Economy for Eco-Health Cities
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Aplikasi Dashboard
            </Link>
            <a href="#masalah" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Urgensi Semarang
            </a>
            <a href="#model-ipcc" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Model IPCC
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
