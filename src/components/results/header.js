import React from "react";

const ResultsHeader = ({ results }) => {
  console.log("HELLO FROM RESULTS HEADER:");
  console.log(results);

  return (
    <div className="results-header">
      <h2 className="results-header-text">{
        ("params" in results) ?
        `Records for <b>${results.params.company}</b> and <b>${results.params.bill}</b>` :
        `Search for some lobby activity.`
    }</h2>
      <div className="results-header-meta">
        <div className="meta-item">22 Filings</div>
        <div className="meta-item">1 Bill</div>
      </div>
    </div>
  )
}

export default ResultsHeader;
