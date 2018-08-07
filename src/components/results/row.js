import React from "react";

import { COLUMNS } from "../../constants";

const ResultsRow = ({item}) => {
  return (
    <tr>
      {
        COLUMNS.map((col, index) => {
          return <td key={index}>{item[col]}</td>
        })
      }
    </tr>
  )
}

export default ResultsRow;
