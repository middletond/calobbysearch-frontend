import React from "react";

const CompanyField = ({ company, onChange }) => {
  return (
    <div className="field-wrapper company-field-wrapper">
      <input
        value={company.value}
        autoComplete="company"
        className="company-field"
        placeholder="company name..."
        onChange={event => onChange(event.target.value)} />
    </div>
  )
};

export default CompanyField;
