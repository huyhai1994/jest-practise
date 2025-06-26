import {describe, expect, test} from '@jest/globals'

function drawTriangle(row) {
    /*base: điểm dừng của bài toán...*/
    if (row === 0 || row === null) {
        return "";
    }
    return drawTriangle(row - 1) + "*".repeat(row) + "\n";
}

describe("draw triangle", () => {
    test("(1) print no thing!!!", () => {
        expect(drawTriangle(0)).toBe("");
    })
    test("(2) print *\n", () => {
        expect(drawTriangle(1)).toBe("*\n");
    })
    test("(3) print *\n**\n", () => {
        expect(drawTriangle(2)).toBe("*\n**\n");
    })
    test("(4) print *\n**\n***\n", () => {
        expect(drawTriangle(3)).toBe("*\n**\n***\n");
    })
    test("(5) print *\n**\n***\n****", () => {
        expect(drawTriangle(4)).toBe("*\n**\n***\n****\n");
    })
    test("(6) pass null", () => {
        expect(drawTriangle(null)).toBe("");
    })
})