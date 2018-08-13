const stateShape = {
  // returned results cache
  results: {
    opened: [], // record filing_ids... this could be kept separate from results
    filterTerm: "",
    sort {
      field: "startDate",
      direction: "asc",
    },
    view: "filings", // "filings" or "bills"
    "AB 101|TESLA MOTORS|20170101|20182131": { // a unique key by concating all params
      params: {
        company: "tesla",
        bill: "vehicle",
        start: new Date("2017-01-01"), // always translate session into start - end? we’ll try it for now
        end: new Date("2018-12-31")
      },
      cache: {
        isFetching: false,
        isWarm: true, // if cold, we re-fetch
        lastFetched: null // or dateTime
      },
      records: [
        // records here
      ]
    }
  },
  // controlled user inputs
  searchForm: {
    fields: {
      bill: "",
      company: "",
      session: "20172018", // this should modulate start and end on change
      start: new Date("20170101"), // these should switch session to null if acted upon
      end: new Date("20182131")
    },
    submitted: "AB 101|TESLA MOTORS|20170101|20182131"
  }

  // results controllers
  // controls: {
  //   filterTerm: "",
  //   sort {
  //     field: "startDate",
  //     direction: "asc",
  //   }
  // }
}
