import React from "react";

import TableCell from "./TableCell";
import {
  RESULTS_COLUMNS,
  TYPE_SEARCH_ONLY,
  filingType
} from "../../columns";
import {
  TAB_MATCHING_BILLS,
  TAB_ALL_BILLS
} from "./BillsTable";
import { sortingClasses } from "../../utils";

const ResultsRow = ({ record, sorting, onShowBillsClick }) => {

  const cellCallback = (record, col) => {
    switch (col.name) {
      case "interests":
        return () => onShowBillsClick(record.filing_id, TAB_ALL_BILLS);
      case "matching_bills":
        return () => onShowBillsClick(record.filing_id, TAB_MATCHING_BILLS);
      default:
        return null;
    }
  }

  return (
    <div className={`row results-row ${filingType(record)}-filing`}>
      {RESULTS_COLUMNS
        .filter(col => col.type !== TYPE_SEARCH_ONLY)
        .map((col, index) => {
        return <TableCell
                 key={index}
                 column={col}
                 record={record}
                 onClick={cellCallback(record, col)}
                 classNames={sortingClasses(col, sorting)} />
      })}
    </div>
  )
}
export default ResultsRow;
