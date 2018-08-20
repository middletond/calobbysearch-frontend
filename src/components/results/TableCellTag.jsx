import React from "react";

import { filingType } from "../../columns";

const TableCellTag = ({record, column, onClick = null}) => {
  switch (column.name) {
    case filingType(record): // Put a FILER tag on cell that matches record filing type
      return <a className="table-cell-tag"
                href={record.filing_url}
                target="_blank">Filer</a>;
    case "interests":
      return <a className="table-cell-tag tag-action">Show All</a>;
    case "matching_bills":
      return <a className="table-cell-tag tag-action">Show Matching</a>;
    default:
      return "";
  }
}

export default TableCellTag;
