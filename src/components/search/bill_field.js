import React from "react";

const BillField = ({ onChange }) => {
  return (
    <input
      className="bill-field"
      placeholder="bill name or keyword..."
      onChange={event => onChange(event.target.value)}
    />
  )
};

export default BillField;
