import React from "react";

const BillField = ({ bill, onChange }) => {
  return (
    <input
      value={bill.value}
      autoComplete="bill"
      className="bill-field"
      placeholder="bill name or keyword..."
      onChange={event => onChange(event.target.value)} />
  )
};

export default BillField;
