import React from "react";
import { connect } from "react-redux";

import {
  fetchResults
} from "../actions/results";
import {
  updateSorting,
  updateFilterTerm,
  exportCurrentSearch,
  toggleBillsForRecord,
  updateResultsView
} from "../actions/controls";

import ResultsHeader from "../components/results/ResultsHeader";
import ResultsControls from "../components/results/ResultsControls";
import ResultsTabs from "../components/results/ResultsTabs";
import ResultsTable from "../components/results/ResultsTable";

class Results extends React.Component {
  render() {
    const { filterTerm, onFilterTermChange, onExport,
            onResultsTabClick, currentResults,
            onShowBillsClick, onColumnNameClick,
            sorting, opened } = this.props;

    return (
      <div className="results">
        <ResultsHeader results={currentResults} />
        <ResultsControls
          onFilterTermChange={onFilterTermChange}
          filterTerm={filterTerm}
          onExport={onExport} />
        <ResultsTabs
          results={currentResults}
          onResultsTabClick={onResultsTabClick} />
        <ResultsTable
          results={currentResults}
          filterTerm={filterTerm}
          sorting={sorting}
          opened={opened}
          onColumnNameClick={onColumnNameClick}
          onShowBillsClick={onShowBillsClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { results, controls, searchForm } = state;
  return {
    submitted: searchForm.submitted,
    currentResults: results[searchForm.submitted] || {},
    filterTerm: controls.filterTerm,
    sorting: controls.sorting,
    opened: controls.opened
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onColumnNameClick: (name) => {
      dispatch(updateSorting(name));
    },
    onShowBillsClick: (id) => {
      dispatch(toggleBillsForRecord(id));
    },
    onFilterTermChange: (term) => {
      dispatch(updateFilterTerm(term));
    },
    onExport: () => {
      dispatch(exportCurrentSearch());
    },
    onResultsTabClick: (view) => {
      dispatch(updateResultsView(view))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
