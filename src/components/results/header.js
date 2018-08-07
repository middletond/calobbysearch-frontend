import React from "react";

const ResultsHeader = (props) => {
  return (
    <div className="results-header">
      <h2 className="results-header-text">
        Records for <b>Facebook</b> and <b>AB 101</b>
      </h2>
      <div className="results-header-meta">
        <div className="meta-item">22 Filings</div>
        <div className="meta-item">1 Bill</div>
      </div>
    </div>
  )
}

export default ResultsHeader;
