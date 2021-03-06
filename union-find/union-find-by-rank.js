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

  add(e) {
    if (e in this.parent) return;

    this.parent[e] = e
    this.rank[e] = 1
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);

    if (rootA === rootB) return;

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