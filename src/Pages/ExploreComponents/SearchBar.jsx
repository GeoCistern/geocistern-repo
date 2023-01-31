import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        props.onChange(searchQuery);
    };
    props.onChange(searchQuery);

    return (
        <input
            type='search'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchChange}
        />
    );
};

export default SearchBar;
