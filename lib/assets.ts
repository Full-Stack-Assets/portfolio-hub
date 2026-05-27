import { Asset } from "./types"
import data from "@/data/portfolio.json"

const assets: Asset[] = data.assets

export function getAllAssets(): Asset[] {
  return assets
}

export function getAssetBySlug(slug: string): Asset | undefined {
  return assets.find(a => a.slug === slug)
}
