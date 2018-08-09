import React from "react";

import ResultsRow from "./row";
import { COLUMNS } from "../../constants";

const ResultsTable = ({ results, sorting, filterTerm }) => {
  if (!results.params) // empty results
    return "";
  if (results.isFetching)
    return <div className="results loading">Loading...</div>;

  return (
    <table className="results">
      <thead>
        <tr>
          {COLUMNS.map((col, index) => {
            return <th key={index}>{col.verbose}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {results.records.map((record, index) => {
          return <ResultsRow key={index} record={record} />
        })}
      </tbody>
    </table>
  )
}

export default ResultsTable;
