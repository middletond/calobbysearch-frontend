import React from "react";
import DatePicker from 'react-datepicker';
import moment from "moment";

import 'react-datepicker/dist/react-datepicker.css';

const StartDateField = (props) => {
  return <DatePicker
           className="start-date-field"
           selected={moment()}
           onChange={event => console.log(event)}
         />
}

export default StartDateField;
