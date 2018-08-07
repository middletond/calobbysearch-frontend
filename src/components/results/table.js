import React from "react";

import ResultsRow from "./row";
import { COLUMNS } from "../../constants";

const currentSearch = { // XXX dummy data, replace w redux -> API
  items: [
    {"filing_id": 1, "company": "Facebook"},
    {"filing_id": 2, "company": "Tesla Motors"}
  ]
}

const ResultsTable = (props) => {
  return (
    <table className="results">
      <thead>
        <tr>
          {
            COLUMNS.map((col, index) => {
              return <th key={index}>{col}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          currentSearch.items.map((item, index) => {
            return <ResultsRow key={index} item={item} />
          })
        }
      </tbody>
    </table>
  )
}

export default ResultsTable;
