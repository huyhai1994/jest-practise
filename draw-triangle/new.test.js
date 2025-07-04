import {describe, expect, test} from '@jest/globals'

function someFunction(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    if (num % 3 === 0) {
        return "Fizz";
    }
    return "Buzz";
}

describe("SomeFunction", () => {
    test("print Fizz", () => {
        expect(someFunction(15)).toBe("FizzBuzz");
    })

    test("print Fizz", () => {
        expect(someFunction(5)).toBe("Buzz");
    })
})
