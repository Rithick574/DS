class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
         this.root=newNode;   
        }else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    display(){
        this.inOrderTraversal(this.root);
        console.log("!!!!!!!!!!");
        this.preOrderTraversal(this.root);
        console.log("@@@@@@@@@@@@");
        this.postOrderTraversal(this.root)

    }
    inOrderTraversal(node){
        if(node !== null){
            this.inOrderTraversal(node.left)
            console.log(node.value);
            this.inOrderTraversal(node.right)
        }
    }
    preOrderTraversal(node){
        if(node){
            console.log(node.value);
            this.preOrderTraversal(node.left)
            this.preOrderTraversal(node.right)
        }
    }
    postOrderTraversal(node){
        if(node){
            this.postOrderTraversal(node.left)
            this.postOrderTraversal(node.right)
            console.log(node.value);
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
             if(root.value === value){
                return true;
             }else if(value<root.value){
                return this.search(root.left,value)
             }else{
                return this.search(root.right,value)
             }
        }
    }

}

let bst=new BinarySearchTree()
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.display()
// console.log(bst.search(bst.root,100));