import {describe, expect, test} from '@jest/globals'

/*TDD: test driven development*/

/*bug: lỗi sai phát sinh trong việc viết code ,
nó vẫn chạy nhưng không đúng nghiệp vụ */
describe("test some function", () => {
    test("(1) test sum 1 + 0 = 1", () => expect(sum(1, 0))
        .toBe(1));
    test("(2) test sum 0 + 0 = 0", () => expect(sum(0, 0))
        .toBe(0));
    test("(3) test sum 1 + 10 = 11", () => expect(sum(1, 10))
        .toBe(11));
    test("(4) test sum 'abc' + 10 = 10", () => expect(sum('abc', 10)).toBe(10));
    test("(5) test sum 10 + 'abc' = 10", () => expect(sum(10, 'abc')).toBe(10));
    test("(6) test sum null + null = 0", () => expect(sum(null, null)).toBe(0));
})

function sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return isNaN(a) === true ? b : a;
    }
    return a + b;
}

