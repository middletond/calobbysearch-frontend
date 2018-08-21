import moment from "moment";

import { makeResultKey, toParams } from "../utils";
import { TYPE_DATE, TYPE_TEXT } from "../columns";
import * as fields from "../fields";
import {
  SUBMIT_SEARCH,
  UPDATE_BILL,
  UPDATE_COMPANY,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
  UPDATE_SESSION
} from "../actions/search_form";

// reducer
const searchForm = (state = {
  submitted: "",
  fields: {
    bill: fields.create("", "bill name or keyword", TYPE_TEXT),
    company: fields.create("", "company name", TYPE_TEXT),
    session: fields.create("20172018", "session", TYPE_TEXT),
    startDate: fields.create(moment("20170101"), "starting", TYPE_DATE),
    endDate: fields.create(moment("20181231"), "ending", TYPE_DATE)
  }
}, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return { ...state,
        submitted: makeResultKey(toParams(state.fields))
      }
    case UPDATE_BILL:
      return fields.updateValue("bill", action.term, state);
    case UPDATE_COMPANY:
      return fields.updateValue("company", action.term, state);
    case UPDATE_START_DATE:
      return fields.updateValue("startDate", action.date, state);
    case UPDATE_END_DATE:
      return fields.updateValue("endDate", action.date, state);
    case UPDATE_SESSION:
      return fields.updateValue("session", action.session, state);
    default:
      return state;
  }
}

export default searchForm;
