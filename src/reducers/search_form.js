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

const toSearchName = ({ bill, company, start, end }) => {
  const DATE_FORMAT = "YYYYMMDD";
  const DELIMITER = "|";
  return [
    bill.toLowerCase(),
    company.toLowerCase(),
    start.format(DATE_FORMAT),
    end.format(DATE_FORMAT)
  ].join(DELIMITER)
}

const initialState = {
  fields: {
    bill: "vehicle",
    company: "tesla motors",
    session: "20172018", // this should modulate start and end on change
    start: moment("20170101"), // these should switch session to null if acted upon
    end: moment("20181231")
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
    default:
      return state;
  }
}

export default searchForm;
