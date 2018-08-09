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
