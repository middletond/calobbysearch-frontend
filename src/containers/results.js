import React from "react";
import { connect } from "react-redux";

import {
  updateSort,
  updateFilterTerm,
  exportCurrentSearch,
  toggleBillsForRecord
} from "../actions/controls";
import {
  fetchResults
} from "../actions/results";

import ResultsHeader from "../components/results/header";
import ResultsControlBar from "../components/results/control_bar";
import ResultsTable from "../components/results/table";

class Results extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.applyControls = this.applyControls.bind(this);
  // }

  // applyControls(results) { // once these are props i can mutate right?
  //   if (!results.records)
  //     return results;
  //
  //   const { filterTerm, sorting, opened } = this.props;
  //
  //   let records = results.records;
  //   console.log("HELLO");
  //   console.log(records);
  //   // handle opened
  //   records.forEach(rec => {
  //     rec.opened = (opened.includes(rec.filing_id));
  //   });
  //   // handle filter
  //   records = records.filter(rec => {
  //     let t = Object.keys(rec).filter(key => {
  //       let value = rec[key];
  //       if (typeof value === "string") {
  //         return value.includes(filterTerm);
  //       }
  //       return false;
  //     }).length;
  //     return t;
  //   })
  //   // handle sorting
  //   results.records = records;
  //
  //   return results;
  // }

  render() {
    const { filterTerm, onFilterTermChange,
            sorting, onExport, currentResults,
            onShowBillsClick, opened } = this.props;

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
          sorting={sorting}
          opened={opened}
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
