class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addnode(data) {
        const newnode = new Node(data);
        if (this.head === null) {
            this.head = newnode;
        } else {
            this.tail.next = newnode;
        }
        this.tail = newnode;
    }

    delete(data) {
        let temp = this.head;
        if (temp !== null && temp.data === data) {
            this.head = temp.next;
            if (this.head === null) {
                this.tail = null;
            }
            return;
        }
        let prev = null;
        while (temp !== null && temp.data !== data) {
            prev = temp;
            temp = temp.next;
        }

        if (temp === null) {
            console.log("Node not found");
            return;
        }

        if (temp === this.tail) {
            this.tail = prev;
        }

        prev.next = temp.next;
    }

    insertData(data,nextto){
        let newNode=new Node(data)
        let temp=this.head;
        while(temp !== null && temp.data !== nextto){
            temp= temp.next;
        }
        if(temp == null){
            return;
        }

        if(temp === this.tail){
            this.tail.next=newNode;
            this.tail=newNode
            return
        }
        newNode.next = temp.next;
        temp.next= newNode;
    }


    removeDuplicates(){
        let current=this.head
        while(current !== null){
            let next=current.next;
            while(next !== null && next.data == current.data){
                next = next.next;
            }
            current.next= next;
            if(next== this.tail){
                this.tail=current;
                this.tail.next=null;
            }
            current=next;
        }

    }

}

function display() {
    if (R.head === null) {
        return console.log("its empty");
    }
    let temp = R.head;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
}

const R = new linkedlist();
R.addnode(10);
R.addnode(20);
R.addnode(50);
R.addnode(50);
R.addnode(13)
R.addnode(12)

R.removeDuplicates(50)

console.log("Before deletion:");
display();

// R.delete(50);
// R.insertData(40,10)

console.log("\nAfter deletion:");
display();
