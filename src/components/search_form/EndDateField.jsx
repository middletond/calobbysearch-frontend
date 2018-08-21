import React from "react";
import DatePicker from "react-datepicker";
import { fieldClasses } from "../../utils";

import "react-datepicker/dist/react-datepicker.css";

const EndDateField = ({ date, active, onChange }) => {
  console.log("HEEE", active);
  return (
    <div className={fieldClasses("end-date", date, active)}>
      <label>{date.label}</label>
      <DatePicker
        selected={date.value}
        todayButton={"Use Today"}
        disabledKeyboardNavigation
        autoComplete="enddate"
        className={(!active) ? "end-date-field inactive" : "end-date-field"}
        onChange={date => onChange(date)} />
    </div>
  )
}

export default EndDateField;
