class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class binary{
    constructor(){
        this.root=null;
    }
    insert(data){
        let currentNode=this.root;
        if(!currentNode){
            this.root=new Node(data)
            return;
        }
        while(true){
            if(data<currentNode.data){
                if(!currentNode.left){
                    currentNode.left=new Node(data)
                    break;
                }else{
                    currentNode=currentNode.left;
                }
            }else{
                if(!currentNode.right){
                    currentNode.right=new Node(data)
                    break;
                }else{
                    currentNode=currentNode.right;
                }
            }
        }
    }
    // printInorder(node=this.root){
    //     if(node != null){
    //         this.printInorder(node.left);
    //         console.log(node.data);
    //         this.printInorder(node.right)
    //     }
    // }

    findClosest(data){
        let currentNode=this.root;
        let close=currentNode.data
    }
}

let tree=new binary();
tree.insert(6);
tree.insert(2);
tree.insert(3)
tree.insert(4)
tree.insert(5)
// tree.printInorder()
