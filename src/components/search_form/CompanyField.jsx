import React from "react";
import { fieldClasses } from "../../utils";

const CompanyField = ({ company, onChange }) => {
  return (
    <div className={fieldClasses("company", company)}>
      <label>{company.label}</label>
      <input
        value={company.value}
        autoComplete="company"
        className="company-field"
        placeholder={`${company.label}...`}
        onChange={event => onChange(event.target.value)} />
      <div className="errors">{company.error}</div>
    </div>
  )
};

export default CompanyField;
