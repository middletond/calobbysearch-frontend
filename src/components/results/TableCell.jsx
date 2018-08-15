import React from "react";

import { makeCell } from "../../columns";

const TableCell = ({ record, column, classNames }) => {
  const cell = makeCell(record, column);
  const classes = (classNames) ? `cell ${cell.colName} ${classNames}`
                               : `cell ${cell.colName}`;
  if (!cell.url) {
    return (
      <div className={classes}>
        <span>{cell.value}</span>
      </div>
    )
  }
  return (
    <div className={classes}>
      <a href={cell.url} target="_blank">
        {cell.value}
      </a>
    </div>
  )
}

export default TableCell;
