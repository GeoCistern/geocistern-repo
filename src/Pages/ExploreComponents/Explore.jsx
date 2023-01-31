import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";
import Popup from "./Popup";
import ColumnLabels from "./ColumnLabels";
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
        if (!isPopupOpen) {
            setPopupContents(currentTableData[index]);
        }
        setIsPopupOpen(!isPopupOpen);
    };

    // Search functionality
    const [searchQuery, setSearchQuery] = useState("");
    // Table columns being searched by
    const searchKeys = [
        "authorNameOriginal",
        "authorNameTranslit",
        "titleOriginal",
        "titleTranslit",
        "language",
        "genre",
        "textType",
        "date",
    ];
    // Search function -- Todo: Make the fuzzyQuery fuzzier
    const searchDatabase = (data) => {
        const fuzzyQuery = searchQuery.toLowerCase();
        return data.filter((row) =>
            searchKeys.some((key) =>
                row[key].toLowerCase().includes(fuzzyQuery)
            )
        );
    };

    return (
        <>
            <aside>
                <FilterBar
                    filter1Elements={queries}
                    searchChange={(searchQuery) => setSearchQuery(searchQuery)}
                />
            </aside>
            <div role='document'>
                <table role='grid'>
                    <ColumnLabels />
                    <tbody>
                        {searchDatabase(database).map((r, index) => {
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
                            <>
                                <b>Additional Details</b>
                                <p>
                                    Original location:{" "}
                                    {popupContents.originalLocation} <br />
                                    Publisher: {popupContents.publisher} <br />
                                    Script: {popupContents.script} <br />
                                    Page count: {popupContents.pageCount} <br />
                                    Dimensions: {popupContents.dimensions}{" "}
                                    <br />
                                    Additional information:{" "}
                                    {popupContents.additionalInfo}
                                </p>
                            </>
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
