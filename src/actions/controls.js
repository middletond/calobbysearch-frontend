export const UPDATE_FILTER_TERM = "UPDATE_FILTER_TERM";
export const UPDATE_SORTING = "UPDATE_SORTING";
export const EXPORT_CURRENT_SEARCH = "EXPORT_CURRENT_SEARCH";
export const TOGGLE_BILLS_FOR_RECORD = "TOGGLE_BILLS_FOR_RECORD";

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

export const exportCurrentSearch = () => {
  // Make into thunk action (return callback)
  return {
    type: EXPORT_CURRENT_SEARCH
  }
}

export const toggleBillsForRecord = (id) => {
  return {
    type: TOGGLE_BILLS_FOR_RECORD,
    id
  }
}
