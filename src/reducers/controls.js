import _ from "lodash";

import {
  UPDATE_FILTER_TERM,
  UPDATE_SORTING,
  EXPORT_CURRENT_SEARCH,
  TOGGLE_BILLS_FOR_RECORD,
  UPDATE_RESULTS_VIEW,
  UPDATE_STICKY_CONTROLS,
  REQUEST_EXPORT,
  FINISH_EXPORT
} from "../actions/controls";
import {
  SUBMIT_SEARCH
} from "../actions/search_form"; 

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
  view: settings.DEFAULT_RESULTS_VIEW,
  sticky: false,
  isExporting: false
}, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH: // clear filter when search submitted
      return fresh(state, {
        filterTerm: ""
      })
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
    case UPDATE_STICKY_CONTROLS:
      return fresh(state, {
        sticky: action.sticky
      })
    case TOGGLE_BILLS_FOR_RECORD:
      return fresh(state, {
        opened: (!state.opened.includes(action.id))
                 ? [...state.opened, action.id]
                 : [...state.opened].filter(id => id != action.id)
      })
    case REQUEST_EXPORT:
      return fresh(state, {
        isExporting: true
      })
    case FINISH_EXPORT:
      return fresh(state, {
        isExporting: false
      })
    default:
      return state;
  }
}

export default controls;
