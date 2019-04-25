export const ASCENDING = "asc";
export const DESCENDING = "desc";

export const USE_DATES_NOT_SESSION = "USE_DATES";
export const DATE_PICKER_FIELDS = ["startDate", "endDate"];

export const SESSIONS = [ // XXX Dummy data: move this to API call
  { value: "20192020", verbose: "2019 - 2020" },
  { value: "20172018", verbose: "2017 - 2018" },
  { value: "20152016", verbose: "2015 - 2016" },
  { value: "20132014", verbose: "2013 - 2014" },
  { value: "20112012", verbose: "2011 - 2012" },
  { value: "20092010", verbose: "2009 - 2010" },
  { value: "20072008", verbose: "2007 - 2008" },
  { value: "20052006", verbose: "2005 - 2006" },
  { value: "20032004", verbose: "2003 - 2004" },
  { value: "20012002", verbose: "2001 - 2002" },
  { value: "19992000", verbose: "1999 - 2000" },
  { value: USE_DATES_NOT_SESSION, verbose: "Use Dates" },
]

export const BILLS_VIEW = "bills";
export const FILINGS_VIEW = "filings";

export const BAD_REQUEST_ERROR = "400 bad request"; // XXX verbose versions should happen in component
export const NOT_FOUND_ERROR = "404 not found error";
export const SERVER_ERROR = "500 server error";
export const NETWORK_ERROR = "network error";
export const EXPORT_ERROR = "export error";
export const NO_ERROR = "no error";
