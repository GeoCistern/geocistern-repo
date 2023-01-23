import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import FilterBar from "./ExploreComponents/FilterBar";
import Pagination from "./ExploreComponents//Pagination";
import Popup from "./ExploreComponents//Popup";
import ColumnLabels from "./ExploreComponents//ColumnLabels";
import SearchBar from "./ExploreComponents/SearchBar";
export default function Explore() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        axios.get("/api").then((res) => setDatabase(res.data));
    }, []);
    const defaultValue = "N/A";
    const queries = [
        { key: "a", cat: 1 },
        { key: "b", cat: 2 },
        { key: "c", cat: 3 },
        { key: "d", cat: 4 },
    ];
    let pageSize = 15;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return database.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const [popupContents, setPopupContents] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = (index) => {
        console.log(index);
        if (!isPopupOpen) {
            setPopupContents(currentTableData[index]);
        }
        setIsPopupOpen(!isPopupOpen);
    };

    // const [sorting, setSorting] = useState({
    //     key: "byTitleTranslit",
    //     ascending: true,
    // });
    // const sortColumn = (columnKey, ascending) => {
    //     setSorting({ key: columnKey, ascendin: ascending });
    //     // maybe need to refresh table to see update contents
    // };
    // useEffect(() => {
    //     //Copy the db to prevent mutation
    //     const copyDatabase = [...database];

    //     const sortDatabase = copyDatabase.sort((a, b) => {
    //         return a[sorting.key].localeCompare(b[sorting.key]);
    //     });
    //     setDatabase(sorting.ascending ? sortDatabase : sortDatabase.reverse());
    // }, [database, sorting]);

    const searchDatabase = (searchQuery) => {
        setDatabase(
            database.filter((row) => {
                return row.titleTranslit.match(searchQuery);
            })
        );
        console.log(
            database.filter((row) => {
                return row.titleTranslit.match(searchQuery);
            })
        );
    };

    return (
        <>
            <aside>
                <FilterBar filter1Elements={queries} />
            </aside>
            <div role='document'>
                <table role='grid'>
                    <ColumnLabels />
                    <tbody>
                        {currentTableData.map((r, index) => {
                            return (
                                <>
                                    <tr
                                        className='row-item'
                                        key={index}
                                        onClick={() => togglePopup(index)}
                                    >
                                        <td>
                                            {r.authorNameOriginal
                                                ? r.authorNameOriginal
                                                : defaultValue}
                                        </td>
                                        <td>
                                            {r.authorNameTranslit
                                                ? r.authorNameTranslit
                                                : defaultValue}
                                        </td>
                                        <td>
                                            {r.titleOriginal
                                                ? r.titleOriginal
                                                : defaultValue}
                                        </td>
                                        <td>
                                            {r.titleTranslit
                                                ? r.titleTranslit
                                                : defaultValue}
                                        </td>
                                        <td>
                                            {r.language
                                                ? r.language
                                                : defaultValue}
                                        </td>
                                        <td>
                                            {r.genre ? r.genre : defaultValue}
                                        </td>
                                        <td>
                                            {r.textType
                                                ? r.textType
                                                : defaultValue}
                                        </td>
                                        <td>
                                            {r.date ? r.date : defaultValue}
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
                {isPopupOpen && (
                    <Popup
                        content={
                            <p>
                                Original location:{" "}
                                {popupContents.originalLocation} <br />
                                Publisher: {popupContents.publisher} <br />
                                Script: {popupContents.script} <br />
                                Page count: {popupContents.pageCount} <br />
                                Dimensions: {popupContents.dimensions} <br />
                                Additional information:{" "}
                                {popupContents.additionalInfo}
                            </p>
                        }
                        handleClose={togglePopup}
                    />
                )}
                <Pagination
                    className='pagination-bar'
                    currentPage={currentPage}
                    totalCount={database.length}
                    pageSize={pageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </>
    );
}
