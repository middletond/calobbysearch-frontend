import React from "react";
import _ from "lodash";

import ResultsRowGroup from "./ResultsRowGroup";
import ResultsFetching from "./ResultsFetching";

import { FILINGS_COLUMNS, TYPE_SEARCH_ONLY } from "../../columns";
import { ASCENDING, DESCENDING, FILINGS_VIEW } from "../../constants";
import {hasTerm, sortingClasses } from "../../utils";
import * as rows from "../../rows";

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.visibleRows = this.visibleRows.bind(this);
  }

  visibleRows() {
    const { filterTerm, sorting, opened } = this.props;
    const { records } = this.props.results;

    return rows.getVisible(records, {
      filterTerm,
      sorting,
      opened,
      view: FILINGS_VIEW
    })
  }

  render() {
    const { results, sorting, filterTerm,
            onShowBillsClick, onColumnNameClick } = this.props;

    if (!results.params)
      return "";
    if (results.isFetching)
      return <ResultsFetching />;
    if (results.error)
      return <div className="table no-results error">Oops. It appears there was a {results.errorType} :(</div>
    if (!results.records.length)
      return <div className="table no-results">No activities found</div>;

    return (
      <div className="table results-table">
        <div className="row header">
          {FILINGS_COLUMNS
            .filter(col => col.type !== TYPE_SEARCH_ONLY)
            .map((col, index) => {
            return (
              <div
                key={index}
                className={`cell ${col.name} ${sortingClasses(col, sorting)}`}
                onClick={() => onColumnNameClick(col.name)}>
                {col.verbose}
              </div>
            )
          })}
          <div className="cell show-bills">Show Bills</div>
        </div>
        {this.visibleRows().map((record, index) => {
          return (
            <ResultsRowGroup
              key={index}
              record={record}
              sorting={sorting}
              filterTerm={filterTerm}
              onShowBillsClick={onShowBillsClick} />
          )
        })}
      </div>
    )
  }
}

export default ResultsTable;
