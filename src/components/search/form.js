import React from "react";

import BillField from "./bill_field";
import CompanyField from "./company_field";
import SessionSelect from "./session_select";
import StartDateField from "./start_date_field";
import EndDateField from "./end_date_field";

const SearchForm = (props) => {
  return (
    <form className="search-form">
      <div className="text-fields">
        <h3>Lobbying Activities Involving</h3>
        <div className="fields">
          <BillField />
          <CompanyField />
        </div>
      </div>
      <div className="date-fields">
        <h3>During Session or Date Range</h3>
        <div className="fields">
          <SessionSelect />
          <StartDateField />
          <EndDateField />
        </div>
      </div>
    </form>
  )
}

export default SearchForm;
