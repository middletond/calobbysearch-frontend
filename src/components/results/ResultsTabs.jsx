import React from "react";

import { FILINGS_VIEW, BILLS_VIEW } from "../../constants";

const ResultsTabs = ({ results, onResultsTabClick, view }) => {
  if (!("records" in results)) return "";
  return (
    <div className="results-tabs">
      <div
        className={"results-tab-item filings " + ((view == FILINGS_VIEW) ? "active" : "")}
        onClick={() => onResultsTabClick("filings")}>
        {results.records.length} Filings</div>
      <div
        className={"results-tab-item bills " + ((view == BILLS_VIEW) ? "active" : "")}
        onClick={() => onResultsTabClick("bills")}>
        {results.bills.length} Bills</div>
    </div>
  )
}

export default ResultsTabs;
