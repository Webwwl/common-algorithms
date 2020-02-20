/**
 * 冒泡排序 默认从小到大排
 *
 * @param {*} arr 待排序数组
 */
function bubbleSort(arr) {
  if (!Array.isArray(arr)) throw new Error('arr is not an Array')
  if (arr.length === 0) return arr
  let tmp
  for(let i = 0, l = arr.length; i < l; i++) {
    for(let j = 0; j < l - i - 1; j++) {
      const currentVal = arr[j]
      const nextVal = arr[j + 1]
      if (currentVal > nextVal) {
        tmp = currentVal
        arr[j] = nextVal
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

module.exports = bubbleSort