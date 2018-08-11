import React from "react";

import { SESSIONS } from "../../constants";

const SessionSelect = ({ value, active, onChange }) => {
  return (
    <select
      value={value}
      autoComplete="session"
      className={(!active) ? "session-select inactive" : "session-select"}
      onChange={event => onChange(event.target.value)}>
      {
        SESSIONS.map((session, index) => {
          return (
            <option
              key={index}
              value={session.value}>
              {session.verbose}
            </option>
          )
        })
      }
    </select>
  )
};

export default SessionSelect;
