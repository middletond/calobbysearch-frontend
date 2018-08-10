import React from "react";

import SessionSelect from "./SessionSelect";
import StartDateField from "./StartDateField";
import EndDateField from "./EndDateField";

const DateFields = ({
  startDate, onStartDateChange,
  endDate, onEndDateChange,
  session, onSessionChange
}) => {
  return (
    <section className="date-fields">
      <h3>During Session or Date Range</h3>
      <div className="fields">
        <SessionSelect value={session} onChange={onSessionChange} />
        <StartDateField date={startDate} onChange={onStartDateChange} />
        <EndDateField date={endDate} onChange={onEndDateChange} />
      </div>
    </section>
  )
}

export default DateFields;
