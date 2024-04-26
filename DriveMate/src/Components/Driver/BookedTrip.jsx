import BookedtripData from './Datasets/BookedTrips';
import React from 'react';
import { useTable } from "react-table";
import DriverNavbar from './DriverNav';
import './Driver.css'; // Import CSS file for component styling


const Bookedtrip = () => {
    const data = React.useMemo(() => BookedtripData, []);
    const columns = React.useMemo(() => [
        {
            Header: "CUSTOMERID",
            accessor: "CustomerId",
        },
        {
            Header: "NAME",
            accessor: "Name",
        },
        {
            Header: "START",
            accessor: "StartLoc",
        },
        {
            Header: "END",
            accessor: "EndLoc",
        },
        {
            Header: "date",
            accessor: "Date",
        },
        {
            Header: "fare",
            accessor: "Fare",
        },
    ], []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <>
    
            <DriverNavbar />
            <div className="TravelContainer">  
                <h1 className="Heading">MY TRIPS</h1>
                <div className="TableContainer">
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )
}

export default Bookedtrip;
