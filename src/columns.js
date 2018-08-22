import moment from "moment";
import { SESSIONS } from "./constants";
import * as settings from "./settings";
import { findFirst } from "./utils";

export const TYPE_DATE = "date";
export const TYPE_SHORT_DATE = "shortdate";
export const TYPE_TEXT = "text";
export const TYPE_CURRENCY = "currency";
export const TYPE_ARRAY = "array";
export const TYPE_SEARCH_ONLY = "search";

export const FORM_TYPE_LOBBYER = "F625";
export const FORM_TYPE_EMPLOYER = "F635";

export const LOBBYER_TYPE_FIRM = "firm";
export const LOBBYER_TYPE_INHOUSE = "inhouse";
export const LOBBYER_TYPE_OTHER = "other";

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
  {
    name: "session",
    verbose: "Session",
    type: TYPE_TEXT,
    // make it verbose. should likely be made its own robust thing somewhere
    transform: (seshval) => findFirst("value", seshval, SESSIONS).verbose
  }
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
    name: "bills",
    verbose: "All Bills",
    type: TYPE_SEARCH_ONLY
  },
  {
    name: "start_date",
    verbose: "Starting",
    type: TYPE_SHORT_DATE
  },
  {
    name: "end_date",
    verbose: "Ending",
    type: TYPE_SHORT_DATE
  },
  {
    name: "filing_date",
    verbose: "Filed On",
    url: "filing_url",
    type: TYPE_DATE
  },
];

// Column utils
export const filingType = (record) => {
  return (record.form_type == FORM_TYPE_LOBBYER) ? "lobbyer" : "employer";
}

export const makeCell = (record, column) => {
  let value = "";
  let rawVal = (column.name in record) ? record[column.name] : "";
  let url = (column.url in record) ? record[column.url] : null;

  switch (column.type) {
    case TYPE_DATE:
      value = moment(rawVal).format(settings.DATE_DISPLAY_FORMAT);
      break;
    case TYPE_SHORT_DATE: // only month / year relevant, i.e. standard session quarters, etc
    value = moment(rawVal).format(settings.SHORT_DATE_DISPLAY_FORMAT);
    break;
    case TYPE_CURRENCY:
      // XXX lets move this to utils soon...
      const [ dollars, cents ] = (rawVal.includes(".")) ? rawVal.split(".") : rawVal;
      const digits = dollars.split("").reverse();
      const withCommas = digits.map((digit, index) => {
        let count = index + 1;
        if ((count % 3 == 0) && count < digits.length) {
            return ("," + digit);
        }
        return digit;
      })
      const formattedDollars = withCommas.reverse().join("");
      value = `$${formattedDollars}.${cents}`;
      break;
    case TYPE_TEXT:
      value = rawVal.trim();
      break;
    default:
      value = rawVal;
  }

  // Handle renaming of lobbyer field if not a firm
  if (column.name === "lobbyer") {
    switch (record.type) {
      case LOBBYER_TYPE_INHOUSE:
        value = "In-House Lobbyists";
        url = "";
        break;
      case LOBBYER_TYPE_OTHER:
        value = "Other Payments to Influence";
        url = "";
        break;
    }
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
