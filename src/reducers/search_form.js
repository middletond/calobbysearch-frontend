import moment from "moment";
import { fresh } from "../utils";
import {
  SUBMIT_SEARCH,
  UPDATE_BILL,
  UPDATE_COMPANY,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
  UPDATE_SESSION
} from "../actions/search_form";

const toSearchName = ({ bill, company, startDate, endDate }) => {
  // Ex: "AB 101|TESLA MOTORS|20170101|20181231"
  const DATE_FORMAT = "YYYYMMDD";
  const DELIMITER = "|";
  return [
    bill.toUpperCase(),
    company.toUpperCase(),
    startDate.format(DATE_FORMAT),
    endDate.format(DATE_FORMAT)
  ].join(DELIMITER)
}

const initialState = {
  fields: {
    bill: "vehicle",
    company: "tesla motors",
    session: "20172018", // this should modulate start and end on change
    startDate: moment("20170101"), // these should switch session to null if acted upon
    endDate: moment("20181231")
  },
  submitted: ""
}

const dateFromSession = (sesh, type) => {
  return (type == "start")
         ? moment(sesh.substring(0, 4) + "0101")
         : moment(sesh.substring(4, 8) + "1231")
}

const updateField = (field, value, state) => {
  let updated =  { [field]: value };

  if (field == "session" && value != "USE_DATES") { // sesh updated, align start / end dates to session
    updated.startDate = dateFromSession(value, "start");
    updated.endDate = dateFromSession(value, "end");
  }
  else if (field == "startDate" || field == "endDate") { // dates updates, turn off session
    updated.session = "USE_DATES"; // make this a constant soon
  }
  return fresh(state, {
    fields: fresh(state.fields, updated)
  })
}

const searchForm = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return fresh(state, {
        submitted: toSearchName(state.fields)
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
