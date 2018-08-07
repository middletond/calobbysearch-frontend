import React from "react";
import { connect } from "react-redux";

import TextFields from "../components/search/text_fields";
import DateFields from "../components/search/date_fields";
import SubmitButton from "../components/search/submit_button";

import {
  submitSearch,
  updateBill,
  updateCompany,
  updateStartDate,
  updateEndDate,
  updateSession
} from "../actions/search_form";

class SearchForm extends React.Component {
  render() {
    const { onBillChange, onCompanyChange } = this.props;
    return (
      <form
        className="search-form"
        onSubmit={event => this.props.onSubmit(event)} >
        <TextFields
          onBillChange={onBillChange}
          onCompanyChange={onCompanyChange} />
        <DateFields />
        <SubmitButton />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchFields: state.searchFields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (event) => {
      event.preventDefault();
      dispatch(submitSearch());
    },
    onBillChange: (term) => {
      dispatch(updateBill(term));
    },
    onCompanyChange: (term) => {
      dispatch(updateCompany(term));
    },
    onStartDateChange: (date) => {
      dispatch(updateStartDate(date));
    },
    onEndDateChange: (date) => {
      dispatch(updateEndDate(date));
    },
    onSessionChange: (session) => {
      dispatch(updateSession(session));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
