import React from "react";

import Icon from "./Icon";

const FilterField = ({ value, onChange }) => {
  return (
    <div className="filter-field">
      <Icon name="filter" active={(value) ? true : false} />
      <input
        placeholder="type to filter results"
        onChange={event => onChange(event.target.value)}
        value={value} />
    </div>
  )
}

export default FilterField;
