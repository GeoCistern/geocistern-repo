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
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Search...'
                value={searchQuery}
                onChange={handleChange}
            />
            <button type='submit'>Search</button>
        </form>
    );
};

export default SearchBar;
