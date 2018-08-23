import React from "react";

const ResultsError = ({errorType }) => {
  const details = `A ${errorType} occurred while getting results.`;
  return (
    <div className="table no-results error">
      <div className="error-heading">Dang it. It appears there was problem :(</div>
      <div className="error-details">{details}</div>
    </div>
  )
}

export default ResultsError;
