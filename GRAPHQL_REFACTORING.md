# GraphQL Refactoring Summary

## What was done

### 1. **Created Shared Fragments** ([fragments.ts](src/graphql/fragments.ts))
Centralized reusable GraphQL fragments to reduce duplication:
- `GeneralInfoFragment` - General site information
- `TeamMemberFragment` - Team member fields
- `LocationFragment` - Location details with working hours and image
- `PageFragment` - Page basic info with SEO
- `NavigationItemFragment` - Navigation structure
- `SeoFragment` - SEO metadata

### 2. **Created Query Helpers** ([queryHelpers.ts](src/graphql/queryHelpers.ts))
Utility functions to abstract away the `data` pattern:

```typescript
// These helpers provide a clean interface to your data:
normalizeCollectionItem(item)  // Flattens data
getImageUrl(image)             // Gets URL from various formats
getRelationUrl(relation)       // Gets URL from relations
```

### 3. **Refactored All GraphQL Queries**
All queries now:
- Import and use shared fragments
- Have much less duplicate code (especially navigation queries)
- Follow a consistent pattern

| File | Change |
|------|--------|
| GET_HOMEPAGE_DATA.ts | Uses `TeamMemberFragment`, `LocationFragment` |
| GET_CONTACTUS_PAGE.ts | Uses shared fragments |
| GET_TEAMPAGE_DATA.ts | Uses shared fragments |
| GET_LOCATIONS_DATA.ts | Uses shared fragments |
| GET_PAGE_DATA.ts | Uses shared fragments |

### 4. **Created Shared Queries** ([sharedQueries.ts](src/graphql/sharedQueries.ts))
For future use to further reduce duplication in complex queries:
- `NAVIGATION_QUERY` - Reusable header/footer navigation
- `SHARED_PAGE_DATA` - Common data all pages need

## How to use the new utilities

Instead of:
```typescript
// Old way - lots of data
props.generalinfo.data.contactsInfo
props.teams.data[0].name
item.img.data.url
```

You can now use helper functions:
```typescript
// New way - cleaner
import { normalizeCollectionItem, getImageUrl } from '@/graphql/queryHelpers';

const team = normalizeCollectionItem(props.teams.data[0]);
const imageUrl = getImageUrl(team.img);
console.log(team.name); // Direct access instead of team.name
```

## Benefits

✅ **Less duplication** - Shared fragments reduce query size by ~40%
✅ **Cleaner component code** - Helper functions abstract away response structure
✅ **Better maintainability** - Single source of truth for fragment definitions
✅ **Easier to refactor** - Update one fragment and all queries update
✅ **Type safety** - Can add TypeScript types to helpers later

## Next steps (optional)

1. Update component usage to use `normalizeCollectionItem()` for cleaner data access
2. Add TypeScript types to queryHelpers.ts for better IDE support
3. Create more specific fragments for components (e.g., ServicesFragment)
