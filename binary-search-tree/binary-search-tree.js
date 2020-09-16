class BinarySearchTree {
  constructor() {
    this.root = null
  }
  
  add(val) {
    let node = this.root
    
    if (!node) {
      this.root = new TreeNode(val)
      return
    }
    
    while (node) {
      if (node.val === val) {
        return
      } else if (val < node.val) {
        if (!node.left) {
          node.left = new TreeNode(val)
        }
        node = node.left
      } else {
        if (!node.right) {
          node.right = new TreeNode(val)
        }
        node = node.right
      }
    }
  }
  
  search(val) {
    let node = this.root
    
    while (node) {
      if (node.val === val) {
        return true
      } else if (val < node.val) {
        node = node.left
      } else {
        node = node.right
      }
    }
    
    return false
  }
  
  delete(val) {
    this.deleteNode(this.root, val)
  }
  
  deleteNode(node, val) {
    if (!node) return null
    
    if (val < node.val) {
        node.left = this.deleteNode(node.left, val)
    } else if (val > node.val) {
        node.right = this.deleteNode(node.right, val)
    } else {
      if (node.right) {
          node.val = this.successor(node)
          node.right = this.deleteNode(node.right, node.val)
      } else if (node.left) {
          node.val = this.predecessor(node)
          node.left = this.deleteNode(node.left, node.val)
      } else {
          node = null
      } 
    }

    return node
  };

  predecessor(node) {
    node = node.left

    while (node.right) {
        node = node.right
    }

    return node.val
  }

  successor(node) {
    node = node.right

    while (node.left) {
        node = node.left
    }

    return node.val
  }
}

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}