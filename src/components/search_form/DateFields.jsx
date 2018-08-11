import React from "react";

import SessionSelect from "./SessionSelect";
import StartDateField from "./StartDateField";
import EndDateField from "./EndDateField";
import Icon from "../controls/Icon";

const DateFields = ({
  startDate, onStartDateChange,
  endDate, onEndDateChange,
  session, onSessionChange
}) => {
  return (
    <section className="date-fields">
      <h3>During Session or Date Range</h3>
      <div className="fields">
        <Icon name="calendar" />
        <SessionSelect value={session} onChange={onSessionChange} />
        <div className="date-picker-fields">
          <StartDateField date={startDate} onChange={onStartDateChange} />
          <EndDateField date={endDate} onChange={onEndDateChange} />
        </div>
      </div>
    </section>
  )
}

export default DateFields;
