export const COLUMNS = [
  {
    name: "employer",
    verbose: "Company",
    url: "employer_url",
    type: "text"
  },
  {
    name: "compensation",
    verbose: "Paid",
    type: "currency"
  },
  {
    name: "lobbyer",
    verbose: "Lobby Firm",
    url: "lobbyer_url",
    type: "text"
  },
  {
    name: "interests",
    verbose: "For Interests / Bills",
    type: "text"
  },
  {
    name: "start_date",
    verbose: "Starting",
    type: "date"
  },
  {
    name: "end_date",
    verbose: "Ending",
    type: "date"
  },
  {
    name: "filing_date",
    verbose: "Filed",
    url: "filing_url",
    type: "date"
  }
];

export const SESSIONS = [ // XXX Dummy data: move this to API call
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
  { value: "USE_DATES", verbose: "Use Dates" },
]
