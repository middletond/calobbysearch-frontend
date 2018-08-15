import React from "react";

import BillsTable from "./BillsTable";

const ResultsRowBills = ({ record, filterTerm }) => {
  if (!record.opened) return null;

  return (
    <BillsTable
      renderAsChild={true}
      bills={record.matching_bills} />
  )
}

export default ResultsRowBills;
