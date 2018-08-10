import moment from "moment";
import { fresh, findMatchingBills } from "../utils";
import {
  REQUEST_RESULTS,
  RECEIVE_RESULTS,
  RECEIVE_ERROR
} from "../actions/results";

const results = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RESULTS:
      return fresh(state, {
        [action.resultKey]: {
          params: action.params,
          isFetching: true
        }
      });
    case RECEIVE_RESULTS:
    return fresh(state, {
      [action.resultKey]: {
        params: action.params,
        records: action.records,
        bills: findMatchingBills(action.records), // aggregate for header or separate bill-based view
        page: action.page,
        isFetching: false
      }
    });
    case RECEIVE_ERROR:
      return state;
    default:
      return state;
  }
}

export default results;
