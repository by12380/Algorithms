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