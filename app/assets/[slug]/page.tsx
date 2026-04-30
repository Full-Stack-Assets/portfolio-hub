import Link from "next/link"
import { PageProps } from "next"
import { getAssetBySlug } from "@/lib/assets"

export default function AssetPage({ params }: PageProps<{ slug: string }>) {
  const asset = getAssetBySlug(params.slug)

  if (!asset) {
    return <div>Not found.</div>
  }

  return (
    <div>
      <h1>{asset.name}</h1>
      <p>{asset.description}</p>
      <Link href="/assets">Back</Link>
    </div>
  )
}
