import {describe, expect, test} from '@jest/globals'

// so sánh chữ trước khi đảo ngược và sau khi đảo ngược nếu, bằng nhau trả về true
function isPalindrome(inputString) {
    if (inputString==="" ||typeof inputString !== "string") {
        throw new Error("input wrong!!!");
    }
    if (inputString.toUpperCase().split("").reverse().join("") === inputString.toUpperCase()) {
        return true;
    }
    return false;
}

describe("test palindrome", () => {
    test("input ''", () => {
        expect(()=>isPalindrome("")).toThrow(new Error("input wrong!!!"));
    })
    test("input ABDBA", () => {
        expect(isPalindrome("ABDBA")).toBe(true);
    })
    test("input ABD", () => {
        expect(isPalindrome("ABD")).toBe(false);
    })
    test("input Racer", () => {
        expect(isPalindrome("Racer")).toBe(false);
    })
    test("input Madam", () => {
        expect(isPalindrome("Madam")).toBe(true);
    })
    test("input null", () => {
        expect(()=>isPalindrome(null)).toThrow(new Error("input wrong!!!"));
    })
    test("input undefined", () => {
        expect(()=>isPalindrome(undefined)).toThrow(new Error("input wrong!!!"));
    })
})

