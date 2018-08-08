import React from "react";

const FilterField = ({ value, onChange }) => {
  return (
    <input
      className="filter-field"
      placeholder="Type to filter results"
      onChange={event => onChange(event.target.value)}
      value={value} />
  )
}

export default FilterField;
