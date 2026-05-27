export interface Asset {
  id: string
  slug: string
  name: string
  description: string
  niche: string
  bundles: string[]
}

export interface Bundle {
  id: string
  name: string
  description: string
  assetIds: string[]
}
