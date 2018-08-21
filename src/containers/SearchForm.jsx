import React from "react";
import { connect } from "react-redux";

import {
  submitSearch,
  updateBill,
  updateCompany,
  updateStartDate,
  updateEndDate,
  updateSession,
  updateFieldErrors
} from "../actions/search_form";
import {
  fetchResults
} from "../actions/results";

import TextFields from "../components/search_form/TextFields";
import DateFields from "../components/search_form/DateFields";
import SubmitButton from "../components/search_form/SubmitButton";
import FieldErrors from "../components/search_form/FieldErrors";

import { toParams } from "../utils";

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.isValid = this.isValid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() { // XXX remove this, just for testing
    // this.onSubmit(null, this.props.fields);
  }

  isValid(fields) { // validation in reducers, just check for any errors here
    const { dispatch } = this.props;
    const billVal = fields.bill.value;
    const companyVal = fields.company.value;

    const errors = Object.values(fields)
                         .map(field => field.error)
                         .filter(error => !!error);
    // add multi-field errors
    if (!(billVal || companyVal))
      errors.push("To find records, include either a bill name or company name.");

    dispatch(updateFieldErrors(errors));
    return !errors.length;
  }

  onSubmit(event, fields) {
    const { dispatch } = this.props;

    if (event) event.preventDefault();

    if (this.isValid(fields)) {
      let params = toParams(fields);
      dispatch(submitSearch());
      dispatch(fetchResults(params)); //  bonehead approach to kicking off async
    };
  }

  render() {
    const { onBillChange, onCompanyChange,
            onStartDateChange, onEndDateChange,
            onSessionChange, onSubmit, fields, errors } = this.props;

    return (
      <div className="search-form">
        <form onSubmit={event => this.onSubmit(event, fields)} >
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
          <FieldErrors errors={errors} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fields: state.searchForm.fields,
    submitted: state.searchForm.submitted,
    errors: state.searchForm.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
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
