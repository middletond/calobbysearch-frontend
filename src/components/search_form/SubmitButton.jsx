import React from "react";
import Icon from "../controls/Icon";

const SubmitButton = ({ isFetching }) => {
  if (isFetching) {
    return (
      <div className="submit-button-wrapper fetching">
        <Icon name="running" />
        <input
          className="button submit-button"
          type="submit"
          value="" />
      </div>
    )
  }
  return (
    <div className="submit-button-wrapper">
      <input
        className="button submit-button"
        type="submit"
        value="Find Records" />
    </div>
  )
}

export default SubmitButton;
