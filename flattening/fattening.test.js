import {describe, expect, test} from '@jest/globals'
import {flattenArray} from "./flattenArray.js";


describe("'flatten' an arrays into a single array that has all the elements of the original arrays",
    () => {
        test('insert null return empty array', () => {
            expect(flattenArray(null)).toStrictEqual(null);
        })
        test('insert empty array return empty array', () => {
            expect(flattenArray([])).toStrictEqual([]);
        })
        test('insert [1] return [1]', () => {
            expect(flattenArray([1])).toStrictEqual([1]);
        })
        test('insert [1,2] return [1,2]', () => {
            expect(flattenArray([1, 2])).toStrictEqual([1, 2]);
        })
        test('insert [[1,2],[3,4]] return [1,2,3,4]', () => {
            expect(flattenArray([[1, 2], [3, 4]])).toStrictEqual([1, 2, 3, 4]);
        })
        test('insert [[1,2],[3,4],[5,6]] return [1,2,3,4,5,6]', () => {
            expect(flattenArray([[1, 2], [3, 4], [5, 6]])).toStrictEqual([1, 2, 3, 4, 5, 6]);
        })
        test('insert [[1,2],[3,4],[5,6],[7,8,9,10]] return [1,2,3,4,5,6,7,8,9,10]', () => {
            expect(flattenArray([[1, 2], [3, 4], [5, 6], [7, 8, 9, 10]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        })
        test('deeply nested arrays are flattened', () => {
            expect(
                flattenArray([1, [2, [3, [4]]]])
            ).toStrictEqual([1, 2, 3, 4]);
        });

        test('arrays with multiple empty nested arrays', () => {
            expect(
                flattenArray([[], [[], 1], 2, [], [[3]]])
            ).toStrictEqual([1, 2, 3]);
        });

        test('mixed string values are flattened', () => {
            expect(
                flattenArray(['a', ['b', ['c']]])
            ).toStrictEqual(['a', 'b', 'c']);
        });

        test('null and undefined values are preserved', () => {
            expect(
                flattenArray([1, null, [2, undefined, [3]]])
            ).toStrictEqual([1, null, 2, undefined, 3]);
        });

        test('sparse arrays (holes) are skipped', () => {
            const sparse = [1, , [2, , [3, , []]]];
            expect(
                flattenArray(sparse)
            ).toStrictEqual([1, 2, 3]);
        });

    })
