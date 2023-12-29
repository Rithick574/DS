class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  search(value) {
    if (this.isEmpty()) {
      return false;
    } else {
      let node = this.root;
      return this.searchNode(node, value);
    }
  }
  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if(node.value === value){
      return true;
    }else if(value<node.value){
      return this.searchNode(node.left,value)
    }else{
      return this.searchNode(node.right,value)
    }
    return false;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  display() {
    this.levelOrder();
  }
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(value, this.root);
  }
  min(node) {
    if (!node.left) {
      return node.value;
    } else {
      return this.min(node.left);
    }
  }
  deleteNode(value, node) {
    if (this.isEmpty()) {
      return node;
    }
    if (value < node.value) {
      node.left = this.deleteNode(value, node.left);
    } else if (value > node.value) {
      node.right = this.deleteNode(value, node.right);
    } else {
      if (!node.left && !node.right) {
        console.log("hereeeee");
        return null;
      }
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }
      node.value = this.min(node.right);
      node.right = this.deleteNode(node.right, node.value);
    }
    return node;
  }
}

let tree = new Bst();
tree.insert(3);
tree.insert(5);
tree.insert(6);
tree.insert(1);
tree.insert(9);

// tree.delete(1);
// console.log(tree.min(tree.root));
// tree.display();

console.log(tree.search(19));
console.log(tree.search(1));
console.log(tree.search(3));
console.log(tree.search(4));
