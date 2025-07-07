import {describe, expect, test} from '@jest/globals'

function reString(row) {
    /*base: điểm dừng của bài toán...*/
    if (row === 0 || row === null || row === "" || isNaN(row) || typeof row === "boolean" ) {
        throw new Error("input wrong!!!");
    }
    return row.split("").reverse().join("");
}


describe("test reverseString", () => {
    test("input isNaN", () => {
        expect(() => reString(isNaN)).toThrow(new Error("input wrong!!!"));
    })
    test("input boolean", () => {
        expect(() => reString("boolean")).toThrow(new Error("input wrong!!!"));
    })
    test("input string", () => {
        expect(reString("LETHAO")).toBe("OAHTEL");
    })
})

