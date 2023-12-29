class Node{
    constructor(data){
        this.data=data;
        this.right=null;
        this.left=null;

    }
}
class binarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(data){
        let currentNode=this.root;
        if (!currentNode) {
            this.root = new Node(data);
            return;
          }
          while(true){
            if(data < currentNode.data){
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

    contains(data){
        let currentNode=this.root;
        while(currentNode){
            if(data < currentNode.data){
              currentNode=currentNode.left;
            }else if(data > currentNode.data){
                currentNode=currentNode.right;
            }else{
                return true;
            }
        }
        return false;
    }

    remove(data){
        this.removeHelper(data,this.root,null);
    }

    removeHelper(data,currentNode,parentNode){
        while(currentNode != null){
            if(data<currentNode.data){
                parentNode=currentNode;
                currentNode=currentNode.left;
            }else if(data>currentNode.data){
                parentNode=currentNode;
                currentNode=currentNode.right;
            }else{
                if(currentNode.left != null && currentNode.right != null){
                    currentNode.data= this.getMinvalue(currentNode.right)
                    this.removeHelper(currentNode.data,currentNode.right,currentNode)
                }else{
                    if(parentNode == null){
                        if(currentNode.right == null){
                            this.root=currentNode.left;
                        }else{
                            this.root=currentNode.right;
                        }
                    }else{
                        if(parentNode.left == currentNode){
                            if(currentNode.right == null){
                                parentNode.left=currentNode.left;
                            }else{
                                parentNode.left=currentNode.right;
                            }
                        }else{
                            if(currentNode.right == null){
                                parentNode.right=currentNode.left;
                            }else{
                                parentNode.right=currentNode.right;
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    getMinvalue(currentNode){
        if(currentNode.left == null){
            return currentNode.data;
        }else{
            return this.getMinvalue(currentNode.left)
        }
    }
}

let tree=new binarySearchTree()
tree.insert(10)
tree.insert(8)
tree.insert(11)
tree.insert(15)
tree.insert(12)
// tree.remove(12)

console.log(tree.contains(12));