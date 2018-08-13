import React from "react";

const ResultsTabs = ({ results, onResultsTabClick }) => {
  if (!("records" in results)) return "";
  return (
    <div className="results-tabs">
      <div
        className="results-tab-item filings"
        onClick={() => onResultsTabClick("filings")}>
        {results.records.length} Filings</div>
      <div
        className="results-tab-item bills"
        onClick={() => onResultsTabClick("bills")}>
        {results.bills.length} Bills</div>
    </div>
  )
}

export default ResultsTabs;
