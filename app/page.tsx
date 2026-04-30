import portfolio from "@/data/portfolio.json";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold">SaaS Portfolio Studio</h1>
        <p className="text-slate-300 mt-2">
          25 AI-powered SaaS tools across GTM, analytics, monetization, ops, and content.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Bundles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.bundles.map((b) => (
            <Link
              key={b.id}
              href={`/bundles/${b.id}`}
              className="block p-4 rounded border border-slate-800 bg-slate-900 hover:border-sky-500"
            >
              <h3 className="font-medium">{b.name}</h3>
              <p className="text-sm text-slate-300 mt-1">{b.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">All assets</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.assets.map((a) => (
            <Link
              key={a.id}
              href={`/assets/${a.slug}`}
              className="block p-4 rounded border border-slate-800 bg-slate-900 hover:border-sky-500"
            >
              <h3 className="font-medium">{a.name}</h3>
              <p className="text-sm text-slate-300 mt-1">{a.description}</p>
              <p className="text-xs text-slate-500 mt-2">{a.niche}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
