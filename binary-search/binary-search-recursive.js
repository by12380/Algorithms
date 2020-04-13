// Returns index of the target in array
const binarySearch = (left, right, arr, target) => {
  if (left > right) {
    return -1
  }

  const mid = Math.floor((left + right) / 2)
  const val = arr[mid]

  if (val === target) {
    return mid
  } else if (target < val) {
    return binarySearch(left, mid - 1, arr, target)
  } else {
    return binarySearch(mid + 1, right, arr, target)
  }
}