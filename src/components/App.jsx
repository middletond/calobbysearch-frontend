import React from "react";
import { isMobile } from "react-device-detect";
import Joyride from "react-joyride";

import SearchForm from "../containers/SearchForm";
import Results from "../containers/Results";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tourRun: false,
      tourSteps: [
        {
          target: ".bill-field",
          placement: "right-start",
          title: "Search by bill.",
          disableBeacon: true,
          content: (
            <div>
              <p>To search for state lobby filings by bill, type a <i>bill name</i> (for ex. <b>AB 300</b> or <b>SB 1</b>) or a <i>keyword</i> (for ex. <b>nutrition</b> or <b>casinos</b>) into this field.</p>

              <p>Note that the <i>keyword</i> search currently only looks at a bill's <i>title</i>, as opposed to its full text.</p>

              <p>You can always <a href="http://leginfo.legislature.ca.gov/faces/billSearchClient.xhtml" target="_blank">verify a bill's name, title, or content directly</a> at the <b>California Legislature website</b>.</p>
            </div>
          )
        },
        {
          target: ".company-field",
          placement: "right-start",
          title: "Search by company or interest group.",
          content: (
            <div>
              <p>To search for state lobby filings by company or interest group, type a <i>company or group name</i> (for ex. <b>pfizer</b> or <b>microsoft</b>) into this field.</p>

              <p>Note that entities sometimes file under different names than what you may know them by. Additionally, lobby firms often report the companies that employ them under a different name (for ex., Tesla files as <b>Tesla Inc</b>, but their lobby firms report them as <b>Tesla Motors, Inc</b>).</p>

              <p>Because of this messiness, it is best to begin searches with <i>single keywords</i> (for ex. <b>sierra</b> instead of <b>sierra club</b>) and then narrow results from there.</p>

              <p>You can always <a href="http://cal-access.sos.ca.gov/Lobbying/Employers/" target="_blank">verify their filed name directly</a> at the <b>California Secretary of State website</b>.</p>
            </div>
          )
        },
        {
          target: ".date-fields",
          placement: "right",
          title: "Leave alone to search within current session, or choose your dates.",
          content: (
            <div>
              <p>Choose any <i>two-year legislative session</i> or <i>specific date range</i>, back to 1999. You can ignore these fields and it will default to the current session.</p>

              <p>If you are getting too many results in general, try narrowing the date range here.</p>
            </div>
          )
        },
        {
          target: ".search-form form",
          placement: "right-start",
          title: "Limitations and gotchas.",
          content: (
            <div>
              <p><b>Number of results.</b> To keep things snappy, the backend currently limits itself to 500 results per search. Searches with extra broad criteria will inevitably hit this limit and omit results. You can narrow the date range to fix this.</p>

              <p><b>Accuracy of results.</b> I have spot-checked a few hundred records during the build process, with accurate results. Each result contains <i>a direct link to its source filing</i>, so can (and should!) be verified.</p>

              <p><b>Amendment Handling.</b> The tool currently only returns the <i>latest amendment only</i> for each filed activity.</p>

              <p><b>Scope.</b> These are <i>California state lobby filings only</i>. This tool does not (yet) search any federal records.</p>

              <br />
              <p><a href="/"><b>All makes sense, I'm ready to search.</b></a></p>
              <p><a href="/about#limits"><b>Tell me more about limits.</b></a></p>
            </div>
          )
        }
      ]
    };
    this.onTourButtonClick = this.onTourButtonClick.bind(this);
  }

  onTourButtonClick(event) {
    event.preventDefault();
    this.setState({tourRun: true});
  }

  render() {
    const { tourSteps, tourRun } = this.state;

    if (isMobile) {
      return (
        <main className="content page mobile-message">
          <h2>Apologies.</h2>
          <h3>This tool is currently available for <b>desktops and laptops only</b>.</h3>
          <div className="button-block">
            <a className="button" href="/about">Learn About the Tool</a>
          </div>
        </main>
      )
    }
    return (
      <main className="content">
        <Joyride
          steps={tourSteps}
          run={tourRun}
          continuous={true}
          showProgress={true} />
        <SearchForm />
        <Results onTourButtonClick={this.onTourButtonClick} />
      </main>
    )
  }
}

export default App;
