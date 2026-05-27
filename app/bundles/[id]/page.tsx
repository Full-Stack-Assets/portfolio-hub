import { getBundleById, getAssetsForBundle } from "@/lib/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function BundlePage({ params }: { params: { id: string } }) {
  const bundle = getBundleById(params.id);

  if (!bundle) notFound();

  const assets = getAssetsForBundle(bundle);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{bundle.name}</h1>
      <p className="text-slate-300">{bundle.description}</p>

      <section>
        <h2 className="text-sm font-semibold mt-4">Included assets</h2>
        <ul className="mt-2 space-y-1">
          {assets.map((a) => (
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
