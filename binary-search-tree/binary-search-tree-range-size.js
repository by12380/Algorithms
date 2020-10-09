class BST {
  constructor() {
    this.root = null
  }

  add(val) {
    if (!this.root) {
      this.root = new TreeNode(val)
      return
    }

    this._add(val, this.root)
  }

  _add(val, node) {
    if (!node) {
      return new TreeNode(val)
    }

    if (val < node.val) {
      node.left = this._add(val, node.left)
    } else if (val > node.val) {
      node.right = this._add(val, node.right)
    } else {
      node.count++
    }

    node.size++
    return node
  }

  rank(val) {
    return this._rank(val, this.root)
  }

  _rank(val, node) {
    if (!node) return 0

    if (val < node.val) {
      return this._rank(val, node.left)
    } else if (val > node.val) {
      return node.count + this._size(node.left) + this._rank(val, node.right)
    } else {
      return this._size(node.left)
    }
  }

  rangeSize(low, high) {
    let size = this.rank(high) - this.rank(low)
    const highNode = this._find(high, this.root)
    if (highNode) {
      size += highNode.count
    }
    return size
  }

  _size(node) {
    if (!node) return 0
    return node.size
  }

  _find(val, node) {
    if (!node) return null

    if (node.val === val) {
      return node
    } else if (val < node) {
      return this._find(val, node.left)
    } else {
      return this._find(val, node.right)
    }
  }
}

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
    this.count = 1
    this.size = 1
  }
}