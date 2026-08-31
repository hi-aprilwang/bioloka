"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
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
  CheckCircle2,
  Clock,
  Truck,
  Sprout,
  Dna,
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
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white block leading-tight">
                Circu<span className="text-emerald-600 dark:text-emerald-400">Loop</span>
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium block leading-none mt-0.5">
                Semarang Node
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <a href="#cara-kerja" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Cara Kerja
            </a>
            <a href="#bioproduk" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Bioproduk
            </a>
            <a href="#solusi" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Arsitektur Solusi
            </a>
            <a href="#masalah" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Urgensi & Ekosistem
            </a>
            <a href="#model-ipcc" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Model IPCC
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
            <span>Jaringan Sirkularitas Sisa Makanan & Eko-Kesehatan Kota Semarang</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.25] pb-1">
            Jangan Biarkan Sisa Makanan Jadi Bencana:{" "}
            <ShinyText
              text="Ubah Jadi Pakan Bergizi & Energi Bersih Semarang"
              speed={4}
              className="from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-200 dark:to-emerald-400"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
            Hubungkan sisa dapur dari warung makan, kafe, hotel, pasar Johar, hingga katering langsung ke peternak
            maggot BSF & biogas lokal di Semarang sebelum basi (&lt; 24 jam). Hentikan asap kebakaran TPA Jatibarang
            dan selamatkan air sumur pesisir dari cairan limbah busuk.
          </p>

          {/* Dual Call To Actions - Full Height Flush Portrait Image Persona Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 w-full max-w-4xl text-left">
            {/* Persona 1: Penyetor Sisa Makanan */}
            <Link
              href="/dashboard?tab=producers"
              className="group relative flex items-stretch rounded-3xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/20 hover:shadow-2xl hover:shadow-emerald-900/30 transition-all hover:-translate-y-0.5 border border-emerald-500/30 overflow-hidden min-h-[140px]"
            >
              {/* Flush Full-Height Portrait Image */}
              <div className="relative w-32 sm:w-36 shrink-0 overflow-hidden bg-emerald-700">
                <Image
                  src="/images/personas/penyetor.jpg"
                  alt="Ibu Pengelola Warung & Resto Penyetor Sisa Makanan Semarang"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 128px, 144px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-emerald-600/60" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-center p-5 sm:p-6 space-y-1">
                <span className="text-sm uppercase font-bold tracking-wider text-emerald-200 block">
                  Warung • Resto • Pasar
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-white block leading-tight">
                  Salurkan Sisa Dapur
                </span>
                <span className="text-sm text-emerald-100/90 block">
                  Input jemputan & Lencana Hijau &rarr;
                </span>
              </div>
            </Link>

            {/* Persona 2: Peternak Maggot BSF / Biogas */}
            <Link
              href="/dashboard?tab=valorizers"
              className="group relative flex items-stretch rounded-3xl bg-white dark:bg-zinc-900/90 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 border border-zinc-200 dark:border-zinc-800 overflow-hidden min-h-[140px]"
            >
              {/* Flush Full-Height Portrait Image */}
              <div className="relative w-32 sm:w-36 shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="/images/personas/peternak.jpg"
                  alt="Peternak Maggot BSF & Biogas Semarang"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 128px, 144px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/40 dark:to-zinc-900/60" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-center p-5 sm:p-6 space-y-1">
                <span className="text-sm uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block">
                  Sentra Maggot • Biogas
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white block leading-tight">
                  Jemput Pasokan Pakan
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 block">
                  Bursa pakan organik siap ambil &rarr;
                </span>
              </div>
            </Link>
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

      {/* 3. Dedicated How It Works Pipeline Section */}
      <section id="cara-kerja" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm px-3 py-1 font-medium">
            Alur Partisipasi 4 Langkah
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Bagaimana Gerakan CircuLoop Bekerja?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Menghubungkan sisa makanan segar dari warung, kafe, pasar, dan rumah Anda dengan peternak
            maggot lokal di Semarang dalam waktu &lt; 24 jam sebelum menimbulkan bau busuk.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <SpotlightCard
            className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
            spotlightColor="rgba(16, 185, 129, 0.15)"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Flush Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
                    alt="Pemilahan sisa sayur dan buah segar di pasar"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 text-sm font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 text-emerald-700 dark:text-emerald-300 backdrop-blur-xs border border-emerald-500/30">
                    Langkah 01
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/90 text-white backdrop-blur-xs">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold drop-shadow-sm">Warung & Resto</span>
                  </div>
                </div>

                {/* Content with Proper Breathing Padding */}
                <div className="p-6">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
                    Warung, Kafe, Pasar & Dapur
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Kumpulkan Sisa Makanan
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Cukup catatkan perkiraan berat (kg) sayur, buah, ampas kopi, atau sisa masak dapur yang masih bersih
                    sebelum dibuang ke tempat sampah.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Terpisah dari plastik & tisu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Batas segar &lt; 24 jam</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Step 2 */}
          <SpotlightCard
            className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
            spotlightColor="rgba(59, 130, 246, 0.15)"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Flush Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                    alt="Logistik penjemputan terdesentralisasi"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 text-sm font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 text-blue-700 dark:text-blue-300 backdrop-blur-xs border border-blue-500/30">
                    Langkah 02
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/90 text-white backdrop-blur-xs">
                      <Truck className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold drop-shadow-sm">Logistik Lokal</span>
                  </div>
                </div>

                {/* Content with Proper Breathing Padding */}
                <div className="p-6">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                    Peternak Sekitar Anda
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Dijemput Peternak Terdekat
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Peternak maggot atau pengelola biogas di radius terdekat (&le; 15 km) menerima notifikasi dan
                    menjemput kiriman dengan motor roda-tiga atau pickup.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Truck className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>Langsung ke alamat Anda</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>Peternak siap jemput 1-klik</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Step 3 */}
          <SpotlightCard
            className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Flush Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80"
                    alt="Biokonversi maggot dan pupuk organik"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 text-sm font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 text-amber-700 dark:text-amber-300 backdrop-blur-xs border border-amber-500/30">
                    Langkah 03
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600/90 text-white backdrop-blur-xs">
                      <Bug className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold drop-shadow-sm">Biokonversi</span>
                  </div>
                </div>

                {/* Content with Proper Breathing Padding */}
                <div className="p-6">
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 block mb-1">
                    Peternak Tembalang & Mijen
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Disulap Jadi Pakan & Pupuk
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Ribuan larva Maggot BSF melahap sisa makanan menjadi pakan ikan/unggas tinggi protein,
                    dan menghasilkan pupuk kasgot organik untuk tanaman warga.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>100% habis tanpa bau busuk</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Activity className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>Bantu ekonomi peternak lokal</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Step 4 */}
          <SpotlightCard
            className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
            spotlightColor="rgba(16, 185, 129, 0.15)"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Flush Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80"
                    alt="Dampak hijau terukur dan kelestarian lingkungan"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 text-sm font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 text-teal-700 dark:text-teal-300 backdrop-blur-xs border border-teal-500/30">
                    Langkah 04
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600/90 text-white backdrop-blur-xs">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold drop-shadow-sm">Dampak Hijau</span>
                  </div>
                </div>

                {/* Content with Proper Breathing Padding */}
                <div className="p-6">
                  <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 block mb-1">
                    Kebaikan yang Terukur
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Pantau Kebaikan & Lencana Hijau
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    Lihat langsung berapa liter air sumur warga yang Anda selamatkan dan kurangi risiko kebakaran
                    di TPA Jatibarang. Dapatkan lencana usaha ramah lingkungan!
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                  <span>Kalkulasi sains resmi IPCC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                  <span>Lencana Usaha Hijau Semarang</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Action Link to Platform Simulation */}
        <div className="mt-10 text-center">
          <Link href="/dashboard">
            <Button variant="outline" className="border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-sm font-medium gap-2">
              <span>Coba Kirim atau Jemput di Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 3.5 Magalarva-Inspired Bioproducts & Output Showcase Section */}
      <section id="bioproduk" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-sm px-3 py-1 font-medium">
            <Dna className="mr-1.5 h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            Bioteknologi Sirkular Masa Depan
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Bukan Sekadar Membuang Sampah:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
              Katalog Bioproduk Bernilai Tinggi
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Melalui biokonversi larva Black Soldier Fly (<em>Hermetia illucens</em>) dan biodigester anaerobik,
            setiap ton sisa makanan disulap menjadi komoditas pangan dan energi bernilai ekonomi tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Product 1: BSF Protein Biomass */}
          <SpotlightCard
            className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
            spotlightColor="rgba(16, 185, 129, 0.15)"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Product Photo Header */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80"
                    alt="Pakan alternatif bernutrisi tinggi BSF untuk perikanan dan unggas"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <Badge variant="outline" className="absolute top-3 right-3 border-emerald-500/40 bg-white/95 dark:bg-zinc-900/95 text-emerald-700 dark:text-emerald-300 text-sm font-semibold backdrop-blur-xs">
                    Biomassa Protein
                  </Badge>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/90 text-white backdrop-blur-xs">
                      <Bug className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold drop-shadow-sm">Hermetia illucens</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Larva BSF Segar & Kering
                  </h3>
                  <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400 block mt-1">
                    40% - 45% Crude Protein • FCR 5:1
                  </span>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                    Pakan bernutrisi tinggi pengganti tepung ikan impor untuk tambak bandeng, budidaya lele,
                    serta peternak ayam di Semarang. Kaya akan asam laurat antimikroba alami.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center justify-between">
                  <span>Nilai Pasar Semarang:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">Rp8.000 - Rp45.000/kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Subtitusi Impor:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Organik Lokal</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Product 2: Kasgot Organic Fertilizer */}
          <SpotlightCard
            className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
            spotlightColor="rgba(245, 158, 11, 0.15)"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Product Photo Header */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80"
                    alt="Pupuk Kasgot organik ramah lingkungan untuk tanaman"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <Badge variant="outline" className="absolute top-3 right-3 border-amber-500/40 bg-white/95 dark:bg-zinc-900/95 text-amber-700 dark:text-amber-300 text-sm font-semibold backdrop-blur-xs">
                    Pupuk Bio-Kasgot
                  </Badge>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600/90 text-white backdrop-blur-xs">
                      <Sprout className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold drop-shadow-sm">Bio-Frass Organik</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Pupuk Kasgot (Bio-Frass)
                  </h3>
                  <span className="text-sm font-mono text-amber-600 dark:text-amber-400 block mt-1">
                    Kaya N-P-K Alami • Bebas Gulma
                  </span>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                    Residu organik hasil pencernaan maggot yang telah terfermentasi sempurna. Sangat cocok untuk
                    pertanian perkotaan (<em>urban farming</em>), sayuran hidroponik, dan penghijauan Kota Semarang.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center justify-between">
                  <span>Rasio Produksi:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">30% dari Bobot Limbah</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Karakteristik:</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">Tidak Berbau & Remah</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Product 3: Bio-Methane Energy */}
          <SpotlightCard
            className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm flex flex-col justify-between"
            spotlightColor="rgba(59, 130, 246, 0.15)"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Product Photo Header */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80"
                    alt="Energi terbarukan biogas dan konversi bersih"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <Badge variant="outline" className="absolute top-3 right-3 border-blue-500/40 bg-white/95 dark:bg-zinc-900/95 text-blue-700 dark:text-blue-300 text-sm font-semibold backdrop-blur-xs">
                    Energi Terbarukan
                  </Badge>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/90 text-white backdrop-blur-xs">
                      <Flame className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold drop-shadow-sm">Methane Capture</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Biogas & Methane Capture
                  </h3>
                  <span className="text-sm font-mono text-blue-600 dark:text-blue-400 block mt-1">
                    Substitusi LPG • Nol Emisi Liar
                  </span>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                    Menangkap gas metana yang seharusnya meledak di TPA Jatibarang ke dalam biodigester tertutup
                    menjadi sumber bahan bakar kompor memasak dan listrik mandiri sentra pengolah.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center justify-between">
                  <span>Potensi Energi:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">~0.25 m³ Biogas / kg limbah</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dampak Eko-Kesehatan:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Reduksi Asap Kebakaran TPA</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* 4. Interactive Product Sneak-Peek */}
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

      {/* 5. The Local Semarang Problem Space & Partner Network */}
      <section id="masalah" className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/80 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <Badge variant="outline" className="border-red-500/30 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 text-sm px-3 py-1 font-medium">
            Konteks & Jaringan Semarang
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Mengapa Dibangun Khusus untuk Semarang & Bagaimana Ekosistemnya Terhubung?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            CircuLoop menjawab langsung tiga krisis sanitasi mendesak di Kota Semarang dengan menghubungkan titik penghasil sisa makanan komersial ke simpul biokonversi lokal.
          </p>
        </div>

        {/* 3 Real-World Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
                  alt="Tumpukan sampah dan ancaman gas metana TPA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="rounded-lg bg-amber-500/90 p-2 text-white backdrop-blur-xs">
                    <Flame className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-amber-200 drop-shadow-sm">Bahaya Metana TPA</span>
                </div>
              </div>
              <div className="p-7 space-y-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Krisis Kebakaran TPA Jatibarang</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Timbunan sampah organik basah yang membusuk anaerobik di TPA Jatibarang menghasilkan gas metana (<MathFormula math="\mathrm{CH_4}" />)
                  konsentrasi tinggi yang memicu kebakaran besar pada September–Oktober 2023 dan 2024, mengancam kesehatan
                  pernapasan ribuan warga Mijen dan sekitarnya.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80"
                  alt="Banjir rob dan genangan air di pesisir perkotaan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="rounded-lg bg-blue-500/90 p-2 text-white backdrop-blur-xs">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-blue-200 drop-shadow-sm">Banjir Rob & Air Lindi</span>
                </div>
              </div>
              <div className="p-7 space-y-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Pencemaran Air Lindi Saat Rob</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Di wilayah Semarang Bawah (Semarang Utara, Kaligawe, Genuk), banjir rob berkala bercampur dengan air lindi
                  sampah perkotaan yang merembes ke air sumur dangkal, memicu lonjakan kasus diare bakteri (<em>E. coli</em>) dan infeksi kulit.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80"
                  alt="Kebutuhan suplai bahan organik segar untuk sentra biokonversi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="rounded-lg bg-emerald-500/90 p-2 text-white backdrop-blur-xs">
                    <Bug className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-emerald-200 drop-shadow-sm">Sentra Biokonversi</span>
                </div>
              </div>
              <div className="p-7 space-y-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Kekurangan Bahan Baku Biokonversi</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Peternak Maggot BSF di Tembalang dan reaktor biogas di Gunungpati memiliki kapasitas serap ton-an per hari,
                  namun kesulitan pasokan limbah organik terpilah karena belum ada rantai pasok digital yang menghubungkannya dengan sektor komersial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Partner Ecosystem Grid */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/40 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Jaringan Simpul & Sentra Terintegrasi
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                Klaster Produsen Komersial & Sentra Biokonversi Terverifikasi
              </h3>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-sm gap-1.5 self-start sm:self-auto">
                <span>Lihat di Peta Interaktif</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                    Pasar Induk
                  </span>
                  <Building2 className="h-4 w-4 text-zinc-400" />
                </div>
                <span className="text-base font-bold text-zinc-900 dark:text-white block">Pasar Johar Semarang</span>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Semarang Tengah • Timbulan Sayur/Buah Segar</p>
              </div>
              <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-4 block">~3.5 Ton/Hari Terpilah</span>
            </div>

            <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold uppercase px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                    Hotel & Horeka
                  </span>
                  <Building2 className="h-4 w-4 text-zinc-400" />
                </div>
                <span className="text-base font-bold text-zinc-900 dark:text-white block">Hotel Ciputra Simpang Lima</span>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Semarang Selatan • Sisa Dapur Buffet Matang</p>
              </div>
              <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-4 block">~450 kg/Hari Siap Jemput</span>
            </div>

            <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    Sentra BSF
                  </span>
                  <Bug className="h-4 w-4 text-emerald-500" />
                </div>
                <span className="text-base font-bold text-zinc-900 dark:text-white block">BioBSF Diponegoro Farm</span>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Kec. Tembalang • Biokonversi Pakan Ternak</p>
              </div>
              <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-4 block">Kapasitas: 2.0 Ton/Hari</span>
            </div>

            <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold uppercase px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                    Biodigester
                  </span>
                  <Flame className="h-4 w-4 text-purple-500" />
                </div>
                <span className="text-base font-bold text-zinc-900 dark:text-white block">Gunungpati Eco-Biogas</span>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Kec. Gunungpati • Reaktor Metana Mandiri</p>
              </div>
              <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-4 block">Kapasitas: 1.5 Ton/Hari</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="rounded-3xl border border-emerald-500/30 dark:border-emerald-500/40 bg-gradient-to-r from-emerald-50 via-teal-50 to-white dark:from-emerald-950/60 dark:via-zinc-900 dark:to-zinc-950 p-8 sm:p-14 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Mulai Gerakan Sirkularitas Sisa Makanan Semarang Hari Ini
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Pilih peran Anda dan coba langsung platform CircuLoop untuk menyelamatkan bahan pangan dan menjaga kebersihan Kota Semarang.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 max-w-4xl mx-auto text-left">
            <Link
              href="/dashboard?tab=producers"
              className="group relative flex items-stretch rounded-3xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-900/20 hover:shadow-2xl transition-all hover:-translate-y-0.5 border border-emerald-500/30 overflow-hidden min-h-[140px]"
            >
              {/* Flush Full-Height Portrait Image */}
              <div className="relative w-32 sm:w-36 shrink-0 overflow-hidden bg-emerald-700">
                <Image
                  src="/images/personas/penyetor.jpg"
                  alt="Penyetor Sisa Makanan Semarang"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 128px, 144px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-emerald-600/60" />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-6 space-y-1">
                <span className="text-sm uppercase font-bold tracking-wider text-emerald-200 block">
                  Warung • Resto • Pasar
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-white block leading-tight">
                  Salurkan Sisa Dapur
                </span>
                <span className="text-sm text-emerald-100/90 block">
                  Input jemputan & Lencana Hijau &rarr;
                </span>
              </div>
            </Link>

            <Link
              href="/dashboard?tab=valorizers"
              className="group relative flex items-stretch rounded-3xl bg-white dark:bg-zinc-900/90 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 border border-zinc-200 dark:border-zinc-800 overflow-hidden min-h-[140px]"
            >
              {/* Flush Full-Height Portrait Image */}
              <div className="relative w-32 sm:w-36 shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="/images/personas/peternak.jpg"
                  alt="Peternak Maggot BSF & Biogas Semarang"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 128px, 144px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/40 dark:to-zinc-900/60" />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-6 space-y-1">
                <span className="text-sm uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block">
                  Sentra Maggot • Biogas
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white block leading-tight">
                  Jemput Pasokan Pakan
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 block">
                  Bursa pakan organik siap ambil &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Professional SaaS Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
          <div>
            <span className="font-bold text-zinc-800 dark:text-zinc-300">CircuLoop Semarang</span> — Platform Sirkularitas Sisa Makanan & Eko-Kesehatan.
            <p className="mt-1 text-sm text-zinc-500">
              Inisiatif Kolaboratif Ekonomi Sirkular Kota Semarang • Mencegah Kebakaran TPA & Melindungi Air Pesisir
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Aplikasi Dashboard
            </Link>
            <a href="#cara-kerja" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Cara Kerja
            </a>
            <a href="#bioproduk" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Katalog Bioproduk
            </a>
            <a href="#solusi" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Arsitektur Solusi
            </a>
            <a href="#masalah" className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Urgensi & Ekosistem
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
