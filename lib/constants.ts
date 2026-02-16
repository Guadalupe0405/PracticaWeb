export const OPEN_LIBRARY_BASE_URL = "https://openlibrary.org/search.json";

export const OPEN_LIBRARY_USER_AGENT =
    "MyAppName/1.0 (hemg050704@gs.utm.mx)";

export const SEARCH_FIELDS = [
    "key",
    "title",
    "author_name",
    "editions",
    "edition_count",
    "language"
];

export const SEARCH_LIMIT = 5;

export const VALID_AREAS:string [] = [
    "algebra",
    "math",
    "python",
];

export type Area = typeof VALID_AREAS[number];