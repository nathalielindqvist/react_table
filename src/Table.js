import React, { useState } from "react";
import { useFilters, useSortBy, useTable } from "react-table";
import "./App.css";


export default function Table({ columns, data }) {

    const [filterShowInput, setFilterInput] = useState("");
    const [filterGenreInput, setGenreInput] = useState("");

    const handleShowFilterChange = e => {
        const valueShow = e.target.value || undefined;
        setFilter("show.name", valueShow);
        setFilterInput(valueShow);
      };

    const handleGenreFilterChange = e => {
        const valueGenre = e.target.value || undefined;
        setFilter("show.genres", valueGenre);
        setGenreInput(valueGenre);
      };


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
} = useTable({
    columns,
    data
  },
  useFilters,
  useSortBy
  );

  return (
      <div>
        <input
          id="showSearchBar"
          value={filterShowInput}
          onChange={handleShowFilterChange}
          placeholder={"Search Tv show name"}
        />

        <input
          id="genreSearchBar"
          value={filterGenreInput}
          onChange={handleGenreFilterChange}
          placeholder={"Search genre"}
        />

        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps)}>{column.render("Header")}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            
                {rows.map((row, i) => {
                prepareRow(row)
            
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
        </table>
    </div>
  );
};