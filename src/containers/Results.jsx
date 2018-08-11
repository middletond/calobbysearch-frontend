import React from "react";
import { connect } from "react-redux";

import {
  fetchResults
} from "../actions/results";
import {
  updateSorting,
  updateFilterTerm,
  exportCurrentSearch,
  toggleBillsForRecord
} from "../actions/controls";

import ResultsHeader from "../components/results/ResultsHeader";
import ResultsControls from "../components/results/ResultsControls";
import ResultsTable from "../components/results/ResultsTable";

class Results extends React.Component {
  render() {
    const { filterTerm, onFilterTermChange,
            sorting, onExport, currentResults,
            onShowBillsClick, onColumnNameClick, opened } = this.props;

    return (
      <div className="results">
        <ResultsHeader results={currentResults} />
        <ResultsControls
          onFilterTermChange={onFilterTermChange}
          filterTerm={filterTerm}
          onExport={onExport} />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
