import React from "react";

import TableCell from "./TableCell";
import { BILLS_COLUMNS } from "../../columns";

const BillsRow = ({ record }) => {
  return (
    <tr className={record.type}>
      {BILLS_COLUMNS.map((col, index) => {
        return <TableCell key={index} record={record} column={col} />
      })}
    </tr>
  )
}

export default BillsRow;
