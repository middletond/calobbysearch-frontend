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
import {
  fetchResults
} from "../actions/results";

import TextFields from "../components/search/text_fields";
import DateFields from "../components/search/date_fields";
import SubmitButton from "../components/search/submit_button";

class SearchForm extends React.Component {
  render() {
    const { onBillChange, onCompanyChange,
            onStartDateChange, onEndDateChange,
            onSessionChange, onSubmit, fields } = this.props;

    return (
      <form
        className="search-form"
        onSubmit={event => onSubmit(event, fields)} >
        <TextFields
          bill={fields.bill}
          company={fields.company}
          onBillChange={onBillChange}
          onCompanyChange={onCompanyChange} />
        <DateFields
          startDate={fields.startDate}
          endDate={fields.endDate}
          session={fields.session}
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
    onSubmit: (event, params) => {
      event.preventDefault();
      dispatch(submitSearch());
      dispatch(fetchResults(params)); //  bonehead approach to kicking off async
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
