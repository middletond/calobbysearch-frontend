import React from "react";
import DatePicker from 'react-datepicker';
import moment from "moment";

import 'react-datepicker/dist/react-datepicker.css';

const EndDateField = ({ date, onChange }) => {
  return (
    <DatePicker
      selected={date}
      autoComplete="enddate"
      className="end-date-field"
      onChange={date => onChange(date)} />
  )
}

export default EndDateField;
