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
  const DATE_FORMAT = "YYYYMMDD";
  const DELIMITER = "|";
  return [
    bill.toLowerCase(),
    company.toLowerCase(),
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

const searchForm = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return fresh(state, {
        submitted: toSearchName(state.fields)
      })
    case UPDATE_BILL:
      return fresh(state, {
        fields: fresh(state.fields, { bill: action.term })
      })
    case UPDATE_COMPANY:
      return fresh(state, {
        fields: fresh(state.fields, { company: action.term })
      })
    case UPDATE_START_DATE:
      return fresh(state, {
        fields: fresh(state.fields, { startDate: action.date })
      })
    case UPDATE_END_DATE:
      return fresh(state, {
        fields: fresh(state.fields, { endDate: action.date })
      })
    case UPDATE_SESSION:
      return fresh(state, {
        fields: fresh(state.fields, { session: action.session })
      })
    default:
      return state;
  }
}

export default searchForm;
