import React from "react";

class ResultsHeader extends React.Component {
  constructor(props) {
    super(props);

    this.headerMessage = this.headerMessage.bind(this);
  }

  headerMessage(results) {
    if (!("params" in results)) 
      return <span>Search for lobby activity by <b>bill</b>, <b>company</b>, or <b>both</b>.</span>;

    const { bill, company } = results.params;

    if (bill && company) {
      return <span>Lobby activity for <b>{results.params.company}</b> and <b>{results.params.bill}</b></span>;
    }
    else if (bill) {
      return <span>Lobby activity for <b>{results.params.bill}</b></span>;
    }
    else if (company) {
      return <span>Lobby activity for <b>{results.params.company}</b></span>;
    }
    return <span><b>Oops!</b> Neither bill nor company found in search.</span>
  }

  render() {
    const { results } = this.props;
    return (
      <div className="results-header">
        <h2 className="results-header-text">{this.headerMessage(results)}</h2>
      </div>
    )
  }
}

export default ResultsHeader;
