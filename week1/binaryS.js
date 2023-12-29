class binary{
    iterate(array,target,s,e){
        while(s <= e){
            let middle=Math.floor(s+(e-s)/2)
            if(array[middle] === target){
                return  middle;
            }else if(array[middle] > target){
                return this.iterate(array,target,s,middle-1)
            }else{
               return this.iterate(array,target,middle+1,e) 
            }
        }
        return -1
    }
}

const bity=new binary();
const array = [1,2,3,4,5,6,7]
const target=9;
let s=0;
const binaryIterate=bity.iterate(array,target,s,array.length-1)
console.log(binaryIterate);

