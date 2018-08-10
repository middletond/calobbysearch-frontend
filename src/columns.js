import moment from "moment";
import { DATE_DISPLAY_FORMAT } from "./constants";

export const TYPE_DATE = "date";
export const TYPE_TEXT = "text";
export const TYPE_CURRENCY = "currency";
export const TYPE_ARRAY = "array";

export const BILLS_COLUMNS = [
  {
    name: "name",
    verbose: "Name",
    url: "url",
    type: TYPE_TEXT
  },
  {
    name: "title",
    verbose: "Title",
    url: "url",
    type: TYPE_TEXT
  },
  {
    name: "authors",
    verbose: "Author(s)",
    type: TYPE_TEXT
  },
  {
    name: "status",
    verbose: "Status",
    type: TYPE_TEXT
  },
]

export const FILINGS_COLUMNS = [
  {
    name: "employer",
    verbose: "Company",
    url: "employer_url",
    type: TYPE_TEXT
  },
  {
    name: "compensation",
    verbose: "Paid",
    type: TYPE_CURRENCY
  },
  {
    name: "lobbyer",
    verbose: "Lobby Firm",
    url: "lobbyer_url",
    type: TYPE_TEXT
  },
  {
    name: "interests",
    verbose: "For Interests",
    type: TYPE_TEXT,
  },
  {
    name: "matching_bills",
    verbose: "Matching Bills",
    type: TYPE_ARRAY,
    transform: bills => bills.map(bill => bill.name).join(", ")
  },
  {
    name: "start_date",
    verbose: "Starting",
    type: TYPE_DATE
  },
  {
    name: "end_date",
    verbose: "Ending",
    type: TYPE_DATE
  },
  {
    name: "filing_date",
    verbose: "Filed On",
    url: "filing_url",
    type: TYPE_DATE
  },
  {
    name: "form_type",
    verbose: "Filed By",
    type: TYPE_TEXT,
    transform: (val) => (val === "F625") ? "Lobby Firm" : "Employer"
  }
];

export const makeCell = (record, column) => {
  let value = "";
  let rawVal = (column.name in record) ? record[column.name] : "";
  let url = (column.url in record) ? record[column.url] : null;

  switch (column.type) {
    case TYPE_DATE:
      value = moment(rawVal).format(DATE_DISPLAY_FORMAT);
      break;
    case TYPE_CURRENCY:
      value = "$" + rawVal;
      break;
    case TYPE_TEXT:
      value = rawVal.trim();
      break;
    default:
      value = rawVal;
  }

  if (column.transform)
    value = column.transform(value);

  return {
    value: value,
    rawVal: rawVal,
    url: url,
    colType: column.type,
    colName: column.name
  }
}