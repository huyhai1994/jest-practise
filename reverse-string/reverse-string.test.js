import {describe, expect, test} from '@jest/globals'

function reverseString(inputString) {
    if (typeof inputString !== "string") {
        throw new Error("input wrong!!!");
    }
    return inputString
        .split("")   // -> ["a","b","c"]
        .reverse()           // -> ["c","b","a"]
        .join("");          // -> "cba"
}

describe("test reverseString", () => {
    test("input not string type", () => {
        expect(() => reverseString(2)).toThrow(new Error("input wrong!!!"));
    })
    test("input boolean", () => {
        expect(reverseString("boolean")).toBe("naeloob");
    })
    test("input string", () => {
        expect(reverseString("LETHAO")).toBe("OAHTEL");
    })
    test("input null", () => {
        expect(() => reverseString(null)).toThrow(new Error("input wrong!!!"));
    })
    test("input undefined", () => {
        expect(() => reverseString(undefined)).toThrow(new Error("input wrong!!!"));
    })
})

