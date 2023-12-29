class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let currentNode = this.root;
    if (!currentNode) {
      this.root = new Node(data);
      return;
    }
    while (true) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = new Node(data);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(data);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
//   printInOrder(node = this.root) {
//     if (node !== null) {
//       this.printInOrder(node.left);
//       console.log(node.data);
//       this.printInOrder(node.right);
//     }
//   }

printInorder(){
    this.inOrderhelper(this.root)
}

inOrderhelper(node){
if(node != null){
    this.inOrderhelper(node.left)
    console.log(node.data);
    this.inOrderhelper(node.right)
}
}
printPreorder(node=this.root){
    if(node!= null){
        console.log(node.data);
        this.printPreorder(node.left)
        this.printPreorder(node.right)
    }
}

printPostorder(node=this.root){
    if(node!=null){
        this.printPostorder(node.left);
        this.printPostorder(node.right);
        console.log(node.data);
    }
}
}

let tree = new binarySearchTree();
tree.insert(12);
tree.insert(34);
tree.insert(23);
tree.insert(22);
tree.insert(44);
tree.insert(63);

console.log("Inorder Traversal:");
tree.printInorder();

console.log("Preorder Traversal:");
tree.printPreorder();

console.log("Postorder Traversal:");
tree.printPostorder();
