import Link from "next/link"
import { notFound } from "next/navigation"
import { getAssetBySlug } from "@/lib/assets"

export default function AssetPage({ params }: { params: { slug: string } }) {
  const asset = getAssetBySlug(params.slug)

  if (!asset) {
    notFound()
  }

  return (
    <div>
      <h1>{asset.name}</h1>
      <p>{asset.description}</p>
      <Link href="/assets">Back</Link>
    </div>
  )
}
