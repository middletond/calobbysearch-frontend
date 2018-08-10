import React from "react";
import _ from "lodash";

import Table from "../table";
import ResultsRowGroup from "./row";

import { FILINGS_COLUMNS } from "../../columns";
import {valuesToString } from "../../utils";
import { ASCENDING, DESCENDING } from "../../constants";

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

    const hasTerm = (record, term) => {
      let recVals = valuesToString(record, FILINGS_COLUMNS);
      return recVals.toUpperCase().includes(term.toUpperCase());
    }
    return records.filter(record => hasTerm(record, filterTerm));
  }

  sorted(records) {
    const { sorting } = this.props;

    const getSortVal = (record) => {
      const DATE_STRING = /^\d+[./-]\d+[./-]\d+$/;
      const NON_NUMBERS = /[^0-9\.]+/g;

      let sortVal = record[sorting.field];
      console.log("HELLO");
      console.log(sorting);
      console.log(sortVal);
      console.log(typeof sortVal);
      // If value is a string, we clean it.
      if (typeof sortVal == "string") {
          sortVal = sortVal.toLowerCase().trim();
          // check if string should be a date
          if (sortVal.match(DATE_STRING)) { // Date.parse() is VERY liberal w what constitutes a date
              let date = Date.parse(sortVal) || null;
              if (date)
                  return date;
          }
          // check if string should be a number
          let num = Number(sortVal.replace(NON_NUMBERS, "")); // "$20,000" --> 20000 etc
          if (num)
              return num;
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

    const appendOpened = (record) => {
      record.opened = (opened.includes(record.filing_id));
      return record;
    }
    return records.map(record => appendOpened(record));
  }

  render() {
    const { results, onShowBillsClick } = this.props;

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
        {this.processedRecords().map((record, index) => {
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
  }
}

export default ResultsTable;
