import moment from "moment";

import {
  USE_DATES_NOT_SESSION,
  DATE_PICKER_FIELDS
} from "./constants";

import {
  TYPE_TEXT,
  TYPE_DATE
} from "./columns";

export const update = (name, value, fields) => {
  // Update a single field value and handle any other
  // field updates that should occur as a result.
  let updated = { ...fields,
    [name]: { ...fields[name], value }
  }
  if (name == "session" && value != USE_DATES_NOT_SESSION) {
    console.log("HELLO", name, value);
    // sesh updated, align start / end dates to session
    updated.startDate.value = moment(value.substring(0, 4) + "0101");
    updated.endDate.value = moment(value.substring(4, 8) + "1231");
  }
  else if (DATE_PICKER_FIELDS.includes(name)) {
    // dates updates, turn off session
    updated.session.value = USE_DATES_NOT_SESSION;
  }
  return updated;
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
