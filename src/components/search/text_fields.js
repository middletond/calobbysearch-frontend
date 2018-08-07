import React from "react";

import BillField from "./bill_field";
import CompanyField from "./company_field";

const TextFields = ({ onBillChange, onCompanyChange }) => {
  return (
    <section className="text-fields">
      <h3>Lobbying Activities Involving</h3>
      <div className="fields">
        <BillField onChange={onBillChange} />
        <CompanyField onChange={onCompanyChange} />
      </div>
    </section>
  )
}

export default TextFields;
