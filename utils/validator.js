const isEmpty = (val) => {
    if (val != null || val.length > 2) {
        return val;
    }
    return null;
}

const checkTags = (val) => {
    if (isEmpty(val) != null) {
        if (val.indexOf(",") !== -1) {
            return val.split(",");
        }
        return val;
    }
    return null;
}

const checkDirection = (val) => {
    let result = val;
    switch(isEmpty(val)) {
        case "asc":
            break;
        case "desc":
            break;
        default:
            result = null
    }

    return result;
}

const checkSortBy = (val) => {
    let result = val;
    switch(isEmpty(val)) {
        case "id":
            break;
        case "reads":
            break;
        case "likes":
            break;
        case "popularity":
            break;
        default:
            result = null
    }

    return result;
}

module.exports = {
    checkQuery: (queryObj) => {
        const { tags, direction, sortBy } = queryObj;
        return {
            tags: checkTags(tags || ""),
            direction: checkDirection(direction || "asc"),
            sortBy: checkSortBy(sortBy || "id")
        }
    }
}