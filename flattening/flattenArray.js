export function flattenArray(array) {
    let newArray = array;
    if (!Array.isArray(newArray)) return null;
    if (Array.isArray(newArray[0])) {
        if (array.length === 1) {
            return newArray = [...array[0]];
        }
        if (array.length === 2) {
            return newArray = [...array[0], ...array[1]];
        } else if (array.length === 3) {
            return newArray = [...array[0], ...array[1], ...array[2]];
        }
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


}