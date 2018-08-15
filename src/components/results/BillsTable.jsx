import React from "react";

import BillsRow from "./BillsRow";
import { BILLS_COLUMNS } from "../../columns";
import { valuesToString } from "../../utils";

class BillsTable extends React.Component {
  constructor(props) {
    super(props);
    this.filtered = this.filtered.bind(this);
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
    const { bills } = this.props;

    return (
      <div className="child-table bills-table">
        <div className="tabs">Tabs here</div>
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

    if (!bills)
      return "";
    if (renderAsChild)
      return this.renderAsChild();

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
