import React from "react";

import Table from "../table";
import ResultsRowGroup from "./row";
import { FILINGS_COLUMNS } from "../../columns";

const ResultsTable = ({ results, sorting, filterTerm, opened, onShowBillsClick }) => {
  if (!results.params) // empty results
    return "";
  if (results.isFetching)
    return <div className="results loading">Loading...</div>;

  return (
    <table className="results">
      <thead>
        <tr>
          {FILINGS_COLUMNS.map((col, index) => {
            return <th key={index}>{col.verbose}</th>
          })}
        </tr>
      </thead>
      {results.records.map((record, index) => {
        return (
          <ResultsRowGroup
            key={index}
            record={record}
            columns={FILINGS_COLUMNS}
            onShowBillsClick={onShowBillsClick} />
        )
      })}
    </table>
  )

  // return (
  //   <Table
  //     filterTerm={filterTerm}
  //     sorting={sorting}
  //     className="results"
  //     Row={ResultsRowGroup}
  //     records={results.records}
  //     columns={FILINGS_COLUMNS}
  //     wrapRows={false}
  //     rowCallback={onShowBillsClick} />
  // )
}

export default ResultsTable;
