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
