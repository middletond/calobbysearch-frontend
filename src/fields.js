import moment from "moment";

import {
  USE_DATES_NOT_SESSION,
  DATE_PICKER_FIELDS
} from "./constants";

import {
  TYPE_TEXT,
  TYPE_DATE
} from "./columns";

export const updateValue = (fieldName, value, state) => {
  // Update a single field value and handle any other
  // field updates that should occur as a result.
  let updated = { ...state.fields,
    [fieldName]: { ...state.fields[fieldName], value }
  }
  if (fieldName == "session" && value != USE_DATES_NOT_SESSION) {
    // sesh updated, align start / end dates to session
    updated.startDate.value = moment(sesh.substring(0, 4) + "0101");
    updated.endDate.value = moment(sesh.substring(4, 8) + "1231");
  }
  else if (DATE_PICKER_FIELDS.includes(fieldName)) {
    // dates updates, turn off session
    updated.session.value = USE_DATES_NOT_SESSION;
  }
  return { ...state, fields: updated }
}

export const create = (value, label = "", type = TYPE_TEXT) => {
  return {
    value,
    label,
    type,
    error: ""
  }
}

export const validate = (field) => {

}
