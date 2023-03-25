import axios from "axios";
import { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import Table from "./Table";
// import { dataTable } from "./TestDataSet";
import { searchKeys } from "./FilterUtils";
import { dataTable } from "./TestDataSet";

export default function Explore() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        axios.get("/api").then((res) => setDatabase(res.data));
    }, []);

    // Search functionality
    const [searchQuery, setSearchQuery] = useState("");

    // Search function -- Todo: Make the fuzzyQuery fuzzier
    const searchDatabase = (data) => {
        const fuzzyQuery = searchQuery.toLowerCase();
        return data.filter((row) =>
            searchKeys.some((key) =>
                row[key].toLowerCase().includes(fuzzyQuery)
            )
        );
    };

    const filterData = (data) => {
        return searchDatabase(data).filter((row) => {
            if (
                typeFilter &&
                typeFilter !== "All" &&
                !row["textType"]
                    .toLowerCase()
                    .includes(typeFilter.toLowerCase())
            ) {
                return false;
            }
            if (
                languageFilter &&
                languageFilter !== "All" &&
                !row["language"]
                    .toLowerCase()
                    .includes(languageFilter.toLowerCase())
            ) {
                return false;
            }
            if (
                genreFilter &&
                genreFilter !== "All" &&
                !row["genre"].toLowerCase().includes(genreFilter.toLowerCase())
            ) {
                return false;
            }
            if (
                scriptFilter
                // scriptFilter !== "All" &&
                // !row["genre"].toLowerCase().includes(scriptFilter.toLowerCase())
            ) {
                console.log(row);
            }
            return true;
        });
    };

    const [typeFilter, setTypeFilter] = useState(null);
    const [languageFilter, setLanguageFilterKeys] = useState(null);
    const [scriptFilter, setScriptFilterKeys] = useState(null);
    const [genreFilter, setGenreFilter] = useState(null);

    return (
        <div>
            <FilterBar
                searchChange={(searchQuery) => setSearchQuery(searchQuery)}
                filterByType={(typeFilter) => setTypeFilter(typeFilter)}
                filterByLanguage={(languageFilter) =>
                    setLanguageFilterKeys(languageFilter)
                }
                filterByScript={(scriptFilter) =>
                    setScriptFilterKeys(scriptFilter)
                }
                filterByGenre={(genreFilter) => setGenreFilter(genreFilter)}
            />
            <Table database={filterData(dataTable)}></Table>
        </div>
    );
}
