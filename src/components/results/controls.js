import React from "react";

import ResultsHeader from "./header";
import ResultsControlBar from "./control_bar";

const ResultsControls = (props) => {
  return (
    <div className="results-controls">
      <ResultsHeader />
      <ResultsControlBar />
    </div>
  )
}

export default ResultsControls;
