import { AddressMap } from "./types";

export function SortLocations(locations: AddressMap[]) {
    var sortedLocations = [...locations].sort((a, b) => {
      return (a.attributes.displayPriority || Infinity) - (b.attributes.displayPriority || Infinity);
    });
    return sortedLocations;
  }