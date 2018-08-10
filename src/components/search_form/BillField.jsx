import React from "react";

const BillField = ({ value, onChange }) => {
  return (
    <input
      value={value}
      autoComplete="bill"
      className="bill-field"
      placeholder="bill name or keyword..."
      onChange={event => onChange(event.target.value)} />
  )
};

export default BillField;
