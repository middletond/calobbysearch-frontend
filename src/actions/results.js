import { NETWORK_ERROR, SERVER_ERROR, NOT_FOUND_ERROR } from "../constants";
import { makeResultKey } from "../utils";
import * as settings from "../settings";

export const REQUEST_RESULTS = "REQUEST_RESULTS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const requestResults = (resultKey, params) => {
  return {
    type: REQUEST_RESULTS,
    params,
    resultKey
  }
}

export const receiveResults = (resultKey, params, json) => {
  return {
    type: RECEIVE_RESULTS,
    resultKey,
    params,
    records: json.results,
    page: {
      count: json.count,
      next: json.next,
      prev: json.previous
    },
    receivedAt: Date.now()
  }
}

export const receiveError = (resultKey, error, errorType) => {
  return {
    type: RECEIVE_ERROR,
    resultKey,
    errorType,
    error,
    receivedAt: Date.now()
  }
}

export const fetchResults = (params) => {
  return (dispatch) => {
    const key = makeResultKey(params);

    const logError = (error, errorType) => {
      dispatch(receiveError(key, error, errorType));
      return Promise.reject(error);
    }
    // begin request
    dispatch(requestResults(key, params));
    // fetch the records
    return fetch(resultsUrl(params))
      .then(
        response => {
          if (response.status == 400)
            return logError(response.statusText, SERVER_ERROR);
          if (response.status == 404)
            return logError(response.statusText, NOT_FOUND_ERROR);
          return response.json();
        },
        error => logError(error, NETWORK_ERROR)
      )
      .then(
        json => dispatch(receiveResults(key, params, json)),
        error => console.log("ERROR:", error)
      )

      // .then(
      //   resp => {
      //     // resp.status
      //     return resp.json()
      //   },
      //   error => {
      //     dispatch(receiveError(key, error, NETWORK_ERROR))
      //   }
      // )
      // .then(
      //   json => dispatch(receiveResults(key, params, json))
      // )
  }
}

// helpers
const resultsUrl = ({ bill, company, startDate, endDate }) => {
  const url = new URL(settings.RESULTS_ENDPOINT);
  // url.search = new URLSearchParams({
  //   bill,
  //   company,
  //   start: startDate.format("YYYY-MM-DD"),
  //   end: endDate.format("YYYY-MM-DD")
  // });
  return url;
}
