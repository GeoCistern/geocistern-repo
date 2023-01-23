import React, { Component } from "react";
import SearchBar from "./SearchBar";

class FilterBar extends Component {
    render() {
        return (
            <div className='grid'>
                <div>
                    <SearchBar />
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
    }
}

export default FilterBar;
