import portfolio from "@/data/portfolio.json";
import Link from "next/link";

export default function UniversalPage({ params }) {
  const { type, slug } = params;

  const isAsset = type === "assets";
  const isBundle = type === "bundles";

  const asset = isAsset
    ? portfolio.assets.find((a) => a.slug === slug)
    : null;

  const bundle = isBundle
    ? portfolio.bundles.find((b) => b.id === slug)
    : null;

  if (!asset && !bundle) return <div>Not found.</div>;

  if (asset) {
    const includedBundles = portfolio.bundles.filter((b) =>
      asset.bundles.includes(b.id)
    );

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">{asset.name}</h1>
        <p className="text-slate-300">{asset.description}</p>
        <p className="text-xs text-slate-400">{asset.niche}</p>

        <section>
          <h2 className="text-sm font-semibold mt-4">Included in bundles</h2>
          <ul className="mt-2 space-y-1">
            {includedBundles.map((b) => (
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

  if (bundle) {
    const includedAssets = portfolio.assets.filter((a) =>
      bundle.assetIds.includes(a.id)
    );

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">{bundle.name}</h1>
        <p className="text-slate-300">{bundle.description}</p>

        <section>
          <h2 className="text-sm font-semibold mt-4">Included assets</h2>
          <ul className="mt-2 space-y-1">
            {includedAssets.map((a) => (
              <li key={a.id}>
                <Link href={`/assets/${a.slug}`} className="text-sky-400">
                  {a.name}
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
}

