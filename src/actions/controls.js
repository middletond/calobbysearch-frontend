export const UPDATE_FILTER_TERM = "UPDATE_FILTER_TERM";
export const UPDATE_SORTING = "UPDATE_SORTING";
export const TOGGLE_BILLS_FOR_RECORD = "TOGGLE_BILLS_FOR_RECORD";

export const UPDATE_RESULTS_VIEW = "UPDATE_RESULTS_VIEW";
export const UPDATE_STICKY_CONTROLS = "UPDATE_STICKY_CONTROLS";

export const EXPORT_CURRENT_SEARCH = "EXPORT_CURRENT_SEARCH";
export const REQUEST_EXPORT = "REQUEST_EXPORT";
export const RECEIVE_EXPORT = "RECEIVE_EXPORT";
export const RECEIVE_EXPORT_ERROR = "RECEIVE_EXPORT_ERROR";

// RESULTS TABLE
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

// RESULTS AREA
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

// RESULTS EXPORT
export const requestExport = (data) => {
  return {
    type: REQUEST_EXPORT,
    data
  }
}

export const receiveExport = (content) => {
  return {
    type: RECEIVE_EXPORT,
    content
  }
}

export const receiveExportError = (error) => {
  return {
    type: RECEIVE_EXPORT_ERROR,
    error
  }
}

// utils
const convertToData = (results) => {
  // might not need anything here.
  return results;
}

export const exportResults = (results) => {
  return (dispatch) => {
    // convert results to data
    const data = convertToData(results);
    // begin request
    dispatch(requestExport(data));
    // fetch the records
    return fetch(exportUrl(data))
      .then(
        response => response.text(),
        error => console.log("network error!")
      )
      .then(content => {
        dispatch(receiveExport(content))
    })
  }
}
