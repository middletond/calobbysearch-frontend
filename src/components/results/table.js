import React from "react";

import Table from "../table";
import ResultsRowGroup from "./row";
import { FILINGS_COLUMNS } from "../../columns";

const ResultsTable = ({ results, sorting, filterTerm, onShowBillsClick }) => {
  if (!results.params) // empty results
    return "";
  if (results.isFetching)
    return <div className="results loading">Loading...</div>;

  return (
    <Table
      className="results"
      Row={ResultsRowGroup}
      records={results.records}
      columns={FILINGS_COLUMNS}
      wrapRows={false}
      rowCallback={onShowBillsClick} />
  )
}

export default ResultsTable;
