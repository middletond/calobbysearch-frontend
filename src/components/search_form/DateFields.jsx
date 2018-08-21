import React from "react";

import SessionSelect from "./SessionSelect";
import StartDateField from "./StartDateField";
import EndDateField from "./EndDateField";
import Icon from "../controls/Icon";

import { USE_DATES_NOT_SESSION } from "../../constants";

const DateFields = ({
  startDate, onStartDateChange,
  endDate, onEndDateChange,
  session, onSessionChange
}) => {
  const datesActive = (session.value === USE_DATES_NOT_SESSION);
  return (
    <section className="date-fields">
      <h3>During Session or Date Range</h3>
      <div className="fields">
        <Icon name="calendar" />
        <SessionSelect
          session={session}
          active={!datesActive}
          onChange={onSessionChange} />
        <div className="date-picker-fields">
          <StartDateField
            date={startDate}
            active={datesActive}
            onChange={onStartDateChange} />
          <EndDateField
            date={endDate}
            active={datesActive}
            onChange={onEndDateChange} />
        </div>
      </div>
    </section>
  )
}

export default DateFields;
