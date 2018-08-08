import React from "react";

const CompanyField = ({ value, onChange }) => {
  return (
    <input
      className="company-field"
      placeholder="company name..."
      onChange={event => onChange(event.target.value)}
      value={value} />
  )
};

export default CompanyField;
