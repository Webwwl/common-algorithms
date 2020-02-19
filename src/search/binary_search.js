/**
 * 二分查找 默认从小到大排序
 *
 * @param {*} arr 待查数组
 * @param {*} val 待查值
 */
function binarySearch(arr, val) {
  if (!Array.isArray(arr)) throw new Error('parmas not an array')
  const len = arr.length
  if (len === 0) return -1
  let ret
  let startIndex = 0
  let endIndex = len - 1
  function search() {
    const startVal = arr[startIndex]
    const endVal = arr[endIndex]
    if ( startVal === val) {
      ret = startIndex
      return
    }
    if ( endVal === val) {
      ret = endIndex
      return
    }
    const centerIndex = Math.floor( (endIndex + startIndex) / 2)
    if (startIndex === centerIndex) return   // 只有startIndex、endIndex相邻才会出现这种情况，上面已经分别做过比较，可判断val不在arr中
    const centerVal = arr[centerIndex]
    if (centerVal === val) {
      ret = centerIndex
    } else if (val > centerVal) {
      startIndex = centerIndex
      search()
    } else {
      endIndex = centerIndex
      search()
    }
  }
  search()
  return ret === 0 ? 0 : (ret || -1)
}

module.exports = binarySearch