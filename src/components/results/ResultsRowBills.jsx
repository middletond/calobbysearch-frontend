import React from "react";

import BillsTable from "./BillsTable";

const ResultsRowBills = ({ record }) => {
  if (!record.opened) return null;

  return (
    <tr className="bills-container">
      <td colSpan="100">
        <BillsTable bills={record.matching_bills} />
      </td>
    </tr>
  )
}

export default ResultsRowBills;
