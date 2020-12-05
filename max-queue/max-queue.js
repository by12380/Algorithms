class MaxQueue {
  constructor() {
    this.queue = []
    this.deque = []
  }
  
  enqueue(num) {
    this.queue.push(num)
    while(this.deque.length > 0 && num > this.deque[this.deque.length - 1]) {
      this.deque.pop()
    }
    this.deque.push(num)
  }
  
  dequeue() {
    if (this.queue.length === 0) return null

    const num = this.queue.shift()
    if (num === this.deque[0]) {
      this.deque.shift()
    }
    return num
  }
  
  getMax() {
    return this.deque[0]
  }
}
