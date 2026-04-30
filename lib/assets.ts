import { Asset } from "./types"

const assets: Asset[] = [
  {
    slug: "clinicflow",
    name: "ClinicFlow",
    description: "Scheduling and intake for small clinics."
  },
  {
    slug: "invoicepro",
    name: "InvoicePro",
    description: "Invoicing and payment links for SMBs."
  },
  // ...add all 25 assets here
]

export function getAllAssets(): Asset[] {
  return assets
}

export function getAssetBySlug(slug: string): Asset | undefined {
  return assets.find(a => a.slug === slug)
}
