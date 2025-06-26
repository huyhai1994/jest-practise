import {describe, expect, test} from '@jest/globals'

function drawTriangle(row) {
    let result = "";
    if (row === 0) {
        return result;
    }
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }
    return result;
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