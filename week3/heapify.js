class Heap{
    constructor(){
        this.data=[]
    }
    getParentINdex(i){
        return Math.floor((i-1)/2)
    }
    getleftChildIndex(i){
        return i*2+1;
    }
    getRightchildIndex(i){
        return i*2+2;
    }
    swap(i1,i2){
        const temp=this.data[i1];
        this.data[i1]=this.data[i2]
        this.data[i2]=temp;
    }
    push(key){
         this.data[this.data.length] = key;
         this.heapifyUp()
    }
    heapifyUp(){
        let currentIdx = this.data.length-1;
        while(this.data[currentIdx]> this.data[this.getParentINdex(currentIdx)]){
            this.swap(currentIdx,this.getParentINdex(currentIdx))
            currentIdx = this.getParentINdex(currentIdx)
        }
    }
    poll(){
        const maxValue=this.data[0];
        this.data[0] =this.data[this.data.length-1];
        this.data.length--;
        this.heapifyDown();
        return maxValue
    }
    heapifyDown(){
        let currentIdx=0;
        while(this.data[this.getleftChildIndex(currentIdx)]!== undefined){
            let bigeestChildIndex = this.getleftChildIndex(currentIdx);
            if(this.data[this.getRightchildIndex(currentIdx)] !== undefined &&
            this.data[this.getRightchildIndex(currentIdx)] > 
            this.data[this.getleftChildIndex(currentIdx)]){
                bigeestChildIndex = this.getRightchildIndex(currentIdx)
            }
            if(this.data[currentIdx] < this.data[bigeestChildIndex]){
                this.swap(currentIdx,bigeestChildIndex);
                currentIdx = bigeestChildIndex;
            }else{
                return;
            }
        }
    }
}

const heap=new Heap()
console.log(heap);
heap.push(25)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)

console.log(heap.data.join(','));
 let a= [];
 a.push(heap.poll())
 a.push(heap.poll())
 a.push(heap.poll())
 a.push(heap.poll())
 a.push(heap.poll())

 console.log('top 5 items:',a);
 console.log(heap.data.join(','));