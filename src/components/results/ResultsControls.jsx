import React from "react";

import ExportButton from "../controls/ExportButton";
import FilterField from "../controls/FilterField";

const ResultsControls = ({ filterTerm, onFilterTermChange,
                           onExportClick, isExporting, sticky }) => {
  return (
    <div className={(sticky) ? "results-controls sticky": "results-controls"}>
      <FilterField
        value={filterTerm}
        onChange={onFilterTermChange} />
      <ExportButton
        isExporting={isExporting}
        onClick={onExportClick} />
    </div>
  )
}

export default ResultsControls;
