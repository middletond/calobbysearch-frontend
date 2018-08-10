import React from "react";

import TableCell from "../table_cell";
import BillsTable from "./bills_table";

import { FILINGS_COLUMNS } from "../../columns";

const ResultsRow = ({ record, sorting, onShowBillsClick }) => {
  const buttonLabel = (record.opened) ? "Hide Bills" : "Show Bills";

  const sortingClasses = (column) => {
    const { field, direction } = sorting;
    return (column.name == field) ? `sort ${direction}` : "";
  }

  return (
    <tr className={record.type}>
      {FILINGS_COLUMNS.map((col, index) => {
        return <TableCell
                 key={index}
                 column={col}
                 record={record}
                 classNames={sortingClasses(col)} />
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
