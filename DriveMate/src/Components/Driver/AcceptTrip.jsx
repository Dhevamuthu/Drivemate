import trips from './Datasets/AcceptedTrip';
import React from 'react';
import { useTable } from "react-table";
import './Driver.css'; // Import CSS file for component styling
import DriverNavbar from "./DriverNav";

const AcceptTrip = () => {
    const data = React.useMemo(() => trips, []);
    const columns = React.useMemo(() => [
        {
            Header: "S.No",
            accessor: "SNo",
        },
        {
            Header: "StartLocation",
            accessor: "Startloc",
        },
        {
            Header: "EndLocation",
            accessor: "Endloc",
        },
        {
            Header: "Date",
            accessor: "Date",
        },
        {
            Header: "Charged Amount",
            accessor: "Fare",
        },
    ], []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <>
    
            <DriverNavbar />
            <div className="TravelContainer">  
                <h1 className="Heading">MY UPCOMING TRIPS</h1>
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

export default AcceptTrip;