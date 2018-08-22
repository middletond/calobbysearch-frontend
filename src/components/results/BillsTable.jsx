import React from "react";

import BillsRow from "./BillsRow";
import ResultsFetching from "./ResultsFetching";

import { BILLS_COLUMNS } from "../../columns";
import { BILLS_VIEW } from "../../constants";
import * as rows from "../../rows";

const TAB_MATCHING_BILLS = "matching";
const TAB_ALL_BILLS = "all";

class BillsTable extends React.Component {
  constructor(props) {
    super(props);

    this.filtered = this.filtered.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
    this.billsByTab = this.billsByTab.bind(this);
    // Child bills table gets internal state since there's so many of them.
    this.state = {
      tab: TAB_MATCHING_BILLS
    }
  }

  onTabClick(tab) {
    this.setState({ tab: tab });
  }

  billsByTab() {
    const { matchingBills, bills } = this.props;

    if (this.state.tab === TAB_MATCHING_BILLS)
      return matchingBills;
    else if (this.state.tab === TAB_ALL_BILLS)
      return bills;
  }

  filtered(bills) {
    const { filterTerm } = this.props;
    return rows.filtered(bills, filterTerm, BILLS_VIEW);
  }

  highlighted(bills) {
    const { filterTerm } = this.props;
    return rows.highlighted(bills, filterTerm, BILLS_VIEW);
  }

  renderAsChild() {
    const { filterTerm } = this.props;
    const tab = this.state.tab;
    const bills = this.billsByTab(tab);

    if (!bills) return "";
    return (
      <div className={`child-table bills-table ${(filterTerm) ? "highlighted" : ""}`}>
        <ul className="tabs">
          <li
            className={`tab matching ${(tab === TAB_MATCHING_BILLS) ? "active" : ""}`}
            onClick={() => this.onTabClick(TAB_MATCHING_BILLS)}>
            <span className="tab-count">{this.props.matchingBills.length}</span>
            Matching</li>
          <li
            className={`tab all ${(tab === TAB_ALL_BILLS) ? "active" : ""}`}
            onClick={() => this.onTabClick(TAB_ALL_BILLS)}>
            <span className="tab-count">{this.props.bills.length}</span>
             In Filing</li>
        </ul>
        {this.highlighted(bills).map((record, index) => {
          return (
            <BillsRow key={index} record={record} />
          )
        })}
      </div>
    )
  }

  render() {
    const { results, renderAsChild } = this.props; // XXX TODO: make this have its own and sorting

    if (renderAsChild)
      return this.renderAsChild();

    const { isFetching, bills } = results;

    if (!bills)
      return "";
    if (isFetching)
      return <ResultsFetching />;
    if (!bills.length)
      return <div className="table no-results">No bills found</div>;

    return (
      <div className="table bills-table">
        <div className="row header">
          {BILLS_COLUMNS.map((col, index) => {
            return (
              <div className="cell" key={index}>
                {col.verbose}
              </div>
            )
          })}
        </div>
        {this.filtered(bills).map((record, index) => {
          return (
            <BillsRow key={index} record={record} />
          )
        })}
      </div>
    )
  }
}

export default BillsTable;
