import React from "react";

import BillsRow from "./BillsRow";
import { BILLS_COLUMNS } from "../../columns";

class BillsTable extends React.Component {
  render() {
    const { bills } = this.props; // XXX TODO: make this have its own and sorting + pass filter

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
          {bills.map((record, index) => {
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
