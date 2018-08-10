import React from "react";

import ExportButton from "../controls/ExportButton";
import FilterField from "../controls/FilterField";

const ResultsControls = ({ filterTerm, onFilterTermChange, onExport }) => {
  return (
    <div className="results-controls">
      <FilterField value={filterTerm} onChange={onFilterTermChange} />
      <ExportButton onExport={onExport} />
    </div>
  )
}

export default ResultsControls;
