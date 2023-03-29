export const byAuthorNameOriginal = (a, b) => {
    if (a.authorNameOriginal > b.authorNameOriginal) {
        return -1;
    }
    if (a.authorNameOriginal < b.authorNameOriginal) {
        return 1;
    }
    return 0;
};
export const byAuthorNameTranslit = (a, b) => {
    if (a.authorNameTranslit > b.authorNameTranslit) {
        return -1;
    }
    if (a.authorNameTranslit < b.authorNameTranslit) {
        return 1;
    }
    return 0;
};
export const byTitleOriginal = (a, b) => {
    if (a.titleOriginal > b.titleOriginal) {
        return -1;
    }
    if (a.titleOriginal < b.titleOriginal) {
        return 1;
    }
    return 0;
};
export const byTitleTranslit = (a, b) => {
    if (a.titleTranslit > b.titleTranslit) {
        return -1;
    }
    if (a.titleTranslit < b.titleTranslit) {
        return 1;
    }
    return 0;
};
export const byLanguage = (a, b) => {
    if (a.language > b.language) {
        return -1;
    }
    if (a.language < b.language) {
        return 1;
    }
    return 0;
};
export const byGenre = (a, b) => {
    if (a.genre > b.genre) {
        return -1;
    }
    if (a.genre < b.genre) {
        return 1;
    }
    return 0;
};
export const byType = (a, b) => {
    if (a.textType > b.textType) {
        return -1;
    }
    if (a.textType < b.textType) {
        return 1;
    }
    return 0;
};
export const byDate = (a, b) => {
    if (a.date > b.date) {
        return -1;
    }
    if (a.date < b.date) {
        return 1;
    }
    return 0;
};
