import React from "react";

import ResultsRow from "./ResultsRow";
import ResultsRowBills from "./ResultsRowBills";

const ResultsRowGroup = ({ record, sorting, filterTerm, onShowBillsClick }) => {
  return (
    <div className={(record.opened)
        ? "row-group results-row-group active"
        : "row-group results-row-group"}>
      <ResultsRow
        record={record}
        sorting={sorting}
        onShowBillsClick={onShowBillsClick} />
      <ResultsRowBills
        record={record}
        filterTerm={filterTerm}/>
    </div>
  )
}

export default ResultsRowGroup;
