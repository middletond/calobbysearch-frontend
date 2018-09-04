import React from "react";
import { isMobile } from 'react-device-detect';

import SearchForm from "../containers/SearchForm";
import Results from "../containers/Results";

const App = () => {
  if (isMobile) {
    return (
      <main className="content page mobile-message">
        <h2>Apologies.</h2>
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

export default App;
