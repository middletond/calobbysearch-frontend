import React from "react";
import DatePicker from 'react-datepicker';
import moment from "moment";

import 'react-datepicker/dist/react-datepicker.css';

const EndDateField = (props) => {
  return <DatePicker
           className="end-date-field"
           selected={moment()}
           onChange={event => console.log(event.target.value)}
         />
}

export default EndDateField;
