import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => {
          return <th key={index}>{col.verbose}</th>
        })}
      </tr>
    </thead>
  )
}

const TableRows = ({ Row, records, columns }) => {
  return (
    records.map((record, index) => {
      return <Row key={index} record={record} columns={columns} />
    })
  )
}

const Table = ({ Row, records, columns, className }) => {
  return (
    <table className={className}>
      <TableHead columns={columns} />
      <TableRows Row={Row} records={records} columns={columns} />
    </table>
  )
}

export default Table;
