const findShortestPath = (n, edges, src, dst) => {
  const graph = new Array(n).fill(0).map(row => new Array(n).fill(Infinity))

  for (const [u, v, weight] of edges) {
    graph[u][v] = weight
    graph[v][u] = weight
  }

  const distance = new Array(n).fill(Infinity)

  const visited = new Set()

  distance[src] = 0
  current = src

  while (current !== dst) {
    let minNode = null
    visited.add(current)

    for (let node = 0; node < n; node++) {
      if (visited.has(node)) continue;

      if (distance[current] + graph[current][node] < (distance[node] || Infinity)) {
        distance[node] = distance[current] + graph[current][node]
      }

      if (!minNode || distance[node] < distance[minNode]) {
        minNode = node
      }
    }

    current = minNode
  }

  return distance[current]
}

console.log(findShortestPath(4, [[0, 1, 100], [1, 2, 200], [0, 2, 500], [0, 3, 50], [2, 3, 100]], 0, 2))