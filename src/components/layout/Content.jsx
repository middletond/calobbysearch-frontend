import React from "react";

import SearchForm from "../../containers/SearchForm";
import Results from "../../containers/Results";

const Content = () => {
  return (
    <main className="content">
      <SearchForm />
      <Results />
    </main>
  )
};

export default Content;
