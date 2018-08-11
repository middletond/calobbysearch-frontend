import React from "react";

const Icon = ({ name }) => {
  return (
    <div className="icon">
      <i className={`fa fa-${name}`}></i>
    </div>
  )
}

export default Icon;
