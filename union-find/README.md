# Union Find

Source: https://www.tutorialspoint.com/Kruskal-s-algorithm-in-Javascript


### Shortened version:
```js
// ./union-find.js

// Time - find: O(n), union: O(n)
class UnionFind {
  constructor(elements) {
    // Keep Track of connected components
    this.parent = {};

    // Initialize the data structure such that all
    // elements have themselves as parents
    elements.forEach(e => (this.parent[e] = e));
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);

    this.parent[rootA] = rootB
  }

  // Returns final parent of a node
  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }

  // Checks connectivity of the 2 nodes
  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}
```

### Optimized version:
```js
// ./union-find-by-rank.js

// Time - find: O(log n), union: O(log n)
class UnionFind {
  constructor(elements) {
    // Keep Track of connected components
    this.parent = {};
    this.rank = {}; // equivalent to "size"

    // Initialize the data structure such that all
    // elements have themselves as parents
    elements.forEach(e => (this.parent[e] = e));

    // Start each element with rank 1
    elements.forEach(e => (this.rank[e] = 1));
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);

    if (this.rank[rootA] > this.rank[rootB]) {
      this.parent[rootB] = rootA
      this.rank[rootA] += this.rank[rootB]
    } else {
      this.parent[rootA] = rootB
      this.rank[rootB] += this.rank[rootA]
    }
  }

  // Returns final parent of a node
  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }

  // Checks connectivity of the 2 nodes
  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}
```