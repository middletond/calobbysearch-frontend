import React from "react";

import Icon from "./Icon";

const ExportButton = ({ onClick, isExporting }) => {
  const label = "Export to CSV";

  return (
    <div
      className={(isExporting) ? "export-button exporting" : "export-button"}
      onClick={onClick}>
      <Icon name="export" />
      <button className="button">
        {label}
      </button>
    </div>
  )
}

export default ExportButton;
