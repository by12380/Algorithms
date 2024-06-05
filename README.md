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

### DFS base case position
- Base cases and either be placed at:
    1. Start of function:
    ```
    From boggle board problem

        def dfs(i, j, curr):
            # Start of function
            if '*' in curr:
                results.add(curr['*'])
            if i < 0 or i >= gv['m'] or j < 0 or j >= gv['n']:
                return
            if (i, j) in visited:
                return


            char = board[i][j]

            if char not in curr:
                return

            visited.add((i, j))

            dfs(i - 1, j - 1, curr[char])
            dfs(i - 1, j, curr[char])
            dfs(i - 1, j + 1, curr[char])
            dfs(i, j - 1, curr[char])
            dfs(i, j + 1, curr[char])
            dfs(i + 1, j - 1, curr[char])
            dfs(i + 1, j, curr[char])
            dfs(i + 1, j + 1, curr[char])

            visited.remove((i, j))
    ```

    2. Right before recursive call:
    ```
    From boggle board problem

        def dfs(i, j, curr):

            char = board[i][j]

            if char not in curr:
                return

            visited.add((i, j))

            # Right before recursive call
            # Had to use for loop for convienice

            curr = curr[char]

            if '*' in curr:
                results.add(curr['*'])

            neighbors = [
                [i - 1, j - 1],
                [i - 1, j],
                [i - 1, j + 1],
                [i, j - 1],
                [i, j + 1],
                [i + 1, j - 1],
                [i + 1, j],
                [i + 1, j + 1],
            ]

            for x, y in neighbors:
                if x < 0 or x >= gv['m'] or y < 0 or y >= gv['n']:
                    continue
                if (x, y) in visited:
                    continue
                dfs(x, y, curr)

            visited.remove((i, j))
    ```

    ** Since calling right before the recursive call is equivalent to calling the same code right after stepping in to the function.

# Personal Brush Ups

- Binary tree traversal with backtracking:
    https://leetcode.com/problems/find-distance-in-a-binary-tree

- DFS and Trie:
    https://leetcode.com/problems/word-search-ii/ (Blind 75) or [Boggle Board](https://www.algoexpert.io/questions/boggle-board) from AlgoExpert

- BFS:
    https://leetcode.com/problems/rotting-oranges (with multi-source)
    https://leetcode.com/problems/the-maze (skip steps)

- DP and Recursion w/ memo:
    https://leetcode.com/problems/longest-common-subsequence/ (Blind 75)
    https://www.algoexpert.io/questions/knapsack-problem

- Topological sort:
    https://leetcode.com/problems/alien-dictionary/ (Blind 75)

- Partitioning:
    https://www.algoexpert.io/questions/quickselect
