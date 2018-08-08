import { makeResultKey } from "../utils";
import { RESULTS_ENDPOINT } from "../settings";

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
    params,
    resultKey,
    records: json.results,
    receivedAt: Date.now()
  }
}

const resultsUrl = ({ bill, company, startDate, endDate }) => {
  const url = new URL(RESULTS_ENDPOINT);
  url.search = new URLSearchParams({
    bill,
    company,
    start: startDate.format("YYYY-MM-DD"),
    end: endDate.format("YYYY-MM-DD")
  });
  return url;
}

export const fetchResults = (params) => {
  return (dispatch) => {
    const key = makeResultKey(params);
    // begin request
    dispatch(requestResults(key, params));
    // fetch the records
    return fetch(resultsUrl(params))
      .then(
        response => response.json(),
        error => console.log("network error!")
      )
      .then(json => {
        dispatch(receiveResults(key, params, json))
    })
  }
}
