import React from "react";

import TableCell from "./TableCell";
import { RESULTS_COLUMNS, TYPE_SEARCH_ONLY } from "../../columns";
import { sortingClasses } from "../../utils";

const ResultsRow = ({ record, sorting, onShowBillsClick }) => {
  const buttonLabel = (record.opened) ? "Hide Bills" : "Show Bills";
  const filingType = (record.form_type == "F625") ? "lobbyer" : "employer";

  return (
    <div className={`row results-row ${filingType}-filing`}>
      {RESULTS_COLUMNS
        .filter(col => col.type !== TYPE_SEARCH_ONLY)
        .map((col, index) => {
        return <TableCell
                 key={index}
                 column={col}
                 record={record}
                 classNames={sortingClasses(col, sorting)} />
      })}
      <div className="cell show-bills">
        <button
          className="button show-bills-button"
          onClick={() => onShowBillsClick(record.filing_id)}>
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
export default ResultsRow;
