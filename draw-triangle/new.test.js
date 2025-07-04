import {describe, expect, test} from '@jest/globals'

function fizzBuzz(num) {
    let convertNumber = Number.parseInt(num); // refactor : viet lai code cho de doc de hieu
    if (num === null || num === "" || isNaN(num) || typeof num === "boolean" || Array.isArray(num)) {
        throw new Error("input wrong!!!"); // bao cho nguoi dung sua lai gia tri nhap
    }
    if (convertNumber % 3 === 0 && convertNumber % 5 === 0) {
        return "FIZZBUZZ";
    }
    if (convertNumber % 3 === 0) {
        return "FIZZ";
    }
    if (convertNumber % 5 === 0) {
        return "BUZZ";
    }
    return convertNumber; // string cua so -> so ; "2" -> 2 , va so 2 -> 2
}

describe("test fizz buzz function:", () => {
    test("input non number", () => {
        expect(() => fizzBuzz(null)).toThrow(new Error("input wrong!!!"));
    })
    test("input string", () => {
        expect(() => fizzBuzz("")).toThrow(new Error("input wrong!!!"));
    })
    test("input zero (string)", () => {
        expect(fizzBuzz("0")).toBe("FIZZBUZZ")
    })
    test("input string number 2", () => {
        expect(fizzBuzz("2")).toBe(2);
    })
    test("input string number 1", () => {
        expect(fizzBuzz("1")).toBe(1);
    })
    test("input string number 3", () => {
        expect(fizzBuzz("3")).toBe("FIZZ");
    })
    test("input string number 5", () => {
        expect(fizzBuzz("5")).toBe("BUZZ");
    })
    test("input number 1", () => {
        expect(fizzBuzz(1)).toBe(1);
    })
    test("input number 3", () => {
        expect(fizzBuzz(3)).toBe("FIZZ");
    })
    test("input number 9", () => {
        expect(fizzBuzz(9)).toBe("FIZZ");
    })
    test("input number 5", () => {
        expect(fizzBuzz(5)).toBe("BUZZ");
    })
    test("input number 15", () => {
        expect(fizzBuzz(15)).toBe("FIZZBUZZ");
    })
    test("input zero (number)", () => {
        expect(fizzBuzz(0)).toBe("FIZZBUZZ")
    })
    test("negative multiple of 3", () => {
        expect(fizzBuzz(-6)).toBe("FIZZ")
    })
    test("negative multiple of 5", () => {
        expect(fizzBuzz(-10)).toBe("BUZZ")
    })
    test("input NaN", () => {
        expect(() => fizzBuzz(NaN)).toThrow(new Error("input wrong!!!"));
    })
    test("input false", () => {
        expect(() => fizzBuzz(false)).toThrow(new Error("input wrong!!!"));
    })
    test("input true", () => {
        expect(() => fizzBuzz(true)).toThrow(new Error("input wrong!!!"));
    })
    test("input object {}", () => {
        expect(() => fizzBuzz({})).toThrow(new Error("input wrong!!!"));
    })
    test("input array []", () => {
        expect(() => fizzBuzz([])).toThrow(new Error("input wrong!!!"));
    })
})
