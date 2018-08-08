import {
  UPDATE_FILTER_TERM,
  UPDATE_SORT,
  UPDATE_SORT_FIELD,
  UPDATE_SORT_DIRECTION,
  EXPORT_CURRENT_SEARCH
} from "../actions/controls";

import { fresh } from "../utils";

const ASCENDING = "asc";
const DESCENDING = "desc";

const controls = (state = {
  filterTerm: "",
  sort: {
    field: "startDate",
    direction: ASCENDING,
  }
}, action) => {
  switch (action.type) {
    case UPDATE_FILTER_TERM:
      return fresh(state, {
        filterTerm: action.term
      });
    case UPDATE_SORT:
        return fresh(state, {
          sort: action.sort
        })
    case UPDATE_SORT_FIELD:
      return fresh(state, {
        sort: fresh(state.sort, { field: action.field })
      })
    case UPDATE_SORT_DIRECTION:
      return fresh(state, {
        sort: fresh(state.sort, { direction: action.direction })
      })
    case EXPORT_CURRENT_SEARCH:
      // use thunk action to get to here
      return state;
    default:
      return state;
  }
}

export default controls;
