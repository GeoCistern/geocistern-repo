import React, { Component } from "react";
import "../ExploreStyles/DisplayTable.css";

class ColumnLabels extends Component {
    render() {
        const {
            sortAuthorNameOriginal,
            sortAuthorNameTranslit,
            sortTitleOriginal,
            sortTitleTranslit,
            sortLanguage,
            sortGenre,
            sortType,
            sortDate,
        } = this.props;
        return (
            <thead>
                <tr class='header-footer'>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='AUTHOR NAME (ORIGINAL LANGUAGE): activate to sort column ascending'
                        onClick={sortAuthorNameOriginal}
                    >
                        AUTHOR NAME (ORIGINAL LANGUAGE)
                    </th>
                    <th
                        class='sorting'
                        tabIndex='1'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='AUTHOR NAME TRANSLITERATION: activate to sort column ascending'
                        onClick={sortAuthorNameTranslit}
                    >
                        AUTHOR NAME TRANSLITERATION
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='TITLE OF WORK (ORIGINAL LANGUAGE): activate to sort column ascending'
                        // onClick={sortTitleOriginal}
                    >
                        TITLE OF WORK (ORIGINAL LANGUAGE)
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='TITLE OF WORK TRANSLITERATION: activate to sort column ascending'
                        // onClick={sortTitleTranslit}
                    >
                        TITLE OF WORK TRANSLITERATION
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='LANGUAGE: activate to sort column ascending'
                        // onClick={sortLanguage}
                    >
                        LANGUAGE
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='GENRE: activate to sort column ascending'
                        // onClick={sortGenre}
                    >
                        GENRE
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='TYPE: activate to sort column ascending'
                        // onClick={sortType}
                    >
                        TYPE
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='DATE: activate to sort column ascending'
                        // onClick={sortDate}
                    >
                        DATE
                    </th>
                </tr>
            </thead>
        );
    }
}

export default ColumnLabels;
