import React from "react";

import TableCell from "../table_cell";

const BillsRow = ({ record, columns }) => {
  return (
    <tr className={record.type}>
      {columns.map((col, index) => {
        return <TableCell key={index} record={record} column={col} />
      })}
    </tr>
  )
}

export default BillsRow;
