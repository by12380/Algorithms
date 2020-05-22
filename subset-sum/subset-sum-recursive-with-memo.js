/* Time: O(len(input) * target), Space: O(len(input) * target)*/
const subsetSum = (input, target) => {
  const memo = new Array(input.length).fill(0).map(index => {
    return new Array(target + 1).fill(undefined)
  })

  const helper = (index, sum) => {
    if (index === input.length) {
      if (sum === target) {
        return 1
      } else {
        return 0
      }
    }
    
    if (memo[index][sum] !== undefined) {
      return memo[index][sum]
    }

    const val = input[index]

    let total = 0
    total += helper(index + 1, sum)
    total += helper(index + 1, sum + val)
    
    memo[index][sum] = total

    return total
  }

  return helper(0, 0)
}