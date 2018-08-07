const stateShape = {
    // returned results cache
    searches: [
      {
        name: "company:tesla|bill:vehicle|start:2017-01-01|end:2018-21-31", // a unique string by concating all params
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
        results: [
          // records here
        ]
      }
    ],
    // controlled user inputs
    searchForm: {
      fields: {
        bill: "",
        company: "",
        session: "20172018", // this should modulate start and end on change
        start: new Date("2017-01-01"), // these should switch session to null if acted upon
        end: new Date("2018-21-31")
      },
      submitted: "company:tesla|bill:vehicle|start:2017-01-01|end:2018-21-31"
    }

    // results controllers
    filterTerm: "",
    sort {
      field: "start_date",
      direction: "asc",
    }
    // currentSearch: "company:tesla|bill:vehicle|start:2017-01-01|end:2018-21-31" // ("name" from searches)
}
