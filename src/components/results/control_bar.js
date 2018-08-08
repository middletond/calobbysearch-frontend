import React from "react";

import ExportButton from "./export_button";
import FilterField from "./filter_field";

const ResultsControlBar = ({ filterTerm, onFilterTermChange, onExport }) => {
  return (
    <div className="results-control-bar">
      <FilterField value={filterTerm} onChange={onFilterTermChange} />
      <ExportButton onExport={onExport} />
    </div>
  )
}

export default ResultsControlBar;
