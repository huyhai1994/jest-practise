export function flattenArray(array) {
    let newArray = array;
    if (!Array.isArray(newArray)) return null;
    if (Array.isArray(newArray[0])) {
        return reduce(newArray, combine);
    }
    return newArray;
}

function reduce(array, combine, start = []) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

function combine(...params) {
    return params[0].concat(params[1])
}