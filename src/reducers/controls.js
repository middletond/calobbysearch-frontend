import _ from "lodash";

import {
  UPDATE_FILTER_TERM,
  UPDATE_SORTING,
  EXPORT_CURRENT_SEARCH,
  TOGGLE_BILLS_FOR_RECORD,
  UPDATE_RESULTS_VIEW
} from "../actions/controls";

import { ASCENDING, DESCENDING } from "../constants";
import * as settings from "../settings";

import { fresh } from "../utils";

const controls = (state = {
  opened: [],
  filterTerm: "",
  sorting: {
    field: settings.DEFAULT_SORT_FIELD,
    direction: settings.DEFAULT_SORT_DIRECTION,
  },
  view: settings.DEFAULT_RESULTS_VIEW
}, action) => {
  switch (action.type) {
    case UPDATE_FILTER_TERM:
      return fresh(state, {
        filterTerm: action.term
      });
    case UPDATE_SORTING:
      let oldDir = state.sorting.direction;
      let newDir = settings.DEFAULT_SORT_DIRECTION;
      // if field hasn't changed, toggle direction.
      if (state.sorting.field == action.field) {
        newDir = (oldDir == ASCENDING) ? DESCENDING : ASCENDING;
      }
      return fresh(state, {
        sorting: {
          field: action.field,
          direction: newDir,
        }
      })
    case UPDATE_RESULTS_VIEW:
      return fresh(state, {
        view: action.view
      })
    case EXPORT_CURRENT_SEARCH:
      return state; // TODO: use thunk action to get to here
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
