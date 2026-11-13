import { profile } from "@/data/profile";

/**
 * Shared, content-backed SEO configuration for this static Next.js export.
 * Publishing requires BOTH an HTTPS canonical origin and an explicit SEO opt-in.
 * LAN previews must never become indexable simply because someone builds them.
 */
function httpsPublicOrigin(value?: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value.trim());
    if (
      url.protocol !== "https:" ||
      url.username || url.password ||
      url.search || url.hash ||
      url.pathname !== "/" ||
      url.hostname === "localhost" ||
      url.hostname.endsWith(".local") ||
      /^\d+\.\d+\.\d+\.\d+$/.test(url.hostname)
    ) return null;
    return url.origin;
  } catch {
    return null;
  }
}

export const publicOrigin = httpsPublicOrigin(process.env.NEXT_PUBLIC_SITE_URL);
export const isIndexable = Boolean(publicOrigin && process.env.SEO_ALLOW_INDEXING === "true");
// Netlify exposes its URL at build time; use it for social previews only.
// Indexing still requires the explicit two-variable opt-in above.
export const netlifyBuildOrigin = httpsPublicOrigin(process.env.URL);
export const previewOrigin = process.env.NEXT_PUBLIC_PREVIEW_ORIGIN || "http://192.168.1.109:8188";
export const metadataOrigin = publicOrigin || netlifyBuildOrigin || previewOrigin;

export const siteName = "Baste";
export const seoTitle = `${profile.name} (Baste) | ${profile.role} & Developer`;
export const seoDescription =
  "Meet Baste, a Filipino developer and tech creator. Explore Kandili, DeclutterPH, Ravert, links to his socials, favorite music, Polaroids, books and mini chess.";
export const shareImageAlt =
  "Baste, Tech Yapper and developer — an interactive digital space featuring Kandili, DeclutterPH, Ravert, music and chess.";

export const canonicalHomepage = isIndexable ? `${publicOrigin}/` : null;
