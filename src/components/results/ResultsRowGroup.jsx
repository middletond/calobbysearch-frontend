import React from "react";

import ResultsRow from "./ResultsRow";
import ResultsRowBills from "./ResultsRowBills";

const ResultsRowGroup = ({ record, sorting, filterTerm, onShowBillsClick }) => {
  return (
    <tbody className={(record.opened) ? "results-row-group active" : "results-row-group"}>
      <ResultsRow
        record={record}
        sorting={sorting}
        onShowBillsClick={onShowBillsClick} />
      <ResultsRowBills
        record={record}
        filterTerm={filterTerm}/>
    </tbody>
  )
}

export default ResultsRowGroup;
