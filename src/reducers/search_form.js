import moment from "moment";
import { fresh, makeResultKey } from "../utils";
import {
  SUBMIT_SEARCH,
  UPDATE_BILL,
  UPDATE_COMPANY,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
  UPDATE_SESSION
} from "../actions/search_form";

import {
  USE_DATES_NOT_SESSION,
  DATE_PICKER_FIELDS
} from "../constants";

const dateFromSession = (sesh, type) => {
  return (type == "start")
         ? moment(sesh.substring(0, 4) + "0101")
         : moment(sesh.substring(4, 8) + "1231")
}

// utils
const updateField = (field, value, state) => {
  // Update a single field value and handle any other
  // field updates that should occur as a result.
  let updated =  { [field]: value };

  if (field == "session" && value != USE_DATES_NOT_SESSION) {
    // sesh updated, align start / end dates to session
    updated.startDate = dateFromSession(value, "start");
    updated.endDate = dateFromSession(value, "end");
  }
  else if (DATE_PICKER_FIELDS.includes(field)) {
    // dates updates, turn off session
    updated.session = USE_DATES_NOT_SESSION;
  }
  return fresh(state, {
    fields: fresh(state.fields, updated)
  })
}

// reducer
const searchForm = (state = {
  submitted: "",
  fields: {
    bill: "accessory dwelling",
    company: "",
    session: "20172018",
    startDate: moment("20170101"),
    endDate: moment("20181231")
  }
}, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return fresh(state, {
        submitted: makeResultKey(state.fields)
      })
    case UPDATE_BILL:
      return updateField("bill", action.term, state);
    case UPDATE_COMPANY:
      return updateField("company", action.term, state);
    case UPDATE_START_DATE:
      return updateField("startDate", action.date, state);
    case UPDATE_END_DATE:
      return updateField("endDate", action.date, state);
    case UPDATE_SESSION:
      return updateField("session", action.session, state);
    default:
      return state;
  }
}

export default searchForm;
