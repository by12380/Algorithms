# Binary Search

List of regular and modified binary searches:
* [Binary search (recursive)](#binary-search-recursive)
* [Binary search (iterative)](#binary-search-iterative)
* [Binary search (find closest to target)](#binary-search-find-closest)
* [Binary search (find first or last occurance)](#binary-search-find-first-or-last-occurance)
* Binary search (find first occurance [alternative])
* Binary search (find last occurance [alternative])

---

## Binary search (recursive)
```js
// ./binary-search-recursive.js

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
```

---

## Binary search (iterative)
```js
// ./binary-search-iterative.js

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
```

---

## Binary search (find closest)
```js
// ./binary-search-closest.js


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
```

---

## Binary search (find first or last occurance)
```js
// ./binary-search-first-or-last-occurance.js

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
```