import React from "react";

const BillField = ({ bill, onChange }) => {
  return (
    <div className="field-wrapper bill-field-wrapper">
      <input
        value={bill.value}
        autoComplete="bill"
        className="bill-field"
        placeholder="bill name or keyword..."
        onChange={event => onChange(event.target.value)} />
    </div>
  )
};

export default BillField;
