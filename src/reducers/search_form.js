import moment from "moment";

import { makeResultKey, toParams } from "../utils";
import { TYPE_DATE, TYPE_TEXT } from "../columns";
import * as fields from "../fields";
import {
  SUBMIT_SEARCH,
  UPDATE_FIELD_ERRORS,
  UPDATE_BILL,
  UPDATE_COMPANY,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
  UPDATE_SESSION
} from "../actions/search_form";

const DEFAULT_SESSION = "20192020";
const DEFAULT_START_DATE = "20190101";
const DEFAULT_END_DATE = "20201231";

const searchForm = (state = {
  submitted: "",
  errors: [],
  fields: {
    bill: fields.create("", "bill name or keyword", TYPE_TEXT),
    company: fields.create("", "company name", TYPE_TEXT),
    session: fields.create(DEFAULT_SESSION, "session", TYPE_TEXT),
    startDate: fields.create(DEFAULT_START_DATE, "starting", TYPE_DATE),
    endDate: fields.create(DEFAULT_END_DATE, "ending", TYPE_DATE)
  }
}, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return { ...state,
        submitted: makeResultKey(toParams(state.fields)) };
    case UPDATE_FIELD_ERRORS:
      return { ...state,
        errors: action.errors };
    case UPDATE_BILL:
      return { ...state,
        fields: fields.update("bill", action.term, state.fields) };
    case UPDATE_COMPANY:
      return { ...state,
        fields: fields.update("company", action.term, state.fields) };
    case UPDATE_START_DATE:
      return { ...state,
        fields: fields.update("startDate", action.date, state.fields) };
    case UPDATE_END_DATE:
      return { ...state,
        fields: fields.update("endDate", action.date, state.fields) };
    case UPDATE_SESSION:
      return { ...state,
        fields: fields.update("session", action.session, state.fields) };
    default:
      return state;
  }
}

export default searchForm;
