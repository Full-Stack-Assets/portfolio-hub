import portfolio from "@/data/portfolio.json";
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
