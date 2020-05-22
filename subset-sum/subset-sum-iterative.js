/* Time: O(2^len(input)), Space: O(2^len(input))*/
const subsetSum = (input, target) => {
  let queue = [0]
  let index = 0

  while (index < input.length) {
    const val = input[index]
    const temp = []

    while (queue.length > 0) {
      const sum = queue.shift()
      temp.push(sum)
      temp.push(sum + val)
    }

    queue = temp
    index++
  }

  let counter = 0
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === target) {
      counter++
    }
  }

  return counter
}