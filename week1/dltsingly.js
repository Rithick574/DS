class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    removeDuplicates(){
        if(this.head == null){
            return;
        }
        const unique=new Set()
        let curr=this.head;
        let previous=null;
        while(curr !== null){
           if(unique.has(curr.data)){
            previous.next = curr.next;
           }else{
            unique.add(curr.data)
            previous=curr;
           }
           curr=curr.next;
        }
    }

   

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const linkedList = new SinglyLinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(4);
linkedList.addNode(4);
linkedList.addNode(5);

console.log("Original Linked List:");
linkedList.display();

linkedList.removeDuplicates();

console.log("Linked List after removing duplicates:");
linkedList.display();
