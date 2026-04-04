import type {
  LegalContentApiResponse,
  LegalContentItem,
  LegalContentType,
} from "@/types/legal-content";

const DEFAULT_API_BASE_URL = "https://api.ma3llc.co";

function normalizeBaseUrl(value: string) {
  return value.replace(/\/+$/, "");
}

function buildLegalContentUrl(type: LegalContentType) {
  const configuredBaseUrl =
    process.env.NEXT_PUBLIC_LEGAL_API_BASE_URL ??
    process.env.LEGAL_API_BASE_URL ??
    DEFAULT_API_BASE_URL;

  return `${normalizeBaseUrl(configuredBaseUrl)}/legal-content/${type}`;
}

function sortNewestFirst(items: LegalContentItem[]) {
  return [...items].sort((left, right) => {
    return new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime();
  });
}

export async function getLegalContents(type: LegalContentType) {
  const response = await fetch(buildLegalContentUrl(type), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to load ${type}`);
  }

  const payload = (await response.json()) as LegalContentApiResponse;
  const items = payload.data?.items ?? [];

  return sortNewestFirst(items);
}
