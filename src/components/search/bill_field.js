import React from "react";

const BillField = ({ value, onChange }) => {
  return (
    <input
      className="bill-field"
      placeholder="bill name or keyword..."
      onChange={event => onChange(event.target.value)}
      value={value} />
  )
};

export default BillField;
