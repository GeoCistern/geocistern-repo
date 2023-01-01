import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";

class FilterBar extends Component {
    render() {
        const { filter1Elements } = this.props;
        return (
            <>
                <Multiselect
                    options={filter1Elements}
                    displayValue='key'
                    selectionLimit='1'
                />
                <Multiselect
                    options={filter1Elements}
                    displayValue='key'
                    selectionLimit='1'
                />
                <Multiselect
                    options={filter1Elements}
                    displayValue='key'
                    groupBy='cat'
                    showCheckbox={true}
                />
                <Multiselect
                    options={filter1Elements}
                    displayValue='key'
                    selectionLimit='1'
                />
            </>
        );
    }
}

export default FilterBar;
