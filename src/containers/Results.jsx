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
import BillsTable from "../components/results/BillsTable";

import { FILINGS_VIEW, BILLS_VIEW } from "../constants";

class Results extends React.Component {
  render() {
    const { filterTerm, onFilterTermChange, onExport,
            onResultsTabClick, currentResults,
            onShowBillsClick, onColumnNameClick,
            sorting, opened, view, stickyControls } = this.props;

    return (
      <div className={(stickyControls) ? "results sticky-controls" : "results"}>
        <ResultsHeader
          view={view}
          results={currentResults}
          onResultsTabClick={onResultsTabClick} />
        <ResultsControls
          onFilterTermChange={onFilterTermChange}
          filterTerm={filterTerm}
          onExport={onExport}
          sticky={stickyControls} />
        {(view == FILINGS_VIEW) ?
          <ResultsTable
            results={currentResults}
            filterTerm={filterTerm}
            sorting={sorting}
            opened={opened}
            onColumnNameClick={onColumnNameClick}
            onShowBillsClick={onShowBillsClick} />
          :
          <BillsTable
            results={currentResults}
            filterTerm={filterTerm} />
        }
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
    opened: controls.opened,
    view: controls.view,
    stickyControls: controls.sticky
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onColumnNameClick: (name) => {
      dispatch(updateSorting(name));
    },
    onShowBillsClick: (id, tab) => {
      dispatch(toggleBillsForRecord(id, tab));
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
