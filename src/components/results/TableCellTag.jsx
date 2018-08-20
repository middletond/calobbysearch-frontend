import React from "react";

import { filingType } from "../../columns";

const TableCellTag = ({record, column, onClick = null}) => {
  const opened = record.opened;
  const label = (opened) ? "Hide Bills" : "Details";

  switch (column.name) {
    case filingType(record): // Put a FILER tag on cell that matches record filing type
      return <a className="cell-tag tag-filer"
                href={record.filing_url}
                target="_blank">Filer</a>;
    // case "interests":
    //   return <a className="cell-tag tag-action">{label}</a>;
    // case "matching_bills":
    //   return <a className="cell-tag tag-action">{label}</a>;
    default:
      return "";
  }
}

export default TableCellTag;
