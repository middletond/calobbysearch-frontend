import React from "react";

import Table from "../table";
import ResultsRowGroup from "./row";
import { FILINGS_COLUMNS } from "../../columns";

const ResultsTable = ({ results, sorting, filterTerm }) => {
  if (!results.params) // empty results
    return "";
  if (results.isFetching)
    return <div className="results loading">Loading...</div>;

  return (
    <Table
      Row={ResultsRowGroup}
      records={results.records}
      columns={FILINGS_COLUMNS}
      className="results"
      wrapRows={false} />
  )
}

export default ResultsTable;
