import React from "react";

const SearchTips = () => {
  const MDASH = String.fromCharCode(8212);
  return (
    <main className="content page about">
      <h2>Search Tips</h2>

      <p>If you aren't getting results when you expect to, ensure it is not because of one of the following:</p>

      <ol>
        <li><b>The top-most search field in the left-hand sidebar is for <i>bill name or bill keyword only</i></b>. The one <i>below that</i> is for companies. For example, if you put "Amazon" in this field, it will only return filings with the word "Amazon" in the <i>bill itself</i>. It will <i>not</i> return records actually filed by or for Amazon as an employer, which is probably what you want.</li>
        <li><b>The bill keyword search looks at the <i>bill's title only</i>.</b> It does <i>not</i> search the bill's text. If you are expecting to find bills for a keyword and aren't, do the same search <a href="https://leginfo.legislature.ca.gov/" target="_blank">directly on leginfo</a> {MDASH} which will search the bill text {MDASH} then use the titles or bill numbers you find there. For example "tobacco", will not return any bills on the tool, but "smoking" will, since the bills only have "smoking" in their titles. </li>
        <li><b>The search algorithm for companies is not the sharpest tool in the woodshed.</b> Improving this is a pressing to-do for me. The search will accept most fragments (e.g. "amazon" will return "Amazon.com Inc"), but can choke on some natural language decisions (for ex. "coca cola" will miss filings under "coca-cola"). When in doubt, check the company name directly on the <a href="http://cal-access.sos.ca.gov/Lobbying/Employers/" target="_blank">Secretary of State listing</a>, and then paste that name into the tool verbatim. </li>
        <li><b>This tool does not search <i>any</i> national lobbying.</b> It is exclusively a California state politics tool. If you find existing national lobbying search tools lacking, please do <a href="mailto:dave@davemiddleton.co">contact me</a> {MDASH} I would certainly love to hear your thoughts about it!</li>
      </ol>

      <p>Such misunderstandings about how the search works can be the difference between finding crucial information or not. I will continue to work on improving both the interface and the search logic as best as I can, but in the meantime, hopefully these help.</p>

      <p>Please <a href="mailto:dave@davemiddleton.co">email me</a> with any questions, frustations, or feedback. Thanks!</p>

      <figure className="demo">
        <img src={require("../../static/search_demo.gif")} alt="Search Demo" />
      </figure>

      <div className="button-block">
        <a href="/" className="button">Run Some Searches</a>
        <a href="/about" className="button">More About the Tool</a>
      </div>

    </main>
  )
}

export default SearchTips;
