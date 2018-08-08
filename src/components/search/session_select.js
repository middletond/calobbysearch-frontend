import React from "react";

import { SESSIONS } from "../../constants";

const SessionOption = ({ session }) => {
  return (
    <option value={session.value}>
      {session.verbose}
    </option>
  )
}

const SessionSelect = ({ value, onChange }) => {
  return (
    <select
      className="session-select"
      onChange={event => onChange(event.target.value)}
      value={value}>
      {
        SESSIONS.map((sesh, index) => {
          return <SessionOption key={index} session={sesh} />
        })
      }
    </select>
  )
};

export default SessionSelect;
