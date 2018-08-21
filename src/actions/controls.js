import converter from "json-2-csv";

export const UPDATE_FILTER_TERM = "UPDATE_FILTER_TERM";
export const UPDATE_SORTING = "UPDATE_SORTING";
export const TOGGLE_BILLS_FOR_RECORD = "TOGGLE_BILLS_FOR_RECORD";
export const UPDATE_RESULTS_VIEW = "UPDATE_RESULTS_VIEW";
export const UPDATE_STICKY_CONTROLS = "UPDATE_STICKY_CONTROLS";

export const REQUEST_EXPORT = "REQUEST_EXPORT";
export const FINISH_EXPORT = "FINISH_EXPORT";


export const updateFilterTerm = (term) => {
  return {
    type: UPDATE_FILTER_TERM,
    term
  }
}

export const updateSorting = (field) => {
  return {
    type: UPDATE_SORTING,
    field
  }
}

export const toggleBillsForRecord = (id) => {
  return {
    type: TOGGLE_BILLS_FOR_RECORD,
    id
  }
}

export const updateResultsView = (view) => {
  return {
    type: UPDATE_RESULTS_VIEW,
    view
  }
}

export const updateStickyControls = (sticky) => {
  return {
    type: UPDATE_STICKY_CONTROLS,
    sticky
  }
}


// EXPORTING
export const requestExport = () => {
  return {
    type: REQUEST_EXPORT
  }
}

export const finishExport = () => {
  return {
    type: FINISH_EXPORT
  }
}

// thunk action
export const exportResults = () => {
  return (dispatch, getState) => {
    // get visible records based on current controls
    const { searchForm, controls, results } = getState();
    const currentResults = results[searchForm.submitted];

    if (!currentResults) return;

    const { filterTerm, view } = controls;
    const { records } = currentResults;
    // begin request
    dispatch(requestExport());
    // make csv
    const opts = {
      delimiter : {
        wrap  : '"', // Double Quote (") character
        field : ',', // Comma field delimiter
        array : ';', // Semicolon array value delimiter
        eol   : '\n' // Newline delimiter
      },
      keys: EXPORT_FIELDS
    }
    converter.json2csv(records, (err, csv) => {
      download(csv);
      window.setTimeout(() => {
        dispatch(finishExport())
      }, 2000)
    }, opts);
  }
}

// utils
const EXPORT_FIELDS = [
  "filing_id",
  "employer",
  "compensation",
  "lobbyer",
  "interests",
  "start_date",
  "end_date",
  "filing_date"
];

const download = (csv) => {
  const csvBlob = new Blob([csv]);
  const data = window.URL.createObjectURL(csvBlob);

  const link = document.createElement("a");
  link.href = data;
  link.download = "export.csv";
  link.click();
}
