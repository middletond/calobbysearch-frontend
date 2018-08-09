import React from "react";

import Table from "../table";
import BillsRow from "./bills_row";
import { BILLS_COLUMNS } from "../../columns";

const BillsTable = ({ bills }) => {
  return (
    <Table
      Row={BillsRow}
      records={bills}
      columns={BILLS_COLUMNS}
      className="bills" />
  )
}

export default BillsTable;
