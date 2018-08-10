export const fresh = (obj, params = {}) => {
  return Object.assign({}, obj, params);
}

export const makeResultKey = ({ bill, company, startDate, endDate }) => {
  // Ex: "AB 101|TESLA MOTORS|20170101|20181231"
  const DATE_FORMAT = "YYYYMMDD";
  const DELIMITER = "|";
  return [
    bill.toUpperCase(),
    company.toUpperCase(),
    startDate.format(DATE_FORMAT),
    endDate.format(DATE_FORMAT)
  ].join(DELIMITER)
}

export const findMatchingBills = (records) => { // or second API call handles this?
  let matchingBills = records.reduce(
    (bills, rec) => bills.concat(rec.matching_bills), []
  )
  return uniqueBy("url", matchingBills);
}

export const uniqueBy = (key, objs) => {
  let uniqueVals = [...new Set(objs.map(obj => obj[key]))];

  const findFirst = (val) => {
    return objs.filter(obj => (obj[key] == val))[0]
  }
  return uniqueVals.map(val => findFirst(val));
}

export const valuesToString = (record, columns = null) => {
  // let rec = {a:1, b:2, c: {d:3, e:4}}
  // valuesToString(rec); // "1 2 3 4"
  if (!columns) {
    columns = Object.keys(record).map(key => ({ name: key }));
  }
  return columns.reduce((values, column) => {
    let columnVal = record[column.name];

    if (columnVal && typeof columnVal == "object")
      columnVal = valuesToString(columnVal);
      
    return `${values} ${columnVal}`;
  }, "").trim()
}
