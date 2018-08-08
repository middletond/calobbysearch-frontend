import React from "react";

import BillField from "./bill_field";
import CompanyField from "./company_field";

const TextFields = ({
  bill, onBillChange,
  company, onCompanyChange
}) => {
  return (
    <section className="text-fields">
      <h3>Lobbying Activities Involving</h3>
      <div className="fields">
        <BillField value={bill} onChange={onBillChange} />
        <CompanyField value={company} onChange={onCompanyChange} />
      </div>
    </section>
  )
}

export default TextFields;
