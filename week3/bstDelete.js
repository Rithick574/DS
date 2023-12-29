class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class Bst{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNodes(this.root,newNode)
        }
    }
    insertNodes(node,newNode){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNodes(node.left,newNode)
            }
        }else{
            if(node.right=== null){
                node.right =newNode
            }else{
                this.insertNodes(node.right,newNode)
            }
    }
    }
    display(){
        this.levelOrder(this.root)
    }
    levelOrder(node){
        let queue=[]
        queue.push(node)
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
    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left)
        }
      }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.right
            }
            root.value=this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
}

const tree = new Bst()
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);

tree.display()
console.log("@@@@@@@");
tree.delete(15)
tree.display()