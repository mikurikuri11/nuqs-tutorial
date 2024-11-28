import {
  createSearchParamsCache,
  // parseAsInteger,
  parseAsString,
} from "nuqs/server";
// Note: import from 'nuqs/server' to avoid the "use client" directive

export const searchUsersCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  email: parseAsString.withDefault(""),
  city: parseAsString.withDefault(""),
});
