import React from "react";

import BillField from "./BillField";
import CompanyField from "./CompanyField";
import Icon from "../controls/Icon";

const TextFields = ({
  bill, onBillChange,
  company, onCompanyChange
}) => {
  return (
    <section className="text-fields">
      <h3>Lobbying Activities Involving</h3>
      <div className="fields">
        <Icon name="search" />
        <BillField value={bill} onChange={onBillChange} />
        <CompanyField value={company} onChange={onCompanyChange} />
      </div>
    </section>
  )
}

export default TextFields;
