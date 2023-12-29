class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class reverese{
    constructor(){
        this.head=null;
        this.tail=null
    }
addNode(data){
    const newNode=new Node(data);
    if(this.head == null){
        this.head=newNode;
    }else{
        this.tail.next=newNode;
        newNode.prev=this.tail
    }
    this.tail=newNode;
}
displayReverse(){
    let temp=this.tail;
    if(temp == null){
        console.log("its empty");
    }else{
        while (temp !== null) {
            console.log(temp.data);
            temp= temp.prev;
        }
    }
    
}
}


const D=new reverese();
D.addNode(5)
D.addNode(20)
D.addNode(3)
D.displayReverse();