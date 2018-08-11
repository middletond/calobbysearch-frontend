import React from "react";

import TableCell from "./TableCell";
import { RESULTS_COLUMNS } from "../../columns";
import { sortingClasses } from "../../utils";

const ResultsRow = ({ record, sorting, onShowBillsClick }) => {
  const buttonLabel = (record.opened) ? "Hide Bills" : "Show Bills";

  return (
    <tr className={`results-row ${record.type}-filing`}>
      {RESULTS_COLUMNS.map((col, index) => {
        return <TableCell
                 key={index}
                 column={col}
                 record={record}
                 classNames={sortingClasses(col, sorting)} />
      })}
      <td>
        <button onClick={() => onShowBillsClick(record.filing_id)}>
          {buttonLabel}
        </button>
      </td>
    </tr>
  )
}
export default ResultsRow;
