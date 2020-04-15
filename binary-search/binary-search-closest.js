
/* Returns index of target in array if found
Otherwise index of number closest but smaller than target.

p.s. When no target found, left index becomes greater than right index by 1;
therefore, left index points to the number closest to but larger than target,
and right index points to the number closest to but smaller than target.

Hence returning left - 1 when left > 0.
If target is less than the smallest value in array,
it returns the first element in array
*/
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

  return left > 0 ? left - 1 : left
}