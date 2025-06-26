import {describe, expect, test} from '@jest/globals'

/**
 * @describe(name, fn)
 * creates a block that groups together several related
 * tests. For example, if you have a myBeverage object tha
 * is supposed to be delicious but not sour
 * */

const myBeverage = {
    delicious: true,
    sour: false,
    sum: function (a, b) {
        return a + b;
    },
    returnNull: function () {
        return null;
    }
};

describe('my beverage', () => {
    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
    });

    test('1 + 2 = 3', () => {
        expect(myBeverage.sum(1, 2)).toBe(3);
    })
    test('return null', () => {
        expect(myBeverage.returnNull()).toBeNull();
    })
});

