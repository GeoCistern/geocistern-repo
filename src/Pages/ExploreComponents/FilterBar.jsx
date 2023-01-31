import React from "react";
import SearchBar from "./SearchBar";

const FilterBar = (props) => {
    return (
        <div className='grid'>
            <div>
                <SearchBar onChange={props.searchChange} />
            </div>
            <div>
                <select id='fruit' required>
                    <option value='' selected>
                        Select a fruit…
                    </option>
                    <option>…</option>
                </select>
            </div>
            <div>
                <select id='beet' required>
                    <option value='' selected>
                        Select a fruit…
                    </option>
                    <option>…</option>
                </select>
            </div>
            <div>
                <select id='carrot' required>
                    <option value='' selected>
                        Select a fruit…
                    </option>
                    <option>…</option>
                </select>
            </div>
            <div>
                <select id='potato' required>
                    <option value='' selected>
                        Select a fruit…
                    </option>
                    <option>…</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
