import React from "react";

import BillsRow from "./BillsRow";
import { BILLS_COLUMNS } from "../../columns";
import { valuesToString } from "../../utils";

const TAB_MATCHING_BILLS = "matching";
const TAB_ALL_BILLS = "all";

class BillsTable extends React.Component {
  constructor(props) {
    super(props);

    this.filtered = this.filtered.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
    this.billsByTab
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
    if (!filterTerm)
      return bills;

    const hasTerm = (bill, term) => {
      let billVals = valuesToString(bill, BILLS_COLUMNS);
      return billVals.toUpperCase().includes(term.toUpperCase());
    }
    return bills.filter(bill => hasTerm(bill, filterTerm));
  }

  renderAsChild() {
    const tab = this.state.tab;
    const bills = this.billsByTab(tab);

    if (!bills) return "";
    return (
      <div className="child-table bills-table">
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
        {this.filtered(bills).map((record, index) => {
          return (
            <BillsRow key={index} record={record} />
          )
        })}
      </div>
    )
  }

  render() {
    const { bills, renderAsChild } = this.props; // XXX TODO: make this have its own and sorting

    if (renderAsChild)
      return this.renderAsChild();

    console.log("HELLO", bills);
    if (!bills)
      return "";
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
