import {
  ASCENDING,
  DESCENDING,
  FILINGS_VIEW,
  BILLS_VIEW
} from "./constants";

export const RESULTS_ENDPOINT = "http://localhost:8000/search.json";

// https://devhints.io/moment
export const DATE_DISPLAY_FORMAT = "MMM D, YYYY";
export const SHORT_DATE_DISPLAY_FORMAT = "MMM YYYY";

export const DEFAULT_SORT_DIRECTION = DESCENDING;
export const DEFAULT_SORT_FIELD = "compensation";

export const DEFAULT_RESULTS_VIEW = FILINGS_VIEW;
