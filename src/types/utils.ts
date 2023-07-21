import { AddressMap } from "./types";

export function SortLocations(locations: AddressMap[]) {
  var sortedLocations = [...locations].sort((a, b) => {
    return (
      (a.attributes.displayPriority || Infinity) -
      (b.attributes.displayPriority || Infinity)
    );
  });
  return sortedLocations;
}

export function getPathFromUrl(url: string) {
  const baseUrl = url.split("/").slice(0, 3).join("/"); // Assuming base URL has 3 components (protocol, hostname, and path)
  return url.substring(baseUrl.length);
}
