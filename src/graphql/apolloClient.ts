import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

type CachedResponse = {
  expiresAt: number;
  status: number;
  statusText: string;
  headers: [string, string][];
  body: string;
};

const navigationResponseCache = new Map<string, CachedResponse>();

const DEFAULT_NAV_CACHE_TTL_SECONDS = 900;
const MAX_NAV_CACHE_ENTRIES = 200;

const getNavigationCacheTtlMs = (): number => {
  const rawTtl = Number(process.env.NAVIGATION_CACHE_TTL_SECONDS);
  const ttlSeconds = Number.isFinite(rawTtl) && rawTtl > 0
    ? rawTtl
    : DEFAULT_NAV_CACHE_TTL_SECONDS;

  return ttlSeconds * 1000;
};

const toHeadersArray = (headers: Headers): [string, string][] => {
  const entries: [string, string][] = [];
  headers.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
};

const buildCacheKey = (uri: string, body: string): string => `${uri}::${body}`;

const isNavigationGraphqlBody = (body: string): boolean =>
  body.includes("renderNavigation") && body.includes("Navigation");

const pruneCache = (): void => {
  const now = Date.now();

  for (const [key, value] of navigationResponseCache.entries()) {
    if (value.expiresAt <= now) {
      navigationResponseCache.delete(key);
    }
  }

  if (navigationResponseCache.size <= MAX_NAV_CACHE_ENTRIES) {
    return;
  }

  const overflow = navigationResponseCache.size - MAX_NAV_CACHE_ENTRIES;
  const oldestEntries = [...navigationResponseCache.entries()]
    .sort((a, b) => a[1].expiresAt - b[1].expiresAt)
    .slice(0, overflow);

  for (const [key] of oldestEntries) {
    navigationResponseCache.delete(key);
  }
};

const navigationCachingFetch: typeof fetch = async (input, init) => {
  const uri = typeof input === "string" ? input : input.toString();

  if (typeof window !== "undefined") {
    return fetch(input, init);
  }

  const body = typeof init?.body === "string" ? init.body : "";
  if (!body || !isNavigationGraphqlBody(body)) {
    return fetch(input, init);
  }

  const key = buildCacheKey(uri, body);
  const now = Date.now();
  const cached = navigationResponseCache.get(key);

  if (cached && cached.expiresAt > now) {
    return new Response(cached.body, {
      status: cached.status,
      statusText: cached.statusText,
      headers: cached.headers,
    });
  }

  const response = await fetch(input, init);
  if (!response.ok) {
    return response;
  }

  const bodyText = await response.text();
  const ttlMs = getNavigationCacheTtlMs();

  navigationResponseCache.set(key, {
    expiresAt: now + ttlMs,
    status: response.status,
    statusText: response.statusText,
    headers: toHeadersArray(response.headers),
    body: bodyText,
  });

  pruneCache();

  return new Response(bodyText, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
};

export const createServerApolloClient = (): ApolloClient =>
  new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      fetch: navigationCachingFetch,
    }),
    cache: new InMemoryCache(),
  });
