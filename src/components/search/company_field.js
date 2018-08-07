import React from "react";

const CompanyField = ({ onChange }) => {
  return (
    <input
      className="company-field"
      placeholder="company name..."
      onChange={event => onChange(event.target.value)}
    />
  )
};

export default CompanyField;
