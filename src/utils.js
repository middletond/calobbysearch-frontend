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

export const toParams = (fields) => { // fields are nested objs, convert to strings
  return Object.keys(fields).reduce((params, key) => {
    params[key] = fields[key].value;
    return params;
  }, {});
}

export const findMatchingBills = (records) => { // or second API call handles this?
  let matchingBills = records.reduce(
    (bills, rec) => bills.concat(rec.matching_bills), []
  )
  return uniqueBy("url", matchingBills);
}

export const uniqueBy = (key, objs) => {
  let uniqueVals = [...new Set(objs.map(obj => obj[key]))];

  return uniqueVals.map(val => findFirst(key, val, objs));
}

export const findFirst = (key, val, objs) => {
  return objs.find(obj => (obj[key] == val))
}

/**
 * Returns a string of concatenated values from a record or object.
 *
 * > let rec = {a:1, b:2, c: {d:3, e:4}}
 * > valuesToString(rec);
 * "1 2 3 4"
 */
export const valuesToString = (record, columns = null) => {
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

/**
 * Returns a single string of sorting classes.
 */
export const sortingClasses = (column, sorting) => {
  const { field, direction } = sorting;
  return (column.name == field) ? `sort ${direction}` : "";
}
/**
 * Returns a single string of form field classes.
 */
export const fieldClasses = (fieldName, field, active = null) => {
  let classes = ["field-wrapper", `${fieldName}-field-wrapper`];
  if (field.error)
    classes.push("error");
  if (active !== null && active) {
    classes.push("active");
  }
  if (active === null && field.value) {
    classes.push("active");
  }
  return classes.join(" ");
}

/**
 * Returns a boolean for whether a record contains a term in
 * its values (case insensitive).
 *
 * > let rec = {a:"dog", b:"cat", c:"moose"}
 * > hasTerm(rec, "Dog", [{name: "a"}, {name: "b"}])
 * true
 */
export const hasTerm = (record, term, columns = null) => {
  let recordVals = valuesToString(record, columns);
  return recordVals.toUpperCase().includes(term.toUpperCase());
}

export const clientIP = () => {
  return fetch("https://api.ipify.org?format=json")
    .then(resp => resp.json())
    .then(json => json.ip)
}
