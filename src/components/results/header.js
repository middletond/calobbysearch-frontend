import React from "react";

const ResultsHeader = ({ results }) => {
  return (
    <div className="results-header">
      <h2 className="results-header-text">{
        ("params" in results) ?
        `Records for <b>${results.params.company}</b> and <b>${results.params.bill}</b>` :
        `Search for lobby activity by bill, company, or both.`
    }</h2>
      <div className="results-header-meta">
        <div className="meta-item">22 Filings</div>
        <div className="meta-item">1 Bill</div>
      </div>
    </div>
  )
}

export default ResultsHeader;
