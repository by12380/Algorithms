class Heap {
  constructor(elements, comparator = (a, b) => a - b) {
    this.elements = elements
    this.comparator = comparator
    this.buildHeap()
  }

  buildHeap() {
    for (let i = this.size() - 1; i >= 0; i--) {
      this.siftDown(i)
    }
  }

  push(val) {
    this.elements.push(val)
    this.siftUp(this.size() - 1)
  }

  pop() {
    if (this.size() === 0) return null

    this.swap(0, this.size() - 1)
    const result = this.elements.pop()
    this.siftDown(0)
    return result
  }

  peek() {
    return this.elements[0]
  }

  size() {
    return this.elements.length
  }

  siftUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)

    if (
      parentIndex >= 0 &&
      this.comparator(this.elements[parentIndex], this.elements[index]) > 0
    ) {
      this.swap(index, parentIndex)
      this.siftUp(parentIndex)
    }
  }

  siftDown(index) {
    let currentIndex = index

    const leftChildIndex = index * 2 + 1

    if (
      leftChildIndex < this.size() &&
      this.comparator(this.elements[currentIndex], this.elements[leftChildIndex]) > 0
    ) {
      currentIndex = leftChildIndex
    }

    const rightChildIndex = index * 2 + 2

    if (
      rightChildIndex < this.size() &&
      this.comparator(this.elements[currentIndex], this.elements[rightChildIndex]) > 0
    ) {
      currentIndex = rightChildIndex
    }

    if (currentIndex !== index) {
      this.swap(currentIndex, index)
      this.siftDown(currentIndex)
    }
  }

  swap(index1, index2) {
    const temp = this.elements[index1]
    this.elements[index1] = this.elements[index2]
    this.elements[index2] = temp
  }
}