import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchDatabase(searchQuery);
    };

    return (
        // <form onSubmit={handleSubmit}>
        <input
            type='search'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleChange}
        />
        // </form>
    );
};

export default SearchBar;
