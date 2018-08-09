import React from "react";
import { connect } from "react-redux";

import {
  updateSort,
  updateFilterTerm,
  exportCurrentSearch
} from "../actions/controls";
import {
  fetchResults
} from "../actions/results";

import ResultsHeader from "../components/results/header";
import ResultsControlBar from "../components/results/control_bar";
import ResultsTable from "../components/results/table";

class Results extends React.Component {
  render() {
    const { filterTerm, onFilterTermChange,
            sorting, onExport, currentResults } = this.props;

    return (
      <div className="results-controls">
        <ResultsHeader results={currentResults} />
        <ResultsControlBar
          onFilterTermChange={onFilterTermChange}
          filterTerm={filterTerm}
          onExport={onExport} />
        <ResultsTable
          results={currentResults}
          filterTerm={filterTerm}
          sorting={sorting} />
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
    sorting: controls.sorting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTermChange: (term) => {
      dispatch(updateFilterTerm(term));
    },
    onExport: () => {
      dispatch(exportCurrentSearch());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
