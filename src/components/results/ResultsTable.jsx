import React from "react";
import _ from "lodash";

import ResultsRowGroup from "./ResultsRowGroup";

import { RESULTS_COLUMNS, TYPE_SEARCH_ONLY } from "../../columns";
import { ASCENDING, DESCENDING } from "../../constants";
import {hasTerm, sortingClasses } from "../../utils";

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);

    this.filtered = this.filtered.bind(this);
    this.sorted = this.sorted.bind(this);
    this.opened = this.opened.bind(this);
    this.processedRecords = this.processedRecords.bind(this);
  }

  processedRecords() {
    let processed;

    const { records } = this.props.results;

    processed = this.filtered(records);
    processed = this.sorted(processed);
    processed = this.opened(processed);
    return processed;
  }

  filtered(records) {
    const { filterTerm } = this.props;
    return records.filter(record => hasTerm(record, filterTerm, RESULTS_COLUMNS));
  }

  sorted(records) {
    const { sorting } = this.props;

    const getSortVal = (record) => {
      let sortVal = record[sorting.field];

      if (typeof sortVal == "string") {
        const DATE_STRING = /^\d+[./-]\d+[./-]\d+$/;
        const NON_NUMBERS = /[^0-9\.]+/g;
        sortVal = sortVal.toLowerCase().trim();
        // check if string should be a date
        if (sortVal.match(DATE_STRING)) { // Date.parse() is VERY liberal w what constitutes a date
          let date = Date.parse(sortVal) || null;
          if (date) return date;
        }
        // check if string should be a number
        let num = Number(sortVal.replace(NON_NUMBERS, "")); // "$20,000" --> 20000 etc
        if (num) return num;
      }
      return sortVal;
    }
    let sortedRecs = _.sortBy(records, record => getSortVal(record));

    if (sorting.direction == DESCENDING)
      sortedRecs = sortedRecs.reverse();
    return sortedRecs;
  }

  opened(records) {
    const { opened } = this.props;

    const appendOpened = (record) => { // XXX this alters redux state and shouldn't.
      record.opened = (opened.includes(record.filing_id));
      return record;
    }
    return records.map(record => appendOpened(record));
  }

  render() {
    const { results, sorting, filterTerm,
            onShowBillsClick, onColumnNameClick } = this.props;

    if (!results.params) // empty results
      return "";
    if (results.isFetching)
      return <div className="table loading">Loading...</div>;
    if (!results.records.length)
      return <div className="table no-results">No activities found</div>;

    return (
      <div className="table results-table">
        <div className="row header">
          {RESULTS_COLUMNS
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
          <div className="cell show-bills"></div>
        </div>
        {this.processedRecords().map((record, index) => {
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
