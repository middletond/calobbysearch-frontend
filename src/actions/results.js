export const REQUEST_RESULTS = "REQUEST_RESULTS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const requestResults = (params) => {
  return {
    type: REQUEST_RESULTS,
    params
  }
}

export const receiveResults = (params, results) => {
  return {
    type: RECEIVE_RESULTS,
    params,
    results,
    receivedAt: Date.now()
  }
}

export const fetchResults = (params) => {
  return (dispatch) => {
    // begin request
    dispatch(requestResults(params));
    // do the API request and wait...
    window.setTimeout(() => {
      dispatch(receiveResults(params, {test: "it works!"}))
    }, 2000)
  }
}
