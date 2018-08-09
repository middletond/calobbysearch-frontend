import React from "react";

const ResultsHeader = ({ results }) => {
  return (
    <div className="results-header">
      <h2 className="results-header-text">{
        ("params" in results) ?
        <span>Records for <b>{results.params.company}</b> and <b>{results.params.bill}</b></span> :
        <span>Search for lobby activity by <b>bill</b>, <b>company</b>, or <b>both</b>.</span>
     }</h2>
    {("records" in results) ?
      <div className="results-header-meta">
        <div className="meta-item">{results.records.length} Filings</div>
        <div className="meta-item">{("totals" in results) ? results.totals.bills : 1} Bills</div>
      </div> : ""
    }
    </div>
  )
}

export default ResultsHeader;
