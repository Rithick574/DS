class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

function arrayToLinkedlist(array){
    if(array.length == 0){
        return null
    }
    const head=new Node(array[0])
    let curr=head;

    for(let i=1;i<array.length;i++){
        curr.next=new Node(array[i])
        console.log(curr.data);
        curr=curr.next;
    }
    return  head;
}


function linkedListToArray(head){
    let resultArray=[]
    console.log(head,"@@@");
    let curr=head;
    while(curr !== null){
        if(curr == null){
            break;
        }
        resultArray.push(curr.data)
        curr=curr.next;
    }
    return resultArray
}

const myArray = [1, 2, 3, 4, 5];
const linkedlist=arrayToLinkedlist(myArray)

const Toarray= linkedListToArray(linkedlist)
console.log(Toarray);
