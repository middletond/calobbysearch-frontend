import React from "react";
import { connect } from "react-redux";

import {
  submitSearch,
  updateBill,
  updateCompany,
  updateStartDate,
  updateEndDate,
  updateSession
} from "../actions/search_form";

import TextFields from "../components/search/text_fields";
import DateFields from "../components/search/date_fields";
import SubmitButton from "../components/search/submit_button";

class SearchForm extends React.Component {
  render() {
    const { onBillChange, onCompanyChange,
            onStartDateChange, onEndDateChange,
            onSessionChange, onSubmit } = this.props;
    return (
      <form
        className="search-form"
        onSubmit={event => onSubmit(event)} >
        <TextFields
          bill={this.props.fields.bill}
          company={this.props.fields.company}
          onBillChange={onBillChange}
          onCompanyChange={onCompanyChange} />
        <DateFields
          startDate={this.props.fields.startDate}
          endDate={this.props.fields.endDate}
          session={this.props.fields.session}
          onStartDateChange={onStartDateChange}
          onEndDateChange={onEndDateChange}
          onSessionChange={onSessionChange} />
        <SubmitButton />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fields: state.searchForm.fields,
    submitted: state.searchForm.submitted
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
