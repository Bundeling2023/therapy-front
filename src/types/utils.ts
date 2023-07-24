import { AddressMap } from "./types";

export function getPathFromUrl(url: string) {
  const baseUrl = url.split("/").slice(0, 3).join("/"); // Assuming base URL has 3 components (protocol, hostname, and path)
  return url.substring(baseUrl.length);
}
