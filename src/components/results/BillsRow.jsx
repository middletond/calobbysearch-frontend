import React from "react";

import TableCell from "./TableCell";
import Icon from "../controls/Icon";
import { BILLS_COLUMNS } from "../../columns";

const BillsRow = ({ record }) => {
  return (
    <div className={(record.highlight) ? "row highlight" : "row"}>
      {BILLS_COLUMNS.map((col, index) => {
        return <TableCell key={index} record={record} column={col} />
      })}
      {(record.highlight) ? <Icon name="filter" /> : ""}
    </div>
  )
}

export default BillsRow;
