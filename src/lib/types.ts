export type WasteCategory =
  | "raw_produce"
  | "cooked_food"
  | "spent_coffee"
  | "bakery_grain"

export type BatchStatus = "available" | "matched" | "in_transit" | "completed"

export interface WasteBatch {
  id: string
  producerName: string
  organizationType: "Hotel" | "Restoran" | "Pasar Tradisional" | "Rumah Sakit"
  locationName: string
  district: string
  lat: number
  lng: number
  category: WasteCategory
  weightKg: number
  readyTime: string
  expiryHours: number
  status: BatchStatus
  claimedBy?: string
  distanceKm?: number
  notes?: string
}

export interface ValorizerFacility {
  id: string
  name: string
  type: "Maggot BSF" | "Biogas Digester" | "Organic Composting"
  locationName: string
  district: string
  lat: number
  lng: number
  dailyCapacityKg: number
  currentIntakeKg: number
  operatingRadiusKm: number
  rating: number
  verified: boolean
}

export interface EnvironmentalImpact {
  divertedWeightKg: number
  methaneAvoidedKg: number
  co2eAvoidedKg: number
  leachatePreventedLiters: number
  maggotProducedKg: number
  fertilizerProducedKg: number
  economicOutputIdr: number
}
