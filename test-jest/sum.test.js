import {describe, expect, test} from '@jest/globals'
import {sum} from './sum';

describe('sum test', () => {
    test('add 1 + 1 = 2',
        () =>
            expect(sum(1, 2))
                .toBe(3))
})