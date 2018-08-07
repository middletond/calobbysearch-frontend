import React from "react";

import SessionSelect from "./session_select";
import StartDateField from "./start_date_field";
import EndDateField from "./end_date_field";

const DateFields = (props) => {
  return (
    <section className="date-fields">
      <h3>During Session or Date Range</h3>
      <div className="fields">
        <SessionSelect />
        <StartDateField />
        <EndDateField />
      </div>
    </section>
  )
}

export default DateFields;
