# Algorithms

## Cheat sheet

### Binary Search
- if we `floor` the `mid`, i.e. `math.floor((left + right) / 2)`, `left` has to increase by 1, i.e `left = mid + 1`, to prevent infinite loop.
- if we `ceil` the `mid`, i.e. `math.ceil((left + right) / 2)`, `right` has to decrease by 1, i.e `right = mid - 1`, to prevent infinite loop.
- When in doubt, test how loop behaves when length of subarry (`right - left`) is `1` or `0`
- when loop ends, i.e. `left` > `right`, and target not found i.e. never entered `target == arr[mid]` block, `left` is the next larger num of target, and `right` is the next smaller num of target.


### Constructing binary tree with array (ex. heap or segment tree)
- (Recommended for heap) Tree can start with index 0:
```
        [0]
        / \
      [1] [2]
     /  \  /  \
   [3] [4][5] [6]

Input array: [0, 1, 2, 3, 4, 5, 6]
Internal array: [0, 1, 2, 3, 4, 5, 6]
Input array can be used as internal array

Parent index = (i - 1) // 2
left child index = i * 2 + 1
right child index = i * 2 + 2
```

- (Recommended for segment tree) Tree can start with index 1:
```
        [1]
        / \
      [2] [3]
     /  \  /  \
   [4] [5][6] [7]

Input array: [0, 1, 2, 3, 4, 5, 6]
Internal array: [?, 0, 1, 2, 3, 4, 5, 6]
Must add dummy number in front of input array to be internal array.

Parent index = i // 2
left child index = i * 2
right child index = i * 2
```
