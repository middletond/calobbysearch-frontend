import React from "react";

import TableCellTag from "./TableCellTag";
import { makeCell } from "../../columns";

const TableCell = ({ record, column, classNames, onClick = null }) => {
  const cell = makeCell(record, column);
  const classes = (classNames) ? `cell ${cell.colName} ${classNames}`
                               : `cell ${cell.colName}`;
  return (
    <div className={classes} onClick={onClick}>
      {(cell.url) ?
        <a href={cell.url} target="_blank">
          {cell.value}
        </a>
      : <span>{cell.value}</span>}
      <TableCellTag
        record={record}
        column={column}
        onClick={onClick} />
    </div>
  )
}

export default TableCell;
