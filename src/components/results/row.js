import React from "react";

import { COLUMNS } from "../../constants";

const ResultsRow = ({ record }) => {
  return (
    <tr>
      {COLUMNS.map((col, index) => {
        return <td key={index}>{record[col.name]}</td>
      })}
    </tr>
  )
}

export default ResultsRow;
