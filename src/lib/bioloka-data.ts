import { WasteBatch, ValorizerFacility, EnvironmentalImpact } from "./types"

export const INITIAL_VALORIZERS: ValorizerFacility[] = [
  {
    id: "val-1",
    name: "BioBSF Diponegoro Urban Farm",
    type: "Maggot BSF",
    locationName: "Jl. Prof. Sudarto, Tembalang",
    district: "Kecamatan Tembalang",
    lat: -7.052,
    lng: 110.442,
    dailyCapacityKg: 1500,
    currentIntakeKg: 850,
    operatingRadiusKm: 15,
    rating: 4.9,
    verified: true,
  },
  {
    id: "val-2",
    name: "Gunungpati Eco-Biogas Unit",
    type: "Biogas Digester",
    locationName: "Jl. Raya Gunungpati - Manyaran",
    district: "Kecamatan Gunungpati",
    lat: -7.089,
    lng: 110.375,
    dailyCapacityKg: 2000,
    currentIntakeKg: 1200,
    operatingRadiusKm: 20,
    rating: 4.8,
    verified: true,
  },
  {
    id: "val-3",
    name: "Mijen Agri-Circular Cluster",
    type: "Organic Composting",
    locationName: "Jl. Hadi Soebeno, Mijen",
    district: "Kecamatan Mijen",
    lat: -7.035,
    lng: 110.315,
    dailyCapacityKg: 1200,
    currentIntakeKg: 600,
    operatingRadiusKm: 12,
    rating: 4.7,
    verified: true,
  },
]

export const INITIAL_BATCHES: WasteBatch[] = [
  {
    id: "batch-101",
    producerName: "Pasar Johar Trade Center",
    organizationType: "Pasar Tradisional",
    locationName: "Blok C, Pasar Johar, Kauman",
    district: "Semarang Tengah",
    lat: -6.9723,
    lng: 110.4285,
    category: "raw_produce",
    weightKg: 350,
    readyTime: "Hari ini, 15:30 WIB",
    expiryHours: 14,
    status: "available",
    notes: "Sortiran sayuran hijau & buah segar sisa pedagang grosir.",
  },
  {
    id: "batch-102",
    producerName: "Hotel Ciputra Simpang Lima",
    organizationType: "Hotel",
    locationName: "Kawasan Simpang Lima No. 1",
    district: "Semarang Selatan",
    lat: -6.9904,
    lng: 110.4229,
    category: "cooked_food",
    weightKg: 180,
    readyTime: "Hari ini, 14:00 WIB",
    expiryHours: 8,
    status: "available",
    notes: "Sisa buffet sarapan pagi, bersih tanpa kemasan non-organik.",
  },
  {
    id: "batch-103",
    producerName: "Dapur Instalasi Gizi RSUP Kariadi",
    organizationType: "Rumah Sakit",
    locationName: "Jl. Dr. Sutomo No. 16",
    district: "Semarang Selatan",
    lat: -6.994,
    lng: 110.407,
    category: "raw_produce",
    weightKg: 220,
    readyTime: "Hari ini, 11:00 WIB",
    expiryHours: 12,
    status: "matched",
    claimedBy: "BioBSF Diponegoro Urban Farm",
    notes: "Kulit buah, sayuran, dan kupasan umbi non-medis.",
  },
  {
    id: "batch-104",
    producerName: "Sentra Oleh-Oleh Pandanaran",
    organizationType: "Restoran",
    locationName: "Jl. Pandanaran No. 51",
    district: "Semarang Tengah",
    lat: -6.988,
    lng: 110.415,
    category: "bakery_grain",
    weightKg: 120,
    readyTime: "Hari ini, 16:00 WIB",
    expiryHours: 24,
    status: "available",
    notes: "Sisa potongan adonan dan ampas tahu/kedelai bandeng presto.",
  },
  {
    id: "batch-105",
    producerName: "Pasar Peterongan",
    organizationType: "Pasar Tradisional",
    locationName: "Jl. MT. Haryono, Peterongan",
    district: "Semarang Selatan",
    lat: -6.9985,
    lng: 110.436,
    category: "raw_produce",
    weightKg: 280,
    readyTime: "Hari ini, 13:00 WIB",
    expiryHours: 10,
    status: "in_transit",
    claimedBy: "Gunungpati Eco-Biogas Unit",
    notes: "Sayur kubis, wortel, dan sisa kelapa parut basah.",
  },
]

/**
 * IPCC Tier 1 & Indonesia Waste Parameters
 * Avoided CH4 = weightKg * 0.040 (kg)
 * Avoided CO2e = CH4 * 29.8 (IPCC AR6 GWP100)
 * Avoided Leachate / Air Lindi = weightKg * 0.39 (liters)
 * Maggot conversion FCR 5:1 = weightKg / 5 (kg)
 * Kasgot fertilizer = weightKg * 0.30 (kg)
 */
export function calculateEnvironmentalImpact(weightKg: number): EnvironmentalImpact {
  const safeWeight = Math.max(0, weightKg)
  const methaneAvoidedKg = safeWeight * 0.04
  const co2eAvoidedKg = methaneAvoidedKg * 29.8
  const leachatePreventedLiters = safeWeight * 0.39
  const maggotProducedKg = safeWeight / 5
  const fertilizerProducedKg = safeWeight * 0.3

  // Market prices: Maggot Rp6.500/kg, Fertilizer Rp2.000/kg
  const economicOutputIdr =
    maggotProducedKg * 6500 + fertilizerProducedKg * 2000

  return {
    divertedWeightKg: safeWeight,
    methaneAvoidedKg,
    co2eAvoidedKg,
    leachatePreventedLiters,
    maggotProducedKg,
    fertilizerProducedKg,
    economicOutputIdr,
  }
}

/**
 * Haversine formula to compute great-circle distance between two coords in km
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371 // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c * 10) / 10
}

export function formatRupiah(num: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num)
}
