import Link from "next/link"
import { getAllAssets } from "@/lib/assets"

export default function AssetsPage() {
  const assets = getAllAssets()

  return (
    <div>
      <h1>Assets</h1>
      <ul>
        {assets.map(asset => (
          <li key={asset.slug}>
            <Link href={`/assets/${asset.slug}`}>{asset.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

