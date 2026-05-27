import data from "@/data/portfolio.json";
import { Asset, Bundle } from "./types";

export const portfolio = data;

export const getAssets = (): Asset[] => portfolio.assets;

export const getAssetBySlug = (slug: string): Asset | null =>
  portfolio.assets.find((a) => a.slug === slug) || null;

export const getBundles = (): Bundle[] => portfolio.bundles;

export const getBundleById = (id: string): Bundle | null =>
  portfolio.bundles.find((b) => b.id === id) || null;

export const getBundlesForAsset = (asset: Asset): Bundle[] =>
  portfolio.bundles.filter((b) => asset.bundles.includes(b.id));

export const getAssetsForBundle = (bundle: Bundle): Asset[] =>
  portfolio.assets.filter((a) => bundle.assetIds.includes(a.id));

