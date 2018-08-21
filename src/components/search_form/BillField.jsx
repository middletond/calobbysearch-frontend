import React from "react";
import { fieldClasses } from "../../utils";

const BillField = ({ bill, onChange }) => {
  return (
    <div className={fieldClasses("bill", bill)}>
      <label>{bill.label}</label>
      <input
        value={bill.value}
        autoComplete="bill"
        className="bill-field"
        placeholder={`${bill.label}...`}
        onChange={event => onChange(event.target.value)} />
      <div className="errors">{bill.error}</div>
    </div>
  )
};

export default BillField;
