import _ from "lodash";
import moment from "moment";

import {
  REQUEST_RESULTS,
  RECEIVE_RESULTS,
  RECEIVE_ERROR
} from "../actions/results";
import {
  UPDATE_FILTER_TERM,
  UPDATE_SORT,
  UPDATE_SORT_FIELD,
  UPDATE_SORT_DIRECTION,
  EXPORT_CURRENT_SEARCH,
  TOGGLE_BILLS_FOR_RECORD
} from "../actions/controls";

import { fresh, findMatchingBills } from "../utils";

const resultsFromAPI = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RESULTS:
      return fresh(state, {
        params: action.params,
        isFetching: true
      });
    case RECEIVE_RESULTS:
      return fresh(state, {
        params: action.params,
        records: action.records,
        bills: findMatchingBills(action.records), // aggregate for header or separate bill-based view
        page: action.page,
        isFetching: false,
        receivedAt: action.receivedAt
      });
    case RECEIVE_ERROR:
      return fresh(state, {
        isFetching: false,
        error: action.error,
        errorType: action.errorType,
        receivedAt: action.receivedAt
      })
    default:
      return state;
  }
}

const results = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RESULTS:
    case RECEIVE_RESULTS:
    case RECEIVE_ERROR:
      return fresh(state, {
        [action.resultKey] : resultsFromAPI(state[action.resultKey], action)
      })
    default:
      return state;
  }
}

export default results;
