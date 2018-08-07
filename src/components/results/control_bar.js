import React from "react";

import ExportButton from "./export_button";
import FilterField from "./filter_field";

const ResultsControlBar = (props) => {
  return (
    <div className="results-control-bar">
      <FilterField />
      <ExportButton />
    </div>
  )
}

export default ResultsControlBar;
