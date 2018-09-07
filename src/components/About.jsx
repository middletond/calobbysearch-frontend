import React from "react";

const About = () => {
//  const MDASH = "\u2014";
  const MDASH = String.fromCharCode(8212);
  return (
    <main className="content page about">
      <h2>What?</h2>

      <p><b>California Lobby Search</b> is an open-source public records research tool that connects bills from the <a href="https://leginfo.legislature.ca.gov/" target="_blank">California state legislature</a> with lobbying activity filings from the <a href="http://cal-access.sos.ca.gov/Lobbying/" target="_blank">California Secretary of State office</a>.</p>

      <p>You can search all lobbying activity for a bill or bill keyword within a given time range. You can also search by company name {MDASH} both employers or lobby firms. Ideally, your searches will quickly answer the question, <i>"Who is interested in this bill and how interested are they?"</i></p>

      <p>Here are some examples of some searches:</p>

      <ul>
        <li>Lobbying to influence bills about <b>addiction</b> in <b>2018</b></li>
        <li>Lobbying to influence bills about <b>free speech</b> before <b>2017</b></li>
        <li>Lobbying by <b>coca-cola</b> to influence bill <b>SB 300</b> after <b>April 2018</b></li>
      </ul>

      <figure className="demo">
        <img src={require("../../static/search_demo.gif")} alt="Search Demo" />
      </figure>

      <div className="button-block">
        <a href="/" className="button">Run Some Searches</a>
      </div>

      <hr />

      <h2>Why?</h2>

      <p>Though lobbying data in California is technically <i>available</i>, it is not particularly <i>actionable</i>.</p>

      <p>Despite all lobby activity filings <a href="http://cal-access.sos.ca.gov/Lobbying/Employers/" target="_blank">being posted</a> on the Secretary of State website, it is only possible to search filings by the name of the company. Moreover, the filings themselves only refer to bill names (e.g. "AB 300") and <i>not</i> to bill titles (e.g. "Internet Privacy").</p>

      <p>Here is an example filing:</p>

      <figure>
        <img src={require("../../static/F635_example.jpg")} alt="Example of a lobby activity filing" />
      </figure>

      <p>This makes broad-based questions about lobbying functionally impossible. For example, suppose I wanted to know which companies or interest groups are lobbying on bills about nutrition this year. In order to answer this, I would have to manually go through every filing of every single company, <i>plus</i> translate all of the bill names found in each.</p>

      <p>At the time of this writing there are over 575,000 filed lobbying activities. It would be too long a night for a very unlucky poli-sci intern.</p>

      <hr />

      <h2>How?</h2>

      <p>Both filed lobby activities and bills are updated to their latest and greatest each morning at 5 a.m. Here is a technical overview of the process.</p>

      <h3>The Lobby Filings</h3>

      <p>Lobby activity information is taken directly from the California Secretary of State website. This happens in three steps:</p>

      <ol>
        <li>
          <p>Raw lobbying tables are ingested directly from the <a href="http://www.sos.ca.gov/campaign-lobbying/cal-access-resources/raw-data-campaign-finance-and-lobbying-activity/" target="_blank">CAL-ACCESS raw data export file</a> posted nightly on the California Secretary of State website, which we download, clean, verify, and organize via a modified version of the exceedingly excellent <code>calaccess_raw</code> python app built by the <a href="https://www.californiacivicdata.org/" target="_blank">California Civic Data Coalition</a>.</p>
        </li>
        <li>
          <p>Once ingested, we pull data from the raw tables to re-assemble two types of filings:</p>

          <ul>
            <li><a href="https://calaccess.californiacivicdata.org/documentation/calaccess-forms/f635/" target="_blank"><b>Form 635</b></a>, filed quarterly by <b>lobbying employers</b> (e.g. companies or interest groups that pay others to lobby for their interests)</li>
            <li><a href="https://calaccess.californiacivicdata.org/documentation/calaccess-forms/f625/" target="_blank"><b>Form 625</b></a>, filed quarterly by <b>lobbying firms</b> (e.g. companies that make their money by lobbying for employers)</li>
          </ul>

          <p>Note that we currently do <i>not</i> pull any information about <b>lobby registrations</b> or <b>individual lobbyists</b>.</p>
        </li>
        <li>
          <p>Once we have the re-assembled filings, we load the latest bill information (see below), then connect each activity filing with the bills stated in the filing's interests field. In the way we can now look up activity filings by things like bill title and bill author.</p>
        </li>
      </ol>

      <h3>The Bills</h3>

      <p>Bill information is scraped from the <a href="https://leginfo.legislature.ca.gov/faces/billSearchClient.xhtml" target="_blank">official bill search page</a> of the California State Legislature website, and ingested into the Lobby Search database. That is pretty much all there is to it.</p>

      <hr />

      <h2>Limits</h2>

      <p>The tool is still in nascent form, and there are some things left to button up.</p>

      <h3>Number of Results</h3>

      <p>To keep things snappy, the backend currently limits itself to <b>500 results per search</b>. Moreover, <i>there is currently nothing in the UI that warns when this has happened.</i> So, searches with extra broad criteria (e.g. generic terms like <i>transportation</i>, <i>education</i>, or <i>energy</i>) will inevitably hit this limit and omit results.</p>

      <p>The workaround for this currently is to narrow the date range. It is my intention that the next version will allow unlimited results.</p>

      <h3>Accuracy of Results</h3>

      <p>In the course of development I've spot checked probably a couple hundred or so filings, which have been accurate. Beyond that there has been no formal or programmatic testing for accuracy.</p>

      <p>That said, the nature of the data is such that we can expect reliably correct results. There is very little transformation of the original SOS records; what you see in the tool is what you see on the SOS website.</p>

      <p>The meaningful component that we add is to identify bill names in these records, and connect them up with our canonical legislative bill list. This is definitely a potential point of failure, and while it has thus far proven reliable, more formal testing should be prioritized.</p>

      <p>In the meantime, <b>each result contains a direct link to its source filing</b>, so can always be verified. Hopefully this is enough to get us started.</p>

      <h3>Amendment Handling</h3>

      <p>The tool currently only returns the <b>latest amendment for each filed activity</b>. That said, the backend is amendment-aware, so if there is demand for viewing all amendments it can be added.</p>

      <hr />

      <div className="button-block">
        <a href="/" className="button">Try The Tool</a>
        <a href="https://github.com/middletond/calobbysearch" target="_blank" className="button">View the Code</a>
      </div>

    </main>
  )
}

export default About;
