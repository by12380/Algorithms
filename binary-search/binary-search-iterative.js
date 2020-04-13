// Returns index of the target in array
const binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const val = arr[mid]

    if (val === target) {
      return mid
    } else if (target < val) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}