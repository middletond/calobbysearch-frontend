import React from "react";

const CompanyField = ({ company, onChange }) => {
  return (
    <input
      value={company.value}
      autoComplete="company"
      className="company-field"
      placeholder="company name..."
      onChange={event => onChange(event.target.value)} />
  )
};

export default CompanyField;
