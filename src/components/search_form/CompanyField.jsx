import React from "react";

const CompanyField = ({ value, onChange }) => {
  return (
    <input
      value={value}
      autoComplete="company"
      className="company-field"
      placeholder="company name..."
      onChange={event => onChange(event.target.value)} />
  )
};

export default CompanyField;
