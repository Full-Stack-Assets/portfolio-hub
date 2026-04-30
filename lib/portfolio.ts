import data from "@/data/portfolio.json";

export const portfolio = data;

export const getAssets = () => portfolio.assets;

export const getAssetBySlug = (slug: string) =>
  portfolio.assets.find((a) => a.slug === slug) || null;

export const getBundles = () => portfolio.bundles;

export const getBundleById = (id: string) =>
  portfolio.bundles.find((b) => b.id === id) || null;

export const getBundlesForAsset = (asset) =>
  portfolio.bundles.filter((b) => asset.bundles.includes(b.id));

export const getAssetsForBundle = (bundle) =>
  portfolio.assets.filter((a) => bundle.assetIds.includes(a.id));

