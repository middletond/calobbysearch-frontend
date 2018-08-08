import moment from "moment";

// search form actions
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";

export const submitSearch = () => {
  return {
    type: SUBMIT_SEARCH
  }
}

// controlled input actions
export const UPDATE_BILL = "UPDATE_BILL";
export const UPDATE_COMPANY = "UPDATE_COMPANY";
export const UPDATE_START_DATE = "UPDATE_START_DATE";
export const UPDATE_END_DATE = "UPDATE_END_DATE";
export const UPDATE_SESSION = "UPDATE_SESSION";

export const updateBill = (term) => {
  return {
    type: UPDATE_BILL,
    term
  }
}

export const updateCompany = (term) => {
  return {
    type: UPDATE_COMPANY,
    term
  }
}

export const updateStartDate = (date) => {
  return {
    type: UPDATE_START_DATE,
    date: moment(date)
  }
}

export const updateEndDate = (date) => {
  return {
    type: UPDATE_END_DATE,
    date: moment(date)
  }
}

export const updateSession = (session) => {
  return {
    type: UPDATE_SESSION,
    session
  }
}
