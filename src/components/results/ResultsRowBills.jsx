import React from "react";

import BillsTable from "./BillsTable";

const ResultsRowBills = ({ record, filterTerm }) => {
  if (!record.opened) return null;

  return (
    <BillsTable
      filterTerm={filterTerm}
      renderAsChild={true}
      bills={record.bills}
      matchingBills={record.matching_bills} />
  )
}

export default ResultsRowBills;
