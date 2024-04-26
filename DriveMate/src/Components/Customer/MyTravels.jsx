import tripHistory from "./Datasets/Travelhis";
import React from 'react';
import { useTable } from "react-table";
import Navbar from "./NavBar";
import './Customer.css'; // Import CSS file for component styling

const MyTravels = () => {
    const data = React.useMemo(() => tripHistory, []);
    const columns = React.useMemo(() => [
        {
            Header: "sno",
            accessor: "SNo",
        },
        {
            Header: "startloc",
            accessor: "Startloc",
        },
        {
            Header: "endloc",
            accessor: "Endloc",
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
    
            <Navbar />
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

export default MyTravels;
