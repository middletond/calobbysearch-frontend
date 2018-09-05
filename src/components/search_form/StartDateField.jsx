import React from "react";
import DatePicker from 'react-datepicker';
import { fieldClasses } from "../../utils";

import 'react-datepicker/dist/react-datepicker.css';

const StartDateField = ({ date, active, onChange }) => {
  return (
    <div className={fieldClasses("start-date", date, active)}>
      <label>{date.label}</label>
      <DatePicker
        selected={(date.value)}
        disabledKeyboardNavigation
        autoComplete="startdate"
        className={(!active) ? "start-date-field inactive" : "start-date-field"}
        onChange={date => onChange(date)} />
      <div className="errors">{date.error}</div>
    </div>
  )
}

export default StartDateField;

//     onChangeRaw={event => onChange(event.target.value)}
