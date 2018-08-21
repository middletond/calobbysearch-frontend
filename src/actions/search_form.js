// search form actions
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const UPDATE_FIELD_ERRORS = "UPDATE_FIELD_ERRORS";

export const submitSearch = () => {
  return {
    type: SUBMIT_SEARCH
  }
}

export const updateFieldErrors = (errors) => {
  return {
    type: UPDATE_FIELD_ERRORS,
    errors
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
    date
  }
}

export const updateEndDate = (date) => {
  return {
    type: UPDATE_END_DATE,
    date
  }
}

export const updateSession = (session) => {
  return {
    type: UPDATE_SESSION,
    session
  }
}
