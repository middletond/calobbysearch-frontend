import React from "react";

const SESSIONS = [ // XXX Dummy data: move this to container -> eventual API call
  { value: "20172018", verbose: "2017 - 2018" },
  { value: "20152016", verbose: "2015 - 2016" },
  { value: "20132014", verbose: "2013 - 2014" },
  { value: "20112012", verbose: "2011 - 2012" },
  { value: "20092010", verbose: "2009 - 2010" }
]

const SessionSelect = (props) => {
  return (
    <select className="session-select">
      {
        SESSIONS.map(sesh => {
          return <option
                   key={sesh.value}
                   value={sesh.value}
                 >{sesh.verbose}</option>
        })
      }
    </select>
  )
};

export default SessionSelect;
