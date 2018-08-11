import React from "react";

import { makeCell } from "../../columns";

const TableCell = ({ record, column, classNames }) => {
  const cell = makeCell(record, column);
  const classes = `${cell.colName} ${classNames}`;

  if (!cell.url) {
    return (
      <td className={classes}>
        {cell.value}
      </td>
    )
  }
  return (
    <td className={classes}>
      <a href={cell.url} target="_blank">
        {cell.value}
      </a>
    </td>
  )
}

export default TableCell;
