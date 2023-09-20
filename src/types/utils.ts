export function getPathFromUrl(url: string) {
  const baseUrl = url.split("/").slice(0, 3).join("/"); // Assuming base URL has 3 components (protocol, hostname, and path)
  return url.substring(baseUrl.length);
}

export function ConstructPageTitle(seoTitle?: string, defaultPageName?: string, showPublicSiteAlways: boolean = true) {
  const title = seoTitle ? seoTitle : defaultPageName;
  
  if(!showPublicSiteAlways) return title;

  return title ? title + ' | ' + process.env.NEXT_PUBLIC_SITE_NAME : process.env.NEXT_PUBLIC_SITE_NAME
}

export const isEnvironment = (env: string) => process.env.NODE_ENV === env;

