import React from "react";
import DatePicker from 'react-datepicker';
import moment from "moment";

import 'react-datepicker/dist/react-datepicker.css';

const StartDateField = ({ date, onChange }) => {
  return <DatePicker
           className="start-date-field"
           onChange={date => onChange(date)}
           selected={date} />
}

export default StartDateField;
