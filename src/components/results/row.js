import React from "react";

import TableCell from "../table_cell";
import BillsTable from "./bills_table";

const ResultsRow = ({ record, columns }) => {
  return (
    <tr className={record.type}>
      {columns.map((col, index) => {
        return <TableCell key={index} record={record} column={col} />
      })}
      <td>
        <button>View Bills</button>
      </td>
    </tr>
  )
}

const ResultsBillsRow = ({ bills }) => {
  return (
    <tr className="bills-container">
      <td colSpan="100">
        <BillsTable bills={bills} />
      </td>
    </tr>
  )
}

const ResultsRowGroup = ({ record, columns }) => {
  return (
    <tbody className="results-row">
      <ResultsRow record={record} columns={columns} />
      <ResultsBillsRow bills={record.matching_bills} />
    </tbody>
  )
}

export default ResultsRowGroup;
