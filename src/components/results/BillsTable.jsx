import React from "react";

import BillsRow from "./BillsRow";
import ResultsFetching from "./ResultsFetching";

import { BILLS_COLUMNS } from "../../columns";
import { hasTerm, fresh } from "../../utils";

const TAB_MATCHING_BILLS = "matching";
const TAB_ALL_BILLS = "all";

class BillsTable extends React.Component {
  constructor(props) {
    super(props);

    this.filtered = this.filtered.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
    this.billsByTab = this.billsByTab.bind(this);
    this.updatefilterMatches = this.updatefilterMatches.bind(this);
    // Child bills table gets internal state since there's so many of them.
    this.state = {
      tab: TAB_MATCHING_BILLS
    }
  }

  updatefilterMatches() {
    const { filterTerm, bills } = this.props;
    this.setState({
      filterMatches: this.filtered(bills).map(bill => bill.name)
    }, () => console.log("HELLO", this.state))
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
    return bills.filter(bill => hasTerm(bill, filterTerm, BILLS_COLUMNS));
  }

  highlighted(bills) {
    const { filterTerm } = this.props;
    if (!filterTerm)
      return bills;

    const highlight = (bill) => {
      return Object.assign({}, bill, { highlight: true })
    }
    const matching = this.filtered(bills).map(bill => highlight(bill));
    const nonmatching = bills.filter(bill => !hasTerm(bill, filterTerm, BILLS_COLUMNS));
    return matching.concat(nonmatching);
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
