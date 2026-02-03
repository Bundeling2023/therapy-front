/**
 * Utility functions to normalize Strapi v5 GraphQL responses
 * Abstracts away the data pattern for cleaner code
 */

// Normalize collection items (e.g., pages, teams, locations)
export const normalizeCollectionItem = <T extends { attributes?: Record<string, any> }>(
  item: T
): T & Record<string, any> => {
  if (!item) return item;
  return {
    ...item,
    ...item,
  };
};

// Normalize collection response
export const normalizeCollection = <T extends { attributes?: Record<string, any> }>(
  items: T[]
): (T & Record<string, any>)[] => items.map(normalizeCollectionItem);

// Normalize single type response (already flattened in v5)
export const normalizeSingleType = <T extends Record<string, any>>(data: T): T => data;

// Get nested relation safely
export const getRelationUrl = (
  relation: any
): string | null => {
  if (!relation) return null;
  // Handle different response patterns
  if (typeof relation === 'string') return relation;
  if (relation.url) return relation.url;
  if (relation.data?.url) return relation.data.url;
  if (relation.data?.url) return relation.data.url;
  return null;
};

// Get image URL safely
export const getImageUrl = (image: any): string | null => {
  if (!image) return null;
  if (typeof image === 'string') return image;
  if (image.url) return image.url;
  if (image.data?.url) return image.data.url;
  if (image.data?.url) return image.data.url;
  return null;
};
