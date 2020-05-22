/* Time: O(2^len(input)), Space: O(len(input))*/
const subsetSum = (input, target) => {

  const helper = (index, sum) => {
    if (index === input.length) {
      if (sum === target) {
        return 1
      } else {
        return 0
      }
    }
    
    if (sum > target) {
      return 0
    }

    const val = input[index]

    let total = 0
    total += helper(index + 1, sum)
    total += helper(index + 1, sum + val)

    return total
  }

  return helper(0, 0)
}