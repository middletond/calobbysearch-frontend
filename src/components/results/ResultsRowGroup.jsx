import React from "react";

import ResultsRow from "./ResultsRow";
import ResultsRowBills from "./ResultsRowBills";

const ResultsRowGroup = ({ record, sorting, onShowBillsClick }) => {
  return (
    <tbody className="results-row-group">
      <ResultsRow
        record={record}
        sorting={sorting}
        onShowBillsClick={onShowBillsClick} />
      <ResultsRowBills record={record} />
    </tbody>
  )
}

export default ResultsRowGroup;
