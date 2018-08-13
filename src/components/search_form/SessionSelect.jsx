import React from "react";

import Icon from "../controls/Icon";
import { SESSIONS } from "../../constants";

const SessionSelect = ({ value, active, onChange }) => {
  return (
    <div className={(!active) ? "session-select inactive" : "session-select"}>
      <select
        value={value}
        autoComplete="session"

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
      <Icon name="angle-down" />
    </div>
  )
};

export default SessionSelect;
