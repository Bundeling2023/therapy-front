export function getPathFromUrl(url: string) {
  const baseUrl = url.split("/").slice(0, 3).join("/"); // Assuming base URL has 3 components (protocol, hostname, and path)
  return url.substring(baseUrl.length);
}

export function ConstructPageTitle(seoTitle?: string, defaultPageName?: string) {
  const title = seoTitle ? seoTitle : defaultPageName;
  
  return title ? title + ' | ' + process.env.NEXT_PUBLIC_SITE_NAME : process.env.NEXT_PUBLIC_SITE_NAME
}
