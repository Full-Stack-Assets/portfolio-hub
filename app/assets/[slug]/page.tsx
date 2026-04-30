import { getAssetBySlug, getBundlesForAsset } from "@/lib/portfolio";
import Link from "next/link";

export default function AssetPage({ params }) {
  const asset = getAssetBySlug(params.slug);

  if (!asset) return <div>Not found.</div>;

  const bundles = getBundlesForAsset(asset);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{asset.name}</h1>
      <p className="text-slate-300">{asset.description}</p>
      <p className="text-xs text-slate-400">{asset.niche}</p>

      <section>
        <h2 className="text-sm font-semibold mt-4">Included in bundles</h2>
        <ul className="mt-2 space-y-1">
          {bundles.map((b) => (
            <li key={b.id}>
              <Link href={`/bundles/${b.id}`} className="text-sky-400">
                {b.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Link
        href="/pricing"
        className="inline-block rounded bg-sky-500 px-4 py-2 text-white text-sm"
      >
        View pricing
      </Link>
    </div>
  );
}
