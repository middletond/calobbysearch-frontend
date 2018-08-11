import React from "react";
import DatePicker from 'react-datepicker';
import moment from "moment";

import 'react-datepicker/dist/react-datepicker.css';

const StartDateField = ({ date, active, onChange }) => {
  return (
    <DatePicker
      selected={date}
      autoComplete="startdate"
      className={(!active) ? "start-date-field inactive" : "start-date-field"}
      onChange={date => onChange(date)} />
  )
}

export default StartDateField;
