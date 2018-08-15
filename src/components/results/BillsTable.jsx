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

  render() {
    const { bills } = this.props; // XXX TODO: make this have its own and sorting

    if (!bills) return "";
    return (
      <table className="bills-table">
        <thead>
          <tr>
            {BILLS_COLUMNS.map((col, index) => {
              return (
                <th key={index}>
                  {col.verbose}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {this.filtered(bills).map((record, index) => {
            return (
              <BillsRow key={index} record={record} />
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default BillsTable;
