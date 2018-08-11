import React from "react";

const ExportButton = ({ onExport }) => {
  const label = "Export to CSV";

  return (
    <button className="button export-button" onClick={onExport}>
      {label}
    </button>
  )
}

export default ExportButton;
