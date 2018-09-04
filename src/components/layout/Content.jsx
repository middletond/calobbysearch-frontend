import React from "react";
import { isMobile } from 'react-device-detect';


import SearchForm from "../../containers/SearchForm";
import Results from "../../containers/Results";

const Content = () => {
  if (isMobile && window.outerWidth) {
    return (
      <main className="content mobile-message">
        <h2>So sorry.</h2>
        <h3>This tool is currently available for <b>desktops and laptops only</b>.</h3>
      </main>
    )
  }
  return (
    <main className="content">
      <SearchForm />
      <Results />
    </main>
  )
};

export default Content;
