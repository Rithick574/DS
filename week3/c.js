class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNodes(this.root, newNode);
    }
  }
  insertNodes(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNodes(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNodes(node.right, newNode);
      }
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return console.log("its empty");
    } else {
      return this.searchNodes(this.root, value);
    }
  }
  searchNodes(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNodes(node.left, value);
    } else {
      return this.searchNodes(node.right, value);
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
    this.deleteNode(value, this.root);
  }
  min(node){
    if(!node.left){
        return node.value
    }else{
        return this.min(node.left)
    }
  }
  deleteNode(value, node) {
    if (this.isEmpty()) {
      return node;
    } else if (value < node.value) {
      node.left = this.deleteNode(value, node.left);
    } else if (value > node.value) {
      node.right = this.deleteNode(value, node.right);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if(!node.left){
       return node.right;
      }else if(!node.right){
        return node.left;
      }
      node.value = this.min(node.right)
      node.right = this.deleteNode(node.value, node.right)
    }
    return node
  }
}

let tree = new Bst();
tree.insert(21);
tree.insert(4);
tree.insert(8);
tree.insert(18);
tree.insert(118);

console.log(tree.search(4));
tree.delete(8)
tree.display();
