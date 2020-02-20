const bubbleSort = require('../../src/sort/bubble_sort')

describe('test bubbleSort', () => {

  test('[1]', () => {
    expect(bubbleSort([1])).toEqual([1])
  })

  test('[2, 1]', () => {
    expect(bubbleSort([2, 1])).toEqual([1, 2])
  })

  test('[4, 1, 3]', () => {
    expect(bubbleSort([4, 1, 3])).toEqual([1, 3, 4])
  })

  test('[]', () => {
    expect(bubbleSort([])).toEqual([])
  })

  test('[1, 2, 4, 2, 1]', () => {
    expect(bubbleSort([1, 2, 4, 2, 1], 3)).toEqual([1, 1, 2, 2, 4])
  })

})