import React from "react";

import { makeCell } from "../columns";

const TableCell = ({ record, column }) => {
  const cell = makeCell(record, column);

  if (!cell.url) {
    return <td className={cell.colName}>{cell.value}</td>;
  }
  return (
    <td className={cell.colName}>
      <a href={cell.url} target="_blank">
        {cell.value}
      </a>
    </td>
  )
}

export default TableCell;
