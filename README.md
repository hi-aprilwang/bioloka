# CircuLoop Semarang

> **Diponegoro Software Development Competition (DSDC) – ANFORCOM 2026**  
> **Kategori:** Software Development (Website Platform)  
> **Tema Utama:** *Circular Economy for Eco-Health Cities*  
> **Subtema Terpilih:** Subtema 1 (*Smart Waste & Resource Circularity Systems*) $\times$ Subtema 2 (*Eco-Health Monitoring & Early Warning Platforms*)  
> **Target SDGs:** SDG 3 (*Good Health & Well-being*), SDG 11 (*Sustainable Cities & Communities*), SDG 12 (*Responsible Consumption & Production*)

---

## 📌 Gambaran Umum Proyek (Executive Summary)

**CircuLoop Semarang** adalah platform perangkat lunak B2B sirkular desentral yang menghubungkan produsen sampah organik skala komersial (hotel bintang, restoran, dan sentra pasar seperti Pasar Johar) dengan fasilitas biokonversi perkotaan (budidaya larva *Black Soldier Fly* / Maggot BSF dan instalasi biogas) di wilayah aglomerasi Semarang.

Platform ini mengintegrasikan **Mesin Kalkulasi Dampak Eko-Kesehatan (*Eco-Health Impact Engine*)** berbasis model standar internasional **IPCC Tier 1 Waste Model** dan hidrologi air lindi tropis, untuk mengestimasi secara riil emisi gas metana ($CH_4$) yang dihindari, rembesan air lindi beracun yang dicegah mencemari air tanah pesisir Semarang, serta nilai ekonomi biomassa berprotein tinggi.

---

## 🎯 Mengapa Solusi Ini Non-Klise & Memiliki Konteks Lokal Semarang?

1. **Menghindari Perangkap Klise Bank Sampah:** Mayoritas solusi konvensional berfokus pada botol plastik (B2C), padahal **62% volume timbunan harian sampah di Kota Semarang adalah sampah organik** (DLH Kota Semarang, 2024).
2. **Krisis Nyata TPA Jatibarang:** Timbunan sampah organik basah yang membusuk anaerobik memicu konsentrasi gas metana eksplosif yang berkali-kali menyebabkan kebakaran besar di TPA Jatibarang (2023 & 2024), melumpuhkan kualitas udara radius 5–10 km di Kecamatan Mijen.
3. **Bahaya Air Lindi di Pesisir Rob:** Semarang Bawah (Semarang Utara, Kaligawe) rentan banjir rob yang mempercepat rembesan polutan air lindi dan patogen diare (*E. coli*) ke dalam akuifer sumur air dangkal warga.

---

## ⚡ Tech Stack & Architecture

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Runtime & UI Library:** [React 19](https://react.dev/)
- **Design System:** [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Micro-Interactions & Animations:** [React Bits](https://reactbits.dev/) (`SpotlightCard`, `ShinyText`, `CountUp`, `GridPattern`) + `motion/react`
- **Iconography:** [Lucide Icons](https://lucide.dev/)
- **Calculations:** Client & Server-side IPCC Tier 1 Scientific Mathematical Engine

---

## 🔬 Model Matematika & Perhitungan Dampak (IPCC AR6)

### 1. Mitigasi Gas Metana ($CH_4$) & Emisi Karbon ($CO_2e$)
$$\text{Emisi } CH_4 \text{ Dihindari (kg)} = W \times DOC \times DOC_f \times F \times \frac{16}{12} \times MCF$$
* $W$ = Massa limbah organik (kg)
* $DOC$ (*Degradable Organic Carbon*) = 0.15
* $DOC_f$ (Fraksi terurai TPA) = 0.50
* $F$ (Fraksi metana) = 0.50
* $\frac{16}{12}$ = 1.333
* $MCF$ (*Methane Correction Factor* TPA Terbuka Jatibarang) = 0.8
* **Faktor Konversi:** $\approx \mathbf{0{,}040\text{ kg } CH_4\text{ / kg sampah organik}}$
* **Konversi Karbon:** $0{,}040 \times 29{,}8 \approx \mathbf{1{,}192\text{ kg } CO_2e\text{ / ton}}$

### 2. Pencegahan Rembesan Air Lindi (*Leachate*)
$$V_{\text{lindi}} = W \times \text{Kadar Air}(0{,}65) \times \text{Koefisien Kompaksi}(0{,}60) = \mathbf{0{,}39 \times W\text{ Liter}}$$

### 3. Valuasi Ekonomi Biokonversi Maggot BSF
- **Feed Conversion Ratio (FCR):** 5 : 1 (5 kg sampah organik $\to$ 1 kg larva segar).
- **Pupuk Kasgot:** 30% dari biomassa input.

---

## 🚀 Menjalankan Aplikasi Secara Lokal

### Prasyarat
- Node.js v20.x atau lebih baru (direkomendasikan v22+)
- Package Manager: `pnpm` (direkomendasikan) atau `npm`

### Langkah Instalasi
```bash
# 1. Clone repositori ini
git clone https://github.com/[username]/circuloop.git

# 2. Masuk ke direktori
cd circuloop

# 3. Pasang dependensi
pnpm install

# 4. Jalankan server pengembangan
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di peramban web Anda.

---

## 🧪 Panduan Uji Coba Dewan Juri (Judge Demo Flow)

1. Buka tampilan utama aplikasi.
2. Klik tombol **"Simulasi Juri"** di pojok kanan atas untuk memicu penambahan batch otomatis dari salah satu hotel di Semarang.
3. Perhatikan kartu skor dampak lingkungan: nilai $CH_4$, air lindi, dan valuasi ekonomi terhitung dan beranimasi secara *real-time*.
4. Buka tab **"Kalkulator Eko-Kesehatan"** untuk menguji slider volume sampah (50 kg hingga 10.000 kg) dan membaca transparansi formula IPCC.
5. Klik **"Klaim Aliran"** pada salah satu batch untuk melihat mekanisme penjadwalan penjemputan oleh fasilitas biokonversi lokal.

---

## 📄 Lisensi
Dikembangkan oleh Tim Mahasiswa untuk Diponegoro Software Development Competition (DSDC) 2026. Hak cipta perangkat lunak sepenuhnya milik peserta (sesuai Bab 7 Poin 6 Rulebook).
