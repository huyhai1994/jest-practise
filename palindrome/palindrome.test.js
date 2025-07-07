import {describe, expect, test} from '@jest/globals'



// so sánh chữ trước khi đảo ngược và sau khi đảo ngược nếu, bằng nhau trả về true
function isPalindrome(inputString) {
    return true;
}


describe("test palindrome", () => {
    test("input ''", () => {
        expect(isPalindrome('')).toBe('');
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
})

