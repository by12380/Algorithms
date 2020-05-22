/* Time: O(len(input) * target), Space: O(len(input) * target)*/
const subsetSum = (input, target) => {
  const dp = new Array(input.length + 1).fill(0).map(index => {
    return new Array(target + 1).fill(0)
  })

  dp[0][0] = 1

  for (let i = 1; i < input.length + 1; i++) {
    for (let j = 0; j < target + 1; j++) {
      dp[i][j] += dp[i - 1][j]

      if (j - input[i - 1] >= 0) {
        dp[i][j] += dp[i - 1][j - input[i - 1]]
      }
    }
  }

  return dp[input.length][target]
}