import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import {
    typeFilterKeys,
    languageFilterKeys,
    scriptFilterKeys,
    genreFilterKeys,
} from "./FilterUtils";
import DoubleSlider from "./DoubleSlider";

const FilterBar = (props) => {
    const [typeFilter, setTypeFilter] = useState(null);
    const handleTypeFilterChange = (e) => {
        setTypeFilter(e.target.value);
    };

    const [languageFilter, setLanguageFilter] = useState(null);
    const handleLanguageFilterChange = (e) => {
        setLanguageFilter(e.target.value);
    };

    const [scriptFilter, setScriptFilter] = useState(null);
    const handleScriptFilterChange = (e) => {
        setScriptFilter(e.target.value);
    };

    const [genreFilter, setGenreFilter] = useState(null);
    const handleGenreFilterChange = (e) => {
        setGenreFilter(e.target.value);
    };

    // Handles the lag in asynchronous function setState()
    useEffect(() => {
        props.filterByType(typeFilter);
        props.filterByLanguage(languageFilter);
        props.filterByScript(scriptFilter);
        props.filterByGenre(genreFilter);
    });
    return (
        <div className='grid'>
            <div>
                <SearchBar onChange={props.searchChange} />
            </div>
            <div className='headings'>
                <small>Type:</small>
                <select id='type' required onChange={handleTypeFilterChange}>
                    <option value={null} selected>
                        All
                    </option>
                    {typeFilterKeys.map((key) => {
                        return <option value={key}>{key}</option>;
                    })}
                </select>
            </div>
            <div className='headings'>
                <small>Language:</small>
                <select
                    id='language'
                    required
                    onChange={handleLanguageFilterChange}
                >
                    <option value={null} selected>
                        All
                    </option>
                    {languageFilterKeys.map((key) => {
                        return <option value={key}>{key}</option>;
                    })}
                </select>
            </div>
            <div className='headings'>
                <small>Script:</small>
                <select
                    id='script'
                    required
                    onChange={handleScriptFilterChange}
                >
                    <option value={null} selected>
                        All
                    </option>
                    {scriptFilterKeys.map((key) => {
                        return <option value={key}>{key}</option>;
                    })}
                </select>
            </div>
            <div className='headings'>
                <small>Genre:</small>
                <select id='genre' required onChange={handleGenreFilterChange}>
                    <option value={null} selected>
                        All
                    </option>
                    {genreFilterKeys.map((key) => {
                        return <option value={key}>{key}</option>;
                    })}
                </select>
            </div>
            <div className='headings'>
                <small>Date:</small>
                <DoubleSlider
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={[0, 100]}
                    onChange={(bounds) => console.log(bounds)}
                />
            </div>
            <div className='headings'>
                <small>Dimensions:</small>
                <DoubleSlider
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={[0, 100]}
                />
            </div>
        </div>
    );
};

export default FilterBar;
