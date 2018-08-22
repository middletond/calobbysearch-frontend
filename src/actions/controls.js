import exportCSV from "../csv";
import * as rows from "../rows";
import { FILINGS_VIEW, BILLS_VIEW } from "../constants";

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
    const { view } = controls;
    const currentResults = results[searchForm.submitted];

    if (!currentResults) return;

    dispatch(requestExport());
    // get visible records
    const records = (view === FILINGS_VIEW)
      ? currentResults.records
      : currentResults.bills;
    const visibleRecs = rows.getVisible(records, controls);
    // export them
    exportCSV(visibleRecs, view).then(
      (success) => dispatch(finishExport()),
      (error) => console.log(error)
    )
  }
}
