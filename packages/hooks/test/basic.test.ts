import { assert, expect, test } from 'vitest'
import { useClassNames } from '../useClassNames'

// Edit an assertion and save to see HMR in action

test('useClassNames hook', () => {
  expect(useClassNames('btn btn-error')).toBe('btn btn-error')
  expect(useClassNames(['btn', 'btn-error'])).toBe('btn btn-error')
  expect(useClassNames(['btn', 'normal'], {
    'btn-error': 1 + 2 === 3,
    'btn-warning': function() {
      return Array.isArray({})
    }
  })).toBe('btn normal btn-error')
})

test('useDefaultProps hook')
