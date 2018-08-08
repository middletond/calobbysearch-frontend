import React from "react";

import SearchForm from "../containers/search_form";
import Results from "../containers/results";

const Content = () => {
  return (
    <main className="content">
      <SearchForm />
      <Results />
    </main>
  )
};

export default Content;
