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
  let fieldToUpdate = { ...fields[name], value };

  let updated = { ...fields, [name]: validate(fieldToUpdate) };

  if (name == "session" && value != USE_DATES_NOT_SESSION) {
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
  if (type == TYPE_DATE)
    value = moment(value);
  return {
    value,
    label,
    type,
    error: ""
  }
}

export const validate = (field) => {
  let { value, label } = field;
  let error = "";

  const TEXT_FIELD_MINIMUM_CHARS = 2;

  switch (field.type) {
    case TYPE_DATE:
      if (!value.isValid())
        error = `${label} is not a valid date.`;
      break;
    case TYPE_TEXT:
      if (value.length && value.length < TEXT_FIELD_MINIMUM_CHARS)
          error = `${label} should be at least ${TEXT_FIELD_MINIMUM_CHARS} characters in length.`
      break;
  }
  return { ...field,
    value: value,
    error: error
  }
}
