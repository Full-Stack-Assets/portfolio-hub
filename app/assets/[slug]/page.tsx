import { PageProps } from "next"

export default function AssetPage({ params }: PageProps<{ slug: string }>) {
  const asset = getAssetBySlug(params.slug)
  if (!asset) return <div>Not found.</div>
  return <div>{asset.name}</div>
}

import Link from "next/link";

interface AssetPageProps {
  params: {
    slug: string
  }
}

export default function AssetPage({ params }: AssetPageProps) {
  const asset = getAssetBySlug(params.slug)

  if (!asset) return <div>Not found.</div>

  return (
    <div>
      <h1>{asset.name}</h1>
      <p>{asset.description}</p>
      <Link href="/assets">Back</Link>
    </div>
  )
}
