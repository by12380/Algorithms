# Minimum Vertex Cover
NP-Complete

Related problems:
- https://leetcode.com/problems/binary-tree-cameras/

Greedy approach are do not always yield the optimal result:

![](https://i.stack.imgur.com/1uZ6G.png)

A greedy algorithm would start at the root, but that would take 4 vertices instead of optimal 3.

[Approximate Algorithms for Vertex Cover:](https://massivealgorithms.blogspot.com/2015/05/vertex-cover-problem-set-1-introduction.html)
- 2-approximation
- maximal matching


Maximal matching (Greedy algorithm):
```js
// ./minimum-vertex-cover.js

const minVertexCover = (num, edges) => {
  const nodeSets = new Array(num).fill(0).map(e => new Set())
  
  for (const [v, w] of edges) {
    nodeSets[v].add(w)
    nodeSets[w].add(v)
  }
  
  let vertexCoverCount = 0

  while (true) {
    edgeCount = 0
    maxDegreeVertexId = null

    for (let id = 0; id < nodeSets.length; id++) {
      if (maxDegreeVertexId === null || nodeSets[id].size > nodeSets[maxDegreeVertexId].size) {
        maxDegreeVertexId = id
      }

      edgeCount += nodeSets[id].size
    }
    
    if (edgeCount === 0) break

    let set = nodeSets[maxDegreeVertexId]
    
    for (const id of [...set]) {
      nodeSets[id].delete(maxDegreeVertexId)
    }
    
    nodeSets[maxDegreeVertexId] = new Set()
    
    vertexCoverCount++
  }

  return vertexCoverCount
}
```