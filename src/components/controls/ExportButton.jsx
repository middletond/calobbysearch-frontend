import React from "react";

import Icon from "./Icon";

const ExportButton = ({ onExport }) => {
  const label = "Export Visible";

  return (
    <div className="export-button" onClick={onExport}>
      <Icon name="export" />
      <button className="button">
        {label}
      </button>
    </div>
  )
}

export default ExportButton;
