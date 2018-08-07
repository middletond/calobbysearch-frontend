import React from "react";

import SearchForm from "../containers/search_form";
import ResultsControls from "./results/controls";
import ResultsTable from "./results/table";

const Content = () => {
  return (
    <main className="content">
      <SearchForm />
      <ResultsControls />
      <ResultsTable />
    </main>
  )
};

export default Content;
