export const UPDATE_FILTER_TERM = "UPDATE_FILTER_TERM";
export const UPDATE_SORT = "UPDATE_SORT";
export const UPDATE_SORT_FIELD = "UPDATE_SORT_FIELD";
export const UPDATE_SORT_DIRECTION = "UPDATE_SORT_DIRECTION";
export const EXPORT_CURRENT_SEARCH = "EXPORT_CURRENT_SEARCH";
export const TOGGLE_BILLS_FOR_RECORD = "TOGGLE_BILLS_FOR_RECORD";

export const updateFilterTerm = (term) => {
  return {
    type: UPDATE_FILTER_TERM,
    term
  }
}

export const updateSort = (field, direction) => {
  return {
    type: UPDATE_SORT,
    sorting: {
      field: field,
      direction, direction
    }
  }
}

export const updateSortField = (field) => {
  return {
    type: UPDATE_SORT_FIELD,
    field
  }
}

export const updateSortDirection = (direction) => {
  return {
    type: UPDATE_SORT_FIELD,
    direction
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
