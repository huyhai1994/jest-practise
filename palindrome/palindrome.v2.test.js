import {describe, expect, test} from '@jest/globals'

describe("test palindrome", () => {
    test("input ''", () => {
        expect(isPalindrome("")).toBe(true);
    })
    test("input null", () => {
        expect(() => isPalindrome(null)).toThrow(new Error("input wrong!!!"));
    })
    test("input undefined", () => {
        expect(() => isPalindrome(undefined)).toThrow(new Error("input wrong!!!"));
    })
    test("input A", () => {
        expect(isPalindrome("A")).toBe(true);
    })
    test("input AB", () => {
        expect(isPalindrome("AB")).toBe(false);
    })
    test("input AA", () => {
        expect(isPalindrome("AA")).toBe(true);
    })
    test("input ABA", () => {
        expect(isPalindrome("ABA")).toBe(true);
    })
    test("input AAA", () => {
        expect(isPalindrome("AAA")).toBe(true);
    })
    test("input AAa", () => {
        expect(isPalindrome("AAa")).toBe(true);
    })
    test("input ABBA", () => {
        expect(isPalindrome("ABBA")).toBe(true);
    })
    test("input ABCA", () => {
        expect(isPalindrome("ABCA")).toBe(false);
    })
    test("input ABCBA", () => {
        expect(isPalindrome("ABCBA")).toBe(true);
    })
    test("input ABCCA", () => {
        expect(isPalindrome("ABCCA")).toBe(false);
    })
    test("input ABCCBA", () => {
        expect(isPalindrome("ABCCBA")).toBe(true);
    })
    test("input ABCDBA", () => {
        expect(isPalindrome("ABCDBA")).toBe(false);
    })
})

function isPalindrome(inputString) {
    if (typeof inputString !== "string") {
        throw new Error("input wrong!!!");
    }
    if (inputString.length === 0 || inputString.length === 1) {
        return true;
    }
    inputString = inputString.toLowerCase();
    return inputString[0] === inputString[inputString.length - 1]
        && isPalindrome(inputString.slice(1, -1));
}


