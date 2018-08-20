import React from "react";
import DatePicker from 'react-datepicker';
import moment from "moment";

import 'react-datepicker/dist/react-datepicker.css';

const EndDateField = ({ date, active, onChange }) => {
  return (
    <div className="field-wrapper end-date-field-wrapper">
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
