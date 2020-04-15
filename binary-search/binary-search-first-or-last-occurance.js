const binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (target < arr[mid]) {
      right = mid - 1
    } else if (target > arr[mid]) {
      left = mid + 1
    } else {
      // Find first occurance:
      if (arr[mid - 1] === target) {
        right = mid - 1
      } else {
        return mid
      }

      /*
        Find last occurance:
        if (arr[mid + 1] === target) {
          left = mid + 1
        } else {
          return mid
        }
      */
    }
  }

  return -1
  /* 
    If no target found:
    1. Get number closest but larger than target:
      return left;
    2. Get number closest but smaller than target:
      return right;
  */
}