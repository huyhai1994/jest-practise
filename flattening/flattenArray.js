export function flattenArray(array) {
    if (!Array.isArray(array)) return null;
    return reduce(array, combine);
}

function reduce(array, combine, start = []) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}


function combine(accumulator, element) {
    if (Array.isArray(element)) {
        return reduce(element, combine, accumulator);
    }
    if (element === undefined) {
        return accumulator;
    }
    return accumulator.concat(element);
}