import _ from "lodash";

import {
  UPDATE_FILTER_TERM,
  UPDATE_SORT,
  UPDATE_SORT_FIELD,
  UPDATE_SORT_DIRECTION,
  EXPORT_CURRENT_SEARCH,
  TOGGLE_BILLS_FOR_RECORD
} from "../actions/controls";

import { ASCENDING, DESCENDING } from "../constants";

import { fresh } from "../utils";

const controls = (state = {
  opened: [],
  filterTerm: "",
  sorting: {
    field: "filing_date",
    direction: DESCENDING,
  }
}, action) => {
  switch (action.type) {
    case UPDATE_FILTER_TERM:
      return fresh(state, {
        filterTerm: action.term
      });
    case UPDATE_SORT:
        return fresh(state, {
          sorting: action.sorting
        })
    case UPDATE_SORT_FIELD:
      return fresh(state, {
        sorting: fresh(state.sorting, { field: action.field })
      })
    case UPDATE_SORT_DIRECTION:
      return fresh(state, {
        sorting: fresh(state.sorting, { direction: action.direction })
      })
    case EXPORT_CURRENT_SEARCH:
      // use thunk action to get to here
      return state;
    case TOGGLE_BILLS_FOR_RECORD:
      return fresh(state, {
        opened: (!state.opened.includes(action.id))
                 ? [...state.opened, action.id]
                 : [...state.opened].filter(id => id != action.id)
      })
    default:
      return state;
  }
}

export default controls;
