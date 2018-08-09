import React from "react";

import Table from "../table";
import ResultsRow from "./row";
import { COLUMNS } from "../../columns";

const ResultsTable = ({ results, sorting, filterTerm }) => {
  if (!results.params) // empty results
    return "";
  if (results.isFetching)
    return <div className="results loading">Loading...</div>;

  return (
    <Table
      Row={ResultsRow}
      records={results.records}
      columns={COLUMNS}
      className="results" />
  )
}

export default ResultsTable;
