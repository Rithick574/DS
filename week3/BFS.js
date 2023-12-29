class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bfs {
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
display(){
    this.levelOrder(this.root)
}
levelOrder(){
    const queue=[];
    queue.push(this.root)
    while(queue.length){
        let curr=queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
}
// inOrder(node){
//     if(node){
//         this.inOrder(node.left);
//         console.log(node.value);
//         this.inOrder(node.right)
//     }
// }
}

let bst = new Bfs();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.display()
