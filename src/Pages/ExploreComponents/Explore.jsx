import axios from "axios";
import { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import Table from "./Table";
import { dataTable } from "./TestDataSet";

export default function Explore() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        axios.get("/api").then((res) => setDatabase(res.data));
    }, []);

    const queries = [
        { key: "a", cat: 1 },
        { key: "b", cat: 2 },
        { key: "c", cat: 3 },
        { key: "d", cat: 4 },
    ];

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
        <div className='grid'>
            <aside>
                <FilterBar
                    filter1Elements={queries}
                    searchChange={(searchQuery) => setSearchQuery(searchQuery)}
                />
            </aside>
            <Table database={searchDatabase(dataTable)}></Table>
        </div>
    );
}
