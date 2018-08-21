import React from "react";
import Icon from "../controls/Icon";

const FieldErrors = ({ errors }) => {
  return (
    <ul className="field-errors">
      {errors.map((error, index) => {
        return (
          <li key={index}>
            <Icon name="times" />
            {error}
         </li>
        )
      })}
    </ul>
  )
}

export default FieldErrors
