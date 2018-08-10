import React from "react";

import TableCell from "../table_cell";
import BillsTable from "./bills_table";

const ResultsRow = ({ record, columns, onShowBillsClick }) => {
  const buttonLabel = (record.opened) ? "Hide Bills" : "Show Bills";
  return (
    <tr className={record.type}>
      {columns.map((col, index) => {
        return <TableCell key={index} record={record} column={col} />
      })}
      <td>
        <button onClick={() => onShowBillsClick(record.filing_id)}>
          {buttonLabel}
        </button>
      </td>
    </tr>
  )
}

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

const ResultsRowGroup = ({ record, columns, rowCallback }) => {
  return (
    <tbody className="results-row">
      <ResultsRow record={record} columns={columns} onShowBillsClick={rowCallback} />
      <ResultsRowBills record={record} />
    </tbody>
  )
}

export default ResultsRowGroup;
