import React from "react";

const About = () => {
  return (
    <main className="content page about">
      <h2>What?</h2>

      <p><b>California Lobby Search</b> is an open-source public records research tool that connects bills from the <a href="https://leginfo.legislature.ca.gov/" target="_blank">California state legislature</a> with lobbying activity filings from the <a href="http://cal-access.sos.ca.gov/Lobbying/" target="_blank">California Secretary of State office</a>.</p>

      <p>You can search all lobbying activity for a bill or bill keyword within a given time range. You can also narrow results by company name &mdash; both employers or lobby firms. Ideally, your searches will quickly answer the question, <i>"Who is interested in this bill and how interested are they?"</i></p>

      <p>Here are some examples of some searches:</p>

      <ul>
        <li>Lobbying by <b>Tesla Motors</b> to influence bills about <b>permits</b> in <b>2017</b></li>
        <li>Lobbying to influence bills about <b>free speech</b> from <b>2000 to today</b></li>
        <li>Lobbying to influence bill <b>SB 300</b> after <b>April 2018</b></li>
      </ul>

      <h2>Why?</h2>

      <p>There is a difference between available public data, and actionable public data.</p>

      <p>Despite all lobby activity filings being posted on the Secretary of State website, it is only possible to search filings by the name of the company. Moreover, the filings themselves only refer to bill names (e.g. "AB 300") and <i>not</i> to bill titles (e.g. "Internet Privacy").</p>

      <p>Here is an example filing:</p>

      <p>[F635 filing image]</p>

      <p>This makes broad-based questions about the lobbying interests of entities functionally impossible. Okay, maybe if I want to find out a single company's interests, it's not too terrible. I either need intimate knowledge of what each bill name represents, or a willingness to look up each of them at the state legislature. Of course, this is assuming I only care about the current session; what if I want all company interests since filing began in 1999? Ugh... possible, but starting to be very laborious.</p>

      <p>Anything broader than this becomes cost prohibitive. In order to answer questions about the interests of <i>all</i> companies, I would have to manually go through every filing of every single company, <i>plus</i> translating all of the bill names found in each.</p>

      <p>At the time of this writing there are over 575,000 filed lobbying activities. It would be too long a night for a very unlucky poli-sci intern.</p>

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

      <h3>Amendment Handling</h3>

      <p>The Lobby Search tool currently only returns the latest amendment for each filed activity. That said, the tool's backend has an API that is amendment-aware, so the future is wide open.</p>

      <h3>The Table Fields</h3>

      <p>We pull the following fields for each filed activity:</p>

      <ul>
        <li><code>Filing ID</code></li>
        <li><code>Amendment ID</code></li>
        <li><code>Transaction ID</code></li>
        <li><code>Filing Url</code></li>
        <li><code>Form Type</code></li>
        <li><code>Filing Date</code></li>
        <li><code>Filer Last Name</code></li>
        <li><code>Filer First Name</code></li>
        <li><code>Lobbyer Last Name</code></li>
        <li><code>Lobbyer First Name</code></li>
        <li><code>Lobbyer City</code></li>
        <li><code>Lobbyer State</code></li>
        <li><code>Lobbyer Phone</code></li>
        <li><code>Employer Last Name</code></li>
        <li><code>Employer First Name</code></li>
        <li><code>Employer City</code></li>
        <li><code>Employer State</code></li>
        <li><code>Employer Phone</code></li>
        <li><code>Filer Type</code></li>
        <li><code>Start Date</code></li>
        <li><code>End Date</code></li>
        <li><code>Interests</code></li>
        <li><code>Compensation</code></li>
        <li><code>Reimbursement</code></li>
        <li><code>Period Total</code></li>
        <li><code>Session Total</code></li>
        <li><code>Related Bills</code></li>
      </ul>

      <p>We pull the following fields for each bill:</p>

      <ul>
        <li><code>Type</code></li>
        <li><code>Number</code></li>
        <li><code>Title</code></li>
        <li><code>Author</code></li>
        <li><code>Status</code></li>
        <li><code>Url</code></li>
      </ul>

    </main>
  )
}

export default About;
