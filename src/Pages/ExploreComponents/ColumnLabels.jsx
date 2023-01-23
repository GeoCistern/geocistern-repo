import React, { Component } from "react";
// import "../ExploreStyles/DisplayTable.css";

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
                        Author Name (Original Language)
                    </th>
                    <th
                        class='sorting'
                        tabIndex='1'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='AUTHOR NAME TRANSLITERATION: activate to sort column ascending'
                        onClick={sortAuthorNameTranslit}
                    >
                        Author Name (Transliteration)
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='TITLE OF WORK (ORIGINAL LANGUAGE): activate to sort column ascending'
                        // onClick={sortTitleOriginal}
                    >
                        Title of Work (Original Language)
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='TITLE OF WORK TRANSLITERATION: activate to sort column ascending'
                        // onClick={sortTitleTranslit}
                    >
                        Title of Work (Transliteration)
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='LANGUAGE: activate to sort column ascending'
                        // onClick={sortLanguage}
                    >
                        Language
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='GENRE: activate to sort column ascending'
                        // onClick={sortGenre}
                    >
                        Genre
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='TYPE: activate to sort column ascending'
                        // onClick={sortType}
                    >
                        Type
                    </th>
                    <th
                        class='sorting'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='DATE: activate to sort column ascending'
                        // onClick={sortDate}
                    >
                        Date
                    </th>
                </tr>
            </thead>
        );
    }
}

export default ColumnLabels;
