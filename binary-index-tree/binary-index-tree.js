class BinaryIndexTree {
  constructor(nums) {
    this.nums = nums
    this.arr = nums.map(i => i)
    this.arr.unshift(0)

    for (let i = 1; i <= nums.length; i++) {
      const j = i + (i & -i)
      if (j <= nums.length) {
        this.arr[j] += this.arr[i]
      }
    }
  }

  query(i) {
    i++
    let sum = 0
    while (i) {
      sum += this.arr[i]
      i = i - (i & -i)
    }
    return sum
  }

  update(i, val) {
    const diff = val - this.nums[i]
    this.nums[i] = val
    i++
    while (i <= this.nums.length) {
      this.arr[i] += diff
      i += (i & -i)
    }
  }
}