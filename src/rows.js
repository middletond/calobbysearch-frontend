import _ from "lodash";

import { hasTerm, sortingClasses } from "./utils";
import { FILINGS_COLUMNS, BILLS_COLUMNS } from "./columns";
import {
  ASCENDING, DESCENDING,
  FILINGS_VIEW, BILLS_VIEW
} from "./constants";

export const filtered = (records, term, view = FILINGS_VIEW) => {

  const columns = (view === BILLS_VIEW)
    ? BILLS_COLUMNS
    : FILINGS_COLUMNS
  return records.filter(record => hasTerm(record, term, columns));
}

export const sorted = (records, sorting) => {

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

export const withOpened = (records, openedIds) => {

  const appendOpened = (record) => {
    return { ...record,
      opened: openedIds.includes(record.filing_id)
    }
  }
  return records.map(record => appendOpened(record));
}

export const highlighted = (records, term, view = FILINGS_VIEW) => {
  const columns = (BILLS_VIEW) ? BILLS_COLUMNS : FILINGS_COLUMNS;

  if (!term) return records;

  const highlight = (record) => {
    return { ...record, highlight: true }
  }
  const matching = filtered(records, term, view).map(record => highlight(record));
  const nonmatching = records.filter(record => !hasTerm(record, term, columns));
  return matching.concat(nonmatching);
}

export const getVisible = (records, controls) => { // XXX find a better name?
  const { filterTerm, sorting, opened, view } = controls;
  let visible = records;

  if (filterTerm)
    visible = filtered(visible, filterTerm, view);
  if (sorting)
    visible = sorted(visible, sorting);
  if (opened)
    visible = withOpened(visible, opened);
  return visible;
}
