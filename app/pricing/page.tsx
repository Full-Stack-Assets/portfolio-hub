import portfolio from "@/data/portfolio.json";

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl font-semibold">Pricing</h1>
        <p className="text-slate-300 mt-2">
          Portfolio-first pricing with bundles and a studio-level pass.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Portfolio Pass</h2>
        <p className="text-slate-300 mt-1">
          Access all 25 assets and all bundles.
        </p>
        <p className="text-sky-400 font-medium mt-2">$499–$999 / year</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Bundles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.bundles.map((b) => (
            <div
              key={b.id}
              className="p-4 rounded border border-slate-800 bg-slate-900"
            >
              <h3 className="font-medium">{b.name}</h3>
              <p className="text-sm text-slate-300 mt-1">{b.description}</p>
              <p className="text-xs text-slate-500 mt-2">
                Includes {b.assetIds.length} assets
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Individual assets</h2>
        <ul className="grid gap-2 text-sm text-slate-300 md:grid-cols-2">
          {portfolio.assets.map((a) => (
            <li key={a.id} className="flex justify-between">
              <span>{a.name}</span>
              <span className="text-xs text-slate-500">configurable</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
