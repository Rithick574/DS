 class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
 }

 class Bst{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left=== null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
 }


let tree=new Bst()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
console.log('tree is empty?',tree.isEmpty());
function displayTree(node) {
    if (node !== null) {
        displayTree(node.left);
        console.log(node.value);
        displayTree(node.right);
    }
}

console.log('Tree values:');
displayTree(tree.root);