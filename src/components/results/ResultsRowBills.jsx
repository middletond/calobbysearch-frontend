import React from "react";

import BillsTable from "./BillsTable";

const ResultsRowBills = ({ record, filterTerm }) => {
  if (!record.opened) return null;

  return (
    <tr className="results-row-bills">
      <td colSpan="100">
        <BillsTable
          bills={record.matching_bills}
          filterTerm={filterTerm} />
      </td>
    </tr>
  )
}

export default ResultsRowBills;
