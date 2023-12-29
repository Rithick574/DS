class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class Dlinklisit{
    constructor (){
        this.head=null;
        this.tail=null;
    }
    addnode(data){
        const newnode=new Node(data);
        if(this.head === null){
            this.head=newnode;
        }else{
          
            this.tail.next=newnode
            newnode.prev=this.tail;
        }
        this.tail=newnode
    }
    display(){
        if(this.head === null){
            console.log('its empty');
        }else{
            let temp=this.head;
            while(temp !== null){
                console.log(temp.data);
                temp=temp.next;
            }
        }
    }

    displayreverse(){
        let temp=this.tail;
        while(temp !== null){
            console.log(temp.data);
            temp = temp.prev;
        }
    }
}




const R=new Dlinklisit();
R.addnode(10)
R.addnode(20)
R.addnode(30)
R.display()
R.displayreverse()