const binarySearch = require('../../src/search/binary_search')

describe('test binarySearch', () => {

  test('[1]  1 ret=0', () => {
    expect(binarySearch([1], 1)).toBe(0)
  })

  test('[1]  3  ret=-1', () => {
    expect(binarySearch([1], 3)).toBe(-1)
  })

  test('[1, 2]  1  ret=0', () => {
    expect(binarySearch([1, 2], 1)).toBe(0)
  })

  test('[1, 2]  2  ret=1', () => {
    expect(binarySearch([1, 2], 2)).toBe(1)
  })

  test('[1, 2, 3]  3  ret=2', () => {
    expect(binarySearch([1, 2, 3], 3)).toBe(2)
  })

  test('[1, 2, 3]  6  ret=-1', () => {
    expect(binarySearch([1, 2, 3], 3)).toBe(2)
  })

  test('[1, 3, 5, 6, 8, 23, 54, 100]  8  ret=4', () => {
    expect(binarySearch([1, 3, 5, 6, 8, 23, 54, 100], 8)).toBe(4)
  })
})