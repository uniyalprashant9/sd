/* global test, describe, it, expect */
'use strict'
import types from '~/Types/types.json'

describe('types data files returns array', () => {
    test('these tests prevent any issues and problems, also to break the structure of types', () => {
        expect(types).not.toBe('')
    })
})