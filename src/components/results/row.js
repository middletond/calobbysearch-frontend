import React from "react";

import { makeCell } from "../../columns";

const ResultsCell = ({ record, column }) => {
  const cell = makeCell(record, column);

  if (!cell.url)
    return <td className={cell.colName}>{cell.value}</td>;
  return (
    <td className={cell.colName}>
      <a href={cell.url} target="_blank">
        {cell.value}
      </a>
    </td>
  )
}

const ResultsRow = ({ record, columns }) => {
  return (
    <tbody className="results-row">
      <tr className={record.type}>
        {columns.map((col, index) => {
          return <ResultsCell key={index} record={record} column={col} />
        })}
        <td>
          <button>View Bills</button>
        </td>
      </tr>
      <tr className="bills-container">
        <td colSpan="100">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {record.matching_bills.map((bill, index) => {
                return (
                  <tr key={index}>
                    <td><a href={bill.url}>{bill.name}</a></td>
                    <td><a href={bill.url}>{bill.title}</a></td>
                    <td>{bill.authors}</td>
                    <td>{bill.status}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  )
}

export default ResultsRow;
