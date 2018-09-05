import converter from "json-2-csv";
import { FILINGS_VIEW, BILLS_VIEW } from "./constants";

const DOWNLOAD_FILENAME = "lobby_activity.csv"
// Export happens so fast that we need a delay for UI to show it happening
const UI_ACTION_DURATION = 2000;

const FILINGS_FIELDS = [
  "employer",
  "compensation",
  "reimbursement",
  "period_total",
  "session_total",
  "lobbyer",
  "interests",
  "start_date",
  "end_date",
  "filing_date",
  "filer",
  "filer_id",
  "filing_id",
  "amendment_id",
  "filing_url",
];

const BILLS_FIELDS = [
  "name",
  "title",
  "session",
  "url",
  "authors",
  "status"
]

const convert = (records, view) => {
  return new Promise((resolve, reject) => {
    const opts = {
      delimiter : {
        wrap  : '"', // Double Quote (") character
        field : ',', // Comma field delimiter
        array : ';', // Semicolon array value delimiter
        eol   : '\n' // Newline delimiter
      },
      keys: (view === BILLS_VIEW) ? BILLS_FIELDS : FILINGS_FIELDS
    }
    converter.json2csv(records, (err, csv) => {
      if (err) reject(err);
      resolve(csv);
    }, opts)
  })
}

const download = (csv) => {
  return new Promise((resolve, reject) => {
    const csvBlob = new Blob([csv]);
    // i guess this is best way?
    const dataUrl = window.URL.createObjectURL(csvBlob);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = DOWNLOAD_FILENAME;
    link.click();

    window.setTimeout(resolve, UI_ACTION_DURATION);
  })
}

const run = (records, view = FILINGS_VIEW) => {
  return convert(records, view)
    .then(
      csv => download(csv),
      err => console.log("PROBLEM!")
    )
}

export default run;
