import React from "react";

const RESULTS_FETCHING_ROWS = 20;

const ResultsFetching = () => {
  return (
    <div className="table results-table fetching">
      <div className="row header"><div className="cell"></div></div>
      {[...Array(RESULTS_FETCHING_ROWS).keys()].map(index => {
        return (
          <div key={index} className="row">
            <div className="cell"></div>
          </div>
        )
      })}
    </div>
  )
}

export default ResultsFetching;
