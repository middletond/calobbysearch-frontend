import React from "react";

import Icon from "./Icon";

const ExportButton = ({ onClick, isExporting }) => {
  if (isExporting) {
    return (
      <div className= "export-button exporting">
        <Icon name="running" />
        <button className="button">
          Exporting Visible Rows
        </button>
      </div>
    )
  }
  return (
    <div className="export-button" onClick={onClick}>
      <Icon name="export" />
      <button className="button">
        Export Spreadsheet
      </button>
    </div>
  )
}

export default ExportButton;
