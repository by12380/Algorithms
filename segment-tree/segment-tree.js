class SegmentTree {
  constructor(nums) {
    this.nums = nums
    this.tree = new Array(this.nums.length * 2).fill(0)
    this.build()
  }
  
  build() {
    this._build(0, 0, this.nums.length - 1)
  }
  
  _build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.nums[start]
      return
    }
    
    const mid = Math.floor((start + end) / 2)

    this._build(node * 2 + 1, start, mid)
    this._build(node * 2 + 2, mid + 1, end)
    this.tree[node] = this.tree[node * 2 + 1] + this.tree[node * 2 + 2]
    
    return
  }
  
  update(index, diff) {
    this._update(0, 0, this.nums.length, index, diff)
  }

  _update(node, start, end, index, diff) {
    if (start === end) {
      this.arr += diff
      this.tree[node] += diff
      return
    }
    
    const mid = Math.floor((start + end) / 2)
    if (start <= index && index <= mid) {
      this._update(node * 2 + 1, start, mid, index, diff)
    } else {
      this._update(node * 2 + 2, mid, end, index, diff)
    }
    
    this.tree[node] = this.tree[node * 2 + 1] + this.tree[node * 2 + 2]
  }
  
  query(left, right) {
    return this._query(0, 0, this.nums.length - 1, left, right)
  }
  
  _query(node, start, end, left, right) {
    if (left > end || right < start) {
      return 0
    }
    
    
    if (left <= start && end <= right) {
      return this.tree[node]
    }
    
    const mid = Math.floor((start + end) / 2)
    const ans1 = this._query(node * 2 + 1, start, mid, left, right)
    const ans2 = this._query(node * 2 + 2, mid + 1, end, left, right)
    return ans1 + ans2
  }
}