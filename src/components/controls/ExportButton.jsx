import React from "react";

import Icon from "./Icon";

const ExportButton = ({ onExport }) => {
  const label = "Export to CSV";

  return (
    <div className="export-button" onClick={onExport}>
      <Icon name="download" />
      <button className="button">
        {label}
      </button>
    </div>
  )
}

export default ExportButton;
